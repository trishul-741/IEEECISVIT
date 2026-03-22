import type { Metadata } from "next";
import RegisterContent from "@/components/RegisterContent";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Join IEEE CIS today. Register to become a member and access exclusive events, workshops, and resources.",
};

export default function RegisterPage() {
  return <RegisterContent />;
}
