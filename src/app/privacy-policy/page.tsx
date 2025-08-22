import React from "react";
import Link from "next/link";
import { siteConfig, buildMetadata } from "@/config/site.config";
export const metadata = buildMetadata({
  title: `Privacy Policy | ${siteConfig.siteName}`,
  description: 'Privacy Policy — how we collect, use and protect data.',
});
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-5xl mx-auto pt-20 sm:pt-24 pb-12 px-4">
      <div className="transition-all duration-300 ease-out">
      <Card>
        <CardHeader>
          <CardTitle>Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-base lg:text-lg space-y-4">
          <p className="text-sm text-muted-foreground mb-4">Last updated: August 20, 2025.</p>

          <p className="mb-4">
            This Privacy Policy describes how muhammadfiaz.com and fiaz.dev
            (collectively &#39;we&#39;, &#39;us&#39;, or &#39;Fiaz Technologies&#39;) collect,
            use, disclose, and protect personal information when you visit or
            use our portfolio and related services. By accessing or using our
            Sites, you acknowledge that you have read and understood this
            Policy and consent to the collection and use of your information as
            described herein.
          </p>
          <p className="mb-4 text-sm">
            This Policy also applies to muhammadfiaz.com, fiaz.dev and any
            other websites, domains, applications, services, products, or
            digital properties owned, operated, or offered by Muhammad Fiaz
            (personally) or Fiaz Technologies. For clarity, references to
            &quot;we&quot;, &quot;us&quot; or &quot;our&quot; in this Policy include both
            Muhammad Fiaz and Fiaz Technologies where applicable.
          </p>

          <p className="mb-2 text-sm font-medium">Minimal collection statement</p>
          <p className="mb-2 text-sm">We do not collect personal details about you unless it is necessary to provide a service you requested, required by law, or you voluntarily provide them (for example via a contact form, job application, or purchase). We aim to collect the minimum information needed to fulfil the requested purpose and to retain it only as long as necessary.</p>


          <h3 id="toc" className="text-lg font-medium mt-6">Table of Contents</h3>
          <ul className="list-disc list-inside my-3 space-y-1 text-sm">
            <li><Link href="#collection" className="underline text-primary">Information We Collect</Link></li>
            <li><Link href="#use" className="underline text-primary">How We Use Information</Link></li>
            <li><Link href="#sharing" className="underline text-primary">Sharing & Third Parties</Link></li>
            <li><Link href="#cookies" className="underline text-primary">Cookies & Tracking</Link></li>
            <li><Link href="#security" className="underline text-primary">Security</Link></li>
            <li><Link href="#rights" className="underline text-primary">Your Rights</Link></li>
            <li><Link href="#international" className="underline text-primary">International Users & Transfers</Link></li>
            <li><Link href="#contact" className="underline text-primary">Contact</Link></li>
          </ul>

          <h4 id="collection" className="mt-4 font-semibold">Information We Collect</h4>
          <p className="mb-2 text-sm">We collect information that you provide directly (for example, when you send messages via contact forms, submit an application, or request services). This may include your name, email, phone number, resume, project details, and billing information when purchasing services. We also automatically collect usage information and technical data (such as IP address, browser type, device identifiers, and pages visited) using server logs and analytics tools. Aggregated or anonymized data may be derived from personal information and used for analytics and site improvement.</p>

          <h4 id="use" className="mt-4 font-semibold">How We Use Information</h4>
          <p className="mb-2 text-sm">We use collected information to:
            <ul className="list-disc list-inside ml-5 mt-2">
              <li>Provide and maintain our Sites and services.</li>
              <li>Respond to inquiries, proposals, and service requests.</li>
              <li>Process payments and manage billing.</li>
              <li>Send transactional communications, confirmations, and
                administrative messages.
              </li>
              <li>Analyze usage to improve performance, design, and content.</li>
              <li>Comply with legal obligations and protect our rights.</li>
            </ul>
          </p>

          <h4 id="sharing" className="mt-4 font-semibold">Sharing & Third Parties</h4>
          <p className="mb-2 text-sm">We may share your information with trusted third-party service providers who perform services on our behalf (hosting, analytics, payment processors, email delivery). These providers are contractually obligated to protect your data and use it only to provide the agreed services. We may also disclose information when required by law, to respond to legal process, enforce our terms, or protect the rights, property, or safety of our users or others. In the event of a merger, acquisition, or sale of assets, personal data may be transferred as part of that transaction.</p>

          <h4 id="cookies" className="mt-4 font-semibold">Cookies & Tracking</h4>
          <p className="mb-2 text-sm">We use cookies and similar tracking technologies to enable core site functionality, remember user preferences, and provide analytics about site usage. You can control or delete cookies through your browser settings. Third-party analytics providers (e.g., Google Analytics) may also drop cookies; consult their privacy policies for details and opt-out options where available.</p>

          <h4 id="security" className="mt-4 font-semibold">Security</h4>
          <p className="mb-2 text-sm">We use industry-standard security measures (encryption in transit via HTTPS, access controls, and secure hosting) to protect personal data. We regularly review our security practices but cannot guarantee that unauthorized access, hacking, or data loss will never occur. Report suspected breaches to contact@muhammadfiaz.com immediately.</p>

          <h4 id="rights" className="mt-4 font-semibold">Your Rights</h4>
          <p className="mb-2 text-sm">You may have rights under applicable data protection laws including to access, correct, update, or delete your personal data. Subject to verification and applicable exceptions, you may also have rights to restrict or object to processing and to request portability of your data. To exercise your rights, send a request to contact@muhammadfiaz.com. We may ask for information to verify your identity before fulfilling requests.</p>

          <h4 id="international" className="mt-4 font-semibold">International Users & Transfers</h4>
          <p className="mb-2 text-sm">Our Sites are accessible globally and personal data may be transferred to, stored, and processed in India or other countries. We will take steps (such as standard contractual clauses or other appropriate safeguards) when required by law to protect your personal data during cross-border transfers.</p>

          <h4 id="contact" className="mt-4 font-semibold">Contact</h4>
          <p className="mb-2 text-sm">For privacy requests or questions, contact: <a className="underline text-primary" href="mailto:contact@muhammadfiaz.com">contact@muhammadfiaz.com</a> (personal), <a className="underline text-primary" href="mailto:s.muhammadfiaz2003@gmail.com">s.muhammadfiaz2003@gmail.com</a> (personal), or <a className="underline text-primary" href="mailto:contactus@fiaz.dev">contactus@fiaz.dev</a> (Fiaz Technologies). For legal requests, contact <a className="underline text-primary" href="mailto:legal@fiaz.dev">legal@fiaz.dev</a>. For privacy-related disputes, please include sufficient information to identify your request and allow us to respond promptly.</p>

          <p className="mt-6 text-sm">We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top indicates the most recent revision; please review this page periodically to stay informed about any changes.</p>
          </div>
        </CardContent>
  </Card>
  </div>
    </main>
  );
}

