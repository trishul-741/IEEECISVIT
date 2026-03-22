"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Invalid email address";
    if (!formData.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-white border border-gray-100 p-10 text-center shadow-sm"
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
          <CheckCircle size={28} className="text-green-500" />
        </div>
        <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
          Message Sent!
        </h3>
        <p className="text-sm text-text-muted mb-6">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-hover"
        >
          Send Another
        </button>
      </motion.div>
    );
  }

  const inputClass = (field: string) =>
    `w-full rounded-xl border bg-gray-50/50 px-4 py-3.5 text-sm text-text-primary placeholder-text-muted transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white ${
      errors[field] ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:border-accent"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-text-primary mb-2">
          Full Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass("name")}
          placeholder="John Doe"
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-text-primary mb-2">
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass("email")}
          placeholder="john@example.com"
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-text-primary mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClass("message")} resize-none`}
          placeholder="Tell us how we can help..."
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/15 transition-all duration-300 hover:bg-accent-hover hover:shadow-accent/25 hover:scale-[1.01]"
      >
        <Send size={15} />
        Send Message
      </button>
    </form>
  );
}
