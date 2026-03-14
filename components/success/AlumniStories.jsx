"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function AlumniStories() {

    const [activeStory, setActiveStory] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const stories = [
        {
            name: "Michael Chen",
            role: "Data Scientist",
            company: "Tesla",
            short: "The curriculum at CARPS was intense but incredibly rewarding.",
            full: "The curriculum at CARPS was intense but incredibly rewarding. I went from knowing basic code to deploying machine learning models in months."
        },
        {
            name: "Elena Rodriguez",
            role: "Product Manager",
            company: "Airbnb",
            short: "CARPS doesn't just teach tools, they teach how to think like a leader.",
            full: "CARPS doesn't just teach tools, they teach how to think like a leader. The collaborative projects helped me develop leadership confidence."
        },
        {
            name: "James Wilson",
            role: "Head of Growth",
            company: "FinTech Global",
            short: "I transitioned from marketing to financial tech in less than a year.",
            full: "I transitioned from marketing to financial technology thanks to the CARPS alumni network and hands-on training modules."
        },
        {
            name: "Sophia Patel",
            role: "UX Designer",
            company: "Adobe",
            short: "The mentorship helped me build real-world design thinking.",
            full: "Through hands-on projects and mentorship, I built strong design thinking skills that helped me land my first UX role."
        },
        {
            name: "Daniel Kim",
            role: "AI Engineer",
            company: "Nvidia",
            short: "CARPS gave me strong foundations in machine learning.",
            full: "The curriculum helped me transition into AI engineering with confidence through real-world machine learning projects."
        },
        {
            name: "Sara Johnson",
            role: "Marketing Director",
            company: "HubSpot",
            short: "Soft skills training changed the way I lead teams.",
            full: "CARPS focuses on leadership and communication skills that made me a stronger professional."
        },
        {
            name: "Raj Malhotra",
            role: "Cyber Security Analyst",
            company: "Cisco",
            short: "Industry-oriented training made all the difference.",
            full: "The cybersecurity labs and practical projects prepared me directly for enterprise security environments."
        },
        {
            name: "Lucas Brown",
            role: "Product Designer",
            company: "Google",
            short: "The design program gave me exposure to real industry challenges.",
            full: "Working on real product challenges helped me build a strong portfolio."
        },
        {
            name: "Fatima Khan",
            role: "Business Consultant",
            company: "Deloitte",
            short: "CARPS helped me transition from academics to consulting.",
            full: "The business analytics and communication training helped me secure my consulting role."
        }
    ];

    const visibleStories = showAll ? stories : stories.slice(0, 3);

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
                    Global Career Transformations
                </h2>

                {/* CARDS */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {visibleStories.map((story, i) => (

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.12 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 border rounded-xl p-8 shadow-sm hover:shadow-xl transition"
                        >

                            <div className="flex items-center gap-4 mb-6">

                                <Image
                                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                    alt={story.name}
                                />

                                <div>
                                    <p className="font-semibold text-gray-900">
                                        {story.name}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {story.role}, {story.company}
                                    </p>
                                </div>

                            </div>

                            <p className="text-gray-600 italic">
                                “{story.short}”
                            </p>

                            <button
                                onClick={() => setActiveStory(story)}
                                className="text-primary font-semibold text-sm mt-6 hover:underline"
                            >
                                Read full story →
                            </button>

                        </motion.div>

                    ))}

                </div>


                {/* VIEW MORE BUTTON */}
                <div className="flex justify-center mt-14">

                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:scale-105 transition"
                    >
                        {showAll ? "View Less" : "View More"}
                    </button>

                </div>

            </div>


            {/* MODAL */}
            <AnimatePresence>

                {activeStory && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"
                    >

                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="bg-white max-w-xl w-full rounded-2xl p-10 relative shadow-2xl"
                        >

                            <button
                                onClick={() => setActiveStory(null)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-black"
                            >
                                <X size={22} />
                            </button>

                            <div className="flex items-center gap-4 mb-6">

                                <Image
                                    src="https://i.pravatar.cc/100"
                                    width={60}
                                    height={60}
                                    className="rounded-full"
                                    alt={activeStory.name}
                                />

                                <div>
                                    <p className="font-bold text-lg">
                                        {activeStory.name}
                                    </p>

                                    <p className="text-primary text-sm">
                                        {activeStory.role}, {activeStory.company}
                                    </p>
                                </div>

                            </div>

                            <p className="text-gray-700 leading-relaxed italic">
                                “{activeStory.full}”
                            </p>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </section>
    );
}