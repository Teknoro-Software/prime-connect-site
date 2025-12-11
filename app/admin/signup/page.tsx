/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Lock, Mail, UserPlus } from "lucide-react";

export default function AdminSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handleSignup(e: any) {
    e.preventDefault();
    setMsg("");

    const res = await fetch("/api/admin/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setMsg("✔ Admin created successfully!");
    } else {
      setMsg("❌ " + data.error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dbe8ff] to-[#eef2ff] p-6">
      {/* Glass Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-10 border border-white/40 animate-fadeIn">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/logo2.png" className="h-20 drop-shadow-md" />
        </div>

        <h1 className="text-3xl font-extrabold text-primary mb-2 text-center">
          Create Admin
        </h1>
        <p className="text-neutral-600 text-center mb-8">
          Register a new admin account
        </p>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Email Field */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/70" />
            <input
              type="email"
              placeholder="Admin Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 p-3 rounded-xl border shadow-sm focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/70" />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 p-3 rounded-xl border shadow-sm focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-primary hover:bg-primaryDark transition text-white py-3 rounded-xl shadow-lg font-semibold flex items-center justify-center gap-2">
            <UserPlus size={20} /> Create Account
          </button>
        </form>

        {/* Response message */}
        {msg && (
          <p
            className={`mt-5 text-center font-semibold ${
              msg.startsWith("✔") ? "text-green-600" : "text-red-600"
            }`}
          >
            {msg}
          </p>
        )}

        {/* Info Note */}
        <p className="text-xs text-neutral-500 text-center mt-6">
          ⚠ For security: delete this page after creating the first admin.
        </p>
      </div>
    </div>
  );
}
