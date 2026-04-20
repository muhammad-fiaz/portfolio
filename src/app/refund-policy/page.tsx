import type { Metadata } from "next";
import { PolicyPageClient } from "@/components/policies/policy-page-client";
import { siteUrl } from "@/lib/site-config";

const refundPolicyOgImageUrl = `${siteUrl}/refund-policy/opengraph-image`;

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund terms for services provided by Muhammad Fiaz.",
  alternates: { canonical: "/refund-policy" },
  openGraph: {
    title: "Refund Policy | Muhammad Fiaz",
    description:
      "Professional refund terms for client services and digital delivery.",
    url: `${siteUrl}/refund-policy`,
    type: "website",
    images: [refundPolicyOgImageUrl],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | Muhammad Fiaz",
    description:
      "Professional refund terms for client services and digital delivery.",
    images: [refundPolicyOgImageUrl],
  },
};

export default function RefundPolicyPage() {
  return (
    <PolicyPageClient
      pageTitle="Refund Policy"
      intro="This Refund Policy applies to services delivered by Muhammad Fiaz through muhammadfiaz.com and direct client agreements."
      sections={[
        {
          title: "General Policy",
          content: [
            "All payments are non-refundable once project work is started and resources are allocated.",
            "By purchasing services, clients acknowledge and accept this no-refund policy.",
          ],
        },
        {
          title: "No Refund After Completion and Delivery",
          content: [
            "No refund is provided after work is completed and delivered, whether delivery is full, milestone-based, or partial as agreed in scope.",
            "Completed deliverables, source files, deployments, handoffs, consultations, architecture planning, and implementation hours are final and non-refundable.",
          ],
        },
        {
          title: "Limited Exceptions",
          content: [
            "A refund may be considered only for verified duplicate payment or clear billing error.",
            "Refunds are not available for change of mind, strategy changes, delayed client feedback, third-party platform restrictions, or scope changes after kickoff.",
          ],
        },
        {
          title: "Disputes and Review",
          content: [
            "Refund requests must be sent in writing to contact@muhammadfiaz.com with invoice details and a clear reason.",
            "Any approved exception is reviewed against payment records, communication history, and project scope.",
          ],
        },
        {
          title: "Chargeback and Disputes",
          content: [
            "Before initiating a payment dispute, clients are expected to contact support for direct resolution.",
            "Chargebacks for completed or delivered services may be formally contested with supporting delivery records.",
          ],
        },
      ]}
    />
  );
}
