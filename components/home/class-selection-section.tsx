
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { classes } from "@/lib/data"; // Re-using the centralized data
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";

export function ClassSelectionSection() {
    return (
        <section className="relative py-16 md:py-24 bg-white dark:bg-black">
            {/* Top fade for smooth transition from Hero */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none z-10" />
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full"
                    >
                        Start Learning
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        Select Your Class
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        We have comprehensive study materials tailored for every grade level. Choose your class to get started.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {classes.map((cls, index) => (
                        <motion.div
                            key={cls.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link href={`/explore?class=${cls.id}`}>
                                <Card className={`h-full p-6 text-center hover:shadow-xl transition-all duration-300 group border-none bg-gradient-to-br ${cls.color} relative overflow-hidden`}>
                                    <div className="relative z-10 flex flex-col items-center justify-center min-h-[120px]">
                                        <div className="w-12 h-12 bg-white/20 dark:bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-xl font-bold text-foreground opacity-80">{index + 1}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-1 opacity-90 group-hover:opacity-100 transition-opacity">
                                            {cls.name}
                                        </h3>
                                        <p className="text-xs font-medium opacity-60 uppercase tracking-widest mb-4">
                                            Grade
                                        </p>
                                        <div className="w-8 h-8 rounded-full bg-white/30 dark:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                    {/* Decorative background elements */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />
                                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/5 rounded-tr-full -ml-4 -mb-4" />
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
