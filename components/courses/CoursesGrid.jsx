"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
    FaLaptop, FaCode, FaRobot, FaPaintBrush,
    FaVideo, FaBrain, FaShieldAlt, FaChartLine
} from "react-icons/fa";

const courses = [
    {
        title: "Digital Literacy",
        icon: <FaLaptop />,
        image: "/images/course1.jpg",
        modules: ["MS Office", "Internet skills", "Email writing"],
        outcome: "Confident computer usage",
    },
    {
        title: "Coding & Programming",
        icon: <FaCode />,
        image: "/images/course2.jpg",
        modules: ["Scratch", "Python/JS", "Logic building"],
        outcome: "Strong coding foundation",
    },
    {
        title: "Robotics & STEM",
        icon: <FaRobot />,
        image: "/images/course3.jpg",
        modules: ["Sensors", "Circuits", "Automation"],
        outcome: "Innovation & problem solving",
    },
    {
        title: "Graphic Designing",
        icon: <FaPaintBrush />,
        image: "/images/course4.jpg",
        modules: ["Canva", "Design basics", "Creatives"],
        outcome: "Creative design skills",
    },
    {
        title: "Video Editing",
        icon: <FaVideo />,
        image: "/images/course5.jpg",
        modules: ["Editing tools", "Storyboarding", "Reels"],
        outcome: "Content creation skills",
    },
    {
        title: "Artificial Intelligence",
        icon: <FaBrain />,
        image: "/images/course6.jpg",
        modules: ["AI basics", "ML intro", "AI tools"],
        outcome: "Future tech awareness",
    },
    {
        title: "Cyber Safety",
        icon: <FaShieldAlt />,
        image: "/images/course7.jpg",
        modules: ["Security", "Privacy", "Ethics"],
        outcome: "Safe digital behavior",
    },
    {
        title: "Productivity Tools",
        icon: <FaChartLine />,
        image: "/images/course8.jpg",
        modules: ["Google tools", "Time management"],
        outcome: "Smart learning habits",
    },
];

export default function CoursesGrid() {
    const [showAll, setShowAll] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    // ✅ Detect screen size
    useEffect(() => {
        const checkScreen = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // ✅ Logic: Desktop = all, Mobile = 4
    const visibleCourses = isDesktop || showAll ? courses : courses.slice(0, 4);

    return (
        <section className="py-20 md:py-28 px-6 md:px-16 bg-background-light dark:bg-background-dark">

            {/* 🔥 Heading */}
            <div className="text-center max-w-3xl mx-auto mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                    Our Courses
                </h2>
                <p className="text-black/70 dark:text-white/70">
                    Explore a wide range of future-ready courses designed to build practical skills.
                </p>
                <div className="w-20 h-[3px] bg-primary mx-auto mt-6 rounded-full"></div>
            </div>

            {/* 🔥 Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {visibleCourses.map((course, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group rounded-xl overflow-hidden shadow-nav bg-white dark:bg-navy-deep border border-gray-100 dark:border-white/10"
                    >

                        {/* IMAGE */}
                        <div className="relative h-40 overflow-hidden">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover group-hover:scale-110 transition duration-500"
                            />

                            {/* overlay */}
                            <div className="absolute inset-0 bg-black/40"></div>

                            {/* icon */}
                            <div className="absolute bottom-3 left-3 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-lg shadow">
                                {course.icon}
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-5">

                            <h3 className="font-semibold text-black dark:text-white mb-3">
                                {course.title}
                            </h3>

                            <ul className="text-sm text-black/70 dark:text-white/70 mb-4 space-y-1">
                                {course.modules.map((m, idx) => (
                                    <li key={idx}>• {m}</li>
                                ))}
                            </ul>

                            <p className="text-xs font-medium text-primary">
                                {course.outcome}
                            </p>

                        </div>
                    </motion.div>
                ))}

            </div>

            {/* 🔥 VIEW MORE BUTTON (ONLY MOBILE) */}
            {!showAll && !isDesktop && (
                <div className="mt-10 flex justify-center">
                    <button
                        onClick={() => setShowAll(true)}
                        className="px-6 py-3 bg-primary text-white rounded-full shadow hover:scale-105 transition"
                    >
                        View More
                    </button>
                </div>
            )}

        </section>
    );
}