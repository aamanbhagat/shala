
import { getAllBoards, classes, languages, subjects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRight, Book } from "lucide-react";

interface PageProps {
    params: {
        boardId: string;
        classId: string;
        languageId: string;
    };
}

export async function generateMetadata({ params }: PageProps) {
    const boards = getAllBoards();
    const board = boards.find((b) => b.id === params.boardId);
    const cls = classes.find((c) => c.id === params.classId);
    const lang = languages.find((l) => l.id === params.languageId);

    if (!board || !cls || !lang) {
        return {
            title: "Page Not Found | EduHub",
        };
    }

    return {
        title: `${cls.name} ${lang.name} Medium Subjects | ${board.name}`,
        description: `Select a subject for ${cls.name} (${lang.name} Medium) under ${board.name}.`,
    };
}

export default function LanguagePage({ params }: PageProps) {
    const boards = getAllBoards();
    const board = boards.find((b) => b.id === params.boardId);
    const cls = classes.find((c) => c.id === params.classId);
    const lang = languages.find((l) => l.id === params.languageId);

    if (!board || !cls || !lang) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-2">
                        <Link href={`/boards/${params.boardId}`} className="hover:text-primary transition-colors">{board.name}</Link>
                        <span>/</span>
                        <Link href={`/boards/${params.boardId}/${params.classId}`} className="hover:text-primary transition-colors">{cls.name}</Link>
                        <span>/</span>
                        <span className="text-foreground">{lang.name}</span>
                    </div>

                    <h1 className="text-4xl font-bold mb-4">Select Subject</h1>
                    <p className="text-xl text-muted-foreground">
                        {board.name} • {cls.name} • {lang.name}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subjects.map((subject) => (
                        <Link key={subject.id} href={`/boards/${params.boardId}/${params.classId}/${params.languageId}/${subject.id}`}>
                            <Card className={`p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 bg-gradient-to-br ${subject.color.replace('/20', '/10').replace('/30', '/10')} border-none`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-background/50 rounded-lg group-hover:bg-background/80 transition-colors">
                                            <Book className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">{subject.name}</h3>
                                            <p className="text-sm text-muted-foreground">View Chapters</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
