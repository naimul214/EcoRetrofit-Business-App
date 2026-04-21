import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { Resend } from "resend";
import prisma from "@/prisma/client";
import { welcomeEmail } from "@/app/utils/emailTemplates/welcomeEmail";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const firstName = String(body.firstName || "").trim();
    const lastName = String(body.lastName || "").trim();
    const workEmail = String(body.workEmail || "").trim().toLowerCase();
    const company = String(body.company || "").trim();

    if (!firstName || !lastName || !workEmail || !company) {
      return NextResponse.json(
        { message: "First name, last name, work email, and company are required." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(workEmail)) {
      return NextResponse.json({ message: "Invalid email format." }, { status: 400 });
    }

    let createdNewContact = false;
    let contact = await prisma.client.findUnique({
      where: { workEmail },
    });

    if (!contact) {
      try {
        contact = await prisma.client.create({
          data: {
            firstName,
            lastName,
            workEmail,
            company,
            role: "PROPERTY_MANAGER",
          },
        });
        createdNewContact = true;
      } catch (createError) {
        if (createError instanceof Prisma.PrismaClientKnownRequestError && createError.code === "P2002") {
          contact = await prisma.client.findUnique({
            where: { workEmail },
          });
        } else {
          throw createError;
        }
      }
    }

    if (!contact) {
      return NextResponse.json(
        { message: "Unable to process contact request." },
        { status: 500 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { message: "Contact saved, but email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const appUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
    const html = welcomeEmail(firstName).replace("{{DASHBOARD_URL}}", `${appUrl}/dashboard`);

    const { data, error: resendError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "EcoRetrofit-AI <onboarding@resend.dev>",
      to: [workEmail],
      subject: "Welcome to EcoRetrofit-AI",
      html,
    });

    if (resendError) {
      console.error("Resend delivery error:", resendError);
      return NextResponse.json(
        { message: "Contact saved, but welcome email could not be delivered." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        message: "Contact saved and welcome email sent.",
        contactId: contact.id,
        emailId: data?.id,
      },
      { status: createdNewContact ? 201 : 200 }
    );
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ message: "Failed to process contact request." }, { status: 500 });
  }
}
