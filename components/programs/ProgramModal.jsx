"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function ProgramModal({ program, onClose }) {

    return (

        <AnimatePresence>

            {program && (

                <motion.div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >

                    <motion.div
                        initial={{ scale: .9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: .9, opacity: 0 }}
                        className="relative w-full max-w-3xl bg-neutral-900 border border-white/10 rounded-2xl p-8 text-white overflow-y-auto max-h-[90vh]"
                    >

                        {/* Close */}

                        <button
                            onClick={onClose}
                            className="absolute right-6 top-6 text-white/60 hover:text-white"
                        >
                            <X size={22} />
                        </button>


                        {/* Title */}

                        <h2 className="text-3xl font-bold mb-4">
                            {program.title}
                        </h2>


                        {/* Description */}

                        <p className="text-white/70 mb-6">
                            {program.description}
                        </p>


                        {/* Program Details */}

                        <div className="grid md:grid-cols-2 gap-6 mb-8">

                            <div>

                                <h4 className="text-sm font-semibold text-white/60 mb-2">
                                    Program Duration
                                </h4>

                                <p>{program.duration}</p>

                            </div>


                            <div>

                                <h4 className="text-sm font-semibold text-white/60 mb-2">
                                    Target Audience
                                </h4>

                                <p>{program.audience}</p>

                            </div>

                        </div>


                        {/* Skills Covered */}

                        <div className="mb-8">

                            <h3 className="font-semibold mb-4">
                                Key Skills Covered
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {program.skills.map((skill, i) => (

                                    <span
                                        key={i}
                                        className="px-3 py-1 text-sm bg-white/10 border border-white/10 rounded-full"
                                    >

                                        {skill}

                                    </span>

                                ))}

                            </div>

                        </div>


                        {/* Outcomes */}

                        <div className="mb-8">

                            <h3 className="font-semibold mb-4">
                                Expected Outcomes
                            </h3>

                            <ul className="space-y-2 text-white/70">

                                {program.outcomes.map((item, i) => (

                                    <li key={i}>• {item}</li>

                                ))}

                            </ul>

                        </div>


                        {/* CTA */}

                        <div className="flex justify-between items-center border-t border-white/10 pt-6">

                            <p className="text-white/60 text-sm">
                                Interested in this program?
                            </p>

                            <a
                                href="/contact"
                                className="px-6 py-3 bg-primary rounded-full text-sm font-semibold hover:scale-105 transition"
                            >

                                Request Training

                            </a>

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>

    )
}