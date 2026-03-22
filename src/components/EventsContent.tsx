"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import EventCard from "@/components/EventCard";
import GalleryModal from "@/components/GalleryModal";
import eventsData from "@/data/events.json";

type EventType = (typeof eventsData)[number];

export default function EventsContent() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const [galleryEvent, setGalleryEvent] = useState<EventType | null>(null);

  const now = new Date();

  const categorizedEvents = useMemo(() => {
    return eventsData.map((event) => ({
      ...event,
      isPast: new Date(event.date) < now,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    if (filter === "upcoming") return categorizedEvents.filter((e) => !e.isPast);
    if (filter === "past") return categorizedEvents.filter((e) => e.isPast);
    return categorizedEvents;
  }, [filter, categorizedEvents]);

  const tabs = [
    { key: "all" as const, label: "All Events" },
    { key: "upcoming" as const, label: "Upcoming" },
    { key: "past" as const, label: "Past Events" },
  ];

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
              Events
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Our Events
            </h1>
            <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
              From hackathons and workshops to seminars and project showcases—
              explore all the exciting events that define our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Cards */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex justify-center mb-14">
            <div className="inline-flex rounded-full bg-white border border-gray-200 p-1 shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                    filter === tab.key
                      ? "text-white"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {filter === tab.key && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 rounded-full bg-accent shadow-lg shadow-accent/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((event, i) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  venue={event.venue}
                  description={event.description}
                  coverImage={event.coverImage}
                  isPast={event.isPast}
                  index={i}
                  onGalleryClick={() => setGalleryEvent(event)}
                />
              ))}
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-text-muted text-lg">No events found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      <GalleryModal
        isOpen={!!galleryEvent}
        images={galleryEvent?.gallery ?? []}
        eventTitle={galleryEvent?.title ?? ""}
        onClose={() => setGalleryEvent(null)}
      />
    </>
  );
}
