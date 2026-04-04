import { notFound } from "next/navigation"

const programs = {
    "workplace-communication": {
        title: "Workplace Communication 2.0",
        description:
            "Enhancing professional communication in digital and hybrid workplaces.",
        duration: "1–2 Day Workshop",
        audience: "Managers, Teams, Client Facing Roles",
        skills: [
            "Email Communication",
            "Virtual Collaboration",
            "Professional Messaging",
            "Stakeholder Communication"
        ],
        outcomes: [
            "Improved clarity in workplace communication",
            "Professional email & messaging practices",
            "Stronger collaboration in hybrid teams"
        ]
    }
}

export async function generateMetadata({ params }) {

    const program = programs[params.slug]

    if (!program) return {}

    return {
        title: `${program.title} | CARPS India Training Program`,
        description: program.description,
        alternates: {
            canonical: `https://www.carpsindia.com/programs/${params.slug}`
        }
    }

}

export default function ProgramPage({ params }) {

    const program = programs[params.slug]

    if (!program) return notFound()

    return (

        <section className="py-24 bg-neutral-950 text-white">

            <div className="max-w-4xl mx-auto px-6">

                <h1 className="text-4xl font-bold mb-6">
                    {program.title}
                </h1>

                <p className="text-white/70 mb-10">
                    {program.description}
                </p>

                <div className="mb-10">

                    <h3 className="text-xl font-semibold mb-4">Key Skills</h3>

                    <ul className="space-y-2 text-white/70">

                        {program.skills.map((skill, i) => (
                            <li key={i}>• {skill}</li>
                        ))}

                    </ul>

                </div>

                <div>

                    <h3 className="text-xl font-semibold mb-4">Program Outcomes</h3>

                    <ul className="space-y-2 text-white/70">

                        {program.outcomes.map((outcome, i) => (
                            <li key={i}>• {outcome}</li>
                        ))}

                    </ul>

                </div>

            </div>

        </section>

    )
}