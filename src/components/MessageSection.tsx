"use client";

import { motion } from "framer-motion";

export default function MessageSection() {
  return (
    <section className="bg-dark py-24 sm:py-32" aria-labelledby="message-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl bg-white p-10 sm:p-14 text-center shadow-2xl shadow-black/5"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-accent to-secondary" />
          </div>

          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Our Vision
          </span>

          <h2
            id="message-heading"
            className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-8 tracking-tight"
          >
            Empowering Tomorrow&apos;s Innovators
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-[1.8] mb-6">
            To become the leading platform for students and faculties dedicated to expanding and sharing knowledge in the field of Computational Intelligence, united in solving global challenges and shaping a brighter, more sustainable future.
          </p>

          <p className="text-base sm:text-lg text-gray-600 leading-[1.8]">
            Our mission is to foster an environment where students can explore
            cutting-edge technologies, develop practical skills, and build
            lasting connections that transcend the boundaries of any single
            discipline.
          </p>

          {/* Decorative elements */}
          <div className="mt-10 flex items-center justify-center gap-1.5">
            <div className="h-1 w-10 rounded-full bg-accent" />
            <div className="h-1 w-3 rounded-full bg-accent/30" />
            <div className="h-1 w-1.5 rounded-full bg-accent/15" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
