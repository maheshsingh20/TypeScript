import mongoose from "mongoose";
const testDataSchema = new mongoose.Schema({
  name:{type: String, required: true},
  age:{type: Number, required: true},
  email: { type: String, required: true },
  skills:{type:[String], required: true}
})
export const dataModel = mongoose.model("TestData", testDataSchema);
//- --- IGNORE ---