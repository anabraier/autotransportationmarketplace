import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "Email already registered. Please log in." }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    return NextResponse.json({ message: "User registered successfully. Please log in." }, { status: 201 });
  } catch (error) {
    console.error("❌ Signup Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
