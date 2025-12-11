/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [err, setErr] = useState("");
  const router = useRouter();

  async function submit(e: any) {
    e.preventDefault();
    setErr("");

    try {
      const res = await axios.post("/api/admin/login", { email, password });

      if (res.data?.success) {
        router.push("/admin/dashboard");
      } else {
        setErr(res.data?.error || "Login failed");
      }
    } catch (err: any) {
      if (err.response) {
        setErr(err.response.data?.error || "Login failed");
      } else {
        setErr("Network error");
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#eef2f8] to-[#dfe6f3]">
      <div className="bg-white/70 backdrop-blur-xl shadow-2xl p-10 rounded-3xl w-full max-w-md border border-white/40 animate-fadeIn">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo.png"
            alt="Prime Connect Logo"
            className="h-16 object-contain drop-shadow-sm"
          />
        </div>

        <h1 className="text-3xl font-bold text-[#0A2A6B] text-center mb-2">
          Admin Login
        </h1>
        <p className="text-center text-neutral-600 mb-8">
          Access your admin dashboard
        </p>

        <form onSubmit={submit} className="space-y-5">
          {/* Email Input */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border border-neutral-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0A2A6B] focus:border-[#0A2A6B] transition"
            required
          />

          {/* Password Input + Eye Toggle */}
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type={showPass ? "text" : "password"}
              className="w-full border border-neutral-300 p-3 rounded-lg shadow-sm focus:ring-2 
              focus:ring-[#0A2A6B] focus:border-[#0A2A6B] transition"
              required
            />

            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-[#0A2A6B] transition"
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Error Message */}
          {err && (
            <div className="text-red-600 bg-red-50 border border-red-200 p-2 rounded-lg text-sm text-center">
              {err}
            </div>
          )}

          {/* Submit Button */}
          <button
            className="w-full py-3 rounded-lg bg-[#0A2A6B] text-white font-semibold shadow-lg 
          hover:bg-[#081f4f] transition active:scale-[0.98] duration-150"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
