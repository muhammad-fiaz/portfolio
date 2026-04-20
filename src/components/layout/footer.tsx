"use client";

import { animate } from "animejs";
import { Github, Link2, Linkedin, Twitter } from "@/components/retroui/icons";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  CURRENT_PORTFOLIO_VERSION,
  PORTFOLIO_REPO_URL,
} from "@/lib/portfolio-version";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const root = footerRef.current;
    if (!root) {
      return;
    }

    const socialTargets = root.querySelectorAll("[data-footer-social]");
    const policyTargets = root.querySelectorAll("[data-footer-policy]");
    const versionTargets = root.querySelectorAll("[data-footer-version]");

    animate(socialTargets, {
      opacity: [0, 1],
      translateY: [10, 0],
      delay: (_, index) => index * 45,
      duration: 280,
      ease: "outQuad",
    });

    animate(policyTargets, {
      opacity: [0, 1],
      translateY: [10, 0],
      delay: (_, index) => 120 + index * 35,
      duration: 280,
      ease: "outQuad",
    });

    animate(versionTargets, {
      opacity: [0, 1],
      translateY: [10, 0],
      delay: 220,
      duration: 280,
      ease: "outQuad",
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="mt-20 border-t-4 border-black bg-secondary"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 text-secondary-foreground lg:flex-row lg:items-start lg:justify-between">
        <div className="flex w-full flex-col items-center gap-3 text-center lg:w-auto lg:items-start lg:text-left">
          <div data-footer-version>
            <Link
              href={`${PORTFOLIO_REPO_URL}/releases/latest`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center border-4 border-black bg-primary px-3 py-1.5 text-xs font-black uppercase text-primary-foreground shadow-retro-sm transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Portfolio v{CURRENT_PORTFOLIO_VERSION}
            </Link>
          </div>

          <p
            className="inline-flex border-4 border-black bg-[#111827] px-3 py-2 text-xs font-black uppercase text-white shadow-retro-sm sm:text-sm"
            data-footer-policy
          >
            Copyright {currentYear} Muhammad Fiaz
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-3 lg:w-auto lg:items-end">
          <div className="grid grid-cols-4 gap-2">
            <Link
              href="https://github.com/muhammad-fiaz"
              className="retro-social-icon"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              data-footer-social
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://x.com/muhammadfiaz_"
              className="retro-social-icon"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Twitter"
              data-footer-social
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-fiaz-"
              className="retro-social-icon"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              data-footer-social
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="https://links.muhammadfiaz.com"
              className="retro-social-icon"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Link Hub"
              data-footer-social
            >
              <Link2 className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-end">
            <Link href="/robots.txt" className="retro-link" data-footer-policy>
              Robots
            </Link>
            <Link href="/sitemap.xml" className="retro-link" data-footer-policy>
              Sitemap
            </Link>
            <Link
              href="/privacy-policy"
              className="retro-link"
              data-footer-policy
            >
              Privacy
            </Link>
            <Link
              href="/refund-policy"
              className="retro-link"
              data-footer-policy
            >
              Refund
            </Link>
            <Link
              href="/terms-of-service"
              className="retro-link"
              data-footer-policy
            >
              Terms
            </Link>
            <Link
              href="/delivery-policy"
              className="retro-link"
              data-footer-policy
            >
              Delivery
            </Link>
            <Link
              href="/cookies-policy"
              className="retro-link"
              data-footer-policy
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
