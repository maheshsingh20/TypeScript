import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  age: { type: String, required: true },
  email:{type:String, required:true}
});

export const dataModel = mongoose.model("data", dataSchema);