import GalleryGrid from "@/components/gallery/GalleryGrid"

export const metadata = {
    title: "CARPS India Gallery | Training Programs, Workshops & Events",

    description:
        "Explore the CARPS India gallery showcasing corporate training programs, workshops, student development sessions, and professional learning events conducted across organizations and institutions.",

    keywords: [
        "CARPS India Gallery",
        "Corporate Training Workshops India",
        "Training Program Events",
        "Professional Development Workshops",
        "Corporate Training Sessions",
        "Skill Development Training India",
        "Student Training Programs",
    ],

    authors: [{ name: "CARPS India" }],

    publisher: "CARPS India",

    robots: {
        index: true,
        follow: true,
    },

    alternates: {
        canonical: "https://www.carpsindia.com/gallery",
    },

    openGraph: {
        title: "CARPS India Gallery | Training Programs & Workshops",
        description:
            "View photos from CARPS India training sessions, workshops, and professional development programs.",
        url: "https://www.carpsindia.com/gallery",
        siteName: "CARPS India",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.carpsindia.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CARPS India Training Programs Gallery",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "CARPS India Gallery | Training Programs",
        description:
            "Photos from CARPS India corporate training programs, workshops and learning events.",
        images: ["https://www.carpsindia.com/og-image.jpg"],
    },
};

export default function GalleryPage() {

    return (

        <main>

            <GalleryGrid />

        </main>

    )

}