"use client";

import { motion } from "framer-motion";
import RegisterForm from "@/components/RegisterForm";
import { Shield, Zap, Users } from "lucide-react";
import { SITE_CONFIG } from "@/constants/config";

const perks = [
  { icon: Zap, title: "Exclusive Events", description: "Priority access to hackathons, workshops, and tech talks." },
  { icon: Users, title: "Community", description: "Connect with 500+ like-minded students and mentors." },
  { icon: Shield, title: "Certification", description: "Earn recognized certificates for participation." },
];

export default function RegisterContent() {
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
              Register
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Join {SITE_CONFIG.name}
            </h1>
            <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
              Become a part of our growing community and unlock access to
              exclusive events, resources, and opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-surface py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 rounded-xl bg-white border border-gray-100 p-4 shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/5 text-accent">
                  <perk.icon size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{perk.title}</h3>
                  <p className="text-xs text-text-muted mt-0.5">{perk.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-surface pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white border border-gray-100 p-7 sm:p-10 shadow-xl shadow-accent/5"
          >
            <h2 className="font-heading text-xl font-bold text-text-primary mb-6 text-center">
              Registration Form
            </h2>
            <RegisterForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
