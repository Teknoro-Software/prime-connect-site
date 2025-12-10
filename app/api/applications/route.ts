/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { getDb, getBucket } from "../../../lib/mongo";
import jwt from "jsonwebtoken";
import { Readable } from "stream";
import { Binary } from "mongodb";

const JWT_SECRET = process.env.JWT_SECRET!;

function getToken(req: Request) {
  const cookie = req.headers.get("cookie") || "";
  return cookie
    .split(";")
    .map((s) => s.trim())
    .find((s) => s.startsWith("pc_admin_token="))
    ?.split("=")[1];
}

export async function POST(req: Request) {
  const fd = await req.formData();

  const name = fd.get("name")?.toString();
  const email = fd.get("email")?.toString();
  const phone = fd.get("phone")?.toString();
  const jobId = fd.get("jobId")?.toString();
  const resumeFile = fd.get("resume") as File;

  if (!name || !email || !resumeFile) {
    return NextResponse.json({ error: "Missing fields" }, { status: 422 });
  }

  if (resumeFile.size > 1_000_000) {
    return NextResponse.json(
      { error: "File must be under 1MB." },
      { status: 400 }
    );
  }

  // Convert to ArrayBuffer → Buffer
  const arrayBuffer = await resumeFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const db = await getDb();
  // const bucket = getBucket();

  // Convert Web Stream → Node Stream
  // const webStream = resumeFile.stream();
  // const nodeStream = Readable.fromWeb(webStream as any);

  // Upload to GridFS
  // const uploadStream = bucket.openUploadStream(resumeFile.name);
  // nodeStream.pipe(uploadStream);

  // Save as Binary field
  await db.collection("applications").insertOne({
    name,
    email,
    phone,
    jobId,
    resume: new Binary(buffer),
    resumeName: resumeFile.name,
    resumeType: resumeFile.type,
    resumeSize: resumeFile.size,
    createdAt: new Date(),
  });

  return NextResponse.json({ success: true });
}

export async function GET(req: Request) {
  const token = getToken(req);
  try {
    jwt.verify(token!, JWT_SECRET);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = await getDb();
  const apps = await db
    .collection("applications")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return NextResponse.json(apps);
}
