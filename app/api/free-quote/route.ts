import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const contact = data.get("contact") as string;
    const notes = (data.get("notes") as string) || "";

    // SAFE MULTI VALUES
    const service = data.getAll("service") as string[];

    const image = data.get("image") as File | null;

    // VALIDATION
    if (!name || !email || !contact || service.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const serviceList = service.join(", ");

    const attachments: any[] = [];

    if (image) {
      const bytes = await image.arrayBuffer();

      attachments.push({
        filename: image.name,
        content: Buffer.from(bytes),
      });
    }

    // OWNER EMAIL
    await transporter.sendMail({
      from: `"PipeWise Plumbing" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Quote Request - ${serviceList}`,
      attachments,
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${contact}</p>

        <p><strong>Services:</strong></p>
        <ul>
          ${service.map((s) => `<li>${s}</li>`).join("")}
        </ul>

        <p><strong>Notes:</strong></p>
        <p>${notes || "None"}</p>

        ${image ? "<p>📷 Image attached</p>" : ""}
      `,
    });

    // CUSTOMER EMAIL
    await transporter.sendMail({
      from: `"PipeWise Plumbing" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Quote Request Received",
      html: `
        <div>
          <h2>Thank you ${name}</h2>
          <p>We received your request.</p>

          <ul>
            ${service.map((s) => `<li>${s}</li>`).join("")}
          </ul>

          <p>We will contact you soon.</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Quote submitted successfully",
    });
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}
