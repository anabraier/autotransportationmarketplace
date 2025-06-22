"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiLogOut, FiUser } from "react-icons/fi"; // Importing icons

interface Order {
  _id: string;
  vehicle: string;
  pickupLocation: string;
  destination: string;
  status: string;
}

export default function Marketplace() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<"orders" | "payments">(
    "orders"
  );

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Unauthorized. Please log in.");
        return;
      }

      try {
        const res = await fetch("/api/orders", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        if (res.ok) {
          setOrders(data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("❌ Failed to fetch orders.");
      }
    };

    fetchOrders();
  }, []);

  const handleAddOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("❌ Unauthorized. Please log in.");
      return;
    }

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ vehicle, pickupLocation, destination }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Order added successfully!");
        setOrders([...orders, data]); // Update UI
        setVehicle("");
        setPickupLocation("");
        setDestination("");
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      setMessage("❌ Failed to add order.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="w-2/3 p-6">
      {/* Tabs */}
      <div className="mb-4 flex space-x-4">
        <button
          onClick={() => setSelectedTab("orders")}
          className={`px-4 py-2 rounded-lg ${
            selectedTab === "orders" ? "bg-blue-500" : "bg-gray-700"
          } text-white`}
        >
          Orders
        </button>
        <button
          onClick={() => setSelectedTab("payments")}
          className={`px-4 py-2 rounded-lg ${
            selectedTab === "payments" ? "bg-blue-500" : "bg-gray-700"
          } text-white`}
        >
          Payments
        </button>
      </div>

      {/* Tab Content */}
      {selectedTab === "orders" ? (
        <>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Your Orders</h2>

          {error && <p className="text-red-500">{error}</p>}

          {orders.length === 0 ? (
            <p className="text-gray-400">
              You have no car transport requests yet.
            </p>
          ) : (
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <ul className="space-y-4">
                {orders.map((order) => (
                  <li
                    key={order._id}
                    className="p-4 bg-gray-700 rounded-lg shadow-md flex justify-between items-start"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-blue-300">
                        {order.vehicle}
                      </h3>
                      <p className="text-gray-300">
                        📍 Pickup: {order.pickupLocation}
                      </p>
                      <p className="text-gray-300">
                        📦 Destination: {order.destination}
                      </p>
                      <p className="text-yellow-400">
                        🚚 Status: {order.status}
                      </p>
                      <p className="text-sm mt-1">
                        💰 Payment:{" "}
                        <span
                          className={
                            order.status === "Paid"
                              ? "text-green-400"
                              : "text-red-400"
                          }
                        >
                          {order.status === "Paid" ? "Paid" : "Not Paid"}
                        </span>
                      </p>
                    </div>
                    {order.status !== "Paid" && (
                      <button
                        onClick={async () => {
                          const token = localStorage.getItem("token");
                          const res = await fetch(
                            `/api/orders/${order._id}/pay`,
                            {
                              method: "PUT",
                              headers: { Authorization: `Bearer ${token}` },
                            }
                          );

                          const data = await res.json();
                          if (res.ok) {
                            setOrders((prev) =>
                              prev.map((o) =>
                                o._id === order._id
                                  ? { ...o, status: "Paid" }
                                  : o
                              )
                            );
                          } else {
                            alert(data.message || "Failed to mark as paid");
                          }
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-lg"
                      >
                        Mark as Paid
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Payments</h2>
          <p className="text-gray-400">
            This section is under construction. Soon you'll be able to process
            real payments here.
          </p>
        </>
      )}
    </div>
  );
}
