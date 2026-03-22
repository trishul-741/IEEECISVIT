"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  coverImage: string;
  isPast?: boolean;
  index?: number;
  onGalleryClick?: () => void;
}

export default function EventCard({
  title,
  date,
  time,
  venue,
  description,
  isPast = false,
  index = 0,
  onGalleryClick,
}: EventCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
    >
      {/* Cover image placeholder with zoom effect */}
      <div className="relative h-52 overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, 
              hsl(${220 + index * 25}, 55%, 25%) 0%, 
              hsl(${240 + index * 20}, 60%, 12%) 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div
          className={`absolute top-4 right-4 rounded-full px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md ${
            isPast
              ? "bg-gray-900/60 text-gray-300 border border-white/10"
              : "bg-accent/90 text-white shadow-lg shadow-accent/30"
          }`}
        >
          {isPast ? "Completed" : "Upcoming"}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-lg font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2.5 text-sm text-text-muted">
            <Calendar size={14} className="text-accent shrink-0" />
            {formattedDate}
          </div>
          <div className="flex items-center gap-2.5 text-sm text-text-muted">
            <Clock size={14} className="text-accent shrink-0" />
            {time}
          </div>
          <div className="flex items-center gap-2.5 text-sm text-text-muted">
            <MapPin size={14} className="text-accent shrink-0" />
            {venue}
          </div>
        </div>

        <p className="text-sm text-text-muted leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>

        {isPast ? (
          <button
            onClick={onGalleryClick}
            className="w-full rounded-xl border-2 border-accent/20 bg-accent/5 py-3 text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent/10 hover:border-accent/30"
          >
            View Gallery
          </button>
        ) : (
          <Link
            href="/register"
            className="block w-full rounded-xl bg-accent py-3 text-center text-sm font-semibold text-white shadow-lg shadow-accent/15 transition-all duration-300 hover:bg-accent-hover hover:shadow-accent/25 hover:scale-[1.02]"
          >
            Register Now
          </Link>
        )}
      </div>
    </motion.div>
  );
}
