import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectDB } from "../Unit7/db.ts";
import { formModel } from "./Models.ts";
import type { Request, Response } from "express";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
app.post("/submit", async (req: Request, res: Response) => {
  try {
    const { name, email, contactNumber } = req.body;

    if (!name || !email || !contactNumber) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newForm = new formModel({ name, email, contactNumber });
    await newForm.save();

    res.status(201).json({
      message: "Form submitted successfully",
      data: newForm,
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({
      error: "Failed to submit form",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.get("/read", async (_req: Request, res: Response) => {
  try {
    const forms = await formModel.find();
    res.status(200).json({ data: forms });
  } catch (error) {
    console.error("Error fetching forms:", error);
    res.status(500).json({
      error: "Failed to fetch forms",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.listen(3002, () => {
  console.log("Server is running on http://localhost:3002");
});
