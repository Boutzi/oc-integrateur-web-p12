import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "127.0.0.1",
  port: 1025,
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_PROTONMAIL_USER,
    pass: process.env.NEXT_PUBLIC_PROTONMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, company, message } =
      await request.json();

    const htmlMessage = `
      <html>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
          <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8f8f8; padding: 20px;">
            <tr>
              <td>
                <table width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                  <tr>
                    <td style="padding: 20px;">
                      <h1 style="color: #333333;">New Contact Message</h1>
                      <p>First Name: <strong>${firstName}</strong></p>
                      <p><strong>Last Name: <strong>${lastName}</strong></p>
                      <p><strong>Email: <strong>${email}</strong></p>
                      <p><strong>Company: <strong>${company}</strong></p>
                      <p>Message:</p>
                      <p>${message}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px; background-color: #f1f1f1; border-radius: 0 0 8px 8px;">
                      <p style="text-align: center; color: #777777;">This message was sent from your contact form.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_PROTONMAIL_USER,
      to: process.env.NEXT_PUBLIC_PROTONMAIL_USER,
      subject: `Message from ${firstName} ${lastName} - ${company}`,
      html: htmlMessage,
    });

    console.log("Received contact message:", {
      firstName,
      lastName,
      email,
      company,
      message,
    });

    return NextResponse.json(
      { message: "Message received and email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json(
      { message: "Failed to process message" },
      { status: 500 }
    );
  }
}
