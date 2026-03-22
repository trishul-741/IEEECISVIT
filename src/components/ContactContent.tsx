"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "ieee.cis@vit.edu", href: "mailto:ieee.cis@vit.edu" },
  { icon: Phone, label: "Phone", value: "+91 96076 84669", href: "tel:+91 96076 84669" },
  { icon: MapPin, label: "Location", value: "Building No. 4, Bibwewadi Campus, VIT Pune" },
  { icon: Clock, label: "Office Hours", value: "Mon – Fri, 9:00 AM – 5:00 PM" },
];

export default function ContactContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-36 pb-24 sm:pt-44 sm:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(30,64,175,0.12),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary-light mb-4">
              Contact
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
              Have a question, suggestion, or want to collaborate?
              We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-5">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl bg-white border border-gray-100 p-5 shadow-sm transition-all duration-500 hover:shadow-md hover:border-accent/15"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/5 text-accent">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.15em]">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="block text-sm text-text-primary mt-0.5 hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-text-primary mt-0.5">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-gray-100 h-64 shadow-sm"
              >
                <iframe
                  title="Google Map location"
                  src="https://maps.google.com/maps?q=FV79%2B94V%2C%20Pune%2C%20Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 rounded-2xl bg-white border border-gray-100 p-7 sm:p-10 shadow-sm"
            >
              <h2 className="font-heading text-xl font-bold text-text-primary mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
