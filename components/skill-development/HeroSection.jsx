"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPlay, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

/* Animations */
const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.2 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

export default function HeroSection() {
    return (
        <section className="relative py-16 md:py-24 px-6 md:px-16 bg-background-light dark:bg-background-dark overflow-hidden">

            {/* Glow */}
            <div className="absolute top-[-60px] left-[-60px] w-80 h-80 bg-primary opacity-10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 bg-primary opacity-10 blur-[120px] rounded-full"></div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
            >

                {/* LEFT */}
                <div className="text-center md:text-left">

                    <motion.div
                        variants={fadeUp}
                        className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                        🚀 Skill Development Program
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
                    >
                        Build <span className="text-primary">Confidence</span>
                        <br />
                        Shape Your <span className="text-primary">Future</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mt-6 text-base md:text-lg opacity-80 max-w-xl mx-auto md:mx-0"
                    >
                        Empowering students with real-world skills, leadership,
                        and future-ready abilities through engaging and practical learning experiences.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Link
                            href="/contact"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full shadow-lg hover:scale-105 transition"
                        >
                            Get Started <FaArrowRight />
                        </Link>

                        <Link
                            href="/courses"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full shadow-lg hover:scale-105 transition"
                        >
                            Explore Programs <FaArrowRight />
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-10 flex justify-center md:justify-start gap-8"
                    >
                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-primary">5+</h3>
                            <p className="text-sm opacity-70">Programs</p>
                        </div>

                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-primary">1000+</h3>
                            <p className="text-sm opacity-70">Students</p>
                        </div>

                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-primary">100%</h3>
                            <p className="text-sm opacity-70">Growth</p>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    variants={fadeUp}
                    className="flex justify-center"
                >
                    <div className="relative w-full max-w-md">

                        <div className="bg-white dark:bg-navy-deep rounded-xl shadow-nav p-3">
                            <Image
                                src="/images/skill-hero.jpg"
                                alt="Skill Development"
                                width={600}
                                height={450}
                                className="rounded-xl object-cover w-full h-auto"
                            />
                        </div>

                        {/* Floating badges */}
                        <div className="hidden sm:block absolute -top-5 -left-5 bg-white dark:bg-background-dark px-4 py-2 rounded-lg shadow text-sm">
                            🎯 Skill Based Learning
                        </div>

                        <div className="hidden sm:block absolute -bottom-5 -right-5 bg-primary text-white px-4 py-2 rounded-lg shadow text-sm">
                            🚀 Future Ready
                        </div>

                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}