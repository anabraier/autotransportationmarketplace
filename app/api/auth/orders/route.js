import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import Order from "@/models/Order";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    console.log("🔵 Fetching user's car requests...");
    await dbConnect();
    
    // Get token from request headers
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

    console.log("✅ Logged-in user:", decoded.email);

    // Fetch orders for this user only
    const orders = await Order.find({ user: decoded.id });

    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching orders:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
