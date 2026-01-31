"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Latex from "./latex";

export interface MatchPair {
    id: string;
    left: string;
    right: string; // The correct answer for this left item
}

export interface MatchTheColumnData {
    title: string;
    description: string;
    keywords: string;
    canonicalUrl: string;
    boardName: string;
    className: string;
    subjectName: string;
    chapterName: string;
    chapterNumber: number;
    // The columns for the "Question" view (usually jumbled)
    question: {
        columnA: string[];
        columnB: string[]; // Can include distractors
    };
    // The correct pairs for the "Solution" view
    pairs: MatchPair[];
    explanation?: {
        text: string;
        points?: string[];
    };
    relatedQuestions: string[];
    backLink: string;
    previousLink: string;
    nextLink: string;
}

export function MatchTheColumnTemplate({ data }: { data: MatchTheColumnData }) {
    return (
        <>
            <Head>
                <title>{data.title}</title>
                <meta name="description" content={data.description} />
                <meta name="keywords" content={data.keywords} />
                <meta property="og:title" content={data.title} />
                <meta property="og:description" content={data.description} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={data.canonicalUrl} />
            </Head>

            <div className="min-h-screen bg-background">
                <div className="container mx-auto px-2 md:px-4 py-6 md:py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Chapter indicator */}
                        <div className="text-xs text-muted-foreground mb-6 pl-2 md:pl-0">
                            Chapter {data.chapterNumber} • {data.chapterName}
                        </div>

                        {/* Title */}
                        <div className="mb-6 px-2 md:px-0">
                            <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                Match the columns
                            </h1>
                        </div>

                        {/* Question Card */}
                        <Card className="overflow-hidden mb-8">
                            <div className="bg-primary/5 border-b px-4 md:px-6 py-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                                    Question
                                </span>
                            </div>

                            <div className="p-3 md:p-6">
                                <h3 className="font-medium mb-4 px-1">Match the column:</h3>
                                <div className="border rounded-lg overflow-hidden">
                                    <div className="grid grid-cols-2 bg-muted/50 border-b divide-x">
                                        <div className="p-2 md:p-3 font-semibold text-center text-sm md:text-base">Column 'A'</div>
                                        <div className="p-2 md:p-3 font-semibold text-center text-sm md:text-base">Column 'B'</div>
                                    </div>
                                    <div className="divide-y">
                                        {/* We assume columnA is the reference length for the grid rows, 
                                            but columnB might be longer. We'll render max rows. */}
                                        {Array.from({ length: Math.max(data.question.columnA.length, data.question.columnB.length) }).map((_, index) => (
                                            <div key={index} className="grid grid-cols-2 divide-x">
                                                <div className="p-2 md:p-3 text-xs md:text-sm flex gap-2 md:gap-3 items-start">
                                                    {data.question.columnA[index] && (
                                                        <>
                                                            <span className="font-medium text-muted-foreground">({index + 1})</span>
                                                            <span><Latex>{data.question.columnA[index]}</Latex></span>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="p-2 md:p-3 text-xs md:text-sm flex gap-2 md:gap-3 items-start">
                                                    {data.question.columnB[index] && (
                                                        <>
                                                            <span className="font-medium text-muted-foreground">({String.fromCharCode(97 + index)})</span>
                                                            <span><Latex>{data.question.columnB[index]}</Latex></span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Solution Card - Always Visible */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="overflow-hidden mb-8 border-green-200 dark:border-green-900">
                                <div className="bg-green-50 dark:bg-green-900/20 border-b border-green-200 dark:border-green-900 px-4 md:px-6 py-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">
                                        Solution
                                    </span>
                                </div>

                                <div className="p-3 md:p-6">
                                    <div className="border border-green-200 dark:border-green-900 rounded-lg overflow-hidden">
                                        <div className="grid grid-cols-2 bg-green-50/50 dark:bg-green-900/10 border-b border-green-100 dark:border-green-800 divide-x divide-green-100 dark:divide-green-800">
                                            <div className="p-3 font-semibold text-center text-green-800 dark:text-green-300">Column 'A'</div>
                                            <div className="p-3 font-semibold text-center text-green-800 dark:text-green-300">Column 'B'</div>
                                        </div>
                                        <div className="divide-y divide-green-100 dark:divide-green-800">
                                            <div className="divide-y divide-green-100 dark:divide-green-800">
                                                {data.question.columnA.map((leftContent, index) => {
                                                    const pair = data.pairs.find(p => p.left === leftContent);
                                                    if (!pair) return null;

                                                    return (
                                                        <div key={index} className="grid grid-cols-2 divide-x divide-green-100 dark:divide-green-800 hover:bg-green-50/30 dark:hover:bg-green-900/10 transition-colors">
                                                            <div className="p-3 text-sm flex gap-3 items-start text-green-900 dark:text-green-100">
                                                                <span className="font-medium opacity-70">({index + 1})</span>
                                                                <span><Latex>{leftContent}</Latex></span>
                                                            </div>
                                                            <div className="p-3 text-sm flex gap-3 items-start font-medium text-green-700 dark:text-green-300">
                                                                <span className="font-medium opacity-70">
                                                                    ({String.fromCharCode(97 + data.question.columnB.indexOf(pair.right))})
                                                                </span>
                                                                <span><Latex>{pair.right}</Latex></span>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    {data.explanation && (
                                        <div className="mt-6 bg-muted/30 p-6 rounded-lg">
                                            <h3 className="font-semibold mb-3">Explanation</h3>
                                            <p className="text-muted-foreground mb-3"><Latex>{data.explanation.text}</Latex></p>
                                            {data.explanation.points && (
                                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                    {data.explanation.points.map((point, i) => (
                                                        <li key={i}><Latex>{point}</Latex></li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </motion.div>


                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center mb-8">
                            <Button variant="outline" size="lg" asChild>
                                <Link href={data.previousLink} className="flex items-center gap-2">
                                    <ChevronLeft className="w-4 h-4" />
                                    Previous
                                </Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link href={data.backLink} className="flex items-center gap-2">
                                    Back to Chapter
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href={data.nextLink} className="flex items-center gap-2">
                                    Next
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>

                        {/* Related Questions Card */}
                        <Card className="overflow-hidden">
                            <div className="bg-secondary/50 p-6">
                                <h2 className="text-xl font-semibold">Related Questions</h2>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-4 divide-y">
                                    {data.relatedQuestions.map((question, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="pt-4 first:pt-0"
                                        >
                                            <Link
                                                href={`${data.backLink}/question-${index + 1}`}
                                                className="flex items-start space-x-3 group"
                                            >
                                                <span className="text-primary font-medium">{index + 1}.</span>
                                                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                                                    <Latex>{question}</Latex>
                                                </span>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
