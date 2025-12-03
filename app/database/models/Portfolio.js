import mongoose from "mongoose";

const tabSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const portfolioSchema = new mongoose.Schema(
  {
    tabs: [tabSchema],
  },
  { timestamps: true, collection: "ashibullahInfo" }
);

export const Portfolio =
  mongoose.models.Portfolio || mongoose.model("Portfolio", portfolioSchema);