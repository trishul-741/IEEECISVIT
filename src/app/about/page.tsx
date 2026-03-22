import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about IEEE CIS — our mission, vision, objectives, activities, and the benefits of being a part of our technical community.",
};

export default function AboutPage() {
  return <AboutContent />;
}
