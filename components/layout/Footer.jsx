"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Linkedin,
    Twitter,
    Instagram,
    GraduationCap
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#0e0e0f] text-gray-300 pt-20 pb-10">

            <div className="max-w-7xl mx-auto px-6">

                {/* MAIN GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* BRAND */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >

                        <div className="flex items-center gap-3 mb-5">

                            <div className="bg-white p-2 rounded-lg">
                                <Image
                                    src="/logo/logo.jpeg"
                                    alt="CARPS India Logo"
                                    width={38}
                                    height={38}
                                />
                            </div>
                            <h3 className="text-xl font-bold tracking-wide">
                                <span className="text-white">CARPS</span>{" "}
                                <span className="text-primary">INDIA</span>
                            </h3>

                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Bridging the academic-corporate gap through world-class
                            education, corporate training, and professional skill development.
                        </p>

                        {/* SOCIAL */}
                        <div className="flex gap-4 mt-6">

                            <div className="bg-[#1a1a1c] p-3 rounded-full hover:bg-primary transition cursor-pointer">
                                <Facebook size={18} />
                            </div>

                            <div className="bg-[#1a1a1c] p-3 rounded-full hover:bg-primary transition cursor-pointer">
                                <Linkedin size={18} />
                            </div>

                            <div className="bg-[#1a1a1c] p-3 rounded-full hover:bg-primary transition cursor-pointer">
                                <Twitter size={18} />
                            </div>

                            <div className="bg-[#1a1a1c] p-3 rounded-full hover:bg-primary transition cursor-pointer">
                                <Instagram size={18} />
                            </div>

                        </div>

                    </motion.div>



                    {/* QUICK LINKS */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >

                        <h4 className="text-white font-semibold mb-6 tracking-wide">
                            QUICK LINKS
                        </h4>

                        <ul className="space-y-3 text-gray-400">

                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About CARPS</Link></li>
                            <li><Link href="/programs">Programs</Link></li>
                            <li><Link href="/models">Models</Link></li>
                            <li><Link href="/trainers">Our Trainers</Link></li>
                            <li><Link href="/gallery">Gallery</Link></li>
                            <li><Link href="/success">Success Stories</Link></li>

                        </ul>

                    </motion.div>



                    {/* CATEGORIES */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >

                        <h4 className="text-white font-semibold mb-6 tracking-wide">
                            PROGRAM CATEGORIES
                        </h4>

                        <ul className="space-y-3 text-gray-400">

                            <li><Link href="#">Tech Modules</Link></li>
                            <li><Link href="#">Business Intelligence</Link></li>
                            <li><Link href="#">Soft Skills Training</Link></li>
                            <li><Link href="#">Corporate Solutions</Link></li>
                            <li><Link href="#">Placement Support</Link></li>
                            <li><Link href="#">Entrepreneurship Impact</Link></li>

                        </ul>

                    </motion.div>



                    {/* CONTACT INFO */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >

                        <h4 className="text-white font-semibold mb-6 tracking-wide">
                            CONTACT INFO
                        </h4>

                        <div className="space-y-5 text-gray-400">

                            <div className="flex gap-3 items-start">
                                <MapPin className="text-primary mt-1" size={18} />
                                <p>
                                    Main Corporate Campus <br />
                                    Innovation Hub, Phase 3 <br />
                                    Tech City
                                </p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <Mail className="text-primary" size={18} />
                                <p>info@carpsindia.com</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <Phone className="text-primary" size={18} />
                                <p>+91 98765 43210</p>
                            </div>

                        </div>

                    </motion.div>

                </div>



                {/* DIVIDER */}
                <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} CARPS Institute of Professional Studies. All Rights Reserved.
                    </p>

                    <div className="flex gap-6 text-gray-500 text-sm">

                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                        <Link href="#">Cookie Policy</Link>

                    </div>

                </div>

            </div>

        </footer>
    );
}