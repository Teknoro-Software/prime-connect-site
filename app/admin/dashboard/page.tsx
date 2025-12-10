/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Briefcase, FileText, LayoutDashboard, X } from "lucide-react";
import Loader from "../../../components/Loader";

/* ============================================================
   JOB FORM MODAL
============================================================ */
function JobFormModal({ onClose, onSave, initial }: any) {
  const [title, setTitle] = useState(initial?.title || "");
  const [location, setLocation] = useState(initial?.location || "");
  const [type, setType] = useState(initial?.type || "");
  const [category, setCategory] = useState(initial?.category || "");
  const [salary, setSalary] = useState(initial?.salary || "");
  const [status, setStatus] = useState(initial?.status || "active");
  const [description, setDescription] = useState(initial?.description || "");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const payload = {
      title,
      location,
      type,
      category,
      salary,
      status,
      description,
    };

    if (initial?._id) {
      await fetch(`/api/jobs?id=${initial._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });
    } else {
      await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });
    }

    setLoading(false);
    onSave();
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-2xl relative">
        <button className="absolute right-4 top-4" onClick={onClose}>
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold text-primary mb-4">
          {initial ? "Edit Job" : "Create Job"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border p-2 rounded"
            placeholder="Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Job Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />

          <select
            className="w-full border p-2 rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="closed">Closed</option>
          </select>

          <textarea
            className="w-full border p-2 rounded"
            rows={4}
            placeholder="Job Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg shadow"
          >
            {loading ? "Saving..." : initial ? "Save Changes" : "Create Job"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ============================================================
   JOBS TAB
============================================================ */
function JobsTab() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editJob, setEditJob] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/jobs", { credentials: "include" });
      const j = await res.json();
      setJobs(j.jobs.map((job: any) => ({ ...job, _id: job._id.toString() })));
      setLoading(false);
    }
    load();
  }, []);

  async function deleteJob(id: string) {
    if (!confirm("Delete job?")) return;

    await fetch(`/api/jobs?id=${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const res = await fetch("/api/jobs", { credentials: "include" });
    const j = await res.json();
    setJobs(j.jobs.map((job: any) => ({ ...job, _id: job._id.toString() })));
  }

  if (loading) return <Loader loading={true} />;

  return (
    <div>
      <button
        className="bg-accent text-white px-4 py-2 rounded-md"
        onClick={() => {
          setEditJob(null);
          setShowModal(true);
        }}
      >
        + Create Job
      </button>

      <div className="mt-6 grid gap-4">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="p-5 bg-white border rounded-xl flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-primary text-lg">
                {job.title}
              </h3>
              <p className="text-sm text-neutral-70">
                {job.location} · {job.type}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                className="px-3 py-1 border rounded-md"
                onClick={() => {
                  setEditJob(job);
                  setShowModal(true);
                }}
              >
                Edit
              </button>

              <button
                className="px-3 py-1 bg-red-500 text-white rounded-md"
                onClick={() => deleteJob(job._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <JobFormModal
          initial={editJob}
          onClose={() => setShowModal(false)}
          onSave={() => window.location.reload()}
        />
      )}
    </div>
  );
}

/* ============================================================
   APPLICATIONS TAB
============================================================ */
function ApplicationsTab() {
  const [apps, setApps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/applications", { credentials: "include" });
      const data = await res.json();
      setApps(data || []);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <Loader loading={true} />;

  return (
    <div>
      {apps.length === 0 ? (
        <div className="p-6 text-center text-neutral/60">
          No applications yet.
        </div>
      ) : (
        <div className="space-y-3">
          {apps.map((a) => (
            <div
              key={a._id}
              className="p-4 bg-white border rounded-xl flex justify-between"
            >
              <div>
                <div className="font-semibold text-primary">
                  {a.name} <span className="text-sm">({a.email})</span>
                </div>
                <p className="text-sm text-neutral-60">
                  {a.phone} · applied to {a.jobId || "Unknown"}
                </p>
              </div>

              <a
                href={`/api/applications/resume/${a._id}`}
                target="_blank"
                className="px-3 py-1 bg-primary text-white rounded-md"
              >
                Download CV
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   MAIN DASHBOARD WITH AUTH + MOBILE RESPONSIVE
============================================================ */
export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<"jobs" | "apps">("jobs");
  const [authLoading, setAuthLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /* ---------- AUTH CHECK ---------- */
  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("/api/admin/session", {
          cache: "no-store",
          credentials: "include",
        });

        const data = await res.json();

        if (!data.authenticated) {
          router.replace("/admin/login");
        } else {
          setAuthorized(true);
        }
      } catch {
        router.replace("/admin/login");
      } finally {
        setAuthLoading(false);
      }
    }

    check();
  }, [router]);

  if (authLoading) return <Loader loading={true} />;
  if (!authorized) return null;

  /* ---------- LOGOUT ---------- */
  async function logout() {
    await fetch("/api/admin/logout", {
      method: "POST",
      credentials: "include",
    });
    document.cookie = "pc_admin_token=; Max-Age=0; path=/;";
    router.replace("/admin/login");
  }

  /* ============================================================
     RESPONSIVE LAYOUT
  ============================================================ */
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e8ecf5] relative">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
    fixed md:static rounded-r-3xl
    top-0 left-0 
    h-screen             
    md:h-screen 
    w-50 sm:w-64 md:w-62  

    bg-white/90 
    backdrop-blur-xl 
    shadow-2xl 
    border-r border-white/40 

    p-6 flex flex-col 
    z-40
    transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
      >
        <div className="flex items-center gap-3 mb-10">
          <img
            src="/logo2.png"
            alt="Admin Logo"
            className="h-16 w-auto sm:w-screen sm:h-15 drop-shadow-md"
          />
        </div>

        <nav className="space-y-3">
          <button
            onClick={() => {
              setTab("jobs");
              setSidebarOpen(false);
            }}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-base sm:text-lg transition
        ${
          tab === "jobs"
            ? "bg-primary text-white shadow-lg scale-[1.02]"
            : "hover:bg-neutral-100/80 text-neutral-700"
        }`}
          >
            <Briefcase size={18} /> Jobs
          </button>

          <button
            onClick={() => {
              setTab("apps");
              setSidebarOpen(false);
            }}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-base sm:text-lg transition
        ${
          tab === "apps"
            ? "bg-primary text-white shadow-lg scale-[1.02]"
            : "hover:bg-neutral-100/80 text-neutral-700"
        }`}
          >
            <FileText size={18} /> Applications
          </button>
        </nav>

        <div className="mt-auto pt-10">
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 text-red-600 font-semibold 
                hover:bg-red-50 rounded-lg transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      <div
        className="md:hidden fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl shadow-md z-20
                flex justify-between items-center px-5 py-4"
      >
        <img
          src="/logo2.png"
          alt="Admin Logo"
          className="h-16 w-auto drop-shadow-md"
        />

        <button
          onClick={() => setSidebarOpen((s) => !s)}
          className="p-2 rounded-md border bg-white hover:bg-neutral-100 transition"
        >
          {sidebarOpen ? (
            <X className="text-primary" size={24} />
          ) : (
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </div>

      <main className="flex-1 px-6 md:px-12 pt-28 md:pt-12 pb-10">
        <h1 className="text-4xl font-extrabold text-primary mb-10">
          {tab === "jobs" ? "Manage Job Listings" : "View Applications"}
        </h1>

        {tab === "jobs" ? <JobsTab /> : <ApplicationsTab />}
      </main>
    </div>
  );
}
