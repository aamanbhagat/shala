"use client";

import { useState, useEffect } from "react";
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

const boards = {
  state: [
    { id: "msbshse", name: "Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)", color: "from-orange-500/20 to-red-500/20 dark:from-orange-500/30 dark:to-red-500/30" },
    { id: "rbse", name: "Board of Secondary Education, Rajasthan (RBSE)", color: "from-amber-500/20 to-yellow-500/20 dark:from-amber-500/30 dark:to-yellow-500/30" },
    { id: "up-board", name: "Uttar Pradesh Board of High School and Intermediate Education (UP Board)", color: "from-emerald-500/20 to-green-500/20 dark:from-emerald-500/30 dark:to-green-500/30" },
    { id: "tn-board", name: "Tamil Nadu State Board of School Examination", color: "from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/30 dark:to-blue-500/30" },
    { id: "bseap", name: "Board of Secondary Education, Andhra Pradesh (BSEAP)", color: "from-violet-500/20 to-purple-500/20 dark:from-violet-500/30 dark:to-purple-500/30" },
    { id: "wbbse", name: "West Bengal Board of Secondary Education (WBBSE)", color: "from-fuchsia-500/20 to-pink-500/20 dark:from-fuchsia-500/30 dark:to-pink-500/30" },
  ],
  national: [
    { id: "cbse", name: "Central Board of Secondary Education (CBSE)", color: "from-blue-600/20 to-indigo-600/20 dark:from-blue-500/30 dark:to-indigo-500/30" },
    { id: "cisce", name: "Council for the Indian School Certificate Examinations (CISCE) – ICSE & ISC", color: "from-sky-500/20 to-blue-500/20 dark:from-sky-500/30 dark:to-blue-500/30" },
    { id: "nios", name: "National Institute of Open Schooling (NIOS)", color: "from-teal-500/20 to-emerald-500/20 dark:from-teal-500/30 dark:to-emerald-500/30" },
  ],
  international: [
    { id: "ib", name: "International Baccalaureate (IB)", color: "from-violet-600/20 to-fuchsia-600/20 dark:from-violet-500/30 dark:to-fuchsia-500/30" },
    { id: "caie", name: "Cambridge Assessment International Education (CAIE) – IGCSE", color: "from-rose-500/20 to-orange-500/20 dark:from-rose-500/30 dark:to-orange-500/30" },
  ],
};

const classes = Array.from({ length: 12 }, (_, i) => ({
  id: `class-${i + 1}`,
  name: `Class ${i + 1}`,
  color: `from-${['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo'][i]}-500/20 to-${['orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet'][i]}-500/20 dark:from-${['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo'][i]}-500/30 dark:to-${['orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet'][i]}-500/30`
}));

const languages = [
  { id: "english", name: "English", color: "from-blue-500/20 to-cyan-500/20 dark:from-blue-500/30 dark:to-cyan-500/30" },
  { id: "hindi", name: "Hindi", color: "from-orange-500/20 to-red-500/20 dark:from-orange-500/30 dark:to-red-500/30" },
  { id: "marathi", name: "Marathi", color: "from-yellow-500/20 to-amber-500/20 dark:from-yellow-500/30 dark:to-amber-500/30" },
  { id: "tamil", name: "Tamil", color: "from-green-500/20 to-emerald-500/20 dark:from-green-500/30 dark:to-emerald-500/30" },
  { id: "telugu", name: "Telugu", color: "from-purple-500/20 to-violet-500/20 dark:from-purple-500/30 dark:to-violet-500/30" },
  { id: "bengali", name: "Bengali", color: "from-pink-500/20 to-rose-500/20 dark:from-pink-500/30 dark:to-rose-500/30" },
  { id: "gujarati", name: "Gujarati", color: "from-indigo-500/20 to-blue-500/20 dark:from-indigo-500/30 dark:to-blue-500/30" },
  { id: "kannada", name: "Kannada", color: "from-teal-500/20 to-cyan-500/20 dark:from-teal-500/30 dark:to-cyan-500/30" },
  { id: "malayalam", name: "Malayalam", color: "from-lime-500/20 to-green-500/20 dark:from-lime-500/30 dark:to-green-500/30" },
];

