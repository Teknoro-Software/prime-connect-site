/* eslint-disable @typescript-eslint/no-explicit-any */
// app/admin/login/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  async function submit(e: any) {
    e.preventDefault();
    setErr("");

    try {
      const res = await axios.post("/api/admin/login", {
        email,
        password,
      });

      // If success
      if (res.data?.success) {
        router.push("/admin/dashboard");
      } else {
        setErr(res.data?.error || "Login failed");
      }
    } catch (err: any) {
      // Handle axios errors
      if (err.response) {
        setErr(err.response.data?.error || "Login failed");
      } else {
        setErr("Network error");
      }
    }
  }

  return (
    <div className="container py-24 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
      <form onSubmit={submit} className="space-y-4">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border p-3 rounded"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="w-full border p-3 rounded"
        />
        <button className="bg-primary text-white px-4 py-2 rounded">
          Sign in
        </button>
        {err && <div className="text-red-600">{err}</div>}
      </form>
    </div>
  );
}
