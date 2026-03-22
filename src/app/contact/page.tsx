import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with IEEE CIS. Reach out for queries, collaborations, or feedback.",
};

export default function ContactPage() {
  return <ContactContent />;
}
