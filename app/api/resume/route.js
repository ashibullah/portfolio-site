import { connectionStr } from "@/app/database/dbconnect";
import { Resume } from "@/app/database/models/Resume";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr)
    // console.log("Querying collection:", Portfolio.collection.name);
    const data = await Resume.findOne()
    // console.log("Data found:", data);
    
    return NextResponse.json(data);
}