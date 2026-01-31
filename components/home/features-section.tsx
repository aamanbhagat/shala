"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    BookOpen,
    GraduationCap,
    PlayCircle,
    HelpCircle,
    ClipboardList,
    BookText,
} from "lucide-react";

const features = [
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

export function FeaturesSection() {
    return (
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
    );
}
