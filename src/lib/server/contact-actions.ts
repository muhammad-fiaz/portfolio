"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  country: z.string().optional(),
  phone: z.string().optional(),
  businessInquiry: z.string().min(4),
  projectDetails: z.string().optional(),
  expectedStartDate: z.string().optional(),
  expectedEndDate: z.string().optional(),
});

export async function submitContactAction(values: z.infer<typeof contactSchema>) {
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    throw new Error("Invalid form data");
  }

  const WEB3_FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
  if (!WEB3_FORMS_ACCESS_KEY) {
    throw new Error("Server configuration error: missing API key");
  }

  const formData = new FormData();
  formData.append("access_key", WEB3_FORMS_ACCESS_KEY);
  formData.append("name", parsed.data.name);
  formData.append("email", parsed.data.email);
  formData.append("country", parsed.data.country || "Not provided");
  formData.append("phone", parsed.data.phone || "Not provided");
  formData.append("business_inquiry", parsed.data.businessInquiry);
  
  formData.append("message", [
    `Business Inquiry: ${parsed.data.businessInquiry}`,
    `Project Details: ${parsed.data.projectDetails || "Not provided"}`,
    `Country: ${parsed.data.country || "Not provided"}`,
    `Phone: ${parsed.data.phone || "Not provided"}`,
    `Expected Start Date: ${parsed.data.expectedStartDate || "Not provided"}`,
    `Expected End Date: ${parsed.data.expectedEndDate || "Not provided"}`,
  ].join("\n"));
  
  formData.append("subject", `Portfolio Inquiry: ${parsed.data.businessInquiry}`);
  formData.append("from_name", "Muhammad Fiaz Portfolio");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to submit contact form.");
  }

  const data = await response.json();
  if (!data.success) {
    throw new Error(data.message || "Submission failed.");
  }

  return { success: true };
}
