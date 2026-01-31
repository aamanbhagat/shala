"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, ArrowRight, ChevronRight } from "lucide-react";

const chapters = [
  {
    number: 1,
    title: "Reproduction in Lower and Higher Plants",
    color: "from-green-500 to-emerald-500",
    description: "Study plant reproduction mechanisms, from algae to angiosperms",
    keyTopics: ["Asexual reproduction", "Sexual reproduction", "Life cycles", "Double fertilization"]
  },
  {
    number: 2,
    title: "Reproduction in Lower and Higher Animals",
    color: "from-blue-500 to-indigo-500",
    description: "Explore reproductive processes in various animal groups",
    keyTopics: ["Asexual reproduction", "Gametogenesis", "Embryonic development", "Human reproduction"]
  },
  {
    number: 3,
    title: "Inheritance and Variation",
    color: "from-purple-500 to-violet-500",
    description: "Learn about genetic inheritance patterns and variations",
    keyTopics: ["Mendel's laws", "Inheritance patterns", "Multiple alleles", "Sex determination"]
  },
  {
    number: 4,
    title: "Molecular Basis of Inheritance",
    color: "from-rose-500 to-pink-500",
    description: "Understand DNA, RNA, and molecular genetics",
    keyTopics: ["DNA structure", "Replication", "Transcription", "Translation"]
  },
  {
    number: 5,
    title: "Origin and Evolution of Life",
    color: "from-amber-500 to-yellow-500",
    description: "Explore theories of life's origin and evolutionary processes",
    keyTopics: ["Origin theories", "Natural selection", "Adaptation", "Speciation"]
  },
  {
    number: 6,
    title: "Plant Water Relation",
    color: "from-cyan-500 to-sky-500",
    description: "Study water movement and relations in plants",
    keyTopics: ["Osmosis", "Transpiration", "Water potential", "Transport mechanisms"]
  },
  {
    number: 7,
    title: "Plant Growth and Mineral Nutrition",
    color: "from-lime-500 to-green-500",
    description: "Learn about plant growth factors and nutrition",
    keyTopics: ["Growth hormones", "Mineral requirements", "Deficiency symptoms", "Growth movements"]
  },
  {
    number: 8,
    title: "Respiration and Circulation",
    color: "from-red-500 to-rose-500",
    description: "Understand respiratory and circulatory systems",
    keyTopics: ["Cellular respiration", "Blood circulation", "Heart structure", "Transport systems"]
  },
  {
    number: 9,
    title: "Control and Co-ordination",
    color: "from-fuchsia-500 to-purple-500",
    description: "Study nervous system and hormonal coordination",
    keyTopics: ["Nervous system", "Endocrine system", "Hormones", "Neural transmission"]
  },
  {
    number: 10,
    title: "Human Health and Diseases",
    color: "from-orange-500 to-amber-500",
    description: "Learn about human diseases and immune system",
    keyTopics: ["Immune system", "Common diseases", "Prevention", "Treatment"]
  },
  {
    number: 11,
    title: "Enhancement of Food Production",
    color: "from-teal-500 to-cyan-500",
    description: "Explore modern agriculture and food production",
    keyTopics: ["Plant breeding", "Animal husbandry", "Food technology", "Sustainable farming"]
  },
  {
    number: 12,
    title: "Biotechnology",
    color: "from-indigo-500 to-violet-500",
    description: "Study genetic engineering and biotechnology applications",
    keyTopics: ["Genetic engineering", "Applications", "Tools and techniques", "Ethics"]
  },
  {
    number: 13,
    title: "Organisms and Populations",
    color: "from-emerald-500 to-teal-500",
    description: "Learn about population ecology and interactions",
    keyTopics: ["Population dynamics", "Interactions", "Growth patterns", "Adaptations"]
  },
  {
    number: 14,
    title: "Ecosystems and Energy Flow",
    color: "from-blue-500 to-sky-500",
    description: "Understand ecosystem dynamics and energy transfer",
    keyTopics: ["Energy flow", "Food chains", "Nutrient cycles", "Ecological pyramids"]
  },
  {
    number: 15,
    title: "Biodiversity, Conservation and Environmental Issues",
    color: "from-green-500 to-lime-500",
    description: "Study biodiversity and environmental conservation",
    keyTopics: ["Biodiversity types", "Conservation", "Environmental issues", "Sustainable development"]
  }
];

