import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { StatsSection } from "@/components/home/stats-section";
import { CTASection } from "@/components/home/cta-section";
import { ClassSelectionSection } from "@/components/home/class-selection-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EduHub - Your Complete Study Companion",
  description: "Access comprehensive educational resources, study solutions, and exam prep materials for Class 1-12 and competitive exams.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <ClassSelectionSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}