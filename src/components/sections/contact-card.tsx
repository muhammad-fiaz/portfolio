"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/sections/contact-form';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function ContactCard() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* animated subtle background behind the card */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl"
        transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
        aria-hidden
      />

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">Contact Me</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">Tell me about your project or ask a question </p>
          </CardHeader>

          <CardContent>
            <div className="mb-6">
              <ContactForm />
            </div>

            <h3 className="mt-6 mb-3 text-lg sm:text-xl font-medium">FAQ</h3>
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger>How long will it take to hear a reply from you?</AccordionTrigger>
                <AccordionContent>It typically takes 1–3 days for me to respond. Thanks for your patience.</AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger>I have not heard back yet — what should I do?</AccordionTrigger>
                <AccordionContent>
                  I apologize if you have not received a reply. Your message may have been missed or I am currently busy — please try sending another email to notify me and I will prioritize it.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
