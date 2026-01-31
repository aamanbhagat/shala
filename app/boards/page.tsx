"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  School,
  Globe,
  Award,
  Trophy,
  Star,
  Compass,
  BookMarked,
  GanttChart,
  Lightbulb
} from "lucide-react";

const boards = [
  {
    id: "cbse",
    name: "CBSE",
    icon: BookMarked,
    description: "Central Board of Secondary Education",
    logo: "/logos/cbse-logo.png"
  },
  {
    id: "cisce",
    name: "CISCE (ICSE & ISC)",
    icon: GanttChart,
    description: "Council for the Indian School Certificate Examinations",
    logo: "/logos/cisce-logo.png"
  },
  {
    id: "rbse",
    name: "Rajasthan Board (RBSE)",
    icon: BookOpen,
    description: "Board of Secondary Education, Rajasthan",
    logo: "/logos/rbse-logo.png"
  },
  {
    id: "msbshse",
    name: "Maharashtra State Board (MSBSHSE)",
    icon: School,
    description: "Maharashtra State Board of Secondary and Higher Secondary Education",
    logo: "/logos/msbshse-logo.png"
  },
  {
    id: "up-board",
    name: "UP Board",
    icon: GraduationCap,
    description: "Uttar Pradesh Board of High School and Intermediate Education",
    logo: "/logos/up-board-logo.png"
  },
  {
    id: "tn-board",
    name: "Tamil Nadu Board",
    icon: Award,
    description: "Tamil Nadu State Board of School Examination",
    logo: "/logos/tn-board-logo.png"
  },
  {
    id: "bseap",
    name: "Andhra Pradesh Board (BSEAP)",
    icon: Trophy,
    description: "Board of Secondary Education, Andhra Pradesh",
    logo: "/logos/bseap-logo.png"
  },
  {
    id: "wbbse",
    name: "West Bengal Board (WBBSE)",
    icon: Star,
    description: "West Bengal Board of Secondary Education",
    logo: "/logos/wbbse-logo.png"
  },
  {
    id: "nios",
    name: "NIOS",
    icon: Compass,
    description: "National Institute of Open Schooling",
    logo: "/logos/nios-logo.png"
  },
  {
    id: "ib",
    name: "IB",
    icon: Globe,
    description: "International Baccalaureate",
    logo: "/logos/ib-logo.png"
  },
  {
    id: "caie",
    name: "Cambridge (CAIE)",
    icon: Lightbulb,
    description: "Cambridge Assessment International Education - IGCSE",
    logo: "/logos/caie-logo.png"
  },
];

export default function BoardsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Educational Boards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boards.map((board, index) => (
          <motion.div
            key={board.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/boards/${board.id}`}>
              <div className="group p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-200 hover:scale-105">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-16 h-16 overflow-hidden bg-primary/5 rounded-lg">
                        <Image
                          src={board.logo}
                          alt={`${board.name} logo`}
                          fill
                          className="object-contain p-2"
                          priority={index < 6}
                        />
                      </div>
                      <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <board.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {board.name}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {board.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}