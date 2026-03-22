import type { Metadata } from "next";
import TeamContent from "@/components/TeamContent";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the dedicated team behind IEEE CIS — our faculty coordinators, core team, technical experts, and design crew.",
};

export default function TeamPage() {
  return <TeamContent />;
}
