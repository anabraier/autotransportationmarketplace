import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// ✅ Fix: Prevent duplicate model compilation
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
