"use client";
import { useState, useEffect } from "react";

export default function Marketplace() {
  const [vehicles, setVehicles] = useState([]);
  const [quoteData, setQuoteData] = useState({
    name: "",
    pickup: "",
    destination: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/vehicles")
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch((err) => console.error("Error fetching vehicles:", err));
  }, []);

  const handleQuoteRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Quote requested for ${quoteData.name} from ${quoteData.pickup} to ${quoteData.destination}`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Marketplace</h1>
      <p className="text-gray-300 mb-4">
        Browse available vehicles or request a quote.
      </p>

      {/* Request a Quote Form */}
      <form
        onSubmit={handleQuoteRequest}
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg mb-6"
      >
        <input
          type="text"
          placeholder="Vehicle Name"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
          onChange={(e) => setQuoteData({ ...quoteData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Pickup Location"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
          onChange={(e) =>
            setQuoteData({ ...quoteData, pickup: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Destination"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
          onChange={(e) =>
            setQuoteData({ ...quoteData, destination: e.target.value })
          }
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 hover:bg-blue-600 rounded"
        >
          Request a Quote
        </button>
      </form>

      {/* Vehicle Listings */}
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-white mb-4">
          Available Vehicles
        </h2>
        <ul className="space-y-3">
          {vehicles.length > 0 ? (
            vehicles.map((vehicle: any) => (
              <li
                key={vehicle._id}
                className="p-3 bg-gray-700 rounded text-white"
              >
                {vehicle.name} - {vehicle.model} - {vehicle.year} - $
                {vehicle.price}
              </li>
            ))
          ) : (
            <p className="text-gray-300">No vehicles available.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
