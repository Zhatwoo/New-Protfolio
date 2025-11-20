import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.CONTACT_EMAIL || 'Ndelatorre08252002@gmail.com';

    if (!gmailUser || !gmailAppPassword) {
      console.error('Gmail credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Format current date and time
    const currentTime = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Email HTML template
    const emailHtml = `
      <div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
        <div>A message by ${name} has been received. Kindly respond at your earliest convenience.</div>
        <div
          style="
            margin-top: 20px;
            padding: 15px 0;
            border-width: 1px 0;
            border-style: dashed;
            border-color: lightgrey;
          "
        >
          <table role="presentation">
            <tr>
              <td style="vertical-align: top">
                <div
                  style="
                    padding: 6px 10px;
                    margin: 0 10px;
                    background-color: aliceblue;
                    border-radius: 5px;
                    font-size: 26px;
                  "
                  role="img"
                >
                  👤
                </div>
              </td>
              <td style="vertical-align: top">
                <div style="color: #2c3e50; font-size: 16px">
                  <strong>${name}</strong>
                </div>
                <div style="color: #cccccc; font-size: 13px">${currentTime}</div>
                <p style="font-size: 16px">${message.replace(/\n/g, '<br>')}</p>
                <p style="font-size: 14px; color: #666; margin-top: 10px">
                  <strong>Reply to:</strong> ${email}
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: `"${name}" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: emailHtml,
      text: `A message by ${name} has been received.\n\nMessage:\n${message}\n\nReply to: ${email}\n\nTime: ${currentTime}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

