"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen, FileText, HelpCircle, CheckCircle2, BookText } from "lucide-react";

export default function Chapter1Page() {
  const sections = [
    {
      title: "Textbook Solutions",
      description: "Step-by-step solutions to textbook problems",
      icon: BookText,
      href: "/boards/msbshse/class-12/english/biology/chapter-1/text-book-solutions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Question Bank",
      description: "Practice questions with detailed solutions",
      icon: HelpCircle,
      href: "/boards/msbshse/class-12/english/biology/chapter-1/questions-bank",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Important Questions",
      description: "Key questions for exam preparation",
      icon: CheckCircle2,
      href: "/boards/msbshse/class-12/english/biology/chapter-1/important-questions",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Previous Year Papers",
      description: "Questions from past examinations",
      icon: FileText,
      href: "/boards/msbshse/class-12/english/biology/chapter-1/previous-year-questions",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Notes",
      description: "Comprehensive chapter notes and explanations",
      icon: BookOpen,
      href: "/boards/msbshse/class-12/english/biology/chapter-1/notes",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <>
      <Head>
        <title>Chapter 1: Reproduction in Lower and Higher Plants | Maharashtra Board Class 12 Biology</title>
        <meta name="description" content="Comprehensive study material for Chapter 1: Reproduction in Lower and Higher Plants. Access textbook solutions, question bank, important questions, and more for Maharashtra Board Class 12 Biology." />
        <meta name="keywords" content="reproduction in plants, lower plants, higher plants, Maharashtra board, class 12 biology, MSBSHSE, plant reproduction, asexual reproduction, sexual reproduction" />
        <meta property="og:title" content="Chapter 1: Reproduction in Lower and Higher Plants | Maharashtra Board Class 12 Biology" />
        <meta property="og:description" content="Comprehensive study material for Chapter 1: Reproduction in Lower and Higher Plants. Access textbook solutions, question bank, important questions, and more." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://eduhub.com/boards/msbshse/class-12/biology/chapter-1" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/boards/msbshse/class-12/english/biology" className="flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to Chapters
              </Link>
            </Button>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Chapter 1: Reproduction in Lower and Higher Plants
            </h1>
            <p className="text-muted-foreground text-lg">
              Study reproduction in plants, from simple organisms to complex flowering plants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={section.href}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-200 hover:scale-105 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${section.color} group-hover:scale-110 transition-transform duration-300`}>
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Chapter Navigation */}
          <div className="flex justify-between items-center my-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/boards/msbshse/class-12/english/biology/introduction" className="flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Previous Chapter
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/boards/msbshse/class-12/english/biology/chapter-2" className="flex items-center gap-2">
                Next Chapter
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Chapter Blog */}
          <article className="prose prose-lg dark:prose-invert max-w-none mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Understanding Plant Reproduction: A Comprehensive Guide
            </h2>

            <div className="bg-accent/30 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-semibold mb-4">Chapter Overview</h3>
              <p className="text-muted-foreground">
                This chapter explores the fascinating world of plant reproduction, covering both asexual and sexual methods across different plant groups. From the simple reproduction in algae to the complex flowering mechanisms in angiosperms, we'll discover how plants ensure their survival and continuation of species.
              </p>
            </div>

            <section className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">1. Types of Reproduction in Plants</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background border rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3">Asexual Reproduction</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Vegetative propagation</li>
                    <li>Fragmentation</li>
                    <li>Spore formation</li>
                    <li>Budding</li>
                  </ul>
                </div>
                <div className="bg-background border rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3">Sexual Reproduction</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Gametophyte formation</li>
                    <li>Gamete production</li>
                    <li>Fertilization</li>
                    <li>Seed development</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">2. Reproduction in Different Plant Groups</h3>
              <div className="space-y-6">
                <div className="bg-background border rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3">Lower Plants</h4>
                  <p>Lower plants, including algae and bryophytes, exhibit both asexual and sexual reproduction. Their life cycles often involve alternation of generations between gametophyte and sporophyte phases.</p>
                </div>
                <div className="bg-background border rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3">Higher Plants</h4>
                  <p>Higher plants have evolved complex reproductive structures and mechanisms. Angiosperms, the flowering plants, represent the most advanced form of plant reproduction with their specialized flower structures and double fertilization process.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">3. Key Concepts and Terms</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { term: "Alternation of Generations", definition: "The alternating cycle between gametophyte and sporophyte generations in plants" },
                  { term: "Double Fertilization", definition: "A unique process in angiosperms where two sperm cells fertilize different cells in the embryo sac" },
                  { term: "Sporophyte", definition: "The diploid, spore-producing phase in the plant life cycle" },
                  { term: "Gametophyte", definition: "The haploid, gamete-producing phase in the plant life cycle" }
                ].map((item, index) => (
                  <div key={index} className="bg-background border rounded-lg p-6">
                    <h4 className="font-semibold mb-2">{item.term}</h4>
                    <p className="text-muted-foreground">{item.definition}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">4. Importance and Applications</h3>
              <div className="bg-background border rounded-lg p-6">
                <ul className="space-y-4">
                  <li><strong>Agriculture:</strong> Understanding plant reproduction is crucial for crop improvement and breeding programs.</li>
                  <li><strong>Conservation:</strong> Knowledge of reproduction helps in preserving endangered plant species.</li>
                  <li><strong>Biotechnology:</strong> Reproductive mechanisms are utilized in tissue culture and genetic modification.</li>
                  <li><strong>Economic Value:</strong> Many industries depend on plant reproductive parts (fruits, seeds, etc.).</li>
                </ul>
              </div>
            </section>

            <div className="bg-accent/30 p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-semibold mb-4">Study Tips</h3>
              <ul className="space-y-3">
                <li>Focus on understanding the life cycles of different plant groups</li>
                <li>Learn the terminology associated with plant reproduction</li>
                <li>Practice drawing and labeling reproductive structures</li>
                <li>Solve previous year questions for better preparation</li>
                <li>Create comparison charts for different types of reproduction</li>
              </ul>
            </div>
          </article>
        </motion.div>
      </div>
    </>
  );
}