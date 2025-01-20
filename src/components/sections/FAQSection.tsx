'use client';
import { Accordion, AccordionItem } from '@nextui-org/react';
import React from 'react';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';

import { faqData } from '@/src/configs/faq';
import Script from 'next/script';

export default function FAQSection() {
  // FAQ schema markup in JSON-LD format for SEO
  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.content.props.children[0] // Extract the main answer text
      }
    }))
  };

  return (
    <>
      <Script
        id="faq-schema" // Make sure the ID is unique for this script
        type="application/ld+json"
      >
        {JSON.stringify(faqPageSchema)}
      </Script>

      <AnimationContainer customClassName="w-full">
        {/* FAQ Section Header */}
        <SectionHeader
          title="Frequently Asked Questions"
          content="Here are some common questions I receive. If you have any more questions, feel free to reach out!"
        />

        <Accordion variant="splitted">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              aria-label={`Accordion ${index + 1}`}
              title={
                <span className="text-black dark:text-white text-sm">
                  {faq.title}
                </span>
              }
            >
              <div className="text-black dark:text-white text-sm">
                {faq.content}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimationContainer>
    </>
  );
}
