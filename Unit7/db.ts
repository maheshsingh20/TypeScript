import mongoose from "mongoose";

const MONGO_URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/dataDB";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error("❌ Database connection failed");
    console.error(err);
    process.exit(1);
  }
};
