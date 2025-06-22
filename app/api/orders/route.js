import { NextResponse } from "next/server";
import dbConnect from "../../../utils/db";
import Order from "../../../models/Order";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    console.log("🔵 Fetching user's car orders...");
    await dbConnect();

    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ message: "Unauthorized. Please log in." }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
      return NextResponse.json({ message: "Invalid token. Please log in again." }, { status: 401 });
    }

    const orders = await Order.find({ user: decoded.id });

    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

// ✅ Add this function to handle POST requests
export async function POST(req) {
  try {
    console.log("🔵 Adding new order...");
    await dbConnect();

    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ message: "Unauthorized. Please log in." }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
      return NextResponse.json({ message: "Invalid token. Please log in again." }, { status: 401 });
    }

    const { vehicle, pickupLocation, destination } = await req.json();
    if (!vehicle || !pickupLocation || !destination) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    const newOrder = new Order({
      vehicle,
      pickupLocation,
      destination,
      status: "Pending",
      user: decoded.id,
    });

    await newOrder.save();

    console.log("✅ Order added successfully:", newOrder);
    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error("❌ Error adding order:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
