"use server";

import React from "react";
import { Resend } from "resend";
import { headers } from "next/headers";
import { validateString, getErrorMessage, isValidEmail } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// Best-effort abuse limit: per server instance only, so it slows down casual
// abuse but is not a substitute for a shared store (e.g. Redis) if this grows.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const recentSends = new Map<string, number[]>();

const isRateLimited = (key: string) => {
  const now = Date.now();
  const recent = (recentSends.get(key) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    recentSends.set(key, recent);
    return true;
  }

  recent.push(now);
  recentSends.set(key, recent);
  return false;
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Honeypot field: real visitors never see it. Pretend it worked.
  if (formData.get("company")) {
    return { data: null };
  }

  const clientKey =
    headers().get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (isRateLimited(clientKey)) {
    return {
      error: "Too many messages sent. Please try again in a few minutes.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      error: "Email service is not configured (missing RESEND_API_KEY). Please contact Yash directly at yashrai1224@gmail.com.",
    };
  }

  const resend = new Resend(apiKey);

  // simple server-side validation
  if (!validateString(senderEmail, 500) || !isValidEmail(senderEmail)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "yashrai1224@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
