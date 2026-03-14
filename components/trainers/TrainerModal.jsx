"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles } from "lucide-react"

export default function TrainerModal({ trainer, close }) {

    return (

        <AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={close}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 z-50"
            >

                <motion.div
                    initial={{ scale: .95, y: 30 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: .95 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden shadow-2xl relative"
                >

                    {/* CLOSE BUTTON */}
                    <button
                        onClick={close}
                        className="absolute right-4 top-4 z-20 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
                    >
                        <X size={20} />
                    </button>


                    {/* IMAGE SIDE */}
                    <div className="relative w-full md:w-[45%] bg-gray-50 flex items-center justify-center p-6">

                        <div className="relative w-full h-[280px] sm:h-[340px] md:h-[420px]">

                            <Image
                                src={trainer.image}
                                alt={trainer.name}
                                fill
                                className="object-contain"
                            />

                        </div>

                    </div>


                    {/* CONTENT */}
                    <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-10">

                        {/* CATEGORY BADGE */}
                        <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                            {trainer.category}
                        </span>

                        {/* NAME */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            {trainer.name}
                        </h3>

                        {/* EXPERTISE */}
                        <p className="text-primary font-medium mt-2 text-base sm:text-lg">
                            {trainer.expertise}
                        </p>

                        <div className="h-[1px] bg-gray-200 my-6" />

                        {/* BIO */}
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            {trainer.bio}
                        </p>

                        {/* SKILLS */}
                        <div className="mt-10">

                            <h4 className="flex items-center gap-2 font-semibold text-gray-900 text-lg mb-5">
                                <Sparkles size={18} className="text-primary" />
                                Core Skills
                            </h4>

                            <div className="flex flex-wrap gap-3">

                                {trainer.skills.map((skill, i) => (

                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 rounded-full text-sm font-medium
                bg-gradient-to-r from-gray-100 to-gray-200
                text-gray-800 shadow-sm
                hover:bg-gradient-to-r hover:from-primary hover:to-red-500
                hover:text-white hover:shadow-lg
                transition-all duration-300"
                                    >
                                        {skill}
                                    </motion.div>

                                ))}

                            </div>

                        </div>

                    </div>

                </motion.div>

            </motion.div>

        </AnimatePresence>

    )

}