import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IEEE CIS VIT Pune",
    template: "%s | IEEE CIS VIT Pune",
  },
  description:
    "IEEE CIS is a premier college technical club fostering innovation, collaboration, and technical excellence through events, workshops, and community building.",
  keywords: [
    "technical club",
    "college",
    "hackathon",
    "coding",
    "technology",
    "workshops",
    "IEEE",
    "CIS",
  ],
  openGraph: {
    title: "IEEE CIS — College Technical Club",
    description:
      "Fostering innovation and technical excellence through community-driven learning.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
