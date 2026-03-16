import AboutHero from "@/components/about/AboutHero";
import VisionMission from "@/components/about/VisionMission";
import NepJustification from "@/components/about/NepJustification";

export const metadata = {
    title: "About CARPS India | Corporate Training & Skill Development",

    description:
        "Learn about CARPS India, our vision, mission, and commitment to building future-ready professionals through corporate training, skill development, and industry-focused learning programs.",

    keywords: [
        "About CARPS India",
        "Corporate Training Company India",
        "Skill Development Programs",
        "Professional Training Organization",
        "Corporate Learning India",
        "Leadership and Communication Training",
        "Workplace Skills Training",
    ],

    authors: [{ name: "CARPS India" }],

    publisher: "CARPS India",

    robots: {
        index: true,
        follow: true,
    },

    alternates: {
        canonical: "https://www.carpsindia.com/about",
    },

    openGraph: {
        title: "About CARPS India | Corporate Training & Skill Development",
        description:
            "Discover CARPS India’s mission, vision, and approach to developing future-ready professionals through industry-aligned training programs.",
        url: "https://www.carpsindia.com/about",
        siteName: "CARPS India",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.carpsindia.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "About CARPS India Training Organization",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "About CARPS India | Corporate Training & Skill Development",
        description:
            "Explore CARPS India's mission and vision for building skilled and future-ready professionals.",
        images: ["https://www.carpsindia.com/og-image.jpg"],
    },
};

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <VisionMission />
            <NepJustification />
        </main>
    );
}