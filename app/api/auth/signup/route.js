import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/utils/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    console.log("🔵 Received signup request...");
    await dbConnect();
    console.log("✅ MongoDB is connected");

    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    console.log("🔎 Checking if user already exists...");
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("❌ Email already registered:", email);
      return NextResponse.json({ message: "User already exists. Please log in instead." }, { status: 400 });
    }

    console.log("🔐 Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("✅ Creating new user...");
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    console.log("✅ User registered successfully:", email);
    return NextResponse.json({ message: "User registered successfully! Please log in." }, { status: 201 });

  } catch (error) {
    console.error("❌ Signup Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
