"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BiologyChapter1() {
  const title = "Insect Pollinated Flowers Usually Possess Sticky Pollens with Rough Surface - Maharashtra Board Class 12 Biology";
  const description = "Learn about the characteristics of insect-pollinated flowers and why they possess sticky pollens with rough surface. Detailed explanation with examples for Maharashtra State Board Class 12 Biology Chapter 1.";
  const keywords = "insect pollinated flowers, sticky pollen, rough surface pollen, entomophilous flowers, Maharashtra board, class 12 biology, plant reproduction, pollination types";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://eduhub.com/boards/msbshse/class-12/biology/chapter-1/fill-in-the-blanks/Insect-pollinated-flowers-usually-possess" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Article Specific Metadata */}
        <meta property="article:section" content="Biology" />
        <meta property="article:tag" content="Plant Reproduction" />
        <meta property="article:tag" content="Pollination" />
        <meta property="article:tag" content="Class 12" />
      </Head>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Chapter indicator */}
            <div className="text-xs text-muted-foreground mb-6">
              Chapter 1 • Reproduction in Lower and Higher Plants
            </div>

            {/* Main MCQ Card */}
            <Card className="overflow-hidden mb-8">
              <div className="bg-primary/5 border-b p-6">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Insect pollinated flowers usually possess _________
                </h1>
              </div>

              <div className="p-6 space-y-6">
                {/* Question Section */}
                <div className="space-y-4">
                  <div className="inline-block bg-primary/10 rounded-full px-4 py-1 text-sm font-medium text-primary">
                    Fill in the Blank
                  </div>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Sticky pollens with rough surface",
                    "Large quantities of pollens",
                    "Dry pollens with smooth surface",
                    "Light coloured pollens"
                  ].map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 rounded-lg border ${index === 0 
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                        : 'border-border hover:border-primary/50'} 
                        transition-colors cursor-pointer`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`text-sm font-medium ${index === 0 ? 'text-green-600 dark:text-green-400' : ''}`}>
                          {String.fromCharCode(65 + index)}.
                        </span>
                        <span className={index === 0 ? 'text-green-600 dark:text-green-400 font-medium' : ''}>
                          {option}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Answer Section */}
                <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-900">
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">Correct Answer:</h3>
                  <p className="text-green-600 dark:text-green-400">
                    Insect pollinated flowers usually possess <span className="font-bold underline">sticky pollens with rough surface</span>
                  </p>
                </div>

                {/* Explanation Section */}
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Explanation</h3>
                  <p className="text-muted-foreground">
                    Insect pollinated flowers (entomophilous) have evolved specific adaptations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-3 text-muted-foreground">
                    <li>Pollen grains are sticky with rough surface for insect body adhesion</li>
                    <li>This ensures efficient pollen transfer between flowers</li>
                    <li>Rough surface and sticky nature aid in attachment to insect body parts</li>
                    <li>Distinct from wind-pollinated flowers with smooth, light pollen</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mb-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/boards/msbshse/class-12/biology/chapter-1/question-1" className="flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  Previous Question
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/boards/msbshse/class-12/biology/chapter-1/question-3" className="flex items-center gap-2">
                  Next Question
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
                  {[
                    "What is DNA?",
                    "How does the amount of DNA remain constant though each new generation is a combination of DNA copies of two individuals?",
                    "Match items in Column I with those in Column II",
                    "A spore-producing organism is _____.",
                    "Which type of reproduction does not involve gametes?",
                    "Write down the different methods of asexual reproduction.",
                    "What is the basic difference between asexual reproduction and sexual reproduction?",
                    "Which of the following organisms reproduce by sexual method and which by asexual method? Amoeba, Cats, Humans, Hydra, Birds",
                    "In the list of organisms given below, those which reproduce by the asexual method are: (i) banana (ii) yak (iii) yeast (iv) Amoeba",
                    "What type of fertilization takes place in fish?",
                    "Amoeba reproduces by budding.",
                    "What is the name of the reproductive process which involves two parents?",
                    "What is the name of the reproductive process which involves only one parent?",
                    "What is a clone? Why do offsprings formed by asexual reproduction exhibit remarkable similarity?",
                    "Asexual reproduction is: (a) a fusion of specialised cells (b) a method by which all types of organisms reproduce (c) a method producing genetically identical offspring (d) a method in which more than one parent are involved",
                    "The offsprings formed by asexual reproduction method have greater similarity among themselves because: (i) asexual reproduction involves only one parent (ii) asexual reproduction involves two parents (iii) asexual reproduction involves gametes (iv) asexual reproduction does not involve gametes",
                    "Imagine all the seeds produced by a plant happen to fall under the same plant and sprout into new plants. Mention any two problems that will be faced by the new plants.",
                    "State whether the following statement is true (T) or false (F): Producing life is called respiration.",
                    "Define the following: Regeneration",
                    "Why is reproduction necessary for living organisms?",
                    "Name the part of the cell where DNA is located?",
                    "Seminal fluid is ________ in nature.",
                    "Write two types of reproduction in plants.",
                    "Identify the homologous pair.",
                    "The term metamorphosis is not used while describing human development. Why?",
                    "Which of the following nucleus is unlike other nuclei in the female gametophyte of angiosperms?"
                  ].map((question, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="pt-4 first:pt-0"
                    >
                      <Link 
                        href={`/boards/msbshse/class-12/biology/chapter-1/question-${index + 1}`}
                        className="flex items-start space-x-3 group"
                      >
                        <span className="text-primary font-medium">{index + 1}.</span>
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">
                          {question}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Hidden Article for Search Engines */}
            <article className="sr-only">
              <h2>Characteristics of Insect Pollinated Flowers</h2>
              <p>
                Insect pollinated flowers, also known as entomophilous flowers, have evolved specific adaptations to facilitate pollination by insects. One of their most distinctive features is the presence of sticky pollen grains with rough surfaces. This characteristic is crucial for the pollination process for several reasons:
              </p>
              
              <h3>Why do insect pollinated flowers have sticky pollen?</h3>
              <ul>
                <li>Enhanced Adhesion: The sticky nature helps pollen grains adhere to visiting insects' bodies</li>
                <li>Efficient Transfer: Rough surface texture increases the success rate of pollen transfer between flowers</li>
                <li>Specialized Adaptation: This feature distinguishes them from wind-pollinated flowers</li>
                <li>Evolutionary Advantage: Ensures targeted pollen delivery to other flowers of the same species</li>
              </ul>

              <h3>Other Characteristics of Entomophilous Flowers</h3>
              <ul>
                <li>Bright colored petals to attract insects</li>
                <li>Strong fragrance as an attractant</li>
                <li>Nectar as a reward for pollinators</li>
                <li>Landing platform for visiting insects</li>
              </ul>

              <h3>Importance in Plant Reproduction</h3>
              <p>
                This adaptation is crucial for successful sexual reproduction in flowering plants. The sticky pollen with rough surface ensures that:
                - Pollen grains remain viable during transport
                - Cross-pollination occurs effectively
                - Genetic diversity is maintained in plant populations
                - Reproductive success is maximized
              </p>

              <h3>Comparison with Other Pollination Methods</h3>
              <p>
                Unlike wind-pollinated flowers that produce large quantities of smooth, light pollen, insect-pollinated flowers have evolved to produce less pollen but ensure more efficient transfer through these specialized adaptations.
              </p>
            </article>
          </motion.div>
        </div>
      </div>
    </>
  );
}