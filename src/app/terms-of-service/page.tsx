import type { Metadata } from "next";
import { PolicyPageClient } from "@/components/policies/policy-page-client";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Professional Terms of Service for services by Muhammad Fiaz.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service | Muhammad Fiaz",
    description:
      "Service terms, client obligations, delivery standards, and legal conditions.",
    url: `${siteUrl}/terms-of-service`,
    type: "website",
    images: ["/android-chrome-512x512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Muhammad Fiaz",
    description:
      "Service terms, client obligations, delivery standards, and legal conditions.",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function TermsOfServicePage() {
  return (
    <PolicyPageClient
      pageTitle="Terms of Service"
      intro="These Terms of Service govern access to muhammadfiaz.com and all consulting, engineering, automation, and product delivery services provided by Muhammad Fiaz."
      sections={[
        {
          title: "Service Scope",
          content: [
            "Services may include software development, product engineering, AI automation, integration setup, consulting, and technical support.",
            "Final scope, milestones, timelines, and deliverables are defined by direct agreement, proposal, or documented project communication.",
          ],
        },
        {
          title: "Client Responsibilities",
          content: [
            "Clients are responsible for providing accurate requirements, timely approvals, and access credentials required for delivery.",
            "Delays caused by missing inputs, late responses, or third-party account limitations may affect delivery schedules.",
          ],
        },
        {
          title: "Payments and Billing",
          content: [
            "Project work begins after payment confirmation according to agreed terms. Milestone-based or fixed-scope billing may apply.",
            "All fees are due as agreed in writing. Late payments may pause delivery until settlement.",
          ],
        },
        {
          title: "Intellectual Property",
          content: [
            "Upon full payment, clients receive rights to agreed deliverables unless otherwise stated for third-party assets, open-source licenses, or prebuilt internal utilities.",
            "Pre-existing frameworks, templates, and reusable modules remain the intellectual property of their original owners where applicable.",
          ],
        },
        {
          title: "Confidentiality",
          content: [
            "Project-sensitive information shared by clients is treated as confidential and used only for delivery, support, and agreed operational needs.",
            "Clients are responsible for avoiding transmission of highly sensitive credentials through insecure channels unless explicitly required and protected.",
          ],
        },
        {
          title: "Warranties and Liability",
          content: [
            "Services are delivered with professional care, but no absolute guarantee is made for uninterrupted operation of third-party tools, hosting providers, or external APIs.",
            "To the maximum extent permitted by law, liability is limited to the amount paid for the specific service in dispute.",
          ],
        },
        {
          title: "Termination",
          content: [
            "Either party may terminate collaboration in writing. Completed work and billable milestones remain payable.",
            "Ongoing access, support, or delivery obligations may stop upon termination unless separately agreed.",
          ],
        },
        {
          title: "Contact and Governing Terms",
          content: [
            "Questions regarding these terms can be sent to contact@muhammadfiaz.com.",
            "These terms are interpreted under applicable laws and may be updated periodically to reflect service and legal changes.",
            "Continued use of this website or services after updates constitutes acceptance of revised terms.",
          ],
        },
      ]}
    />
  );
}
