import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
    {
        
        _id: {
            type: String,
            required: true,
        },
        downloadLink : {
            type: String,
            default: "",
        }
    },
    { timestamps: true, collection: "resume" }
);

export const Resume =
    mongoose.models.Resume || mongoose.model("Resume", resumeSchema);