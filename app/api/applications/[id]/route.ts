import { NextRequest, NextResponse } from "next/server";
import { getBucket } from "../../../../lib/mongo";
import { ObjectId } from "mongodb";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }   // ⭐ FIXED — params is a Promise
) {
  try {
    const { id } = await context.params;         // ⭐ FIXED — must await params

    const bucket = getBucket();
    const downloadStream = bucket.openDownloadStream(new ObjectId(id));

    const stream = new ReadableStream({
      start(controller) {
        downloadStream.on("data", (chunk) => controller.enqueue(chunk));
        downloadStream.on("end", () => controller.close());
        downloadStream.on("error", (err) => controller.error(err));
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `attachment; filename="resume.pdf"`,
      },
    });

  } catch (err) {
    console.error("Resume download failed:", err);
    return NextResponse.json({ error: "Resume not found" }, { status: 404 });
  }
}
