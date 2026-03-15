import type { Metadata } from "next";
import { PolicyPageClient } from "@/components/policies/policy-page-client";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for muhammadfiaz.com services and communications.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Muhammad Fiaz",
    description:
      "How data is collected, used, and protected on muhammadfiaz.com.",
    url: `${siteUrl}/privacy-policy`,
    type: "website",
    images: ["/android-chrome-512x512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Muhammad Fiaz",
    description:
      "How data is collected, used, and protected on muhammadfiaz.com.",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPageClient
      pageTitle="Privacy Policy"
      intro="This Privacy Policy explains how Muhammad Fiaz collects, uses, and protects information when you use muhammadfiaz.com and related services."
      sections={[
        {
          title: "Information Collected",
          content: [
            "I may collect contact information you submit, including name, email address, and project details through forms or direct communication.",
            "Technical usage data such as browser type, device type, and page interactions may be collected through analytics tools to improve performance and user experience.",
          ],
        },
        {
          title: "How Information Is Used",
          content: [
            "Information is used to respond to inquiries, deliver services, manage project communication, and provide support.",
            "Data may also be used to improve website performance, service quality, and product delivery workflows.",
            "Where legally required, data processing is based on consent, contractual necessity, legitimate interest, or compliance obligations.",
          ],
        },
        {
          title: "Data Sharing",
          content: [
            "Your personal information is not sold. Data may be shared only with trusted service providers when needed to deliver services or comply with legal obligations.",
            "Third-party integrations used for service delivery may process limited required information under their own policies.",
          ],
        },
        {
          title: "Data Security",
          content: [
            "Reasonable technical and organizational safeguards are used to protect information against unauthorized access, misuse, or disclosure.",
            "No online system is completely risk-free, but security practices are continuously maintained and improved.",
          ],
        },
        {
          title: "Data Retention",
          content: [
            "Information is retained only as long as necessary for service delivery, legal compliance, dispute resolution, and operational records.",
            "When data is no longer required, reasonable steps are taken to delete or anonymize it.",
          ],
        },
        {
          title: "Your Rights and Contact",
          content: [
            "You may request correction or deletion of your personal information where legally applicable.",
            "For privacy questions, contact: contact@muhammadfiaz.com.",
          ],
        },
      ]}
    />
  );
}
