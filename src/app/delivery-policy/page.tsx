import type { Metadata } from "next";
import { PolicyPageClient } from "@/components/policies/policy-page-client";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Delivery Policy",
  description: "Delivery standards and channels for services by Muhammad Fiaz.",
  alternates: { canonical: "/delivery-policy" },
  openGraph: {
    title: "Delivery Policy | Muhammad Fiaz",
    description: "How services and deliverables are provided and handed over.",
    url: `${siteUrl}/delivery-policy`,
    type: "website",
    images: ["/android-chrome-512x512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delivery Policy | Muhammad Fiaz",
    description: "How services and deliverables are provided and handed over.",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function DeliveryPolicyPage() {
  return (
    <PolicyPageClient
      pageTitle="Delivery Policy"
      intro="This Delivery Policy describes how services and project deliverables are provided by Muhammad Fiaz through remote-first workflows."
      sections={[
        {
          title: "Delivery Mode",
          content: [
            "All services are primarily delivered online unless a different arrangement is explicitly agreed in writing.",
            "Delivery channels may include email, GitHub repositories, cloud links, project boards, documentation portals, or any collaboration method agreed with the client.",
          ],
        },
        {
          title: "Timeline and Scheduling",
          content: [
            "Estimated timelines depend on project scope, technical complexity, and client response speed.",
            "For many focused tasks, response or delivery begins within 1-3 days, but timeline updates may apply during high-volume periods or scope changes.",
          ],
        },
        {
          title: "Handover Standards",
          content: [
            "Deliverables may include source code, deployment notes, credentials transfer guidance, and support instructions as defined in project scope.",
            "Handover is considered complete once agreed assets are delivered through approved channels.",
          ],
        },
        {
          title: "Client Dependencies",
          content: [
            "Timely access to accounts, APIs, and infrastructure is required for smooth delivery.",
            "Delays caused by missing access, late approvals, or third-party outages may shift completion schedules.",
          ],
        },
      ]}
    />
  );
}
