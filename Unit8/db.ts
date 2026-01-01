import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/defaultDB";
    console.log("Connecting to:", MONGO_URL); // Debug log
    await mongoose.connect(MONGO_URL);
    console.log("Database connected successfully to:", MONGO_URL);
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};