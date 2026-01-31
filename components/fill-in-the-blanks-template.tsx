"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Latex from "./latex";

export interface QuestionData {
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
    options: string[];
    correctAnswerIndex: number;
    explanation: {
        text: string;
        points?: string[];
    };
    relatedQuestions: string[];
    backLink: string;
    previousLink: string; // Optional in real app, but useful for demo
    nextLink: string; // Optional
}

export function FillInTheBlanksTemplate({ data }: { data: QuestionData }) {
    const showAnswer = true;

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

                        {/* Main Question Card */}
                        <Card className="overflow-hidden mb-8">
                            <div className="bg-primary/5 border-b p-4 md:p-6">
                                <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                    <Latex>{data.question}</Latex>
                                </h1>
                            </div>

                            <div className="p-4 md:p-6 space-y-6">
                                <div className="space-y-4">
                                    <div className="inline-block bg-primary/10 rounded-full px-4 py-1 text-sm font-medium text-primary">
                                        Fill in the Blank
                                    </div>
                                </div>

                                {/* Options Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {data.options.map((option, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`p-4 rounded-lg border ${index === data.correctAnswerIndex
                                                ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                                                : 'opacity-50'
                                                } transition-all`}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <span className={`text-sm font-medium ${index === data.correctAnswerIndex ? 'text-green-900 dark:text-green-100' : ''
                                                    }`}>
                                                    {String.fromCharCode(65 + index)}.
                                                </span>
                                                <span className={
                                                    index === data.correctAnswerIndex ? 'text-green-900 dark:text-green-100 font-medium' : ''
                                                }>
                                                    <Latex>{option}</Latex>
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Answer Section */}
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="mt-8"
                                >
                                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-900 mb-6">
                                        <h2 className="font-semibold text-green-900 dark:text-green-100 mb-2">Correct Answer:</h2>
                                        <div className="text-green-900 dark:text-green-100">
                                            <Latex>{data.question.replace('_________', data.options[data.correctAnswerIndex])}</Latex>
                                        </div>
                                    </div>

                                    <div className="bg-muted/30 p-6 rounded-lg">
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
                                </motion.div>
                            </div>
                        </Card>

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
                                                href={`${data.backLink}/question-${index + 1}`} // Mock link
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
