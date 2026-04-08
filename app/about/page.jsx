import AboutHero from "@/components/about/AboutHero";
import VisionMission from "@/components/about/VisionMission";
import NepJustification from "@/components/about/NepJustification";

export const metadata = {
    title: "About CARPS India | Leading Corporate Training Institute",

    description:
        "CARPS India is a leading corporate training and skill development institute focused on communication, leadership, and career-ready skills. Learn about our mission, vision, and commitment to empowering students and professionals.",

    keywords: [
        "CARPS India About",
        "Corporate Training Institute India",
        "Skill Development Institute India",
        "Communication Skills Training",
        "Leadership Development Programs",
        "Professional Training Institute",
        "Career Development Programs India",
        "Student Skill Development India",
    ],

    authors: [{ name: "CARPS India", url: "https://www.carpsindia.com" }],
    creator: "CARPS India",
    publisher: "CARPS India",

    alternates: {
        canonical: "https://www.carpsindia.com/about",
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
        title: "About CARPS India | Skill Development & Corporate Training",
        description:
            "Discover CARPS India's mission, vision, and innovative approach to building future-ready professionals through industry-focused training programs.",
        url: "https://www.carpsindia.com/about",
        siteName: "CARPS India",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.carpsindia.com/logo.jpeg",
                width: 1200,
                height: 630,
                alt: "CARPS India Training Institute",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "About CARPS India | Training Institute",
        description:
            "Learn about CARPS India’s mission, vision, and commitment to building skilled professionals.",
        images: ["https://www.carpsindia.com/logo.jpeg"],
    },
};

export default function AboutPage() {
    return (
        <>
            {/* 🔥 Structured Data (Page-Level SEO Boost) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            name: "About CARPS India",
                            url: "https://www.carpsindia.com/about",
                            description:
                                "Learn about CARPS India, a leading corporate training and skill development institute.",
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
                                    name: "About",
                                    item: "https://www.carpsindia.com/about",
                                },
                            ],
                        },
                    ]),
                }}
            />

            <main>
                <AboutHero />
                <VisionMission />
                <NepJustification />
            </main>
        </>
    );
}