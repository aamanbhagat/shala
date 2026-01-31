"use client";

import { Button } from "@/components/ui/button";
import {
  BookOpen,
  GraduationCap,
  PlayCircle,
  HelpCircle,
  ClipboardList,
  BookText,
  Pencil,
  School,
  Award,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useCallback } from "react";
import { useTheme } from "next-themes";

const CountingNumber = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animateValue = useCallback((start: number, end: number, duration: number) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);

      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    if (inView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
      animateValue(0, numericValue, 2000);
    }
  }, [inView, value, animateValue]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {value.includes("+") ? "+" : value.includes("%") ? "%" : ""}
    </span>
  );
};

export default function Home() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      title: "Class 1-4",
      description: "Find foundational resources for young learners.",
      icon: Pencil,
      color: "text-red-500",
      href: "/primary",
    },
    {
      title: "Class 5-8",
      description: "Bridge primary to secondary learning with structured materials.",
      icon: School,
      color: "text-cyan-500",
      href: "/middle",
    },
    {
      title: "Class 9-10",
      description: "Prepare for board exams with curated study notes and question banks.",
      icon: Award,
      color: "text-orange-500",
      href: "/secondary",
    },
    {
      title: "Class 11-12",
      description: "Advanced resources for senior secondary classes, including entrance exam prep.",
      icon: Trophy,
      color: "text-emerald-500",
      href: "/senior",
    },
    {
      title: "Question Bank",
      description: "Access thousands of questions with step-by-step solutions for practice.",
      icon: HelpCircle,
      color: "text-pink-500",
      href: "/questions",
    },
    {
      title: "Question Papers",
      description: "Download past question papers and their detailed solutions for exam prep.",
      icon: ClipboardList,
      color: "text-yellow-500",
      href: "/papers",
    },
    {
      title: "Textbook Solutions",
      description: "Detailed solutions for popular textbooks including NCERT, Balbharti, and more.",
      icon: BookText,
      color: "text-indigo-500",
      href: "/solutions",
    },
    {
      title: "Courses & Subjects",
      description: "Browse comprehensive syllabi and time tables for each subject and class.",
      icon: BookOpen,
      color: "text-blue-500",
      href: "/courses",
    },
    {
      title: "Entrance Exams",
      description: "Prepare for JEE, NEET, and other exams with practice tests and solutions.",
      icon: GraduationCap,
      color: "text-purple-500",
      href: "/exams",
    },
    {
      title: "Concept Notes & Videos",
      description: "Understand core concepts with concise notes and engaging video lectures.",
      icon: PlayCircle,
      color: "text-green-500",
      href: "/resources",
    },
  ];

  const stats = [
    { label: "Active Students", value: "100000+" },
    { label: "Video Lectures", value: "5000+" },
    { label: "Practice Questions", value: "50000+" },
    { label: "Success Rate", value: "95%" },
  ];

  const isDark = mounted && (theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark'));

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-16 md:py-20 bg-white dark:bg-black transition-colors duration-300"
      >
        {/* Grid Background */}
        {mounted && (
          <div className="absolute inset-0 bg-white dark:bg-black">
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"
              style={{ opacity: 0.4 }}
            />
          </div>
        )}

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            All Your Study Solutions for{" "}
            <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">
              Smarter Decisions
            </span>
          </motion.h1>
          <motion.p
            className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto font-normal text-gray-600 dark:text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Access our suite of educational resources to plan your studies, analyze your performance, and make informed academic decisions with confidence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/explore">
              <Button
                size="lg"
                className="relative group px-8 py-6 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Now
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Explore Resources
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-lg border bg-background p-8 hover:shadow-lg transition-all duration-200 hover:border-primary/50"
              >
                <div className="flex items-start space-x-4">
                  <feature.icon className={`h-12 w-12 ${feature.color} flex-shrink-0 transition-transform group-hover:scale-110`} />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-base text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
                <Link href={feature.href} className="absolute inset-0">
                  <span className="sr-only">Learn more about {feature.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-center transform transition-all duration-200 p-4 rounded-lg hover:bg-background/50"
              >
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  <CountingNumber value={stat.value} />
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Start Learning?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Join millions of students who trust EduHub for their educational needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Button size="lg" asChild>
              <Link href="/signup">Get Started for Free</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}