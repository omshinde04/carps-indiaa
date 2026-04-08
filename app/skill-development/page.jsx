import HeroSection from "@/components/skill-development/HeroSection";
import SkillSection from "@/components/skill-development/SkillSection";
import AgeGroupSection from "@/components/skill-development/AgeGroupSection";
import LearningExperienceSection from "@/components/skill-development/LearningExperienceSection";
import StudentImpactSection from "@/components/skill-development/StudentImpactSection";

export const metadata = {
    title: "Skill Development Programs | Communication, Leadership & Career Skills",

    description:
        "CARPS India offers skill development programs focused on communication, leadership, emotional intelligence, digital skills, and career readiness for students and professionals.",

    keywords: [
        "Skill Development Programs India",
        "Student Skill Development",
        "Communication Skills Training",
        "Leadership Development Programs",
        "Soft Skills Training India",
        "Career Development Programs",
        "Personality Development Training",
        "Professional Skills Training India",
    ],

    authors: [{ name: "CARPS India", url: "https://www.carpsindia.com" }],
    creator: "CARPS India",
    publisher: "CARPS India",

    alternates: {
        canonical: "https://www.carpsindia.com/skill-development",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
        },
    },

    openGraph: {
        title: "Skill Development Programs | CARPS India",
        description:
            "Explore communication, leadership, emotional intelligence, and career-focused skill development programs for students.",
        url: "https://www.carpsindia.com/skill-development",
        siteName: "CARPS India",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.carpsindia.com/logo.jpeg",
                width: 1200,
                height: 630,
                alt: "Skill Development Programs CARPS India",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Skill Development Programs | CARPS India",
        description:
            "Develop communication, leadership, and career skills with CARPS India programs.",
        images: ["https://www.carpsindia.com/logo.jpeg"],
    },
};

export default function SkillDevelopmentPage() {
    return (
        <>
            {/* 🔥 STRUCTURED DATA (VERY IMPORTANT) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            name: "Skill Development Programs",
                            provider: {
                                "@type": "Organization",
                                name: "CARPS India",
                                url: "https://www.carpsindia.com",
                            },
                            description:
                                "Programs focused on communication, leadership, emotional intelligence, digital skills, and career readiness.",
                            areaServed: "IN",
                        },

                        {
                            "@context": "https://schema.org",
                            "@type": "EducationalOrganization",
                            name: "CARPS India",
                            url: "https://www.carpsindia.com",
                            logo: "https://www.carpsindia.com/logo.jpeg",
                        },

                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: [
                                {
                                    "@type": "ListItem",
                                    position: 1,
                                    name: "Home",
                                    item: "https://www.carpsindia.com",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "Skill Development",
                                    item: "https://www.carpsindia.com/skill-development",
                                },
                            ],
                        },
                    ]),
                }}
            />

            <main className="bg-background-light dark:bg-background-dark text-black dark:text-white">
                <HeroSection />
                <SkillSection />
                <AgeGroupSection />
                <LearningExperienceSection />
                <StudentImpactSection />
            </main>
        </>
    );
}