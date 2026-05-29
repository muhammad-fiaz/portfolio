"use server";

import type { Web3FormsSubmissionValues } from "@/lib/portfolio-types";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitContactAction(values: Web3FormsSubmissionValues) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("Contact form is not configured. Missing access key.");
  }

  const payload = {
    access_key: accessKey,
    name: values.name,
    email: values.email,
    country: values.country,
    phone: values.phone || "",
    business_inquiry: values.businessInquiry,
    project_details: values.projectDetails,
    expected_start_date: values.expectedStartDate || "",
    expected_end_date: values.expectedEndDate || "",
    subject: `New Business Inquiry from ${values.name}`,
  };

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to submit contact form.");
  }

  return result;
}
