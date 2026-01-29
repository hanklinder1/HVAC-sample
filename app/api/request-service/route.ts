import { NextRequest, NextResponse } from "next/server";
import { siteData } from "@/app/lib/siteData";

// Dynamically import Resend to avoid build errors if package isn't installed
async function getResend() {
  if (!process.env.RESEND_API_KEY) return null;
  try {
    const { Resend } = await import("resend");
    return new Resend(process.env.RESEND_API_KEY);
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, serviceType, message } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get Resend instance
    const resend = await getResend();
    
    // Check if Resend is configured
    if (!resend) {
      console.warn("RESEND_API_KEY not set or resend package not installed. Email not sent. Form data:", { name, phone, email, serviceType, message });
      // In development, still return success so form works
      if (process.env.NODE_ENV === "development") {
        return NextResponse.json(
          { success: true, message: "Email not configured (development mode)" },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "David's HVAC Website <onboarding@resend.dev>", // TODO: Replace with verified domain
      to: [siteData.business.email],
      replyTo: email || siteData.business.email,
      subject: `New Service Request: ${serviceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b;">New Service Request</h2>
          <p style="color: #475569;">You received a new service request from your website.</p>
          
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            ${email ? `<p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>` : ""}
            <p style="margin: 8px 0;"><strong>Service Type:</strong> ${serviceType}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #1e293b;">Message:</h3>
            <p style="color: #475569; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
            This request was submitted from ${siteData.business.name} website.
          </p>
        </div>
      `,
      text: `
New Service Request

Name: ${name}
Phone: ${phone}
${email ? `Email: ${email}` : ""}
Service Type: ${serviceType}

Message:
${message}

---
This request was submitted from ${siteData.business.name} website.
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Request service error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
