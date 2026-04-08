import SuccessHero from "@/components/success/SuccessHero";
import FeaturedSuccess from "@/components/success/FeaturedSuccess";
import AlumniStories from "@/components/success/AlumniStories";
import SuccessStats from "@/components/success/SuccessStats";
import SuccessCTA from "@/components/success/SuccessCTA";

export const metadata = {
    title: "Success Stories | CARPS India Alumni & Career Growth",

    description:
        "Explore real success stories from CARPS India students and professionals who achieved career growth, confidence, and leadership skills through our training programs.",

    keywords: [
        "CARPS India Success Stories",
        "Training Success Stories India",
        "Career Growth Stories",
        "Student Success Stories",
        "Corporate Training Results",
        "Professional Development Success",
        "Skill Development Results",
        "Alumni Success Stories India",
    ],

    authors: [{ name: "CARPS India", url: "https://www.carpsindia.com" }],
    creator: "CARPS India",
    publisher: "CARPS India",

    alternates: {
        canonical: "https://www.carpsindia.com/success",
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
        title: "Success Stories | CARPS India",
        description:
            "Discover inspiring career transformation stories from CARPS India participants.",
        url: "https://www.carpsindia.com/success",
        siteName: "CARPS India",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.carpsindia.com/logo.jpeg",
                width: 1200,
                height: 630,
                alt: "CARPS India Success Stories",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "CARPS India Success Stories",
        description:
            "Real stories of career growth, confidence, and transformation.",
        images: ["https://www.carpsindia.com/logo.jpeg"],
    },
};

export default function SuccessPage() {
    return (
        <>
            {/* 🔥 STRUCTURED DATA (TRUST + SEO BOOST) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            name: "CARPS India Success Stories",
                            url: "https://www.carpsindia.com/success",
                            description:
                                "Collection of success stories from students and professionals trained by CARPS India.",
                        },

                        {
                            "@context": "https://schema.org",
                            "@type": "Review",
                            reviewBody:
                                "CARPS India helped me improve my communication skills and confidence. The training transformed my career.",
                            author: {
                                "@type": "Person",
                                name: "Student Participant",
                            },
                            itemReviewed: {
                                "@type": "Organization",
                                name: "CARPS India",
                            },
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
                                    name: "Success Stories",
                                    item: "https://www.carpsindia.com/success",
                                },
                            ],
                        },
                    ]),
                }}
            />

            <main>
                <SuccessHero />
                <FeaturedSuccess />
                <AlumniStories />
                <SuccessStats />
                <SuccessCTA />
            </main>
        </>
    );
}