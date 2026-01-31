
"use client";

import { FillInTheBlanksTemplate } from "@/components/fill-in-the-blanks-template";

export default function Page() {
    const data = {
        title: "CISCE Class 10 History - The First War of Independence",
        description: "Fill in the blanks practice for CISCE Class 10 History Chapter 1.",
        keywords: "CISCE, ICSE, Class 10, History, 1857 Revolt",
        canonicalUrl: "https://eduhub.com/boards/cisce/class-10/english/history/chapter-1/fill-in-the-blanks/demo-1",
        boardName: "CISCE",
        className: "Class 10",
        subjectName: "History",
        chapterName: "The First War of Independence, 1857",
        chapterNumber: 1,
        question: "The First War of Independence started in Meerut on _________.",
        options: [
            "May 10, 1857",
            "May 11, 1857",
            "June 10, 1857",
            "April 10, 1857"
        ],
        correctAnswerIndex: 0,
        explanation: {
            text: "The outbreak of the revolt began in Meerut on May 10, 1857.",
            points: [
                "Sepoys refused to use the greased cartridges.",
                "They broke open the jail and marched to Delhi."
            ]
        },
        relatedQuestions: [
            "Who was Mangal Pandey?",
            "What was the immediate cause of the revolt?",
            "Why did the revolt fail?"
        ],
        backLink: "/boards/cisce/class-10/english/history",
        previousLink: "#",
        nextLink: "#"
    };

    return <FillInTheBlanksTemplate data={data} />;
}
