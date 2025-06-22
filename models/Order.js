import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema(
  {
    vehicle: { type: String, required: true },
    pickupLocation: { type: String, required: true },
    destination: { type: String, required: true },
    status: { type: String, default: "Pending" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
