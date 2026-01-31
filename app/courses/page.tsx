import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Courses & Subjects | EduHub",
    description: "Browse syllabus and courses for all classes.",
};

export default function CoursesPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Courses & Subjects
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Explore detailed syllabi and learning tracks for every subject.
                Content is being organized.
            </p>
            <Button size="lg" variant="outline" asChild>
                <Link href="/">Back Home</Link>
            </Button>
        </div>
    );
}
