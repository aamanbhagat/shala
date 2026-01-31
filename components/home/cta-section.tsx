"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
    return (
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
    );
}
