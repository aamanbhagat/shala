
"use client";

import { QuestionAnswerTemplate, QuestionAnswerData } from "@/components/question-answer-template";

export default function Page() {
    const data: QuestionAnswerData = {
        title: "How are organisms classified? - CBSE Class 10 Science",
        description: "Classification of organisms based on characteristics and evolution.",
        keywords: "CBSE, Class 10, Science, Classification, Organisms, Biology",
        canonicalUrl: "https://eduhub.com/boards/cbse/class-10/english/science/chapter-1/short-answer/demo-1",
        boardName: "CBSE",
        className: "Class 10",
        subjectName: "Science",
        chapterName: "Life Processes",
        chapterNumber: 6,
        type: "Long Answer",
        question: "How are organisms classified?",
        answer: [
            {
                type: 'paragraph',
                content: "The classification of living organisms is based on their **similar characteristics**, **body structure**, and **biological features**."
            },
            {
                type: 'list',
                content: [
                    "All organisms are first classified into **living** and **non-living** categories.",
                    "Then, living organisms are further divided into two main groups: **Plants** and **Animals**.",
                    "Animals are classified into different groups based on their body structure, such as:"
                ]
            },
            {
                type: 'list',
                content: [
                    "**Vertebrates** (Ksheryuki) and **Invertebrates** (Aksheruki)",
                    "**Mammals**, **Birds**, **Reptiles**, **Amphibians**, and **Fishes**"
                ]
            },
            {
                type: 'paragraph',
                content: "The scientist **Carl Linnaeus** developed the **Binomial Nomenclature** system, which is used for the classification of living organisms."
            }
        ],
        relatedQuestions: [
            "What is the difference between autotrophs and heterotrophs?",
            "Explain the process of photosynthesis.",
            "Describe the function of the heart in humans.",
            "What are the components of xylem tissue?"
        ],
        backLink: "/boards/cbse/class-10/english/science",
        previousLink: "#",
        nextLink: "#"
    };

    return <QuestionAnswerTemplate data={data} />;
}
