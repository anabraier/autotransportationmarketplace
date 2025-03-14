import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import Order from "@/models/Order";
import { getSession } from "@/utils/auth"; // Add authentication check if needed

export async function POST(req) {
  try {
    await dbConnect();
    const { vehicle, pickupLocation, destination, userId } = await req.json();

    if (!vehicle || !pickupLocation || !destination || !userId) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const newOrder = new Order({
      vehicle,
      pickupLocation,
      destination,
      user: userId,
    });

    await newOrder.save();
    return NextResponse.json({ message: "Order created successfully!" }, { status: 201 });
  } catch (error) {
    console.error("❌ Order Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
