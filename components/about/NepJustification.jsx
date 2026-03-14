"use client";

import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Lightbulb, HeartHandshake, Medal, Scale } from "lucide-react";

export default function NepJustification() {

    const features = [
        {
            icon: BookOpen,
            text: "21st-century skill development"
        },
        {
            icon: Lightbulb,
            text: "Experiential and activity-based learning"
        },
        {
            icon: HeartHandshake,
            text: "Mental health and student well-being"
        },
        {
            icon: Medal,
            text: "Career awareness and life skills"
        },
        {
            icon: Scale,
            text: "Ethical values and citizenship"
        }
    ];

    const values = [
        "Enhances student confidence and communication",
        "Supports teachers through improved engagement",
        "Promotes a positive and inclusive culture",
        "Supports NEP 2020 compliance",
        "Positions school as progressive and student-focused"
    ];

    return (
        <section className="bg-gray-50 py-24">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >

                    <p className="text-primary tracking-[0.3em] text-sm font-semibold uppercase">
                        Educational Alignment
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                        NEP 2020 <br /> Justification
                    </h2>

                    <p className="text-gray-600 mt-6 leading-relaxed text-lg">
                        As per the National Education Policy (NEP) 2020, schools are encouraged
                        to focus on the holistic development of students beyond academic learning.
                        Our programs are designed to align perfectly with these national objectives.
                    </p>

                    {/* FEATURE GRID */}
                    <div className="grid sm:grid-cols-2 gap-4 mt-8">

                        {features.map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -4 }}
                                    className="flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-xl shadow-sm"
                                >

                                    <div className="text-primary">
                                        <Icon size={18} />
                                    </div>

                                    <p className="text-sm font-medium text-gray-700">
                                        {item.text}
                                    </p>

                                </motion.div>
                            );
                        })}

                    </div>

                    {/* IMPLEMENTATION */}
                    <div className="mt-10">

                        <h3 className="text-lg font-semibold mb-4">
                            Implementation Approach
                        </h3>

                        <ul className="space-y-3 text-gray-600">

                            <li className="flex gap-3">
                                <span className="text-primary">•</span>
                                Age-appropriate and curriculum-supportive
                            </li>

                            <li className="flex gap-3">
                                <span className="text-primary">•</span>
                                Short, structured, and interactive sessions
                            </li>

                            <li className="flex gap-3">
                                <span className="text-primary">•</span>
                                Flexible delivery formats (Orientation, Enrichment days)
                            </li>

                        </ul>

                    </div>

                </motion.div>



                {/* RIGHT BLACK CARD */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >

                    <div className="bg-black text-white rounded-2xl p-10 shadow-2xl">

                        <h3 className="text-2xl font-semibold mb-8">
                            Value to the Institution
                        </h3>

                        <div className="space-y-5">

                            {values.map((item, i) => (

                                <div key={i} className="flex gap-4 items-start">

                                    <CheckCircle
                                        className="text-primary mt-1"
                                        size={18}
                                    />

                                    <p className="text-gray-300">
                                        {item}
                                    </p>

                                </div>

                            ))}

                        </div>

                        <div className="border-t border-gray-700 mt-8 pt-6">

                            <p className="text-gray-400 italic text-sm">
                                "These programs are intended to complement academic education
                                and fully align with the vision of NEP 2020, supporting the
                                development of confident, capable, and future-ready students."
                            </p>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}