"use client"

import { Brain, Target, MessageSquare, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const programs = [

    {
        title: "Workplace Communication 2.0",
        slug: "workplace-communication",
        description: "Enhancing professional communication in digital and hybrid workplaces.",
        icon: MessageSquare,
        duration: "1–2 Day Workshop",
        audience: "Managers, Teams, Client Facing Roles"
    },

    {
        title: "Professional Mindset & Ownership Culture",
        slug: "professional-mindset",
        description: "Building accountability and outcome ownership in workplace culture.",
        icon: Target,
        duration: "1 Day Workshop",
        audience: "All Employees"
    },

    {
        title: "Human Skills in the Age of AI",
        slug: "human-skills-ai",
        description: "Developing critical thinking, adaptability and decision making.",
        icon: Brain,
        duration: "1–2 Day Program",
        audience: "Knowledge Workers, Managers"
    }

]

export default function CorePrograms() {

    return (

        <section className="py-24 bg-neutral-950">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <div className="text-center mb-16">

                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Core Corporate Training Programs
                    </h2>

                    <p className="text-white/60 mt-4 max-w-2xl mx-auto">
                        Industry-aligned programs designed to develop human skills,
                        leadership mindset, and workplace effectiveness.
                    </p>

                </div>


                {/* Program Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {programs.map((program, i) => {

                        const Icon = program.icon

                        return (

                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group rounded-xl border border-white/10 bg-white/5 p-8 hover:border-primary transition backdrop-blur flex flex-col justify-between"
                            >

                                <div>

                                    <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                                        <Icon size={26} />
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {program.title}
                                    </h3>

                                    <p className="text-white/70 text-sm mb-6">
                                        {program.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 text-xs text-white/60">

                                        <span className="px-2 py-1 border border-white/10 rounded">
                                            {program.duration}
                                        </span>

                                        <span className="px-2 py-1 border border-white/10 rounded">
                                            {program.audience}
                                        </span>

                                    </div>

                                </div>


                                <Link
                                    href={`/programs/${program.slug}`}
                                    className="mt-8 flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition"
                                >

                                    Learn More
                                    <ArrowRight size={16} />

                                </Link>

                            </motion.div>

                        )

                    })}

                </div>

            </div>

        </section>

    )
}