const subjects = [
  { id: "mathematics", name: "Mathematics", color: "from-blue-500/20 to-indigo-500/20 dark:from-blue-500/30 dark:to-indigo-500/30" },
  { id: "science", name: "Science", color: "from-green-500/20 to-emerald-500/20 dark:from-green-500/30 dark:to-emerald-500/30" },
  { id: "english", name: "English", color: "from-purple-500/20 to-violet-500/20 dark:from-purple-500/30 dark:to-violet-500/30" },
  { id: "social-studies", name: "Social Studies", color: "from-orange-500/20 to-amber-500/20 dark:from-orange-500/30 dark:to-amber-500/30" },
  { id: "physics", name: "Physics", color: "from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/30 dark:to-blue-500/30" },
  { id: "chemistry", name: "Chemistry", color: "from-teal-500/20 to-cyan-500/20 dark:from-teal-500/30 dark:to-cyan-500/30" },
  { id: "biology", name: "Biology", color: "from-lime-500/20 to-green-500/20 dark:from-lime-500/30 dark:to-green-500/30" },
  { id: "computer-science", name: "Computer Science", color: "from-indigo-500/20 to-violet-500/20 dark:from-indigo-500/30 dark:to-violet-500/30" },
  { id: "economics", name: "Economics", color: "from-rose-500/20 to-pink-500/20 dark:from-rose-500/30 dark:to-pink-500/30" },
  { id: "business-studies", name: "Business Studies", color: "from-yellow-500/20 to-orange-500/20 dark:from-yellow-500/30 dark:to-orange-500/30" },
];

export default function ExplorePage() {
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
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

  useEffect(() => {
    setSelectedClass("");
    setSelectedLanguage("");
    setSelectedSubject("");
  }, [selectedBoard]);

  useEffect(() => {
    setSelectedLanguage("");
    setSelectedSubject("");
  }, [selectedClass]);

  useEffect(() => {
    setSelectedSubject("");
  }, [selectedLanguage]);

  const handleProceed = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    window.location.href = `/solutions?board=${selectedBoard}&class=${selectedClass}&language=${selectedLanguage}&subject=${selectedSubject}`;
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
        selectedBoard && getBoardName(selectedBoard),
        selectedClass && classes.find(c => c.id === selectedClass)?.name,
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
        <meta property="og:title" content="Explore Educational Resources and Study Materials | EduHub" />
        <meta property="og:description" content="Find comprehensive study solutions for various educational boards, classes, and subjects. Access quality educational resources, study materials, and more." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Explore Educational Resources and Study Materials | EduHub" />
        <meta name="twitter:description" content="Find comprehensive study solutions for various educational boards, classes, and subjects. Access quality educational resources, study materials, and more." />
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

          <Card className="p-6 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Board</label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger aria-label="Board Help">
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Select your educational board</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Select value={selectedBoard} onValueChange={setSelectedBoard}>
                  <SelectTrigger aria-label="Select Board">
                    <SelectValue placeholder="Select board" />
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
              </motion.div>
            </AnimatePresence>

            {selectedBoard && (
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Class</label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger aria-label="Class Help">
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Select your class level</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger aria-label="Select Class">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[50vh]">
                      {classes.map((classLevel) => (
                        <Option key={classLevel.id} item={classLevel} />
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              </AnimatePresence>
            )}

            {selectedClass && (
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Language Medium</label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger aria-label="Language Help">
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Select your preferred language</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger aria-label="Select Language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[50vh]">
                      {languages.map((language) => (
                        <Option key={language.id} item={language} />
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              </AnimatePresence>
            )}

            {selectedLanguage && (
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Subject</label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger aria-label="Subject Help">
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Select your subject</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger aria-label="Select Subject">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[50vh]">
                      {subjects.map((subject) => (
                        <Option key={subject.id} item={subject} />
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              </AnimatePresence>
            )}

            {selectedBoard && <SelectionSummary />}

            {isComplete && (
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300"
                    size="lg"
                    onClick={handleProceed}
                    disabled={!isComplete || isLoading}
                  >
                    {isLoading ? "Loading..." : "View Solutions"}
                  </Button>
                </motion.div>
              </AnimatePresence>
            )}
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