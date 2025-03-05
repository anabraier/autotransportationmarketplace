console.log("📌 Starting Server...");

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { connectDB } = require("./db");

console.log("📌 Required modules loaded...");

const app = express();
const PORT = process.env.PORT || 5055;
const SECRET_KEY = process.env.SECRET_KEY || "default_secret";

if (!SECRET_KEY) {
  console.error("❌ SECRET_KEY is missing in .env!");
  process.exit(1);
}

console.log("📌 Setting up middleware...");
app.use(express.json());
app.use(cors());

console.log("📌 Connecting to MongoDB...");
connectDB();  // ✅ Only calling this ONCE

console.log("📌 Defining Routes...");
app.get("/", (req, res) => {
  console.log("📌 Request received at '/'");
  res.send("API is running...");
});

console.log("📌 Starting Express server...");
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
