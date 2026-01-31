
"use client";

import { FillInTheBlanksTemplate } from "@/components/fill-in-the-blanks-template";

export default function Page() {
    const data = {
        title: "MSBSHSE Class 12 Biology - Reproduction",
        description: "Fill in the blanks practice for MSBSHSE Class 12 Biology Chapter 1.",
        keywords: "MSBSHSE, Class 12, Biology, Reproduction",
        canonicalUrl: "https://eduhub.com/boards/msbshse/class-12/english/biology/chapter-1/fill-in-the-blanks/demo-2",
        boardName: "MSBSHSE",
        className: "Class 12",
        subjectName: "Biology",
        chapterName: "Reproduction in Lower and Higher Plants",
        chapterNumber: 1,
        question: "The transfer of pollen grains from anther to stigma of the same flower is called _________.",
        options: [
            "Autogamy",
            "Geitonogamy",
            "Xenogamy",
            "Hybridization"
        ],
        correctAnswerIndex: 0,
        explanation: {
            text: "Autogamy is self-pollination within the same flower.",
            points: [
                "It requires perfect flowers (hermaphrodite).",
                "It promotes homozygosity."
            ]
        },
        relatedQuestions: [
            "Define double fertilization.",
            "What is apomixis?",
            "Explain the structure of anther."
        ],
        backLink: "/boards/msbshse/class-12/english/biology/chapter-1",
        previousLink: "#",
        nextLink: "#"
    };

    return <FillInTheBlanksTemplate data={data} />;
}
