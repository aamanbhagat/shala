
import { BookMarked, GanttChart, BookOpen, School, GraduationCap, Award, Trophy, Star, Compass, Globe, Lightbulb } from "lucide-react";

export const boards = {
    state: [
        { id: "msbshse", name: "Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)", color: "from-orange-500/20 to-red-500/20 dark:from-orange-500/30 dark:to-red-500/30", icon: School, logo: "/logos/msbshse-logo.png", description: "Maharashtra State Board of Secondary and Higher Secondary Education" },
        { id: "rbse", name: "Board of Secondary Education, Rajasthan (RBSE)", color: "from-amber-500/20 to-yellow-500/20 dark:from-amber-500/30 dark:to-yellow-500/30", icon: BookOpen, logo: "/logos/rbse-logo.png", description: "Board of Secondary Education, Rajasthan" },
        { id: "up-board", name: "Uttar Pradesh Board of High School and Intermediate Education (UP Board)", color: "from-emerald-500/20 to-green-500/20 dark:from-emerald-500/30 dark:to-green-500/30", icon: GraduationCap, logo: "/logos/up-board-logo.png", description: "Uttar Pradesh Board of High School and Intermediate Education" },
        { id: "tn-board", name: "Tamil Nadu State Board of School Examination", color: "from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/30 dark:to-blue-500/30", icon: Award, logo: "/logos/tn-board-logo.png", description: "Tamil Nadu State Board of School Examination" },
        { id: "bseap", name: "Board of Secondary Education, Andhra Pradesh (BSEAP)", color: "from-violet-500/20 to-purple-500/20 dark:from-violet-500/30 dark:to-purple-500/30", icon: Trophy, logo: "/logos/bseap-logo.png", description: "Board of Secondary Education, Andhra Pradesh" },
        { id: "wbbse", name: "West Bengal Board of Secondary Education (WBBSE)", color: "from-fuchsia-500/20 to-pink-500/20 dark:from-fuchsia-500/30 dark:to-pink-500/30", icon: Star, logo: "/logos/wbbse-logo.png", description: "West Bengal Board of Secondary Education" },
    ],
    national: [
        { id: "cbse", name: "Central Board of Secondary Education (CBSE)", color: "from-blue-600/20 to-indigo-600/20 dark:from-blue-500/30 dark:to-indigo-500/30", icon: BookMarked, logo: "/logos/cbse-logo.png", description: "Central Board of Secondary Education" },
        { id: "cisce", name: "Council for the Indian School Certificate Examinations (CISCE) – ICSE & ISC", color: "from-sky-500/20 to-blue-500/20 dark:from-sky-500/30 dark:to-blue-500/30", icon: GanttChart, logo: "/logos/cisce-logo.png", description: "Council for the Indian School Certificate Examinations" },
        { id: "nios", name: "National Institute of Open Schooling (NIOS)", color: "from-teal-500/20 to-emerald-500/20 dark:from-teal-500/30 dark:to-emerald-500/30", icon: Compass, logo: "/logos/nios-logo.png", description: "National Institute of Open Schooling" },
    ],
    international: [
        { id: "ib", name: "International Baccalaureate (IB)", color: "from-violet-600/20 to-fuchsia-600/20 dark:from-violet-500/30 dark:to-fuchsia-500/30", icon: Globe, logo: "/logos/ib-logo.png", description: "International Baccalaureate" },
        { id: "caie", name: "Cambridge Assessment International Education (CAIE) – IGCSE", color: "from-rose-500/20 to-orange-500/20 dark:from-rose-500/30 dark:to-orange-500/30", icon: Lightbulb, logo: "/logos/caie-logo.png", description: "Cambridge Assessment International Education - IGCSE" },
    ],
};

export const getAllBoards = () => {
    return [...boards.national, ...boards.state, ...boards.international];
};

export const classes = [
    {
        id: "class-1",
        name: "Class 1",
        color: "from-yellow-500/40 to-orange-500/40 dark:from-yellow-500/30 dark:to-orange-500/30",
        description: "Foundational learning focused on play and curiosity (Yellow/Orange for Joy & Energy)"
    },
    {
        id: "class-2",
        name: "Class 2",
        color: "from-orange-500/40 to-red-500/40 dark:from-orange-500/30 dark:to-red-500/30",
        description: "Active learning and exploration (Orange/Red for Creativity & Action)"
    },
    {
        id: "class-3",
        name: "Class 3",
        color: "from-red-500/40 to-pink-500/40 dark:from-red-500/30 dark:to-pink-500/30",
        description: "Social and expressive development (Red/Pink for Passion & Confidence)"
    },
    {
        id: "class-4",
        name: "Class 4",
        color: "from-pink-500/40 to-purple-500/40 dark:from-pink-500/30 dark:to-purple-500/30",
        description: "Expanding imagination and creativity (Pink/Purple for Imagination & Warmth)"
    },
    {
        id: "class-5",
        name: "Class 5",
        color: "from-purple-500/40 to-indigo-500/40 dark:from-purple-500/30 dark:to-indigo-500/30",
        description: "Building wisdom and critical thinking (Purple/Indigo for Wisdom & Ambition)"
    },
    {
        id: "class-6",
        name: "Class 6",
        color: "from-indigo-500/40 to-blue-500/40 dark:from-indigo-500/30 dark:to-blue-500/30",
        description: "Logical reasoning and structure (Indigo/Blue for Mystery & Trust)"
    },
    {
        id: "class-7",
        name: "Class 7",
        color: "from-blue-500/40 to-sky-500/40 dark:from-blue-500/30 dark:to-sky-500/30",
        description: "Developing trust and stability (Blue/Sky for Trust & Intelligence)"
    },
    {
        id: "class-8",
        name: "Class 8",
        color: "from-sky-500/40 to-cyan-500/40 dark:from-sky-500/30 dark:to-cyan-500/30",
        description: "Calmness and open communication (Sky/Cyan for Stability & Communication)"
    },
    {
        id: "class-9",
        name: "Class 9",
        color: "from-cyan-500/40 to-teal-500/40 dark:from-cyan-500/30 dark:to-teal-500/30",
        description: "Balance and clarity of thought (Pre-Boards) (Cyan/Teal for Balance & Clarity)"
    },
    {
        id: "class-10",
        name: "Class 10",
        color: "from-teal-500/40 to-emerald-500/40 dark:from-teal-500/30 dark:to-emerald-500/30",
        description: "Growth, harmony, and major milestones (Boards) (Teal/Emerald for Growth & Harmony)"
    },
    {
        id: "class-11",
        name: "Class 11",
        color: "from-emerald-500/40 to-green-500/40 dark:from-emerald-500/30 dark:to-green-500/30",
        description: "New beginnings and vitality (Emerald/Green for Success & Prosperity)"
    },
    {
        id: "class-12",
        name: "Class 12",
        color: "from-green-500/40 to-lime-500/40 dark:from-green-500/30 dark:to-lime-500/30",
        description: "Mastery, accomplishment, and future readiness (Green/Lime for Vision & Freshness)"
    },
];

export const languages = [
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

export const subjects = [
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