export default function BiologyChaptersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Maharashtra Board Class 12 Biology
        </h1>
        <p className="text-muted-foreground text-center mb-8 text-lg">
          Complete study material with chapter-wise notes, questions, and solutions
        </p>

        <div className="space-y-6">
          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={`/boards/msbshse/class-12/biology/chapter-${chapter.number}`}>
                <Card className="p-6 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${chapter.color} text-white font-bold transform group-hover:scale-110 transition-transform duration-300`}>
                      {chapter.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className={`text-xl font-semibold bg-gradient-to-r ${chapter.color} bg-clip-text text-transparent group-hover:scale-[1.02] transition-transform duration-300`}>
                            {chapter.title}
                          </h2>
                          <p className="text-muted-foreground mt-1 group-hover:text-foreground transition-colors duration-300">
                            {chapter.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {chapter.keyTopics.map((topic, i) => (
                          <span 
                            key={i} 
                            className="text-xs px-2 py-1 rounded-full bg-background border group-hover:border-primary/50 transition-colors duration-300"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

         {/* Rich Content for SEO */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold mb-4 text-center">Chapter Overview</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border rounded-lg">
              <thead className="bg-accent">
                <tr>
                  <th className="p-3 text-left">Chapter</th>
                  <th className="p-3 text-left">Key Concepts</th>
                  <th className="p-3 text-left">Weightage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Chapters 1-2</td>
                  <td className="p-3 border">Reproduction in plants and animals</td>
                  <td className="p-3 border">20%</td>
                </tr>
                <tr>
                  <td className="p-3 border">Chapters 3-4</td>
                  <td className="p-3 border">Genetics and molecular biology</td>
                  <td className="p-3 border">25%</td>
                </tr>
                <tr>
                  <td className="p-3 border">Chapters 5-7</td>
                  <td className="p-3 border">Evolution and plant physiology</td>
                  <td className="p-3 border">20%</td>
                </tr>
                <tr>
                  <td className="p-3 border">Chapters 8-10</td>
                  <td className="p-3 border">Human physiology and health</td>
                  <td className="p-3 border">20%</td>
                </tr>
                <tr>
                  <td className="p-3 border">Chapters 11-15</td>
                  <td className="p-3 border">Biotechnology and environmental biology</td>
                  <td className="p-3 border">15%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <article className="mt-16 prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Complete Biology Study Guide
          </h2>

          <div className="bg-accent/50 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">Why Choose Our Study Material?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Star className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Comprehensive Coverage</h4>
                  <p className="text-muted-foreground">Detailed notes and solutions for every topic</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Expert-Verified Content</h4>
                  <p className="text-muted-foreground">Materials reviewed by experienced educators</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ArrowRight className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Interactive Learning</h4>
                  <p className="text-muted-foreground">Engaging content with visual aids</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Exam-Focused</h4>
                  <p className="text-muted-foreground">Aligned with board exam patterns</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-center">Study Tips and Resources</h3>
            
            <div className="bg-accent/30 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Effective Study Strategies</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Regular Practice:</strong> Solve numerical problems and previous year questions</li>
                <li><strong>Visual Learning:</strong> Create mind maps for complex concepts</li>
                <li><strong>Time Management:</strong> Allocate study time based on chapter weightage</li>
                <li><strong>Revision:</strong> Regular revision of important concepts</li>
              </ul>
            </div>

            <div className="bg-accent/30 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Exam Preparation Guidelines</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Focus Areas:</strong> Concentrate on high-weightage chapters</li>
                <li><strong>Practice Tests:</strong> Regular mock tests for time management</li>
                <li><strong>Diagram Practice:</strong> Perfect biological diagrams for better scores</li>
                <li><strong>Revision Strategy:</strong> Create short notes for quick revision</li>
              </ul>
            </div>
          </div>
        </article>
      </motion.div>
    </div>
  );
}