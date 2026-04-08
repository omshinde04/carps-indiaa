import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata = {
    title: "Gallery | CARPS India Training Programs & Workshops",

    description:
        "Explore CARPS India gallery featuring corporate training sessions, workshops, student development programs, and professional learning events across India.",

    keywords: [
        "CARPS India Gallery",
        "Corporate Training Photos India",
        "Workshops and Training Events",
        "Skill Development Programs India",
        "Professional Training Sessions",
        "Student Workshops India",
        "Corporate Learning Events",
        "Training Institute Gallery",
    ],

    authors: [{ name: "CARPS India", url: "https://www.carpsindia.com" }],
    creator: "CARPS India",
    publisher: "CARPS India",

    alternates: {
        canonical: "https://www.carpsindia.com/gallery",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large", // 🔥 important for image SEO
        },
    },

    openGraph: {
        title: "CARPS India Gallery | Training Programs & Workshops",
        description:
            "View real photos from CARPS India training sessions, workshops, and professional development programs.",
        url: "https://www.carpsindia.com/gallery",
        siteName: "CARPS India",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.carpsindia.com/logo.jpeg",
                width: 1200,
                height: 630,
                alt: "CARPS India Training Gallery",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "CARPS India Gallery",
        description:
            "Photos from corporate training, workshops, and learning sessions at CARPS India.",
        images: ["https://www.carpsindia.com/logo.jpeg"],
    },
};

export default function GalleryPage() {
    return (
        <>
            {/* 🔥 STRUCTURED DATA (IMAGE SEO BOOST) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            name: "CARPS India Gallery",
                            url: "https://www.carpsindia.com/gallery",
                            description:
                                "Gallery of corporate training programs, workshops, and events conducted by CARPS India.",
                        },

                        {
                            "@context": "https://schema.org",
                            "@type": "ImageGallery",
                            name: "CARPS India Training Gallery",
                            description:
                                "Images showcasing training sessions, workshops, and student development programs.",
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
                                    name: "Gallery",
                                    item: "https://www.carpsindia.com/gallery",
                                },
                            ],
                        },
                    ]),
                }}
            />

            <main>
                <GalleryGrid />
            </main>
        </>
    );
}