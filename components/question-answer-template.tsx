
"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Share2, Printer, Bookmark } from "lucide-react";
import React from "react";
import Latex from "./latex";

export interface AnswerSection {
    type: 'paragraph' | 'list' | 'image';
    content: string | string[]; // Single string for paragraph/image url, array for list
    title?: string; // Optional title for list or section
}

export interface QuestionAnswerData {
    title: string;
    description: string;
    keywords: string;
    canonicalUrl: string;
    boardName: string;
    className: string;
    subjectName: string;
    chapterName: string;
    chapterNumber: number;
    question: string;
    type: "Short Answer" | "Long Answer";
    answer: AnswerSection[];
    relatedQuestions: string[];
    backLink: string;
    previousLink: string;
    nextLink: string;
}

export function QuestionAnswerTemplate({ data }: { data: QuestionAnswerData }) {
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

            <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
                <div className="container mx-auto px-2 md:px-4 py-6 md:py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Breadcrumb/Header */}
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-6 uppercase tracking-wider pl-2 md:pl-0">
                            <span>{data.subjectName}</span>
                            <span>•</span>
                            <span>Chapter {data.chapterNumber}</span>
                            <span>•</span>
                            <span className="text-primary font-bold">{data.type}</span>
                        </div>

                        {/* Question Card */}
                        <Card className="overflow-hidden mb-8">
                            <div className="bg-primary/5 border-b px-4 md:px-6 py-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                                    Question
                                </span>
                            </div>
                            <div className="p-4 md:p-6">
                                <h1 className="text-xl md:text-3xl font-bold leading-tight">
                                    <Latex>{data.question}</Latex>
                                </h1>
                            </div>
                        </Card>

                        {/* Solution Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <Card className="overflow-hidden mb-8 border-green-200 dark:border-green-900">
                                <div className="bg-green-50/50 dark:bg-green-900/10 border-b border-green-100 dark:border-green-800 px-4 md:px-6 py-3 flex justify-between items-center">
                                    <span className="text-xs font-bold uppercase tracking-wider text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">
                                        Solution
                                    </span>
                                    <div className="flex space-x-2">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-green-600" aria-label="Share solution">
                                            <Share2 className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-green-600" aria-label="Bookmark solution">
                                            <Bookmark className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="p-4 md:p-8 bg-card">
                                    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-p:leading-relaxed prose-li:marker:text-green-500">
                                        {data.answer.map((section, index) => (
                                            <div key={index} className="mb-6 last:mb-0">
                                                {section.title && (
                                                    <h3 className="font-bold text-lg mb-2 text-foreground/90"><Latex>{section.title}</Latex></h3>
                                                )}

                                                {section.type === 'paragraph' && (
                                                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                                        <Latex>{section.content as string}</Latex>
                                                    </p>
                                                )}

                                                {section.type === 'list' && Array.isArray(section.content) && (
                                                    <ul className="list-disc list-outside ml-4 space-y-2">
                                                        {section.content.map((item, i) => (
                                                            <li key={i} className="text-base text-muted-foreground pl-2">
                                                                <Latex>{item}</Latex>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 pt-6 border-t flex items-center justify-end text-sm text-muted-foreground italic">
                                        Verified by EduHub Experts
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center mb-12">
                            <Button variant="outline" size="lg" className="hover:bg-primary/5 group" asChild>
                                <Link href={data.previousLink} className="flex items-center gap-2">
                                    <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                    Previous
                                </Link>
                            </Button>
                            <Button variant="ghost" className="hidden md:flex tracking-wide uppercase text-xs font-bold text-muted-foreground hover:text-primary" asChild>
                                <Link href={data.backLink}>
                                    Back to Chapter
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="hover:bg-primary/5 group" asChild>
                                <Link href={data.nextLink} className="flex items-center gap-2">
                                    Next
                                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>

                        {/* Related Questions */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold tracking-tight">Related Questions</h2>
                            <div className="grid gap-4 md:grid-cols-2">
                                {data.relatedQuestions.map((q, i) => (
                                    <Link key={i} href="#" className="block group">
                                        <Card className="h-full p-5 transition-all duration-200 hover:shadow-md hover:border-primary/50 group-hover:-translate-y-1">
                                            <div className="flex items-start gap-3">
                                                <span className="text-xs font-bold text-secondary-foreground bg-secondary px-2 py-1 rounded group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                    Q{i + 1}
                                                </span>
                                                <p className="text-sm font-medium leading-relaxed line-clamp-2">
                                                    <Latex>{q}</Latex>
                                                </p>
                                            </div>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </>
    );
}
