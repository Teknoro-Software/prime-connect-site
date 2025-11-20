/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, mobile, message } = await req.json();

    await resend.emails.send({
      from: "Prime Connect HR <no-reply@primeconnecthr.com>",   
      to: ["info@primeconnecthr.com"],
      subject: "New Contact Form Submission",
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    await resend.emails.send({
      from: "Prime Connect HR <no-reply@primeconnecthr.com>",   
      to: email,
      subject: "We Received Your Message ✔",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for contacting <strong>Prime Connect HR</strong>.</p>
        <p>Our team will get back to you shortly.</p>
        <br/>
        <p>Regards,<br/>Prime Connect HR Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
