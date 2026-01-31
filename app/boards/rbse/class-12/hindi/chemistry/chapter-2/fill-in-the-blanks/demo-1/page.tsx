
"use client";

import { FillInTheBlanksTemplate } from "@/components/fill-in-the-blanks-template";

export default function Page() {
    const data = {
        title: "RBSE Class 12 Chemistry (Hindi) - Solutions",
        description: "Fill in the blanks practice for RBSE Class 12 Chemistry Chapter 2 Solutions.",
        keywords: "RBSE, Class 12, Chemistry, Solutions, Hindi medium",
        canonicalUrl: "https://eduhub.com/boards/rbse/class-12/hindi/chemistry/chapter-2/fill-in-the-blanks/demo-1",
        boardName: "RBSE",
        className: "Class 12",
        subjectName: "Chemistry",
        chapterName: "Solutions (विलयन)",
        chapterNumber: 2,
        question: "मोलरता (Molarity) ताप के साथ _________ होती है।",
        options: [
            "परिवर्तित (Changes)",
            "अपरिवर्तित (Remains constant)",
            "शून्य (Zero)",
            "इनमें से कोई नहीं (None of these)"
        ],
        correctAnswerIndex: 0,
        explanation: {
            text: "मोलरता आयतन पर निर्भर करती है, और आयतन ताप के साथ बदलता है।",
            points: [
                "Molarity depends on volume.",
                "Volume changes with temperature.",
                "Therefore, Molarity changes with temperature."
            ]
        },
        relatedQuestions: [
            "What is Henry's Law? (हेनरी का नियम क्या है?)",
            "Define Osmotic Pressure. (परासरण दाब को परिभाषित करें)",
            "Difference between Ideal and Non-ideal solutions."
        ],
        backLink: "/boards/rbse/class-12/hindi/chemistry",
        previousLink: "#",
        nextLink: "#"
    };

    return <FillInTheBlanksTemplate data={data} />;
}
