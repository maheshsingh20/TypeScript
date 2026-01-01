import mongoose from "mongoose";
const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String, required: true}
})
export const formModel=mongoose.model("Form",formSchema);