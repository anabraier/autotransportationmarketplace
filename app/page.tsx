"use client";

import React from "react";
import Link from "next/link";
import { FaTruckMoving } from "react-icons/fa";
import { Cover } from "@/components/ui/Cover";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black-200 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center py-2 px-3 font-bold text-xl"
              >
                AutoTransporter
              </Link>
              <div className="hidden md:flex items-center space-x-3">
                <Link href="/marketplace" className="py-2 px-3 hover:underline">
                  Marketplace
                </Link>
                <Link href="/services" className="py-2 px-3 hover:underline">
                  Services
                </Link>
                <Link href="/contact" className="py-2 px-3 hover:underline">
                  Contact
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Link
                href="/login"
                className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-5 py-20">
        <p className="uppercase tracking-widest text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4">
          Lion King Express LLC
        </p>

        <h1 className="text-[40px] md:text-5xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6">
          Ship Your Car with Confidence, Anytime, <Cover>Anywhere</Cover>
        </h1>

        <p className="text-gray-300 text-sm md:text-lg lg:text-2xl mb-8">
          Your Trusted Marketplace for Auto Transport Solutions.
        </p>

        <Link href="/marketplace" className="mt-6 inline-block">
          <button className="flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 font-bold rounded-lg shadow-md transition duration-300">
            <span>Explore Marketplace</span>
            <FaTruckMoving />
          </button>
        </Link>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-transparent py-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          © {new Date().getFullYear()} LionKingExpressLLC. All rights reserved.
        </div>
      </footer>

      {/* Background Layer */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-900 to-black opacity-80" />
    </div>
  );
}
