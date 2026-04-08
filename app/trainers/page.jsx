import TrainersHero from "@/components/trainers/TrainersHero";
import TrainersGrid from "@/components/trainers/TrainersGrid";

export const metadata = {
    title: "Expert Trainers | CARPS India Corporate Training Faculty",

    description:
        "Meet expert trainers at CARPS India with real-world industry experience in leadership, communication, and professional development training.",

    keywords: [
        "CARPS India Trainers",
        "Corporate Trainers India",
        "Professional Trainers India",
        "Leadership Trainers",
        "Communication Skills Trainers",
        "Corporate Training Faculty",
        "Industry Expert Trainers India",
        "Workplace Skills Trainers",
    ],

    authors: [{ name: "CARPS India", url: "https://www.carpsindia.com" }],
    creator: "CARPS India",
    publisher: "CARPS India",

    alternates: {
        canonical: "https://www.carpsindia.com/trainers",
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
        title: "Expert Trainers | CARPS India",
        description:
            "Discover experienced corporate trainers delivering leadership and professional development programs.",
        url: "https://www.carpsindia.com/trainers",
        siteName: "CARPS India",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.carpsindia.com/logo.jpeg",
                width: 1200,
                height: 630,
                alt: "CARPS India Trainers",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "CARPS India Trainers",
        description:
            "Meet expert trainers with real-world industry experience.",
        images: ["https://www.carpsindia.com/logo.jpeg"],
    },
};

export default function TrainersPage() {
    return (
        <>
            {/* 🔥 STRUCTURED DATA (E-E-A-T BOOST) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            name: "CARPS India Trainers",
                            url: "https://www.carpsindia.com/trainers",
                            description:
                                "Expert trainers delivering corporate training and skill development programs.",
                        },

                        {
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Corporate Trainer",
                            jobTitle: "Professional Trainer",
                            worksFor: {
                                "@type": "Organization",
                                name: "CARPS India",
                            },
                            knowsAbout: [
                                "Leadership Training",
                                "Communication Skills",
                                "Corporate Training",
                                "Professional Development",
                            ],
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
                                contactType: "customer support",
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
                                    name: "Trainers",
                                    item: "https://www.carpsindia.com/trainers",
                                },
                            ],
                        },
                    ]),
                }}
            />

            <main>
                <TrainersHero />
                <TrainersGrid />
            </main>
        </>
    );
}