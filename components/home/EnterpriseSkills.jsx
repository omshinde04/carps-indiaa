"use client";

import { motion } from "framer-motion";
import { CheckCircle, Briefcase, BarChart3, Users } from "lucide-react";
import Link from "next/link";

export default function EnterpriseSkills() {
    const features = [
        {
            icon: Briefcase,
            title: "Custom Curriculum",
            text: "Tailored training programs designed for your industry challenges and business goals.",
        },
        {
            icon: BarChart3,
            title: "Impact Measurement",
            text: "Performance improvements measured through real business metrics and post-training evaluation.",
        },
        {
            icon: Users,
            title: "Leadership Development",
            text: "Empowering professionals with communication, leadership, and emotional intelligence.",
        },
    ];

    return (
        <section className="relative bg-gradient-to-r from-black via-[#111] to-[#1a1a1a] text-white py-24 overflow-hidden">

            {/* subtle background glow */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#ff4d4d,_transparent_60%)]" />

            <div className="relative max-w-6xl mx-auto px-6 text-center">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >

                    <p className="text-primary uppercase tracking-[0.35em] text-sm font-semibold">
                        B2B Solutions
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Future-Ready{" "}
                        <span className="text-primary">
                            Human Skills
                        </span>{" "}
                        for Enterprises
                    </h2>

                    <p className="text-gray-300 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
                        Our enterprise training philosophy goes beyond technical instruction.
                        We build cultures of high performance, leadership, and emotional
                        intelligence within modern organizations.
                    </p>

                </motion.div>


                {/* FEATURES GRID */}
                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {features.map((item, index) => {

                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:scale-[1.03] transition"
                            >

                                <div className="flex justify-center mb-4">
                                    <Icon className="text-primary" size={34} />
                                </div>

                                <h3 className="font-semibold text-lg">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                                    {item.text}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>


                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16"
                >

                    <Link
                        href="/contact"
                        className="bg-primary hover:scale-105 transition text-white font-semibold px-10 py-4 rounded-full shadow-xl inline-block"
                    >
                        Request Training Proposal
                    </Link>

                </motion.div>

            </div>

        </section>
    );
}