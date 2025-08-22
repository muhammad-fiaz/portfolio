import React from "react";
import Link from "next/link";
import { siteConfig, buildMetadata } from "@/config/site.config";
export const metadata = buildMetadata({
  title: `Terms of Service | ${siteConfig.siteName}`,
  description: 'Terms of Service — legal terms, payments, and dispute resolution.',
});
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <main className="max-w-5xl mx-auto pt-20 sm:pt-24 pb-12 px-4">
      <div className="transition-all duration-300 ease-out">
      <Card>
        <CardHeader>
          <CardTitle>Terms of Service</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-base lg:text-lg space-y-4">
          <p className="text-sm text-muted-foreground mb-4">Last updated: August 20, 2025.</p>

          <p className="mb-4">These Terms of Service (&quot;Terms&quot;) govern your access to and use of muhammadfiaz.com and fiaz.dev (the &quot;Sites&quot;), owned and operated by Fiaz Technologies (&quot;we&quot;, &quot;us&quot;). By accessing or using the Sites or purchasing services you agree to be bound by these Terms and any separate agreement you enter into with us.</p>
          <p className="mb-4 text-sm">These Terms also apply to any other websites, domains, applications, services, products, or digital properties owned, operated, or offered by Muhammad Fiaz (personally) or Fiaz Technologies. References to &quot;we&quot;, &quot;us&quot;, or &quot;our&quot; include both Muhammad Fiaz and Fiaz Technologies where applicable.</p>

          <p className="mb-2 text-sm font-medium">Minimal collection statement</p>
          <p className="mb-2 text-sm">We do not collect personal details about you unless it is necessary to provide a service you requested, required by law, or you voluntarily provide them.</p>

          <h3 id="toc" className="text-lg font-medium mt-6">Table of Contents</h3>
          <ul className="list-disc list-inside my-3 space-y-1 text-sm">
            <li><Link href="#acceptance" className="underline text-primary">Acceptance of Terms</Link></li>
            <li><Link href="#services" className="underline text-primary">Services & Offers</Link></li>
            <li><Link href="#payments" className="underline text-primary">Payments</Link></li>
            <li><Link href="#refunds" className="underline text-primary">Refunds</Link></li>
            <li><Link href="#user-content" className="underline text-primary">User Content</Link></li>
            <li><Link href="#limitation" className="underline text-primary">Limitation of Liability</Link></li>
            <li><Link href="#termination" className="underline text-primary">Termination</Link></li>
            <li><Link href="#governing" className="underline text-primary">Governing Law & Dispute Resolution</Link></li>
            <li><Link href="#changes" className="underline text-primary">Changes to Terms</Link></li>
            <li><Link href="#contact" className="underline text-primary">Contact</Link></li>
          </ul>

          <h4 id="acceptance" className="mt-4 font-semibold">Acceptance of Terms</h4>
          <p className="mb-2 text-sm">By accessing the Sites you agree to these Terms. If you do not agree, do not use the Sites.</p>

          <h4 id="services" className="mt-4 font-semibold">Services & Offers</h4>
          <p className="mb-2 text-sm">We may provide consulting, project work, or other services. Specific scopes, deliverables, timelines, and prices are governed by separate agreements or quotes.</p>

          <h4 id="payments" className="mt-4 font-semibold">Payments</h4>
          <p className="mb-2 text-sm">Payments for services are due as stated in the applicable invoice or quote. We accept payment via the methods specified at the time of purchase (e.g., bank transfer, card payments through third-party gateways). You agree to provide accurate billing information and to promptly notify us of any billing disputes.</p>

          <h4 id="refunds" className="mt-4 font-semibold">Refunds</h4>
          <p className="mb-2 text-sm">As stated in our <a className="underline text-primary" href="/refund-policy">Refund Policy</a>, we generally do not offer refunds. If you believe you are entitled to a refund due to a billing error, duplicate charge, or as required by law, follow the procedure in the Refund Policy. Refund requests can be emailed to <a className="underline text-primary" href="mailto:refund@muhammadfiaz.com">refund@muhammadfiaz.com</a> (personal) or <a className="underline text-primary" href="mailto:refund@fiaz.dev">refund@fiaz.dev</a> (Fiaz Technologies), depending on where the purchase was made.</p>

          <h4 id="user-content" className="mt-4 font-semibold">User Content</h4>
          <p className="mb-2 text-sm">You are responsible for any content you submit. You grant us a non-exclusive license to use such content for the purposes of providing the services and promoting our work, subject to privacy commitments.</p>

          <h4 id="limitation" className="mt-4 font-semibold">Limitation of Liability</h4>
          <p className="mb-2 text-sm">To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from your use of the Sites or services. Our total liability for direct damages is limited to the fees paid for the relevant services.</p>

          <h4 id="termination" className="mt-4 font-semibold">Termination</h4>
          <p className="mb-2 text-sm">We may suspend or terminate access to the Sites for breach of these Terms or for any lawful reason with notice where required by law.</p>

          <h4 id="governing" className="mt-4 font-semibold">Governing Law & Dispute Resolution</h4>
          <p className="mb-2 text-sm">These Terms are governed by the laws of India. For users outside India, you agree that Indian law will govern disputes arising out of these Terms unless local mandatory consumer protection laws provide otherwise. Parties agree to attempt to resolve disputes through good-faith negotiation before initiating litigation; exclusive jurisdiction may be specified in separate service agreements.</p>

          <h4 id="changes" className="mt-4 font-semibold">Changes to Terms</h4>
          <p className="mb-2 text-sm">We may modify these Terms; material changes will be posted and effective as stated. Continued use of the Sites after changes constitutes acceptance.</p>

          <h4 id="contact" className="mt-4 font-semibold">Contact</h4>
          <p className="mb-2 text-sm">For questions about these Terms or to serve legal notices: <a className="underline text-primary" href="mailto:contact@muhammadfiaz.com">contact@muhammadfiaz.com</a> (personal), <a className="underline text-primary" href="mailto:s.muhammadfiaz2003@gmail.com">s.muhammadfiaz2003@gmail.com</a> (personal), or <a className="underline text-primary" href="mailto:contactus@fiaz.dev">contactus@fiaz.dev</a> (Fiaz Technologies). For legal notices: <a className="underline text-primary" href="mailto:legal@fiaz.dev">legal@fiaz.dev</a>. For refund enquiries: <a className="underline text-primary" href="mailto:refund@muhammadfiaz.com">refund@muhammadfiaz.com</a> or <a className="underline text-primary" href="mailto:refund@fiaz.dev">refund@fiaz.dev</a> depending on where you purchased the service.</p>

          <p className="mt-6 text-sm">These Terms may change from time to time. We will post updates here and the &quot;Last updated&quot; date reflects the most recent revision; please check this page periodically.</p>
          </div>
        </CardContent>
  </Card>
  </div>
    </main>
  );
}
