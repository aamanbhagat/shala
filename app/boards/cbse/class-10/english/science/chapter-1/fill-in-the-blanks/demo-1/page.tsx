
"use client";

import { FillInTheBlanksTemplate } from "@/components/fill-in-the-blanks-template";

export default function Page() {
    const data = {
        title: "CBSE Class 10 Science - Chemical Reactions",
        description: "Fill in the blanks practice for CBSE Class 10 Science Chapter 1 Chemical Reactions and Equations.",
        keywords: "CBSE, Class 10, Science, Chemical Reactions, Fill in the blanks",
        canonicalUrl: "https://eduhub.com/boards/cbse/class-10/english/science/chapter-1/fill-in-the-blanks/demo-1",
        boardName: "CBSE",
        className: "Class 10",
        subjectName: "Science",
        chapterName: "Chemical Reactions and Equations",
        chapterNumber: 1,
        question: "Magnesium ribbon is rubbed before burning because it has a coating of _________.",
        options: [
            "basic magnesium carbonate",
            "basic magnesium oxide",
            "basic magnesium sulphide",
            "basic magnesium chloride"
        ],
        correctAnswerIndex: 1,
        explanation: {
            text: "Magnesium reacts with oxygen present in the atmosphere to form a protective layer of magnesium oxide on its surface.",
            points: [
                "This layer interferes with the burning of magnesium.",
                "Rubbing cleans the layer so the metal can burn properly."
            ]
        },
        relatedQuestions: [
            "Why is respiration considered an exothermic reaction?",
            "What is a balanced chemical equation?",
            "Why are decomposition reactions called the opposite of combination reactions?"
        ],
        backLink: "/boards/cbse/class-10/english/science",
        previousLink: "#",
        nextLink: "#"
    };

    return <FillInTheBlanksTemplate data={data} />;
}
