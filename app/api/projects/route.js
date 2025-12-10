import { connectionStr } from "@/app/database/dbconnect";
import { Project } from "@/app/database/models/Projects";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req) {
    await mongoose.connect(connectionStr);

    // Get URL search params
    const { searchParams } = new URL(req.url);
    const limitParam = searchParams.get("limit");

    // Convert limit to number (or null if not provided)
    const limit = limitParam ? Number(limitParam) : null;

    let data;

    if (limit && !isNaN(limit)) {
        data = await Project.find().limit(limit);
    } else {
        data = await Project.find();
    }

    return NextResponse.json(data);
}
