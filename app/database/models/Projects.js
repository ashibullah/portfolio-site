import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: ["project", "research"],
            required: true,
        },
        img: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
        livelink: {
            type: String,
            default: "",
        },
        repolink: {
            type: String,
            default: "",
        }
    },
    { timestamps: true, collection: "projects" }
);

export const Project =
    mongoose.models.Project || mongoose.model("Project", projectSchema);
