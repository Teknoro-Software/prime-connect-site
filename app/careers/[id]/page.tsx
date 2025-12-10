/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { use, useEffect, useState } from "react";
import { FaFileUpload, FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { Tag, DollarSign, MapPin, Briefcase } from "lucide-react";
import type { PutBlobResult } from "@vercel/blob";

type ParamsType = {
  id: string;
};

export default function JobPage(props: any) {
  const { id } = use(props.params) as ParamsType;

  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [job, setJob] = useState<any>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      const found = data.jobs?.find((j: any) => j._id === id);
      setJob(found || null);
    }
    load();
  }, [id]);

  async function onSubmit(e: any) {
    e.preventDefault();
    setError("");

    const form = new FormData(e.target);
    const file = form.get("resume") as File;

    if (file.size > 1024 * 1024) {
      setError("File size must be below 1MB");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/applications", {
      method: "POST",
      body: form,
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
    } else {
      setError("Something went wrong. Try again.");
    }
  }

  if (!job) return <div className="p-6">Loading…</div>;

  return (
    <section className="container py-16 max-w-4xl mx-auto">
      {/* ---------- Job Header ---------- */}
      <div className="bg-white shadow-lg rounded-2xl p-10 border border-neutral/10">
        <h1 className="text-4xl font-bold text-primary">{job.title}</h1>

        {/* Meta Details */}
        <div className="mt-4 space-y-2 text-neutral/70 text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={16} /> {job.location}
          </div>

          <div className="flex items-center gap-2">
            <Briefcase size={16} /> {job.type}
          </div>

          {job.category && (
            <div className="flex items-center gap-2">
              <Tag size={16} /> {job.category}
            </div>
          )}

          {job.salary && (
            <div className="flex items-center gap-2">
              <DollarSign size={16} /> {job.salary}
            </div>
          )}

          {job.status && (
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                {job.status.toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mt-6 text-neutral/80 leading-relaxed whitespace-pre-line">
          {job.description}
        </div>
      </div>

      {/* ---------- Application Form ---------- */}
      <div className="mt-12 bg-white p-10 rounded-2xl shadow-xl border border-primary/10">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Apply for this Position
        </h2>

        {sent ? (
          <div className="text-green-600 font-semibold text-lg">
            ✔ Your application has been submitted successfully!
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            {error && (
              <div className="text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/70" />
              <input
                name="name"
                placeholder="Full Name *"
                required
                className="w-full p-3 pl-12 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/70" />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                className="w-full p-3 pl-12 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/70" />
              <input
                name="phone"
                placeholder="Phone Number *"
                required
                className="w-full p-3 pl-12 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Resume Upload */}
            <div className="relative border-2 border-dashed p-5 rounded-xl hover:border-primary transition">
              <label className="flex items-center gap-3 cursor-pointer">
                <FaFileUpload className="text-primary text-2xl" />
                <span className="text-neutral/70">
                  Upload Resume (PDF/DOC, max 1MB)
                </span>
              </label>
              <input type="file" name="resume" required className="mt-3" />
            </div>

            <button
              disabled={loading}
              className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primaryDark transition w-full md:w-auto"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
