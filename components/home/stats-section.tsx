"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";

const CountingNumber = ({ value }: { value: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

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
        if (isInView) {
            const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
            animateValue(0, numericValue, 2000);
        }
    }, [isInView, value, animateValue]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}
            {value.includes("+") ? "+" : value.includes("%") ? "%" : ""}
        </span>
    );
};

const stats = [
    { label: "Active Students", value: "100000+" },
    { label: "Video Lectures", value: "5000+" },
    { label: "Practice Questions", value: "50000+" },
    { label: "Success Rate", value: "95%" },
];

export function StatsSection() {
    return (
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
    );
}
