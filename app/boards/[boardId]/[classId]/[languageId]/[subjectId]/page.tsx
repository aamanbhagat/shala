
import { getAllBoards, classes, languages, subjects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, FileText } from "lucide-react";

interface PageProps {
    params: {
        boardId: string;
        classId: string;
        languageId: string;
        subjectId: string;
    };
}

export async function generateMetadata({ params }: PageProps) {
    const boards = getAllBoards();
    const board = boards.find((b) => b.id === params.boardId);
    const cls = classes.find((c) => c.id === params.classId);
    const lang = languages.find((l) => l.id === params.languageId);
    const subject = subjects.find((s) => s.id === params.subjectId);

    if (!board || !cls || !lang || !subject) {
        return {
            title: "Page Not Found | EduHub",
        };
    }

    return {
        title: `${subject.name} - ${cls.name} (${lang.name}) | ${board.name}`,
        description: `Complete study material, notes, and solutions for ${subject.name}, ${cls.name} (${lang.name} Medium).`,
    };
}

export default function SubjectPage({ params }: PageProps) {
    const boards = getAllBoards();
    const board = boards.find((b) => b.id === params.boardId);
    const cls = classes.find((c) => c.id === params.classId);
    const lang = languages.find((l) => l.id === params.languageId);
    const subject = subjects.find((s) => s.id === params.subjectId);

    if (!board || !cls || !lang || !subject) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <Link
                    href={`/boards/${params.boardId}/${params.classId}/${params.languageId}`}
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Subjects
                </Link>

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4 capitalize">
                        {subject.name}
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        {board.name} • {cls.name} • {lang.name}
                    </p>
                </div>

                <div className="grid gap-6">
                    <Card className="p-8 text-center space-y-4 border-dashed border-2">
                        <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                            <FileText className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">Content Coming Soon</h2>
                            <p className="text-muted-foreground max-w-md mx-auto mt-2">
                                We are currently preparing high-quality study materials, notes, and solutions for this subject. Please check back later!
                            </p>
                        </div>
                        <Button asChild className="mt-4" variant="outline">
                            <Link href="/explore">Explore Other Resources</Link>
                        </Button>
                    </Card>

                    {/* Placeholder for when content is added */}
                    {/* 
            <div className="grid grid-cols-1 gap-6">
                {[1, 2, 3].map((chapter) => (
                    <Card key={chapter} className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <span className="font-bold text-primary">{chapter}</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Chapter Title Placeholder</h3>
                                <p className="text-sm text-muted-foreground">Chapter Description</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div> 
            */}
                </div>
            </div>
        </div>
    );
}
