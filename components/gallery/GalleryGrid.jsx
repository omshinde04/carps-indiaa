"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { galleryImages } from "@/data/galleryData"
import { X } from "lucide-react"

export default function GalleryGrid() {

    const [activeImage, setActiveImage] = useState(null)

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}

                <div className="text-center mb-16">

                    <h2 className="text-3xl md:text-5xl font-bold">
                        Our Training <span className="text-primary">Gallery</span>
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Explore moments from our workshops, training programs,
                        and classroom learning sessions at CARPS Institute.
                    </p>

                </div>


                {/* GRID */}

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

                    {galleryImages.map((img, i) => (

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="break-inside-avoid cursor-pointer group"
                            onClick={() => setActiveImage(img.src)}
                        >

                            <div className="relative overflow-hidden rounded-xl">

                                <Image
                                    src={img.src}
                                    alt="CARPS training gallery"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover group-hover:scale-110 transition duration-500"
                                />

                                {/* overlay */}

                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">

                                    <span className="text-white opacity-0 group-hover:opacity-100 transition text-sm font-semibold">
                                        View Image
                                    </span>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>


            {/* MODAL */}

            <AnimatePresence>

                {activeImage && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
                        onClick={() => setActiveImage(null)}
                    >

                        <motion.div
                            initial={{ scale: .9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: .9 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full"
                        >

                            <button
                                onClick={() => setActiveImage(null)}
                                className="absolute -top-12 right-0 text-white"
                            >
                                <X size={28} />
                            </button>

                            <Image
                                src={activeImage}
                                alt="Gallery preview"
                                width={1200}
                                height={800}
                                className="rounded-xl w-full h-auto"
                            />

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </section>

    )

}