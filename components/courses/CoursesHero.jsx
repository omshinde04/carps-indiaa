"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import Link from "next/link";

export default function CoursesHero() {
    return (
        <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden py-20">

            {/* 🔥 BACKGROUND IMAGE */}
            <Image
                src="/images/courses-hero.jpg"
                alt="Courses"
                fill
                priority
                className="object-cover"
            />

            {/* 🔥 DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b132b]/95 via-[#0b132b]/85 to-[#0b132b]/70"></div>

            {/* 🔥 LIGHT GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            {/* 🔥 GLOW */}
            <div className="absolute top-10 left-5 w-60 h-60 bg-primary opacity-10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-10 right-5 w-60 h-60 bg-primary opacity-10 blur-[120px] rounded-full"></div>

            {/* 🔥 CONTENT */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">

                {/* LABEL */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block bg-primary px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase"
                >
                    Skill-Based Learning
                </motion.span>

                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                    Explore Future-Ready
                    <br />
                    <span className="text-primary">Courses & Skills</span>
                </motion.h1>

                {/* DESCRIPTION */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-5 text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed"
                >
                    Master in-demand skills through practical learning, real-world projects,
                    and industry-focused training programs designed for future success.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-7 flex flex-col sm:flex-row gap-3 justify-center"
                >
                    <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white rounded-full shadow hover:scale-105 transition text-sm"
                    >
                        Get Started <FaArrowRight />
                    </Link>

                    <Link
                        href="/skill-development"
                        className="flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white rounded-full shadow hover:scale-105 transition text-sm"
                    >
                        Skill Development <FaArrowRight />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}