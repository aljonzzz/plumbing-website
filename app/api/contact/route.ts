import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, contact, message } = await req.json();

    // Validation
    if (!name || !email || !contact || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
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

    // Email sent to you
    await transporter.sendMail({
      from: `"PipeWise Plumbing" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>🚰 New Plumbing Inquiry</h2>

          <table cellpadding="8">
            <tr>
              <td><strong>Name:</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Email:</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Contact:</strong></td>
              <td>${contact}</td>
            </tr>
          </table>

          <h3>Message</h3>
          <p>${message}</p>
        </div>
      `,
    });

    // Auto reply to customer
    await transporter.sendMail({
      from: `"PipeWise Plumbing" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We've Received Your Inquiry",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Thank You for Contacting PipeWise Plumbing</h2>

          <p>Hello ${name},</p>

          <p>
            Thank you for reaching out to us. We have successfully received
            your inquiry and a member of our team will review it shortly.
          </p>

          <p>
            We aim to respond as soon as possible regarding your request.
          </p>

          <p>
            If your plumbing issue is urgent, please contact us directly by phone.
          </p>

          <hr />

          <p><strong>Your Submitted Details</strong></p>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Message:</strong> ${message}</p>

          <br />

          <p>Best regards,</p>
          <p><strong>PipeWise Plumbing</strong></p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Email Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message.",
      },
      {
        status: 500,
      }
    );
  }
}
