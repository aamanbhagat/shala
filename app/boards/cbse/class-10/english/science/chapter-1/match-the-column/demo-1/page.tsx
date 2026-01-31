
"use client";

import { MatchTheColumnTemplate, MatchTheColumnData } from "@/components/match-the-column-template";

export default function Page() {
    const data: MatchTheColumnData = {
        title: "Match the chemical reactions - CBSE Class 10 Science",
        description: "Match the column practice for chemical reactions and equations.",
        keywords: "CBSE, Class 10, Science, Chemical Reactions, Match the column",
        canonicalUrl: "https://eduhub.com/boards/cbse/class-10/english/science/chapter-1/match-the-column/demo-1",
        boardName: "CBSE",
        className: "Class 10",
        subjectName: "Science",
        chapterName: "Chemical Reactions and Equations",
        chapterNumber: 1,
        question: {
            columnA: [
                "$2Mg + O_2 \\rightarrow 2MgO$",
                "$Zn + H_2SO_4 \\rightarrow ZnSO_4 + H_2$",
                "$CaO + H_2O \\rightarrow Ca(OH)_2 + \\text{Heat}$",
                "$CaCO_3 \\rightarrow CaO + CO_2$"
            ],
            columnB: [
                "Decomposition reaction",
                "Combination reaction",
                "Precipitation reaction",
                "Displacement reaction",
                "Exothermic reaction"
            ]
        },
        pairs: [
            { id: "1", left: "$2Mg + O_2 \\rightarrow 2MgO$", right: "Combination reaction" },
            { id: "2", left: "$Zn + H_2SO_4 \\rightarrow ZnSO_4 + H_2$", right: "Displacement reaction" },
            { id: "3", left: "$CaO + H_2O \\rightarrow Ca(OH)_2 + \\text{Heat}$", right: "Exothermic reaction" },
            { id: "4", left: "$CaCO_3 \\rightarrow CaO + CO_2$", right: "Decomposition reaction" },
        ],
        explanation: {
            text: "Understanding the type of chemical reactions is crucial.",
            points: [
                "$Mg + O_2$ is a combination because two reactants form one product.",
                "$Zn$ displaces Hydrogen, so it is displacement.",
                "Quick lime reacting with water releases heat (Exothermic).",
                "Limestone heating breaks it down (Decomposition)."
            ]
        },
        relatedQuestions: [
            "What is a redox reaction?",
            "Define corrosion.",
            "Explain rancidity."
        ],
        backLink: "/boards/cbse/class-10/english/science",
        previousLink: "#",
        nextLink: "#"
    };

    return <MatchTheColumnTemplate data={data} />;
}
