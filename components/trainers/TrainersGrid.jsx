"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import TrainerModal from "./TrainerModal"
import { trainers } from "@/data/trainers"

export default function TrainersGrid() {

    const [selectedTrainer, setSelectedTrainer] = useState(null)

    return (

        <section className="py-20 md:py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {trainers.map((trainer, i) => (

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            whileHover={{ y: -6 }}
                            className="group"
                        >

                            {/* CARD */}
                            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition flex flex-col h-full overflow-hidden">

                                {/* IMAGE */}
                                <div className="relative h-[380px] bg-white flex items-center justify-center">

                                    <Image
                                        src={trainer.image}
                                        alt={trainer.name}
                                        fill
                                        className="object-contain p-6 transition duration-500 group-hover:scale-105"
                                    />

                                    {/* gradient */}
                                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

                                    {/* name */}
                                    <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                                        {trainer.name}
                                    </h3>

                                </div>


                                {/* CONTENT */}
                                <div className="p-6 flex flex-col flex-grow">

                                    {/* CATEGORY */}
                                    <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-3">
                                        {trainer.category}
                                    </span>

                                    {/* EXPERTISE */}
                                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
                                        {trainer.expertise}
                                    </p>

                                    {/* BUTTON */}
                                    <button
                                        onClick={() => setSelectedTrainer(trainer)}
                                        className="mt-auto pt-6 text-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition"
                                    >
                                        View Profile →
                                    </button>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

            {/* MODAL */}
            {selectedTrainer && (
                <TrainerModal
                    trainer={selectedTrainer}
                    close={() => setSelectedTrainer(null)}
                />
            )}

        </section>

    )

}