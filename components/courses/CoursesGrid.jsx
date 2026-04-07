"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { coursesData } from "@/data/skill-development";

export default function CoursesGrid() {
    const [showAll, setShowAll] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const visibleCourses = isDesktop || showAll ? coursesData : coursesData.slice(0, 4);

    return (
        <section className="relative py-20 md:py-28 px-6 md:px-16 bg-background-light dark:bg-background-dark overflow-hidden">

            {/* 🔥 Background Glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-5 blur-[140px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-5 blur-[140px] rounded-full"></div>

            {/* 🔥 Heading */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                    Explore Our Courses
                </h2>

                <p className="text-black/70 dark:text-white/70">
                    Industry-relevant programs designed to build real-world skills,
                    creativity, and future-ready capabilities.
                </p>

                <div className="w-20 h-[3px] bg-primary mx-auto mt-6 rounded-full"></div>
            </div>

            {/* 🔥 GRID */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {visibleCourses.map((course, i) => {
                    const Icon = course.icon;

                    return (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="group relative rounded-xl overflow-hidden"
                        >

                            {/* 🔥 Glow Border */}
                            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl"></div>
                            </div>

                            {/* 🔥 CARD */}
                            <div className="relative flex flex-col h-full rounded-xl bg-white/80 dark:bg-navy-deep/80 backdrop-blur-xl shadow-nav border border-gray-200 dark:border-white/10 overflow-hidden transition">

                                {/* IMAGE */}
                                <div className="relative h-44 overflow-hidden">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition duration-700"
                                    />

                                    {/* overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                    {/* ICON */}
                                    <div className="absolute bottom-3 left-3 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 text-black text-lg shadow-lg transition group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                                        <Icon />
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="flex flex-col flex-grow p-5">

                                    <h3 className="text-lg font-semibold text-black dark:text-white mb-2 leading-snug">
                                        {course.title}
                                    </h3>

                                    <p className="text-sm text-black/60 dark:text-white/60 mb-3 line-clamp-2">
                                        {course.overview}
                                    </p>

                                    {/* MODULES */}
                                    <ul className="text-sm text-black/70 dark:text-white/70 mb-4 space-y-1">
                                        {course.modules.slice(0, 3).map((m, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-primary mt-[2px] text-xs">●</span>
                                                {m}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* OUTCOME */}
                                    <div className="mt-auto">
                                        <div className="p-3 rounded-md bg-background-light dark:bg-background-dark border border-gray-200 dark:border-white/10 transition group-hover:border-primary/30">
                                            <p className="text-xs font-medium text-black/80 dark:text-white/80">
                                                {course.outcomes[0]}
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                {/* 🔥 Hover Shine Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 blur-2xl rotate-45"></div>
                                </div>

                            </div>
                        </motion.div>
                    );
                })}

            </div>

            {/* 🔥 VIEW MORE */}
            {!showAll && !isDesktop && (
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={() => setShowAll(true)}
                        className="px-6 py-3 bg-primary text-white rounded-full shadow hover:scale-105 hover:shadow-xl transition"
                    >
                        View More
                    </button>
                </div>
            )}

        </section>
    );
}