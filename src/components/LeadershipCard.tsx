"use client";

import { motion } from "framer-motion";
import { User, Linkedin } from "lucide-react";

interface LeadershipCardProps {
  name: string;
  position: string;
  description: string;
  photo: string;
  linkedin?: string;
  index?: number;
}

export default function LeadershipCard({
  name,
  position,
  description,
  linkedin,
  index = 0,
}: LeadershipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
    >
      {/* Card top gradient */}
      <div className="h-28 bg-gradient-to-br from-accent via-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMCBMNjAgNjAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2cpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />
      </div>

      {/* Avatar */}
      <div className="flex justify-center -mt-12">
        <div className="relative">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent to-secondary ring-4 ring-white shadow-lg transition-transform duration-500 group-hover:scale-110">
            <User size={36} className="text-white" />
          </div>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 text-accent transition-all duration-300 hover:bg-accent hover:text-white hover:scale-110"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-4 pb-6 text-center">
        <h3 className="font-heading text-lg font-bold text-text-primary mb-1">
          {name}
        </h3>
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3">
          {position}
        </span>
        <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
