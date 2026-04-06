"use client";
import { motion } from "framer-motion";
import {
    FaComments,
    FaBrain,
    FaUsers,
    FaSmile,
    FaBullseye,
    FaChartLine
} from "react-icons/fa";

const impacts = [
    { text: "Speak confidently in public", icon: <FaComments /> },
    { text: "Think clearly and make decisions", icon: <FaBrain /> },
    { text: "Work effectively in teams", icon: <FaUsers /> },
    { text: "Handle stress and emotions better", icon: <FaSmile /> },
    { text: "Become career-aware and goal-oriented", icon: <FaBullseye /> },
    { text: "Develop a professional growth mindset", icon: <FaChartLine /> },
];

export default function ImpactSection() {
    return (
        <section className="relative py-20 md:py-28 px-6 md:px-16 bg-background-light dark:bg-background-dark overflow-hidden">

            {/* 🔴 subtle glow */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-primary opacity-5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary opacity-5 blur-[120px] rounded-full"></div>

            {/* 🔥 Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                    Final Impact on Students
                </h2>

                <p className="text-base text-black/70 dark:text-white/70">
                    By the end of the program, students transform into confident,
                    capable, and future-ready individuals.
                </p>

                <div className="w-20 h-[3px] bg-primary mx-auto mt-6 rounded-full"></div>
            </motion.div>

            {/* 🔥 Cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {impacts.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="group h-full flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-navy-deep shadow-nav border border-gray-100 dark:border-white/10 relative overflow-hidden">

                            {/* 🔥 Icon */}
                            <div className="w-14 h-14 flex items-center justify-center rounded-full 
                                bg-background-light dark:bg-background-dark 
                                text-black dark:text-white text-xl mb-4 
                                transition group-hover:bg-primary group-hover:text-white group-hover:scale-110"
                            >
                                {item.icon}
                            </div>

                            {/* Text */}
                            <p className="text-sm md:text-base font-medium text-black dark:text-white">
                                {item.text}
                            </p>

                            {/* Accent Line */}
                            <div className="w-8 h-[2px] bg-primary mt-4"></div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary opacity-5 blur-2xl rounded-full"></div>
                            </div>

                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}