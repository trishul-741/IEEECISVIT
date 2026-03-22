import type { Metadata } from "next";
import EventsContent from "@/components/EventsContent";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore upcoming and past events organized by IEEE CIS — hackathons, workshops, seminars, and more.",
};

export default function EventsPage() {
  return <EventsContent />;
}
