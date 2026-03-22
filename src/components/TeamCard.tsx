"use client";

import { motion } from "framer-motion";
import { User, Linkedin } from "lucide-react";

interface TeamCardProps {
  name: string;
  position: string;
  description?: string;
  photo: string;
  linkedin?: string;
  index?: number;
}

export default function TeamCard({
  name,
  position,
  linkedin,
  index = 0,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl bg-dark-card border border-dark-border p-6 text-center transition-all duration-500 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5"
    >
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5" />
      <div className="absolute inset-[1px] rounded-2xl bg-dark-card" />

      <div className="relative z-10">
        {/* Avatar */}
        <div className="mb-4 flex justify-center">
          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent to-secondary shadow-lg transition-transform duration-500 group-hover:scale-110">
              <User size={32} className="text-white" />
            </div>
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-dark-card border border-dark-border text-secondary-light transition-all duration-300 hover:bg-secondary hover:text-white hover:scale-110"
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin size={12} />
              </a>
            )}
          </div>
        </div>

        <h3 className="font-heading text-sm font-bold text-white mb-0.5">
          {name}
        </h3>
        <span className="text-xs text-text-muted">{position}</span>
      </div>
    </motion.div>
  );
}
