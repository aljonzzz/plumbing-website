import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      contact,
      address,
      service,
      preferredDate,
      preferredTime,
      notes,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to business owner
    await transporter.sendMail({
      from: `"PipeWise Plumbing" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Booking - ${service}`,
      html: `
        <h2>New Booking Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${contact}</p>
        <p><strong>Address:</strong> ${address}</p>

        <hr />

        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${preferredDate}</p>
        <p><strong>Time:</strong> ${preferredTime}</p>

        <p><strong>Notes:</strong></p>
        <p>${notes || "None"}</p>
      `,
    });

    // Auto reply to customer
    await transporter.sendMail({
      from: `"PipeWise Plumbing" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Booking Request Received",
      html: `
        <h2>Thank You for Booking</h2>

        <p>Hello ${name},</p>

        <p>
          We have successfully received your booking request.
        </p>

        <p>
          Our team will contact you shortly to confirm your appointment.
        </p>

        <hr />

        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${preferredDate}</p>
        <p><strong>Time:</strong> ${preferredTime}</p>

        <br />

        <p>Thank you for choosing PipeWise Plumbing.</p>
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
      {
        status: 500,
      }
    );
  }
}
