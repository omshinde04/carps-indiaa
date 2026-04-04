import ProgramsHero from "@/components/programs/ProgramsHero"
import TrainingPhilosophy from "@/components/programs/TrainingPhilosophy"
import CorePrograms from "@/components/programs/CorePrograms"
import SpecializedPrograms from "@/components/programs/SpecializedPrograms"
import DeliveryModes from "@/components/programs/DeliveryModes"
import ProgramsCTA from "@/components/programs/ProgramsCTA"

export const metadata = {
    title: "Corporate Training Programs | CARPS India",

    description:
        "Explore corporate training programs by CARPS India designed to build leadership, communication, adaptability, and future-ready workplace skills for professionals and organizations.",

    keywords: [
        "Corporate Training Programs India",
        "Professional Development Programs",
        "Leadership Training Programs",
        "Workplace Communication Training",
        "Employee Skill Development",
        "Corporate Workshops India",
        "Business Communication Training",
        "CARPS India Training Programs"
    ],

    authors: [{ name: "CARPS India" }],

    publisher: "CARPS India",

    robots: {
        index: true,
        follow: true
    },

    alternates: {
        canonical: "https://www.carpsindia.com/programs"
    },

    openGraph: {
        title: "Corporate Training Programs | CARPS India",
        description:
            "Industry-focused corporate training programs designed to build professional skills, leadership capability and future-ready teams.",
        url: "https://www.carpsindia.com/programs",
        siteName: "CARPS India",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.carpsindia.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CARPS India Corporate Training Programs"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: "Corporate Training Programs | CARPS India",
        description:
            "Explore CARPS India corporate training programs focused on workplace skills, leadership and professional growth.",
        images: ["https://www.carpsindia.com/og-image.jpg"]
    }
}

export default function ProgramsPage() {

    return (

        <main className="bg-neutral-950 text-white">

            <ProgramsHero />

            <TrainingPhilosophy />

            <CorePrograms />

            <SpecializedPrograms />

            <DeliveryModes />

            <ProgramsCTA />

        </main>

    )

}