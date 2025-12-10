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
   GET (List all jobs OR get 1 job)
======================================================== */
export async function GET(req: Request) {
  const db = await getDb();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  // Get single job
  if (id) {
    const job = await db
      .collection("jobs")
      .findOne({ _id: new ObjectId(id) });

    if (!job) return NextResponse.json({ error: "Job not found" }, { status: 404 });
    return NextResponse.json(job);
  }

  // Get all jobs
  const jobs = await db.collection("jobs")
    .find()
    .sort({ createdAt: -1 })
    .toArray();

  return NextResponse.json({ jobs });
}

/* ========================================================
   POST (Create job)
======================================================== */
export async function POST(req: Request) {
  const token = getToken(req);
  try {
    jwt.verify(token!, JWT_SECRET);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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
}

/* ========================================================
   PUT (Update job)
======================================================== */
export async function PUT(req: Request) {
  const token = getToken(req);
  try {
    jwt.verify(token!, JWT_SECRET);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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
}

/* ========================================================
   DELETE job
======================================================== */
export async function DELETE(req: Request) {
  const token = getToken(req);
  try {
    jwt.verify(token!, JWT_SECRET);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const db = await getDb();
  await db.collection("jobs").deleteOne({ _id: new ObjectId(id) });

  return NextResponse.json({ success: true });
}
