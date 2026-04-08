import CoursesHero from "@/components/courses/CoursesHero";
import CoursesGrid from "@/components/courses/CoursesGrid";
import CourseAgeSection from "@/components/courses/CourseAgeSection";
import CourseDeliverySection from "@/components/courses/CourseDeliverySection";

export const metadata = {
    title: "Courses | Skill Development & Corporate Training Programs",

    description:
        "Explore CARPS India courses including coding, AI, digital skills, communication, leadership, and career-focused training programs designed for students and professionals.",

    keywords: [
        "CARPS India Courses",
        "Skill Development Courses India",
        "Coding Courses for Students",
        "AI Courses India",
        "Digital Skills Training",
        "Communication Skills Course",
        "Leadership Training Programs",
        "Professional Development Courses",
        "Corporate Training Courses India",
    ],

    authors: [{ name: "CARPS India", url: "https://www.carpsindia.com" }],
    creator: "CARPS India",
    publisher: "CARPS India",

    alternates: {
        canonical: "https://www.carpsindia.com/courses",
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
        title: "Courses | CARPS India Skill Development Programs",
        description:
            "Discover future-ready courses including coding, AI, digital skills, and leadership training at CARPS India.",
        url: "https://www.carpsindia.com/courses",
        siteName: "CARPS India",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.carpsindia.com/logo.jpeg",
                width: 1200,
                height: 630,
                alt: "CARPS India Courses",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "CARPS India Courses",
        description:
            "Explore skill development and corporate training programs designed for future-ready professionals.",
        images: ["https://www.carpsindia.com/logo.jpeg"],
    },
};

export default function CoursesPage() {
    return (
        <>
            {/* 🔥 STRUCTURED DATA (COURSE SEO BOOST) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            name: "CARPS India Courses",
                            url: "https://www.carpsindia.com/courses",
                            description:
                                "Collection of skill development and corporate training courses offered by CARPS India.",
                        },

                        {
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            itemListElement: [
                                {
                                    "@type": "Course",
                                    position: 1,
                                    name: "Digital Literacy & Computer Fundamentals",
                                    description:
                                        "Learn basic computer skills, MS Office, internet usage, and digital communication.",
                                    provider: {
                                        "@type": "Organization",
                                        name: "CARPS India",
                                        sameAs: "https://www.carpsindia.com",
                                    },
                                },
                                {
                                    "@type": "Course",
                                    position: 2,
                                    name: "Coding & Programming Fundamentals",
                                    description:
                                        "Learn Scratch, Python, and programming logic with real-world applications.",
                                    provider: {
                                        "@type": "Organization",
                                        name: "CARPS India",
                                    },
                                },
                                {
                                    "@type": "Course",
                                    position: 3,
                                    name: "Artificial Intelligence & Future Technologies",
                                    description:
                                        "Introduction to AI, machine learning, and real-world applications.",
                                    provider: {
                                        "@type": "Organization",
                                        name: "CARPS India",
                                    },
                                },
                                {
                                    "@type": "Course",
                                    position: 4,
                                    name: "Graphic Designing & Digital Creativity",
                                    description:
                                        "Learn design principles, Canva, and digital creativity skills.",
                                    provider: {
                                        "@type": "Organization",
                                        name: "CARPS India",
                                    },
                                },
                            ],
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
                                    name: "Courses",
                                    item: "https://www.carpsindia.com/courses",
                                },
                            ],
                        },
                    ]),
                }}
            />

            <main>
                <CoursesHero />
                <CoursesGrid />
                <CourseAgeSection />
                <CourseDeliverySection />
            </main>
        </>
    );
}