import React from "react";
import Link from "next/link";
import { siteConfig, buildMetadata } from "@/config/site.config";
export const metadata = buildMetadata({
  title: `Refund Policy | ${siteConfig.siteName}`,
  description: 'Refund Policy — refunds, exceptions, and request process.',
});
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function RefundPolicy() {
  return (
  <main className="max-w-5xl mx-auto pt-20 sm:pt-24 pb-12 px-4">
      <div className="transition-all duration-300 ease-out">
      <Card>
        <CardHeader>
          <CardTitle>Refund Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-base lg:text-lg space-y-4">
          <p className="text-sm text-muted-foreground mb-4">Last updated: August 20, 2025.</p>

          <p className="mb-4">This Refund Policy applies to purchases and services made through muhammadfiaz.com and fiaz.dev (Fiaz Technologies) and to any related offerings or services provided by Muhammad Fiaz personally or by Fiaz Technologies. References to &quot;we&quot;, &quot;us&quot;, or &quot;our&quot; include both Muhammad Fiaz and Fiaz Technologies where applicable.</p>

          <p className="mb-2 text-sm font-medium">Minimal collection statement</p>
          <p className="mb-2 text-sm">We do not collect personal details about you unless it is necessary to provide a service you requested, required by law, or you voluntarily provide them.</p>

          <h3 id="toc" className="text-lg font-medium mt-6">Table of Contents</h3>
          <ul className="list-disc list-inside my-3 space-y-1 text-sm">
            <li><Link href="#summary" className="underline text-primary">Summary</Link></li>
            <li><Link href="#scope" className="underline text-primary">Scope</Link></li>
            <li><Link href="#no-refund" className="underline text-primary">No Refund Policy</Link></li>
            <li><Link href="#exceptions" className="underline text-primary">Exceptions</Link></li>
            <li><Link href="#requests" className="underline text-primary">How to Request a Refund</Link></li>
            <li><Link href="#payments" className="underline text-primary">Payment Processing & Fees</Link></li>
            <li><Link href="#disputes" className="underline text-primary">Dispute Resolution</Link></li>
            <li><Link href="#contact" className="underline text-primary">Contact</Link></li>
          </ul>

          <h4 id="summary" className="mt-4 font-semibold">Summary</h4>
          <p className="mb-2 text-sm">We generally do not provide refunds for payments made on the Sites. Purchasing a service constitutes acceptance that the sale is final, unless an exception applies or otherwise required by applicable law. This no-refund approach is appropriate for bespoke services, deposits, and project-based work where work commences upon payment.</p>

          <h4 id="scope" className="mt-4 font-semibold">Scope</h4>
          <p className="mb-2 text-sm">This Policy covers paid services, deposits, and fees charged for project work, consulting, and digital goods sold directly by Fiaz Technologies via muhammadfiaz.com and fiaz.dev.</p>

          <h4 id="no-refund" className="mt-4 font-semibold">No Refund Policy</h4>
          <p className="mb-2 text-sm">Except as set out below, all payments are non-refundable. By purchasing services you acknowledge and agree that payments are final.</p>

          <h4 id="exceptions" className="mt-4 font-semibold">Exceptions</h4>
          <p className="mb-2 text-sm">Exceptions are rare but may include:
            <ul className="list-disc list-inside ml-5 mt-2">
              <li>Duplicate charges or clear billing errors confirmed with our
                payment processor.</li>
              <li>Where required by applicable law or consumer protection
                regulations in your jurisdiction.</li>
              <li>Material breach of an express written agreement by us.</li>
            </ul>
          </p>

          <h4 id="requests" className="mt-4 font-semibold">How to Request a Refund</h4>
          <p className="mb-2 text-sm">To request a refund, please do the following:
            <ol className="list-decimal list-inside ml-5 mt-2">
              <li>Identify where you purchased the service (muhammadfiaz.com or
                fiaz.dev) and include an invoice/order number or proof of
                payment.</li>
              <li>Email <a className="underline text-primary" href="mailto:refund@muhammadfiaz.com">refund@muhammadfiaz.com</a> (for purchases on
                muhammadfiaz.com) or <a className="underline text-primary" href="mailto:refund@fiaz.dev">refund@fiaz.dev</a> (for purchases on
                fiaz.dev) with your request and supporting documentation.
              </li>
              <li>We will acknowledge receipt within 7 business days and may
                request additional information to verify the claim.
              </li>
              <li>If approved, refunds will be processed using the original
                payment method where possible. The timing to receive a refund
                may vary depending on your bank or payment provider.
              </li>
            </ol>
          </p>

          <h4 id="payments" className="mt-4 font-semibold">Payment Processing & Fees</h4>
          <p className="mb-2 text-sm">Payments processed through third-party gateways are subject to their terms. We are not responsible for processing fees charged by payment providers and may not be able to recover fees when issuing refunds.</p>

          <h4 id="disputes" className="mt-4 font-semibold">Dispute Resolution</h4>
          <p className="mb-2 text-sm">If a payment dispute arises, parties should contact us at the addresses below to attempt an amicable resolution. Governing law is the laws of India; for international customers, local consumer protection laws may also apply.</p>

          <h4 id="contact" className="mt-4 font-semibold">Contact</h4>
          <p className="mb-2 text-sm">For refund requests or questions: <a className="underline text-primary" href="mailto:refund@muhammadfiaz.com">refund@muhammadfiaz.com</a> (for purchases made via muhammadfiaz.com), <a className="underline text-primary" href="mailto:s.muhammadfiaz2003@gmail.com">s.muhammadfiaz2003@gmail.com</a> (personal), or <a className="underline text-primary" href="mailto:refund@fiaz.dev">refund@fiaz.dev</a> (for purchases made via fiaz.dev). General inquiries: <a className="underline text-primary" href="mailto:contact@muhammadfiaz.com">contact@muhammadfiaz.com</a> or <a className="underline text-primary" href="mailto:contactus@fiaz.dev">contactus@fiaz.dev</a>.</p>

          <p className="mt-6 text-sm">This Refund Policy may be updated occasionally. The &quot;Last updated&quot; date at the top of this page indicates the most recent revision; please check this page periodically.</p>
          </div>
        </CardContent>
  </Card>
  </div>
    </main>
  );
}
