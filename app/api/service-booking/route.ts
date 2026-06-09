import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      contact,
      address,
      service = [],
      preferredDate,
      preferredTime,
      notes,
    } = await req.json();

    // basic validation
    if (
      !name ||
      !email ||
      !contact ||
      !address ||
      !service.length ||
      !preferredDate ||
      !preferredTime
    ) {
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

    // EMAIL TO OWNER
    await transporter.sendMail({
      from: `"PipeWise Plumbing" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Booking - ${serviceList}`,
      html: `
        <h2>New Booking Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${contact}</p>
        <p><strong>Address:</strong> ${address}</p>

        <hr />

        <p><strong>Services:</strong></p>
        <ul>
          ${service.map((item: string) => `<li>${item}</li>`).join("")}
        </ul>

        <p><strong>Date:</strong> ${preferredDate}</p>
        <p><strong>Time:</strong> ${preferredTime}</p>

        <p><strong>Notes:</strong></p>
        <p>${notes || "None"}</p>
      `,
    });

    // EMAIL TO CUSTOMER (IMPROVED)
    await transporter.sendMail({
      from: `"PipeWise Plumbing" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Booking Request Received - PipeWise Plumbing",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color:#fe6c01;">Thank You for Your Booking</h2>

          <p>Hello <strong>${name}</strong>,</p>

          <p>
            We’ve successfully received your booking request.
            Our team will review your request and contact you shortly to confirm your appointment.
          </p>

          <hr />

          <h3>Booking Summary</h3>

          <p><strong>Services Requested:</strong></p>
          <ul>
            ${service.map((item: string) => `<li>${item}</li>`).join("")}
          </ul>

          <p><strong>Date:</strong> ${preferredDate}</p>
          <p><strong>Time:</strong> ${preferredTime}</p>

          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Address:</strong> ${address}</p>

          ${
            notes
              ? `<p><strong>Notes:</strong> ${notes}</p>`
              : ""
          }

          <br />

          <p>
            Thank you for choosing <strong>PipeWise Plumbing</strong> 🚰
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit booking",
      },
      { status: 500 }
    );
  }
}
