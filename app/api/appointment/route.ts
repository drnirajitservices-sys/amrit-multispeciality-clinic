import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_PROBLEM_WORDS = 100;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const age = String(body.age ?? "").trim();
    const gender = String(body.gender ?? "").trim();
    const mobile = String(body.mobile ?? "").trim();
    const city = String(body.city ?? "").trim();
    const email = String(body.email ?? "").trim();
    const doctor = String(body.doctor ?? "").trim();
    const problemDescription = String(
      body.problemDescription ?? ""
    ).trim();

    if (!name || !age || !gender || !mobile || !doctor) {
      return NextResponse.json(
        { message: "Please complete all mandatory fields." },
        { status: 400 }
      );
    }

    const numericAge = Number(age);

    if (
      !Number.isInteger(numericAge) ||
      numericAge < 1 ||
      numericAge > 120
    ) {
      return NextResponse.json(
        { message: "Please enter a valid age." },
        { status: 400 }
      );
    }

    const mobileDigits = mobile.replace(/\D/g, "");

    if (mobileDigits.length < 10 || mobileDigits.length > 15) {
      return NextResponse.json(
        { message: "Please enter a valid mobile number." },
        { status: 400 }
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const problemWordCount = problemDescription
      ? problemDescription.split(/\s+/).filter(Boolean).length
      : 0;

    if (problemWordCount > MAX_PROBLEM_WORDS) {
      return NextResponse.json(
        {
          message:
            "Problem description cannot exceed 100 words.",
        },
        { status: 400 }
      );
    }

    const allowedDoctors = [
      "Dr. Niraj Kumar Mishra — General Medicine",
      "Dr. Shubham Anant — Orthopaedics",
      "Dr. Gaurav Sharma — General & Laparoscopic Surgery Consultation",
    ];

    if (!allowedDoctors.includes(doctor)) {
      return NextResponse.json(
        { message: "Please select a valid doctor." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      console.error("Gmail environment variables are missing.");

      return NextResponse.json(
        {
          message:
            "Email service is not configured. Please call +91 83682 89803 for an appointment.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const submittedAt = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    }).format(new Date());

    const safeName = escapeHtml(name);
    const safeAge = escapeHtml(age);
    const safeGender = escapeHtml(gender);
    const safeMobile = escapeHtml(mobile);
    const safeCity = escapeHtml(city || "Not provided");
    const safeEmail = escapeHtml(email || "Not provided");
    const safeDoctor = escapeHtml(doctor);
    const safeProblem = escapeHtml(
      problemDescription || "Not provided"
    );

    await transporter.sendMail({
      from: `"AMRIT Clinic Website" <${gmailUser}>`,
      to: "drnirajinfo@gmail.com",
      replyTo: email || undefined,
      subject: `New Appointment Request — ${name} — ${doctor}`,
      text: `
New Appointment Request — AMRIT Multispeciality Clinic

Patient Name: ${name}
Age: ${age}
Gender: ${gender}
Mobile Number: ${mobile}
City: ${city || "Not provided"}
Email: ${email || "Not provided"}

Preferred Doctor:
${doctor}

Problem Description:
${problemDescription || "Not provided"}

Submitted At:
${submittedAt}
      `.trim(),

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #1f2937;">
          <div style="background: #166534; color: white; padding: 22px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">
              New Appointment Request
            </h1>
            <p style="margin: 8px 0 0;">
              AMRIT Multispeciality Clinic
            </p>
          </div>

          <div style="border: 1px solid #dcfce7; padding: 24px;">
            <h2 style="color: #166534; margin-top: 0;">
              Patient Details
            </h2>

            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Age:</strong> ${safeAge}</p>
            <p><strong>Gender:</strong> ${safeGender}</p>
            <p><strong>Mobile:</strong> ${safeMobile}</p>
            <p><strong>City:</strong> ${safeCity}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>

            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 22px 0;" />

            <h2 style="color: #166534;">
              Preferred Doctor
            </h2>

            <p>${safeDoctor}</p>

            <h2 style="color: #166534;">
              Problem Description
            </h2>

            <p style="line-height: 1.7; white-space: pre-wrap;">
              ${safeProblem}
            </p>

            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 22px 0;" />

            <p style="color: #6b7280; font-size: 14px;">
              Submitted at: ${submittedAt}
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        message:
          "Appointment request submitted successfully! We will contact you shortly to confirm your booking. For any queries, call +91 83682 89803.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Appointment submission error:", error);

    return NextResponse.json(
      {
        message:
          "We could not submit your appointment request right now. Please try again or call +91 83682 89803.",
      },
      { status: 500 }
    );
  }
}