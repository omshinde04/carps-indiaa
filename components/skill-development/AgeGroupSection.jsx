"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const groups = [
    {
        title: "Primary (Grades 1–5)",
        points: ["Confidence", "Basic communication", "Values", "Social interaction"],
    },
    {
        title: "Middle School (6–8)",
        points: ["Communication", "Teamwork", "Creativity", "Problem-solving"],
    },
    {
        title: "High School (9–10)",
        points: ["Leadership", "Emotional intelligence", "Career awareness", "Study strategies"],
    },
    {
        title: "Junior College (11–12)",
        points: ["Corporate readiness", "Interview skills", "Professional communication", "Career decisions"],
    },
];

export default function AgeSection() {
    return (
        <section className="relative py-20 md:py-28 px-6 md:px-16 overflow-hidden">

            {/* 🔥 BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/education-bg.jpg"
                    alt="background"
                    fill
                    className="object-cover"
                />
            </div>

            {/* 🔥 DARK OVERLAY (IMPORTANT) */}
            <div className="absolute inset-0 bg-white/80 dark:bg-background-dark/90 z-0"></div>

            {/* 🔥 EXTRA GRADIENT DEPTH */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white dark:via-background-dark/40 z-0"></div>

            {/* 🔥 CONTENT */}
            <div className="relative z-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                        Age-Wise Learning Approach
                    </h2>

                    <p className="text-base text-black/70 dark:text-white/70">
                        Programs designed according to student maturity to ensure
                        effective skill development at every stage.
                    </p>

                    <div className="w-20 h-[3px] bg-primary mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* Cards */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">

                    {groups.map((group, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="group h-full flex flex-col p-6 md:p-7 rounded-xl bg-white/90 dark:bg-navy-deep/90 backdrop-blur-sm shadow-nav border border-gray-100 dark:border-white/10 relative overflow-hidden">

                                {/* Accent */}
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary"></div>

                                {/* Title */}
                                <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white mb-5">
                                    {group.title}
                                </h3>

                                {/* Points */}
                                <ul className="flex flex-col gap-3 text-sm text-black/80 dark:text-white/80 flex-grow">
                                    {group.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="mt-1 w-2 h-2 bg-primary rounded-full"></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Bottom */}
                                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/10 text-xs opacity-60">
                                    Structured learning for this stage
                                </div>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary opacity-5 blur-2xl rounded-full"></div>
                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}