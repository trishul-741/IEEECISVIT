"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import {
  Lightbulb,
  Target,
  BookOpen,
  Users,
  Award,
  Rocket,
  Globe,
  Code,
  Cpu,
  GraduationCap,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/constants/config";

const objectives = [
  { icon: Code, title: "Technical Excellence", description: "Develop hands-on programming and engineering skills through practical projects and workshops." },
  { icon: Users, title: "Community Building", description: "Create a vibrant network of like-minded individuals who learn and grow together." },
  { icon: Rocket, title: "Innovation", description: "Encourage creative thinking and provide platforms to showcase innovative solutions." },
  { icon: Globe, title: "Industry Exposure", description: "Connect students with industry professionals through seminars and networking events." },
];

const activities = [
  { icon: Cpu, title: "Hackathons", description: "Intensive coding challenges that push boundaries and foster rapid innovation." },
  { icon: BookOpen, title: "Workshops", description: "Hands-on learning sessions on trending technologies led by experts and peers." },
  { icon: Award, title: "Tech Talks", description: "Insightful presentations from industry leaders and accomplished alumni." },
  { icon: Lightbulb, title: "Project Showcases", description: "Platforms for members to present innovative projects and receive feedback." },
];

const benefits = [
  { icon: GraduationCap, title: "Skill Development", description: "Gain practical, in-demand technical skills that set you apart." },
  { icon: Briefcase, title: "Career Readiness", description: "Build a strong portfolio and professional network." },
  { icon: Users, title: "Peer Learning", description: "Collaborate with talented students across disciplines." },
  { icon: Sparkles, title: "Recognition", description: "Earn certificates and awards for your achievements." },
];

function IconCardDark({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group rounded-2xl bg-dark-card border border-dark-border p-7 transition-all duration-500 hover:border-secondary/20 hover:shadow-lg hover:shadow-secondary/5"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/20">
        <Icon size={22} />
      </div>
      <h3 className="font-heading text-base font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </motion.div>
  );
}

function IconCardLight({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group rounded-2xl bg-white border border-gray-100 p-7 shadow-sm transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/5 text-accent transition-colors duration-300 group-hover:bg-accent/10">
        <Icon size={22} />
      </div>
      <h3 className="font-heading text-base font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-36 pb-24 sm:pt-44 sm:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(30,64,175,0.12),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary-light mb-4">
              About Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Who We Are
            </h1>
            <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
              IEEE CIS is a student-driven technical Club dedicated to
              fostering a culture of innovation, learning, and collaboration. We
              empower students to explore emerging technologies and develop
              skills for the modern world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Mission & Vision" subtitle="What Drives Us" light />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-surface border border-gray-100 p-8 sm:p-10 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/5 text-accent mb-5">
                <Target size={22} />
              </div>
              <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Our Mission</h3>
              <p className="text-text-muted leading-[1.8]">
                To become the leading platform for students and faculties dedicated to expanding and sharing knowledge in the field of Computational Intelligence, united in solving global challenges and shaping a brighter, more sustainable future.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-surface border border-gray-100 p-8 sm:p-10 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/5 text-accent mb-5">
                <Lightbulb size={22} />
              </div>
              <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Our Vision</h3>
              <p className="text-text-muted leading-[1.8]">
                The IEEE CIS Student Chapter at VIT, Pune aims to build a dynamic technical community by organizing expert talks, workshops, and webinars in Computational Intelligence. It encourages student engagement through membership drives, peer networking, and collaborative initiatives, while promoting innovation, sustainability, and ethical tech development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives — dark */}
      <section className="bg-dark py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Objectives" subtitle="What We Aim For" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {objectives.map((item, i) => (
              <IconCardDark key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Activities — light */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Activities" subtitle="What We Do" light />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((item, i) => (
              <IconCardLight key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>
      {/* Benefits — dark */}
      <section className="bg-dark py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Benefits" subtitle={`Why Join ${SITE_CONFIG.name}`} />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, i) => (
              <IconCardDark key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
