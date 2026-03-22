"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import CISLogo from "./CISLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <CISLogo variant={scrolled ? "dark" : "light"} size="md" compact />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                    scrolled
                      ? isActive
                        ? "text-accent"
                        : "text-gray-600 hover:text-accent"
                      : isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  {/* Underline animation */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                      isActive ? "w-5" : "w-0 group-hover:w-5"
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              href="/register"
              className="ml-4 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:bg-accent-hover hover:shadow-accent/30 hover:scale-105"
            >
              Register
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              scrolled
                ? "text-text-primary hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                        isActive
                          ? "bg-accent/5 text-accent"
                          : "text-gray-600 hover:bg-gray-50 hover:text-text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  href="/register"
                  className="block mt-2 rounded-xl bg-accent px-4 py-3 text-center text-[15px] font-semibold text-white shadow-md"
                >
                  Register
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
