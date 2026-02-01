import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden py-16 md:py-20 bg-white dark:bg-black transition-colors duration-300">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-white dark:bg-black">
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] animate-fade-in-up">
                    All Your Study Solutions for{" "}
                    <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">
                        Smarter Decisions
                    </span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto font-normal text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in-up [animation-delay:100ms] opacity-0 fill-mode-forwards">
                    Access our suite of educational resources to plan your studies, analyze your performance, and make informed academic decisions with confidence.
                </p>
                <div className="animate-fade-in-up [animation-delay:200ms] opacity-0 fill-mode-forwards">
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
                </div>
            </div>

            {/* Bottom fade for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none z-10" />
        </section>
    );
}
