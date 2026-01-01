// Load environment variables FIRST
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import type { Request, Response } from "express";
import http from "http";
import { connectDB } from "./db";
import { dataModel } from "./Model";
import cors from "cors";

// Enable CORS for all routes

const app = express();
const server = http.createServer(app);

app.use(cors(
  {
    origin: "http://localhost:5173", // Adjust as needed
  }
));
// Read PORT from env, fallback to 3000
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON body
app.use(express.json());

// Connect to MongoDB
connectDB();

/**
 * POST: Create new data
 */
app.post("/submit", async (req: Request, res: Response) => {
  try {
    const { name, age, email, skills } = req.body;

    // Input validation
    if (
      !name ||
      typeof age !== "number" ||
      !email ||
      !Array.isArray(skills) ||
      skills.length === 0
    ) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    // Create new document
    const newData = new dataModel({ name, age, email, skills });

    // Save to DB (async)
    await newData.save();

    res.status(201).json({ message: "Data saved successfully" });
  } catch (error: any) {
    // Handle duplicate email error
    if (error.code === 11000) {
      return res.status(409).json({ message: "Email already exists" });
    }

    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/**
 * GET: Read all data
 */
app.get("/read", async (req: Request, res: Response) => {
  try {
    const allData = await dataModel.find();
    res.status(200).json({
      message: "Data fetched successfully",
      data: allData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
