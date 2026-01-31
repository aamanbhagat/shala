
"use client";

import { QuestionAnswerTemplate, QuestionAnswerData } from "@/components/question-answer-template";

export default function Page() {
    const data: QuestionAnswerData = {
        title: "Explain the structure of Human Heart - CBSE Class 10 Science",
        description: "Detailed explanation of the structure and function of the human heart.",
        keywords: "CBSE, Class 10, Science, Human Heart, Biology, Circulatory System",
        canonicalUrl: "https://eduhub.com/boards/cbse/class-10/english/science/chapter-1/long-answer/demo-1",
        boardName: "CBSE",
        className: "Class 10",
        subjectName: "Science",
        chapterName: "Life Processes",
        chapterNumber: 6,
        type: "Long Answer",
        question: "Explain the structure and functioning of the human heart.",
        answer: [
            {
                type: 'paragraph',
                content: "The **human heart** is a muscular organ that pumps blood throughout the body. It plays a crucial role in the circulatory system, supplying oxygen and nutrients to tissues and removing carbon dioxide and other wastes."
            },
            {
                title: "Structure of the Heart",
                type: 'list',
                content: [
                    "**Four Chambers**: The heart is divided into four chambers. The two upper chambers are called **atria** (singular: atrium), and the two lower chambers are called **ventricles**.",
                    "**Left Atrium and Left Ventricle**: These chambers contain oxygenated blood.",
                    "**Right Atrium and Right Ventricle**: These chambers contain deoxygenated blood.",
                    "**Septum**: A muscular wall called the septum separates the right and left sides of the heart, preventing the mixing of oxygenated and deoxygenated blood.",
                    "**Valves**: Valves are present between the atria and ventricles to ensure that blood flows in only one direction."
                ]
            },
            {
                title: "Functioning (Double Circulation)",
                type: 'paragraph',
                content: "The human heart functions through a process called **double circulation**, which involves:"
            },
            {
                type: 'list',
                content: [
                    "**Pulmonary Circulation**: Deoxygenated blood from the body enters the right atrium, moves to the right ventricle, and is pumped to the lungs for oxygenation.",
                    "**Systemic Circulation**: Oxygenated blood from the lungs enters the left atrium, moves to the left ventricle, and is pumped to the rest of the body via the aorta."
                ]
            },
            {
                type: 'paragraph',
                content: "The rhythmic contraction and relaxation of the heart muscles constitute a **heartbeat**, maintaining a continuous flow of blood essential for life."
            }
        ],
        relatedQuestions: [
            "What is double circulation?",
            "Difference between arteries and veins.",
            "Explain the transport of water in plants."
        ],
        backLink: "/boards/cbse/class-10/english/science",
        previousLink: "#",
        nextLink: "#"
    };

    return <QuestionAnswerTemplate data={data} />;
}
