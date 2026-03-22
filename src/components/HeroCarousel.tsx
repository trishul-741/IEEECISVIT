"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const slides = [
  {
    title: "Innovation Starts Here",
    subtitle: "Join a community of passionate technologists and build the future together",
  },
  {
    title: "Build. Learn. Grow.",
    subtitle: "Workshops, hackathons, and hands-on experiences that shape your career",
  },
  {
    title: "Shape the Future",
    subtitle: "Collaborate on projects that make a real difference in the world",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-dark" aria-label="Hero carousel">
      {/* Animated background */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 80% 50% at 50% 40%, 
                hsl(${220 + current * 15}, 60%, 12%) 0%, 
                #0B0B0F 100%)`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-transparent to-dark z-[1]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accent/5 blur-[100px] z-[1]"
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] z-[1]"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm mb-8"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                IEEECISVIT
              </motion.div>

              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight leading-[0.95]">
                {slides[current].title}
              </h1>
              <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                {slides[current].subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/register"
                  className="group rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-2xl shadow-accent/20 transition-all duration-300 hover:bg-accent-hover hover:shadow-accent/30 hover:scale-105"
                >
                  Join Community
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  href="/events"
                  className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/25"
                >
                  Explore Events
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/5 p-3 text-white/60 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-white/10 hover:text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/5 p-3 text-white/60 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-white/10 hover:text-white"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`h-1 rounded-full transition-all duration-500 ${i === current
                ? "w-10 bg-accent"
                : "w-4 bg-white/20 hover:bg-white/40"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium">
          Scroll
        </span>
        <ChevronDown size={16} className="text-white/30" />
      </motion.div>
    </section>
  );
}
