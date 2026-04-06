"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUserGraduate, FaUsers, FaBriefcase } from "react-icons/fa";

const data = [
    {
        title: "Primary (Grades 1–5)",
        desc: "Basic Computer Skills, Scratch Coding, Digital Safety",
        icon: <FaUserGraduate />,
        image: "/images/age1.jpg",
    },
    {
        title: "Middle School (Grades 6–8)",
        desc: "Coding Fundamentals, Graphic Designing, Robotics Basics",
        icon: <FaUsers />,
        image: "/images/age2.jpg",
    },
    {
        title: "High School (Grades 9–12)",
        desc: "Advanced Coding, AI & Future Tech, Video Editing",
        icon: <FaBriefcase />,
        image: "/images/age3.jpg",
    },
];

export default function AgeStructure() {
    return (
        <section className="relative py-20 md:py-28 px-6 md:px-16 bg-background-light dark:bg-background-dark overflow-hidden">

            {/* 🔴 subtle glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary opacity-5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary opacity-5 blur-[120px] rounded-full"></div>

            {/* 🔥 Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto mb-14"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                    Age-Wise Course Structure
                </h2>

                <p className="text-black/70 dark:text-white/70">
                    Structured learning paths designed according to student growth stages.
                </p>

                <div className="w-20 h-[3px] bg-primary mx-auto mt-6 rounded-full"></div>
            </motion.div>

            {/* 🔥 Cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {data.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group rounded-xl overflow-hidden shadow-nav bg-white dark:bg-navy-deep border border-gray-100 dark:border-white/10"
                    >

                        {/* IMAGE */}
                        <div className="relative h-40 overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition duration-500"
                            />

                            {/* overlay */}
                            <div className="absolute inset-0 bg-black/40"></div>

                            {/* icon */}
                            <div className="absolute bottom-3 left-3 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-lg shadow">
                                {item.icon}
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-5">

                            <h3 className="font-semibold text-black dark:text-white mb-3">
                                {item.title}
                            </h3>

                            <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                                {item.desc}
                            </p>

                            {/* accent */}
                            <div className="w-8 h-[2px] bg-primary mt-4"></div>

                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}