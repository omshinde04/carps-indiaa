"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
    {
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
        title: "Build Future-Ready Skills",
        subtitle:
            "Empowering students and professionals with industry-aligned learning and leadership development.",
    },
    {
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        title: "Industry Driven Training",
        subtitle:
            "Corporate programs designed to bridge the gap between education and real-world industry demands.",
    },
    {
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978",
        title: "Learn From Experts",
        subtitle:
            "Our trainers bring real industry experience to build practical knowledge and confidence.",
    },
    {
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        title: "Transform Your Career",
        subtitle:
            "From skill development to corporate readiness — prepare for the next-generation workplace.",
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-[90vh] overflow-hidden">

            {/* BACKGROUND SLIDER */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.12 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[current].image}
                        alt={slides[current].title}
                        fill
                        priority
                        className="object-cover brightness-[0.55]"
                    />
                </motion.div>
            </AnimatePresence>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

            {/* HERO CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[90vh] flex items-center">

                <div className="max-w-2xl">

                    {/* BADGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm border border-white/20"
                    >
                        Industry Aligned Learning
                    </motion.div>

                    {/* TITLE */}
                    <motion.h1
                        key={slides[current].title}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    >
                        {slides[current].title}
                    </motion.h1>

                    {/* SUBTITLE */}
                    <motion.p
                        key={slides[current].subtitle}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-gray-200 text-lg md:text-xl"
                    >
                        {slides[current].subtitle}
                    </motion.p>

                    {/* CTA BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="flex flex-wrap gap-4 mt-10"
                    >
                        <Link
                            href="/programs"
                            className="bg-primary px-7 py-3 rounded-full font-semibold text-white shadow-lg hover:scale-105 transition"
                        >
                            Explore Programs
                        </Link>

                        <Link
                            href="/trainers"
                            className="border border-white px-7 py-3 rounded-full text-white font-semibold hover:bg-white hover:text-black transition"
                        >
                            Meet Trainers
                        </Link>

                        <Link
                            href="/contact"
                            className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition"
                        >
                            Contact
                        </Link>
                    </motion.div>

                </div>

            </div>



            {/* SLIDER NAVIGATION */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">

                {/* LEFT ARROW */}
                <button
                    onClick={prevSlide}
                    className="text-white hover:scale-110 transition"
                >
                    <ChevronLeft size={22} />
                </button>

                {/* DOTS */}
                <div className="flex items-center gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-3 w-3 rounded-full transition-all duration-300 ${i === current
                                ? "bg-white scale-125"
                                : "bg-white/40 hover:bg-white/70"
                                }`}
                        />
                    ))}
                </div>

                {/* RIGHT ARROW */}
                <button
                    onClick={nextSlide}
                    className="text-white hover:scale-110 transition"
                >
                    <ChevronRight size={22} />
                </button>

            </div>
            {/* PROGRESS BAR */}
            <motion.div
                key={current}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 7, ease: "linear" }}
                className="absolute bottom-0 left-0 h-[3px] bg-primary"
            />

        </section>
    );
}