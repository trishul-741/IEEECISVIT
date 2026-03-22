"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryModalProps {
  isOpen: boolean;
  images: string[];
  eventTitle: string;
  onClose: () => void;
}

export default function GalleryModal({
  isOpen,
  images,
  eventTitle,
  onClose,
}: GalleryModalProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, next, prev]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery for ${eventTitle}`}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  {eventTitle}
                </h3>
                <p className="text-sm text-white/40 mt-1">
                  {current + 1} of {images.length} images
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full bg-white/5 p-3 text-white/60 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:text-white"
                aria-label="Close gallery"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-dark-card border border-dark-border">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, 
                      hsl(${220 + current * 40}, 50%, 18%) 0%, 
                      hsl(${250 + current * 30}, 60%, 8%) 100%)`,
                  }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm font-medium">
                Image {current + 1}
              </div>
            </div>

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-0 top-1/2 translate-y-4 -translate-x-5 rounded-full bg-white/5 p-3 text-white/60 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-0 top-1/2 translate-y-4 translate-x-5 rounded-full bg-white/5 p-3 text-white/60 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-accent"
                      : "w-3 bg-white/15 hover:bg-white/30"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
