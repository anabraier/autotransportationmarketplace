"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaTruckMoving } from "react-icons/fa";
import { Cover } from "../components/ui/Cover";
import { TextGenerateEffect } from "../components/ui/TextGenerateEffect";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="relative min-h-screen bg-black-200 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActiveSection("home")}
                className="flex items-center py-2 px-3 font-bold text-xl"
              >
                AutoTransporter
              </button>
              <div className="hidden md:flex items-center space-x-3">
                <button
                  onClick={() => setActiveSection("marketplace")}
                  className="py-2 px-3 hover:underline"
                >
                  Marketplace
                </button>
                <button
                  onClick={() => setActiveSection("services")}
                  className="py-2 px-3 hover:underline"
                >
                  Services
                </button>
                <button
                  onClick={() => setActiveSection("contact")}
                  className="py-2 px-3 hover:underline"
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={() => setActiveSection("login")}
                className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Login
              </button>
              <button
                onClick={() => setActiveSection("signup")}
                className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Dynamic Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-5 py-20">
        {activeSection === "home" && (
          <>
            <p className="uppercase tracking-widest text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4">
              Lion King Express LLC
            </p>
            <h1 className="text-[40px] md:text-6xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-20 relative z-20 py-6">
              Ship Your Car with Confidence, Anytime, <Cover>Anywhere</Cover>
            </h1>
            <p className="text-gray-300 text-sm md:text-lg lg:text-2xl mb-8">
              Your Trusted Marketplace for Auto Transport Solutions.
            </p>
            <button
              onClick={() => setActiveSection("marketplace")}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 font-bold rounded-lg shadow-md transition duration-300"
            >
              <span>Explore Marketplace</span>
              <FaTruckMoving />
            </button>
          </>
        )}

        {activeSection === "marketplace" && (
          <>
            <h1 className="text-3xl font-bold mb-6">Marketplace</h1>
            <p className="text-gray-300 mb-4">
              Add a vehicle for transportation or request a quote.
            </p>
            <form className="w-full max-w-lg bg-gray-800 p-6 rounded-lg">
              <input
                type="text"
                placeholder="Vehicle Make & Model"
                className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="Pickup Location"
                className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="Destination"
                className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
              />
              <button className="w-full p-3 bg-blue-500 hover:bg-blue-600 rounded">
                Request a Quote
              </button>
            </form>
          </>
        )}

        {activeSection === "contact" && (
          <>
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="text-gray-300">
              📍 Location: 123 Auto Transport Street, NY, USA
            </p>
            <p className="text-gray-300">
              📧 Email: lionkingexpressllc@gmail.com
            </p>
            <p className="text-gray-300">📞 Phone: +1 (404) 555-5555</p>
          </>
        )}

        {activeSection === "services" && (
          <>
            <h1 className="text-3xl font-bold mb-6">Our Services</h1>
            <ul className="text-gray-300">
              <li>🚗 Open & Enclosed Auto Transport</li>
              <li>🛣️ Nationwide & International Shipping</li>
              <li>⚡ Express & Expedited Delivery</li>
              <li>💰 Competitive Pricing</li>
            </ul>
          </>
        )}

        {activeSection === "login" && (
          <>
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <form className="w-full max-w-lg bg-gray-800 p-6 rounded-lg">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
              />
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 hover:bg-blue-600 rounded"
              >
                Login
              </button>
            </form>
          </>
        )}

        {activeSection === "signup" && (
          <>
            <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
            <form className="w-full max-w-lg bg-gray-800 p-6 rounded-lg">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
              />
              <button
                type="submit"
                className="w-full p-3 bg-green-500 hover:bg-green-600 rounded"
              >
                Sign Up
              </button>
            </form>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-transparent py-6">
        <div className=" h-screen flex flex-col justify-end items-center text-gray-400">
          © {new Date().getFullYear()} Lion King Express. All rights reserved.
        </div>
      </footer>

      {/* Background Layer (SAME AS BEFORE) */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-900 to-black opacity-80" />
    </div>
  );
}
