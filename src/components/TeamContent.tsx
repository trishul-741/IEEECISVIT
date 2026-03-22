"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import TeamCard from "@/components/TeamCard";
import teamData from "@/data/team.json";
import { SITE_CONFIG } from "@/constants/config";

const allMembers = [...teamData.leadership, ...teamData.team];

const categories = [
  { key: "faculty", label: "Faculty Coordinators", description: "Guiding our club with their academic expertise and mentorship." },
  { key: "core", label: "Core Team", description: `The backbone of ${SITE_CONFIG.name}, managing operations and strategy.` },
  { key: "technical", label: "Technical Team", description: "Building, deploying, and innovating with cutting-edge tech." },
  { key: "design", label: "Design Team", description: `Crafting the visual identity and experience of ${SITE_CONFIG.name}.` },
];

export default function TeamContent() {
  const grouped = useMemo(() => {
    const map: Record<string, typeof allMembers> = {};
    for (const cat of categories) {
      map[cat.key] = allMembers.filter((m) => m.category === cat.key);
    }
    return map;
  }, []);

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
              Our Team
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              The People Behind {SITE_CONFIG.name}
            </h1>
            <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals who drive our club forward with passion,
              expertise, and an unwavering commitment to technical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, catIndex) => {
        const members = grouped[cat.key];
        if (!members || members.length === 0) return null;
        const isDark = catIndex % 2 === 0;

        return (
          <section
            key={cat.key}
            className={`py-20 sm:py-28 ${isDark ? "bg-dark" : "bg-surface"}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionTitle
                title={cat.label}
                subtitle={cat.label}
                description={cat.description}
                light={!isDark}
              />
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {members.map((member, i) => (
                  <TeamCard
                    key={member.id}
                    name={member.name}
                    position={member.position}
                    photo={member.photo}
                    linkedin={member.linkedin}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
