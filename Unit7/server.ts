import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import http from "http";
import { connectDB } from "./db";
import { dataModel } from "./model";
const app = express();
const server = http.createServer(app);
const PORT = 3001;
// Middleware
app.use(
  cors({
    origin:"http://localhost:5173",
  })
);
app.use(express.json());

// Connect DB
connectDB();

// POST route (create data)
app.post("/data", async (req: Request, res: Response) => {
  try {
    const { name, age, email } = req.body;

    if (!name || !age || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newForm = new dataModel({ name, age, email });
    await newForm.save();

    return res.status(201).json({
      message: "Data uploaded successfully",
      data: newForm,
    });
  } catch (error) {
    console.error("Upload Failed:", error);
    return res.status(500).json({
      error: "Submission failed",
      message: error instanceof Error ? error.message : "Unknown Error",
    });
  }
});

// GET route (retrieve all data)
app.get("/data", async (req: Request, res: Response) => {
  try {
    const allData = await dataModel.find();
    return res.status(200).json({
      message: "Data retrieved successfully",
      data: allData,
    });
  } catch (error) {
    console.error("Retrieval Failed:", error);
    return res.status(500).json({
      error: "Data retrieval failed",
      message: error instanceof Error ? error.message : "Unknown Error",
    });
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

