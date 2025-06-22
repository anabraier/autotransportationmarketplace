import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnect from "@/utils/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    console.log("🔵 Received login request...");
    await dbConnect();
    console.log("✅ MongoDB is connected");

    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    console.log("🔎 Searching for user:", email);
    const user = await User.findOne({ email });

    if (!user) {
      console.log("❌ User not found:", email);
      return NextResponse.json({ 
        message: "User not found. Please sign up to create an account." 
      }, { status: 400 });
    }

    console.log("🔐 Verifying password for:", email);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    console.log("✅ Login successful for:", email);
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY, { expiresIn: "1h" });

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error("❌ Login Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
