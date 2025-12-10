import { NextResponse } from "next/server";
import { getDb } from "../../../../../lib/mongo";
import { ObjectId } from "mongodb";

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;

    const db = await getDb();
    const app = await db
      .collection("applications")
      .findOne({ _id: new ObjectId(id) });

    console.log("DB RESULT:", app);

    if (!app) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    if (!app.resume) {
      return NextResponse.json({ error: "Resume not found", app }, { status: 404 });
    }

    console.log(app);

    const buffer = app.resume.buffer;

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": app.resumeType || "application/octet-stream",
        "Content-Disposition": `attachment; filename="${app.resumeName || "resume.pdf"}"`,
      },
    });
  } catch (err) {
    console.error("Resume download failed:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
