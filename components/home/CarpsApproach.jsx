"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Target, Rocket } from "lucide-react";

export default function CarpsFramework() {

    const values = [
        { letter: "C", text: "Confidence" },
        { letter: "A", text: "Attitude" },
        { letter: "R", text: "Responsibility" },
        { letter: "P", text: "Personality" },
        { letter: "S", text: "Success" },
    ];

    return (
        <section
            aria-label="CARPS Learning Philosophy"
            className="bg-gray-50 py-20"
        >

            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >

                    <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold">
                        CARPS Framework
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mt-4">
                        Bridging the Academic-Corporate Gap
                    </h2>

                    <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                        At CARPS Learning Solutions, our mission is to develop students'
                        confidence, communication, attitude, and professional behaviour
                        to make them career-ready.
                    </p>

                </motion.div>


                {/* LOGO */}
                <motion.div
                    initial={{ opacity: 0, scale: .9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="flex justify-center mt-10"
                >

                    <div className="border-4 border-black p-3 bg-white">
                        <Image
                            src="/logo/logo.jpeg"
                            alt="CARPS Learning Solutions Logo"
                            width={120}
                            height={120}
                            priority
                        />
                    </div>

                </motion.div>


                {/* CARPS VALUES */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="flex flex-wrap justify-center items-center mt-12 text-center"
                >

                    {values.map((item, i) => (

                        <div
                            key={i}
                            className="flex items-center gap-4 px-5 py-2"
                        >

                            <div className="text-center">
                                <p className="text-primary text-3xl font-bold">
                                    {item.letter}
                                </p>
                                <p className="text-gray-600 text-lg">
                                    {item.text}
                                </p>
                            </div>

                            {i !== values.length - 1 && (
                                <div className="h-10 w-[2px] bg-primary" />
                            )}

                        </div>

                    ))}

                </motion.div>



                {/* VISION / MISSION / INTERNSHIP */}
                <div className="grid md:grid-cols-3 gap-12 mt-20">

                    {/* VISION */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex gap-6 border-l-[5px] border-primary pl-6"
                    >

                        <div className="flex items-start justify-center min-w-[50px]">
                            <Eye className="text-primary w-9 h-9" strokeWidth={2.5} />
                        </div>

                        <div>
                            <h3 className="font-bold text-xl mb-3">
                                OUR VISION
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                To become a trusted and impactful Campus to Corporate learning
                                partner, empowering students with confidence, right attitude,
                                responsibility, strong personality, and success-oriented skills.
                            </p>
                        </div>

                    </motion.div>



                    {/* MISSION */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-6 border-l-[5px] border-black pl-6"
                    >

                        <div className="flex items-start justify-center min-w-[50px]">
                            <Target className="text-black w-9 h-9" strokeWidth={2.5} />
                        </div>

                        <div>

                            <h3 className="font-bold text-xl mb-3">
                                OUR MISSION
                            </h3>

                            <ul className="text-gray-600 space-y-2 list-disc pl-5">

                                <li>Bridge the gap through industry training</li>
                                <li>Develop confidence & professional behaviour</li>
                                <li>Provide high-impact structured internships</li>
                                <li>Create an ecosystem focused on ethics</li>

                            </ul>

                        </div>

                    </motion.div>



                    {/* INTERNSHIP VISION */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-6 border-l-[5px] border-primary pl-6"
                    >

                        <div className="flex items-start justify-center min-w-[50px]">
                            <Rocket className="text-primary w-9 h-9" strokeWidth={2.5} />
                        </div>

                        <div>

                            <h3 className="font-bold text-xl mb-3">
                                VISION FOR INTERNSHIPS
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                To create meaningful internship opportunities that transform
                                students into industry-ready professionals through practical
                                tasks, mentorship, and real corporate exposure.
                            </p>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}