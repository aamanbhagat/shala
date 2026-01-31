"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Metadata } from "next";
import Head from "next/head";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HelpCircle, MapPin, Flag, Globe } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { boards, classes, languages, subjects } from "@/lib/data";

import { useSearchParams } from "next/navigation";

export default function ExplorePage() {
  const searchParams = useSearchParams();
  const [selectedBoard, setSelectedBoard] = useState(searchParams.get("board") || "");
  const [selectedClass, setSelectedClass] = useState(searchParams.get("class") || "");
  const [selectedLanguage, setSelectedLanguage] = useState(searchParams.get("language") || "");
  const [selectedSubject, setSelectedSubject] = useState(searchParams.get("subject") || "");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const boardName = selectedBoard ? getBoardName(selectedBoard) : "";
    const className = selectedClass ? classes.find(c => c.id === selectedClass)?.name : "";
    const subjectName = selectedSubject ? subjects.find(s => s.id === selectedSubject)?.name : "";

    document.title = `${boardName ? `${boardName} - ` : ""}${className ? `${className} - ` : ""}${subjectName ? `${subjectName} - ` : ""}Study Solutions | EduHub`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content",
        `Find comprehensive study solutions${boardName ? ` for ${boardName}` : ""}${className ? ` ${className}` : ""}${subjectName ? ` in ${subjectName}` : ""}. Access quality educational resources, study materials, and more.`
      );
    }
  }, [selectedBoard, selectedClass, selectedSubject]);

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const handleProceed = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    window.location.href = `/boards/${selectedBoard}/${selectedClass}/${selectedLanguage}/${selectedSubject}`;
  };

  const isComplete = selectedBoard && selectedClass && selectedLanguage && selectedSubject;

  const getBoardName = (boardId: string) => {
    for (const category of Object.values(boards)) {
      const board = category.find(b => b.id === boardId);
      if (board) return board.name;
    }
    return "";
  };

  const SelectionSummary = () => (
    <div className="text-sm text-muted-foreground mt-4">
      <span className="font-medium">Your Selection: </span>
      {[
        selectedClass && classes.find(c => c.id === selectedClass)?.name,
        selectedBoard && getBoardName(selectedBoard),
        selectedLanguage && languages.find(l => l.id === selectedLanguage)?.name,
        selectedSubject && subjects.find(s => s.id === selectedSubject)?.name,
      ]
        .filter(Boolean)
        .join(" → ")}
    </div>
  );

  const CategoryLabel = ({ children, icon: Icon }: { children: React.ReactNode; icon: any }) => (
    <SelectLabel className="flex items-center gap-2 text-base font-bold bg-muted/80 backdrop-blur-sm shadow-sm py-3 px-3 border-y border-border/50 sticky top-0 z-20 text-primary">
      <Icon className="w-4 h-4 text-primary" />
      {children}
    </SelectLabel>
  );

  const Option = ({ item }: { item: { id: string; name: string; color: string } }) => (
    <SelectItem
      key={item.id}
      value={item.id}
      className={`relative overflow-hidden transition-all duration-300 hover:bg-gradient-to-r ${item.color} group`}
    >
      <span className="relative z-10 transition-colors group-hover:text-primary">
        {item.name}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
    </SelectItem>
  );

  return (
    <>
      <Head>
        <title>Explore Educational Resources and Study Materials | EduHub</title>
        <meta name="description" content="Find comprehensive study solutions for various educational boards, classes, and subjects. Access quality educational resources, study materials, and more." />
        <meta name="keywords" content="education, study materials, CBSE, ICSE, state boards, online learning, educational resources" />
        <link rel="canonical" href="https://eduhub.com/explore" />
      </Head>

      <div className="min-h-screen bg-background py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto max-w-2xl"
        >
          <h1 className="text-4xl font-bold text-center mb-8">Select Your Course Details</h1>

          <Card className="p-8 space-y-8 bg-card/80 dark:bg-card/40 backdrop-blur-xl border-primary/10 shadow-2xl relative overflow-hidden">
            {/* Decorative background gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Class Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold tracking-wide text-foreground/80 uppercase">Class</label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Select your class level</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger className="h-12 border-primary/10 bg-background/50 focus:ring-primary/20 transition-all hover:bg-background/80 hover:border-primary/30">
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[50vh]">
                    {classes.map((classLevel) => (
                      <Option key={classLevel.id} item={classLevel} />
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Board Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold tracking-wide text-foreground/80 uppercase">Board</label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Select your educational board to unlock language options</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Select value={selectedBoard} onValueChange={setSelectedBoard}>
                  <SelectTrigger className="h-12 border-primary/10 bg-background/50 focus:ring-primary/20 transition-all hover:bg-background/80 hover:border-primary/30">
                    <SelectValue placeholder="Select Board" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[50vh]">
                    <SelectGroup>
                      <CategoryLabel icon={MapPin}>State Boards</CategoryLabel>
                      {boards.state.map((board) => (
                        <Option key={board.id} item={board} />
                      ))}
                    </SelectGroup>
                    <SelectSeparator className="my-2" />
                    <SelectGroup>
                      <CategoryLabel icon={Flag}>National-Level Boards</CategoryLabel>
                      {boards.national.map((board) => (
                        <Option key={board.id} item={board} />
                      ))}
                    </SelectGroup>
                    <SelectSeparator className="my-2" />
                    <SelectGroup>
                      <CategoryLabel icon={Globe}>International Boards in India</CategoryLabel>
                      {boards.international.map((board) => (
                        <Option key={board.id} item={board} />
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Language Selection - Dependent on Board */}
              <motion.div
                className={`space-y-3 ${!selectedBoard ? 'opacity-50 pointer-events-none grayscale' : ''} transition-all duration-300`}
              >
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold tracking-wide text-foreground/80 uppercase">Language Medium</label>
                  {!selectedBoard && (
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded">Select Board First</span>
                  )}
                </div>
                <Select
                  value={selectedLanguage}
                  onValueChange={setSelectedLanguage}
                  disabled={!selectedBoard}
                >
                  <SelectTrigger className="h-12 border-primary/10 bg-background/50 focus:ring-primary/20 transition-all hover:bg-background/80 hover:border-primary/30">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[50vh]">
                    {languages.map((language) => (
                      <Option key={language.id} item={language} />
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Subject Selection - Dependent on Language */}
              <motion.div
                className={`space-y-3 ${!selectedLanguage ? 'opacity-50 pointer-events-none grayscale' : ''} transition-all duration-300`}
              >
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold tracking-wide text-foreground/80 uppercase">Subject</label>
                  {!selectedLanguage && (
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded">Select Language First</span>
                  )}
                </div>
                <Select
                  value={selectedSubject}
                  onValueChange={setSelectedSubject}
                  disabled={!selectedLanguage}
                >
                  <SelectTrigger className="h-12 border-primary/10 bg-background/50 focus:ring-primary/20 transition-all hover:bg-background/80 hover:border-primary/30">
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[50vh]">
                    {subjects.map((subject) => (
                      <Option key={subject.id} item={subject} />
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>
            </div>

            <AnimatePresence>
              {isComplete && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: 10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: 10 }}
                  className="space-y-6 pt-4 border-t border-primary/5 overflow-hidden"
                >
                  <SelectionSummary />

                  <div className="pt-2">
                    <Button
                      className="w-full h-12 text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                      size="lg"
                      onClick={handleProceed}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Loading...
                        </div>
                      ) : (
                        "View Study Solutions"
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="sr-only">About Our Educational Resources</h2>
            <div className="sr-only">
              <p>
                EduHub provides comprehensive educational resources for students across various boards including CBSE, ICSE, State Boards, and International Boards.
                Find study materials, solutions, and resources for all subjects and classes.
              </p>
              <ul>
                <li>Access quality educational content</li>
                <li>Study materials in multiple languages</li>
                <li>Comprehensive subject coverage</li>
                <li>Board-specific resources</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}