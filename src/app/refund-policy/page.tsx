import type { Metadata } from "next";
import { PolicyPageClient } from "@/components/policies/policy-page-client";
import { siteUrl } from "@/lib/site-config";

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
    images: ["/android-chrome-512x512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | Muhammad Fiaz",
    description:
      "Professional refund terms for client services and digital delivery.",
    images: ["/android-chrome-512x512.png"],
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
            "As a default policy, payments are non-refundable once project work has started due to time allocation, technical planning, and delivery commitments.",
            "By purchasing services, clients acknowledge and accept this no-refund baseline policy.",
          ],
        },
        {
          title: "Exceptional Refund Cases",
          content: [
            "Refunds may be considered only in specific exceptions, such as duplicate payment, billing error, or proven non-delivery caused solely by provider-side inability to perform.",
            "Any approved refund is processed at reasonable discretion after review of project scope, communication history, and actual work delivered.",
            "Where applicable, approved refunds are issued via the original payment channel, subject to gateway and bank processing timelines.",
          ],
        },
        {
          title: "Exclusions",
          content: [
            "No refund is provided for change of mind, strategy shifts, delayed client responses, third-party platform limitations, or scope changes after kickoff.",
            "Partial deliveries, milestone completions, research, architecture planning, and consultation hours are billable and non-refundable.",
          ],
        },
        {
          title: "Request Process",
          content: [
            "Refund requests must be sent in writing to contact@muhammadfiaz.com with invoice details and a clear reason.",
            "Requests are reviewed case-by-case and response timelines are shared through email communication.",
          ],
        },
        {
          title: "Chargeback and Disputes",
          content: [
            "Before initiating a payment dispute, clients are expected to contact support for direct resolution.",
            "Chargebacks for completed or partially delivered services may be contested with supporting delivery records.",
          ],
        },
      ]}
    />
  );
}
