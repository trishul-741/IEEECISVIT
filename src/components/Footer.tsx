import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import CISLogo from "./CISLogo";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
  { name: "Register", href: "/register" },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <CISLogo variant="light" size="md" />
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Fostering innovation and technical excellence through
              community-driven learning, workshops, and collaborative projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-text-muted hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-0.5 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <Mail size={14} className="text-accent shrink-0" />
                ieee.cis@vit.edu
              </li>
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <Phone size={14} className="text-accent shrink-0" />
                +91 96076 84669
              </li>
              <li className="flex items-start gap-3 text-sm text-text-muted">
                <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                Building No. 4, Bibwewadi Campus, VIT Pune
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-5">
              Join Us
            </h3>
            <p className="text-sm text-text-muted mb-5 leading-relaxed">
              Become part of our community and unlock your potential.
            </p>
            <Link
              href="/register"
              className="inline-flex rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/15 transition-all duration-300 hover:bg-accent-hover hover:shadow-accent/25"
            >
              Register Now
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} IEEE CIS VIT Pune. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Built with passion for technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
