import { connectionStr } from "@/app/database/dbconnect";
import { Project } from "@/app/database/models/Projects";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr)
    console.log("Querying collection:", Project.collection.name);
    const data = await Project.find()
    // console.log("Data found:", data);
    
    return NextResponse.json(data);
}