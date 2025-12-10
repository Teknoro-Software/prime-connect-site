// app/api/admin/login/route.ts
import { NextResponse } from "next/server";
import { getDb } from "../../../../lib/mongo";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;
if (!JWT_SECRET) throw new Error("JWT_SECRET missing");

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;
  if (!email || !password) return NextResponse.json({ error: "Missing" }, { status: 400 });

  const db = await getDb();
  const admin = await db.collection("admins").findOne({ email });
  if (!admin) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const ok = await bcrypt.compare(password, admin.password);
  if (!ok) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const token = jwt.sign({ id: admin._id, email }, JWT_SECRET, { expiresIn: "7d" });
  const res = NextResponse.json({ success: true });
  // set cookie
  res.headers.set("Set-Cookie", `pc_admin_token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${7*24*60*60}`);
  return res;
}
