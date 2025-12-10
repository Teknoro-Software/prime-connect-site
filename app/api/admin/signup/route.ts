// app/api/admin/signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getDb } from "../../../../lib/mongo";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const JWT_SECRET = process.env.JWT_SECRET;

    // IMPORTANT — Never validate env vars at the top level in Next.js 16
    if (!JWT_SECRET) {
      console.error("JWT_SECRET missing");
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing credentials" },
        { status: 400 }
      );
    }

    const db = await getDb();
    const admins = db.collection("admins");

    // Check if admin already exists
    const existing = await admins.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const result = await admins.insertOne({
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    // Create JWT token
    const token = jwt.sign(
      {
        id: result.insertedId.toString(),  // ensure string shape
        email,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Build response
    const res = NextResponse.json({ success: true });

    // Set cookie
    res.headers.set(
      "Set-Cookie",
      `pc_admin_token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${7 * 24 * 60 * 60}`
    );

    return res;
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
