import ProgramsHero from "@/components/programs/ProgramsHero";
import TrainingPhilosophy from "@/components/programs/TrainingPhilosophy";
import CorePrograms from "@/components/programs/CorePrograms";
import SpecializedPrograms from "@/components/programs/SpecializedPrograms";
import DeliveryModes from "@/components/programs/DeliveryModes";
import ProgramsCTA from "@/components/programs/ProgramsCTA";

export const metadata = {
    title: "Corporate Training Programs | Leadership, Communication & Workplace Skills",

    description:
        "CARPS India offers corporate training programs focused on leadership, communication, employee development, and workplace skills. Empower your team with future-ready capabilities.",

    keywords: [
        "Corporate Training Programs India",
        "Employee Training Programs",
        "Leadership Development Training",
        "Workplace Skills Training",
        "Corporate Workshops India",
        "Business Communication Training",
        "Soft Skills Training for Employees",
        "Professional Development Programs India",
    ],

    authors: [{ name: "CARPS India", url: "https://www.carpsindia.com" }],
    creator: "CARPS India",
    publisher: "CARPS India",

    alternates: {
        canonical: "https://www.carpsindia.com/programs",
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
        title: "Corporate Training Programs | CARPS India",
        description:
            "Explore corporate training programs focused on leadership, communication, and workplace skills for professionals and organizations.",
        url: "https://www.carpsindia.com/programs",
        siteName: "CARPS India",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.carpsindia.com/logo.jpeg",
                width: 1200,
                height: 630,
                alt: "CARPS India Corporate Training",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Corporate Training Programs | CARPS India",
        description:
            "Build future-ready teams with leadership and workplace training programs.",
        images: ["https://www.carpsindia.com/logo.jpeg"],
    },
};

export default function ProgramsPage() {
    return (
        <>
            {/* 🔥 STRUCTURED DATA (B2B SEO BOOST) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            name: "Corporate Training Programs",
                            provider: {
                                "@type": "Organization",
                                name: "CARPS India",
                                url: "https://www.carpsindia.com",
                            },
                            description:
                                "Corporate training programs designed to enhance leadership, communication, and workplace skills.",
                            areaServed: "IN",
                        },

                        {
                            "@context": "https://schema.org",
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Employee Skill Development Training",
                                description:
                                    "Professional development programs for employees and organizations.",
                            },
                        },

                        {
                            "@context": "https://schema.org",
                            "@type": "EducationalOrganization",
                            name: "CARPS India",
                            url: "https://www.carpsindia.com",
                            logo: "https://www.carpsindia.com/logo.jpeg",
                            contactPoint: {
                                "@type": "ContactPoint",
                                telephone: "+91 9876543210",
                                contactType: "sales",
                                email: "info@carpsindia.com",
                                areaServed: "IN",
                            },
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
                                    name: "Programs",
                                    item: "https://www.carpsindia.com/programs",
                                },
                            ],
                        },
                    ]),
                }}
            />

            <main className="bg-neutral-950 text-white">
                <ProgramsHero />
                <TrainingPhilosophy />
                <CorePrograms />
                <SpecializedPrograms />
                <DeliveryModes />
                <ProgramsCTA />
            </main>
        </>
    );
}