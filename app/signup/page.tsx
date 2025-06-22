"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Registration successful! Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      setMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white flex flex-col">
      {/* TOP HEADER TITLE */}
      <header className="p-6 text-center">
        <Link
          href="/"
          className="text-4xl font-extrabold text-blue-400 hover:underline"
        >
          Lion King Express
        </Link>
      </header>

      {/* SIGNUP BOX */}
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">
            Sign Up
          </h1>
          {message && <p className="text-center text-red-500">{message}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-4 text-center">
            <p>Already have an account?</p>
            <Link href="/login">
              <button className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition duration-300">
                Login Instead
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
