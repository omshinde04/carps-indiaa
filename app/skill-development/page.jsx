import HeroSection from "@/components/skill-development/HeroSection";
import SkillSection from "@/components/skill-development/SkillSection";
import AgeGroupSection from "@/components/skill-development/AgeGroupSection";
import LearningExperienceSection from "@/components/skill-development/LearningExperienceSection";
import StudentImpactSection from "@/components/skill-development/StudentImpactSection";

export default function SkillDevelopmentPage() {
    return (
        <main className="bg-background-light dark:bg-background-dark text-black dark:text-white">
            <HeroSection />
            <SkillSection />
            <AgeGroupSection />
            <LearningExperienceSection />
            <StudentImpactSection />
        </main>
    );
}