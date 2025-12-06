import { connectionStr } from "@/app/database/dbconnect";
import { Project } from "@/app/database/models/Projects";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(connectionStr);
    //   console.log("Connected to MongoDB");
    }

    const { pathname } = new URL(request.url);
    const idStr = pathname.split("/").pop(); // last segment
    const id = Number(idStr);

    // console.log("Fetching project with id:", id, idStr , pathname);

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid project id" }, { status: 400 });
    }

    const project = await Project.findOne({ id });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
