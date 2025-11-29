"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { DATA } from "@/data/Resume";
import { SendHorizontal, Loader } from "@/icons/Icons";
import emailjs from "@emailjs/browser";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message: string }>({
    success: false,
    message: "",
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ success: false, message: "" });

    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      setStatus({ success: false, message: "EmailJS configuration missing." });
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus({ success: true, message: "Message sent successfully!" });
          formRef.current?.reset();
        },
        () => {
          setStatus({
            success: false,
            message: "Failed to send message. Please try again.",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="pt-8 mt-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <SectionHeading>Let's Connect</SectionHeading>
        </div>
        <p className="text-neutral-400 text-base md:text-lg">
          Want to chat? Send me a message on my{" "}
          <Link
            href={DATA.contact.social.X.url}
            target="_blank"
            className="text-rose-400 hover:text-rose-300 transition-colors underline"
          >
            Twitter
          </Link>
          . I&apos;ll get back to you soon!
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 bg-transparent border border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:border-rose-400/50 focus:outline-none transition-colors"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 bg-transparent border border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:border-rose-400/50 focus:outline-none transition-colors"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your message"
          rows={6}
          required
          className="w-full px-4 py-3 bg-transparent border border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:border-rose-400/50 focus:outline-none transition-colors resize-none"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-200 text-neutral-950 font-medium hover:bg-neutral-300 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <Loader />
          ) : (
            <>
              Send Message
              <SendHorizontal />
            </>
          )}
        </button>
        {status.message && (
          <p
            className={`text-center text-sm ${
              status.success ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
