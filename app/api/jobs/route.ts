/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
import { getDb } from "../../../lib/mongo";

const JWT_SECRET = process.env.JWT_SECRET!;

function getToken(req: Request) {
  const cookie = req.headers.get("cookie") || "";
  return cookie
    .split(";")
    .map((s) => s.trim())
    .find((s) => s.startsWith("pc_admin_token="))
    ?.split("=")[1];
}

/* ========================================================
   GET (List all jobs OR single job)
======================================================== */
export async function GET(req: Request) {
  try {
    const db = await getDb();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    // Fetch one job
    if (id) {
  const job = await db.collection("jobs").findOne({ _id: new ObjectId(id) });

  if (!job) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }

  // Wrap response so frontend receives { job: {...} }
  return NextResponse.json({ job });
}


    // Fetch all jobs
    const jobs = await db
      .collection("jobs")
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ jobs });
  } catch (err) {
    console.error("GET /api/jobs FAILED:", err);
    return NextResponse.json(
      { error: "Failed to load jobs" },
      { status: 500 }
    );
  }
}

/* ========================================================
   POST (Create job)
======================================================== */
export async function POST(req: Request) {
  try {
    const token = getToken(req);
    jwt.verify(token!, JWT_SECRET);

    const body = await req.json();
    const db = await getDb();

    const doc = {
      title: body.title,
      category: body.category || "",
      location: body.location || "",
      type: body.type || "",
      salary: body.salary || "",
      description: body.description || "",
      status: body.status || "active",
      createdAt: new Date(),
    };

    const r = await db.collection("jobs").insertOne(doc);

    return NextResponse.json({ success: true, id: r.insertedId });
  } catch (err) {
    console.error("POST /api/jobs FAILED:", err);
    return NextResponse.json(
      { error: "Failed to create job" },
      { status: 500 }
    );
  }
}

/* ========================================================
   PUT (Update job)
======================================================== */
export async function PUT(req: Request) {
  try {
    const token = getToken(req);
    jwt.verify(token!, JWT_SECRET);

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const body = await req.json();
    const db = await getDb();

    await db.collection("jobs").updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("PUT /api/jobs FAILED:", err);
    return NextResponse.json(
      { error: "Failed to update job" },
      { status: 500 }
    );
  }
}

/* ========================================================
   DELETE job
======================================================== */
export async function DELETE(req: Request) {
  try {
    const token = getToken(req);
    jwt.verify(token!, JWT_SECRET);

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const db = await getDb();
    await db.collection("jobs").deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE /api/jobs FAILED:", err);
    return NextResponse.json(
      { error: "Failed to delete job" },
      { status: 500 }
    );
  }
}
