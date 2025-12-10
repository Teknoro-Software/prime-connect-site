// app/api/admin/session/route.ts
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;
export async function GET(req: Request) {
  const cookie = req.headers.get("cookie") || "";
  const token = cookie.split(";").map(s => s.trim()).find(s => s.startsWith("pc_admin_token="))?.split("=")[1];
  if (!token) return NextResponse.json({ authenticated: false });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return NextResponse.json({ authenticated: true, user: payload });
  } catch {
    return NextResponse.json({ authenticated: false });
  }
}
