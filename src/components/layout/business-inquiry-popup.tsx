"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog } from "@/components/retroui/Dialog";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Textarea } from "@/components/retroui/Textarea";
import { useContactSubmissionMutation } from "@/lib/client/portfolio-queries";

const inquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  businessInquiry: z.string().min(4, "Please describe your needs"),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export function BusinessInquiryPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const mutation = useContactSubmissionMutation();

  useEffect(() => {
    // Has it been shown before in this session?
    if (sessionStorage.getItem("business-inquiry-shown")) {
      return;
    }

    // Show randomly between 15 and 45 seconds
    const delay = Math.floor(Math.random() * 30000) + 15000;
    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("business-inquiry-shown", "true");
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessInquiry: "",
    },
  });

  const onSubmit = async (values: InquiryFormValues) => {
    try {
      await mutation.mutateAsync({
        name: values.name,
        email: values.email,
        phone: values.phone,
        businessInquiry: values.businessInquiry,
        country: "Unknown (Inquiry Popup)",
        projectDetails: values.businessInquiry,
      });
      setSubmitted(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Dialog.Content
        size="md"
        className="z-130 w-[calc(100%-1rem)] max-w-lg border-4 border-black bg-card p-0 shadow-retro-lg sm:w-full"
        overlay={{ className: "z-[129] bg-black/70" }}
      >
        <Dialog.Header
          className="border-b-4 border-black bg-primary px-4 py-3 text-primary-foreground sm:px-5"
        >
          <h2 className="font-display text-xl uppercase leading-tight">
            How can I help you?
          </h2>
        </Dialog.Header>

        <div className="p-4 sm:p-5">
          {submitted ? (
            <div className="border-4 border-black bg-secondary p-4 text-center">
              <p className="font-display text-xl uppercase text-secondary-foreground">
                Message Sent!
              </p>
              <p className="mt-2 font-medium">
                Thank you for your inquiry. I will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <p className="text-sm font-semibold leading-relaxed">
                Let's build something valuable together. Drop your details below and I'll get back to you shortly.
              </p>

              <div className="space-y-2">
                <label htmlFor="inq-name" className="text-xs font-black uppercase">
                  Full Name *
                </label>
                <Input
                  id="inq-name"
                  {...register("name")}
                  className="border-4 border-black bg-background py-2 shadow-retro"
                />
                {errors.name && (
                  <p className="text-xs font-bold text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="inq-email" className="text-xs font-black uppercase">
                  Email *
                </label>
                <Input
                  id="inq-email"
                  type="email"
                  {...register("email")}
                  className="border-4 border-black bg-background py-2 shadow-retro"
                />
                {errors.email && (
                  <p className="text-xs font-bold text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="inq-phone" className="text-xs font-black uppercase">
                  Phone (Optional)
                </label>
                <Input
                  id="inq-phone"
                  {...register("phone")}
                  className="border-4 border-black bg-background py-2 shadow-retro"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="inq-needs" className="text-xs font-black uppercase">
                  What are your needs? *
                </label>
                <Textarea
                  id="inq-needs"
                  {...register("businessInquiry")}
                  rows={3}
                  className="border-4 border-black bg-background py-2 shadow-retro"
                />
                {errors.businessInquiry && (
                  <p className="text-xs font-bold text-destructive">{errors.businessInquiry.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:justify-end">
                <Button
                  type="button"
                  variant="secondary"
                  className="w-full border-4 border-black uppercase shadow-retro-sm sm:w-auto"
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting || mutation.isPending}
                  className="w-full border-4 border-black uppercase shadow-retro-sm sm:w-auto"
                >
                  {mutation.isPending || isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </Dialog.Content>
    </Dialog>
  );
}
