import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: 'Careers | EduHub',
    description: 'Join the EduHub team and help shape the future of education. Check out our open positions.',
    alternates: {
        canonical: '/careers',
    },
};

export default function CareersPage() {
    const openings = [
        {
            title: "Senior Content Developer (Physics)",
            department: "Content",
            location: "Remote / Hybrid",
            type: "Full-time",
            description: "We are looking for an experienced Physics educator to lead our content development for JEE/NEET aspirants."
        },
        {
            title: "Frontend Engineer (Next.js)",
            department: "Engineering",
            location: "Bangalore, India",
            type: "Full-time",
            description: "Join our tech team to build high-performance, accessible web experiences using React, Next.js, and Tailwind CSS."
        },
        {
            title: "Graphic Designer",
            department: "Design",
            location: "Remote",
            type: "Part-time",
            description: "Create engaging visuals and infographics to make complex educational concepts easy to understand."
        },
        {
            title: "Customer Success Executive",
            department: "Support",
            location: "Mumbai, India",
            type: "Full-time",
            description: "Help students and parents navigate our platform and resolve their queries efficiently."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12 max-w-5xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Join Our Mission</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    We're on a mission to revolutionize education. If you're passionate about learning and technology, we want you on our team.
                </p>
            </div>

            <div className="grid gap-6">
                {openings.map((job, index) => (
                    <div key={index} className="bg-card p-6 md:p-8 rounded-xl border hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="space-y-3">
                                <div className="flex flex-wrap gap-2 mb-2">
                                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300">{job.department}</Badge>
                                    <Badge variant="outline">{job.type}</Badge>
                                </div>
                                <h2 className="text-2xl font-bold">{job.title}</h2>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Posted 2 days ago</span>
                                </div>
                                <p className="text-muted-foreground max-w-2xl pt-2">
                                    {job.description}
                                </p>
                            </div>
                            <Button className="shrink-0" size="lg">Apply Now</Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-muted/50 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-4">Don't see a perfect fit?</h3>
                <p className="text-muted-foreground mb-6">
                    We are always on the lookout for talent. Send your resume to <span className="font-semibold text-foreground">careers@eduhub.com</span> and we'll keep you on file.
                </p>
                <Button variant="outline" size="lg">Send Open Application</Button>
            </div>
        </div>
    );
}
