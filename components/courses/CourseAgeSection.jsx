"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUserGraduate, FaUsers, FaBriefcase } from "react-icons/fa";

const data = [
    {
        title: "Primary (Grades 1–5)",
        points: [
            "Basic Computer Skills",
            "Scratch Coding",
            "Digital Safety",
        ],
        icon: FaUserGraduate,
        image: "/images/age1.jpg",
    },
    {
        title: "Middle School (Grades 6–8)",
        points: [
            "Coding Fundamentals",
            "Graphic Designing",
            "Robotics Basics",
        ],
        icon: FaUsers,
        image: "/images/age2.jpg",
    },
    {
        title: "High School (Grades 9–12)",
        points: [
            "Advanced Coding",
            "AI & Future Technologies",
            "Video Editing",
        ],
        icon: FaBriefcase,
        image: "/images/age3.jpg",
    },
];

export default function AgeStructure() {
    return (
        <section className="relative py-20 md:py-28 px-6 md:px-16 bg-background-light dark:bg-background-dark overflow-hidden">

            {/* 🔥 Glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-5 blur-[140px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-5 blur-[140px] rounded-full"></div>

            {/* 🔥 Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                    Age-Wise Course Structure
                </h2>

                <p className="text-black/70 dark:text-white/70">
                    Programs designed based on student growth and learning stage.
                </p>

                <div className="w-20 h-[3px] bg-primary mx-auto mt-6 rounded-full"></div>
            </motion.div>

            {/* 🔥 GRID */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {data.map((item, i) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-xl overflow-hidden"
                        >

                            {/* 🔥 Glow Border */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl"></div>
                            </div>

                            {/* CARD */}
                            <div className="relative flex flex-col h-full bg-white/80 dark:bg-navy-deep/80 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-white/10 shadow-nav overflow-hidden">

                                {/* IMAGE */}
                                <div className="relative h-44 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                    {/* ICON */}
                                    <div className="absolute bottom-3 left-3 w-12 h-12 flex items-center justify-center rounded-full bg-white text-black shadow-lg transition group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                                        <Icon />
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="p-5 flex flex-col flex-grow">

                                    <h3 className="font-semibold text-black dark:text-white mb-4">
                                        {item.title}
                                    </h3>

                                    <ul className="space-y-2 text-sm text-black/70 dark:text-white/70">
                                        {item.points.map((p, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-primary mt-[2px] text-xs">●</span>
                                                {p}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* bottom accent */}
                                    <div className="mt-auto pt-4">
                                        <div className="w-8 h-[2px] bg-primary"></div>
                                    </div>

                                </div>

                                {/* 🔥 Shine effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 blur-2xl rotate-45"></div>
                                </div>

                            </div>
                        </motion.div>
                    );
                })}

            </div>

        </section>
    );
}