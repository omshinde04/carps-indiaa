import TrainersHero from "@/components/trainers/TrainersHero"
import TrainersGrid from "@/components/trainers/TrainersGrid"

export const metadata = {
    title: "Expert Trainers | CARPS India Corporate Training Faculty",

    description:
        "Meet the expert trainers at CARPS India. Our experienced professionals bring real-world industry knowledge, leadership insights, and practical skills training to help individuals and organizations succeed.",

    keywords: [
        "CARPS India Trainers",
        "Corporate Trainers India",
        "Professional Training Experts",
        "Corporate Training Faculty",
        "Leadership Trainers India",
        "Workplace Skills Trainers",
        "Industry Trainers India"
    ],

    authors: [{ name: "CARPS India" }],

    publisher: "CARPS India",

    robots: {
        index: true,
        follow: true
    },

    alternates: {
        canonical: "https://www.carpsindia.com/trainers"
    },

    openGraph: {
        title: "Expert Trainers | CARPS India Corporate Training Faculty",
        description:
            "Discover the experienced trainers at CARPS India who deliver impactful corporate training and professional development programs.",
        url: "https://www.carpsindia.com/trainers",
        siteName: "CARPS India",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.carpsindia.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CARPS India Expert Trainers"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: "Expert Trainers | CARPS India",
        description:
            "Meet the expert trainers behind CARPS India's professional development and corporate training programs.",
        images: ["https://www.carpsindia.com/og-image.jpg"]
    }
}

export default function TrainersPage() {

    return (

        <main>

            <TrainersHero />

            <TrainersGrid />

        </main>

    )

}