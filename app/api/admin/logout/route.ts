import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ success: true });

  // Overwrite the cookie so browser deletes it
  res.headers.set(
    "Set-Cookie",
    "pc_admin_token=; Path=/; HttpOnly; Max-Age=0; SameSite=Lax"
  );

  return res;
}
