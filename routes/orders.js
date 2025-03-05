const express = require("express");
const Order = require("../models/Order");
const jwt = require("jsonwebtoken");

const router = express.Router();
const SECRET = "your-secret-key";

// Middleware for authentication
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });
    req.userId = decoded.userId;
    next();
  });
};

// Create Order
router.post("/create", authenticate, async (req, res) => {
  const { vehicle, pickupLocation, destination } = req.body;
  try {
    const order = await Order.create({
      vehicle,
      pickupLocation,
      destination,
      user: req.userId,
    });
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get User Orders
router.get("/my-orders", authenticate, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId });
    res.json(orders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Admin: Get All Orders
router.get("/all-orders", async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
