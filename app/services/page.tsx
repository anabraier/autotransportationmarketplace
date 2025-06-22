"use client";

import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white flex flex-col">
      {/* Header */}
      <header className="p-6 text-center">
        <Link
          href="/"
          className="text-4xl font-extrabold text-blue-400 hover:underline"
        >
          Lion King Express
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          At{" "}
          <span className="font-semibold text-white">
            Lion King Express LLC
          </span>
          , we specialize in safe, fast, and reliable car transportation
          services across the Southeastern U.S. Whether you're relocating,
          buying or selling a vehicle, or managing fleet logistics, we've got
          you covered.
        </p>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">
            We proudly serve:
          </h2>
          <ul className="list-disc list-inside text-left text-gray-200 space-y-2">
            <li>Alabama</li>
            <li>Georgia</li>
            <li>Tennessee</li>
            <li>Mississippi</li>
            <li>Florida</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Lion King Express LLC. All rights reserved.
      </footer>
    </div>
  );
}
