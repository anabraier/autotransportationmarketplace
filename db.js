const mongoose = require("mongoose");

const MONGO_HOST = process.env.MONGO_HOST || "localhost:27017";
const MONGO_USER = process.env.MONGO_USER || "myuser";
const MONGO_PASS = process.env.MONGO_PASS || "mypassword";
const MONGO_DB = process.env.MONGO_DB || "admin";
const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB}?authSource=admin`;

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("🔄 Using existing MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    isConnected = true;
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err);
    process.exit(1);
  }
};

module.exports = { connectDB };
