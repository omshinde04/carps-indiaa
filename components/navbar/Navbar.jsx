"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Menu,
    X,
    ChevronDown,
    Home,
    User,
    GraduationCap,
    BookOpen,
    Users,
    ImageIcon,
    Trophy,
    Phone
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [programOpen, setProgramOpen] = useState(false);
    const [mobileProgramOpen, setMobileProgramOpen] = useState(false);

    const programList = [
        { name: "Corporate Training", href: "/corporate-training" },
        { name: "Skill Development", href: "/skill-development" },
    ];

    return (
        <header className="w-full bg-white border-b sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="flex items-center justify-between h-20">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3">

                        <Image
                            src="/logo/logo.jpeg"
                            alt="CARPS Institute"
                            width={46}
                            height={46}
                            priority
                        />

                        <div className="flex items-center gap-1 text-lg font-bold">
                            <span>CARPS</span>
                            <span className="text-primary">INDIA</span>
                        </div>

                    </Link>


                    {/* DESKTOP MENU */}
                    <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700">

                        <Link href="/" className="flex items-center gap-1 hover:text-primary">
                            <Home size={18} />
                            Home
                        </Link>

                        <Link href="/about" className="flex items-center gap-1 hover:text-primary">
                            <User size={18} />
                            About
                        </Link>


                        {/* PROGRAMS DROPDOWN */}
                        <div
                            className="relative"
                            onMouseEnter={() => setProgramOpen(true)}
                            onMouseLeave={() => setProgramOpen(false)}
                        >

                            <button className="flex items-center gap-1 hover:text-primary">
                                <GraduationCap size={18} />
                                Programs
                                <ChevronDown size={16} />
                            </button>

                            <AnimatePresence>
                                {programOpen && (

                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        className="absolute top-10 left-0 bg-white shadow-md rounded-md py-2 w-56"
                                    >

                                        {programList.map((item, i) => (

                                            <Link
                                                key={i}
                                                href={item.href}
                                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                                            >
                                                <BookOpen size={16} />
                                                {item.name}
                                            </Link>

                                        ))}

                                    </motion.div>

                                )}
                            </AnimatePresence>

                        </div>


                        <Link href="/success" className="flex items-center gap-1 hover:text-primary">
                            <Trophy size={18} />
                            Success
                        </Link>

                        <Link href="/trainers" className="flex items-center gap-1 hover:text-primary">
                            <Users size={18} />
                            Trainers
                        </Link>

                        <Link href="/gallery" className="flex items-center gap-1 hover:text-primary">
                            <ImageIcon size={18} />
                            Gallery
                        </Link>

                    </nav>


                    {/* RIGHT SIDE BUTTONS */}
                    <div className="hidden lg:flex items-center gap-4">

                        <Link
                            href="/success"
                            className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold border border-primary text-primary hover:bg-primary hover:text-white transition"
                        >
                            <Trophy size={18} />
                            Success
                        </Link>

                        <Link
                            href="/contact"
                            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow hover:opacity-90 transition"
                        >
                            <Phone size={18} />
                            Contact
                        </Link>

                    </div>


                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="lg:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                </div>

            </div>


            {/* MOBILE MENU */}
            <AnimatePresence>

                {menuOpen && (

                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="lg:hidden bg-white border-t"
                    >

                        <div className="flex flex-col gap-4 px-6 py-6 text-lg">

                            <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                                <Home size={18} />
                                Home
                            </Link>

                            <Link href="/about" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                                <User size={18} />
                                About
                            </Link>


                            {/* MOBILE PROGRAMS */}
                            <button
                                onClick={() => setMobileProgramOpen(!mobileProgramOpen)}
                                className="flex items-center justify-between w-full"
                            >
                                <span className="flex items-center gap-2">
                                    <GraduationCap size={18} />
                                    Programs
                                </span>
                                <ChevronDown size={18} />
                            </button>

                            <AnimatePresence>
                                {mobileProgramOpen && (

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col gap-2 pl-6"
                                    >

                                        {programList.map((item, i) => (

                                            <Link
                                                key={i}
                                                href={item.href}
                                                onClick={() => setMenuOpen(false)}
                                                className="flex items-center gap-2 text-gray-600"
                                            >
                                                <BookOpen size={16} />
                                                {item.name}
                                            </Link>

                                        ))}

                                    </motion.div>

                                )}
                            </AnimatePresence>


                            <Link href="/success" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                                <Trophy size={18} />
                                Success
                            </Link>

                            <Link href="/trainers" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                                <Users size={18} />
                                Trainers
                            </Link>

                            <Link href="/gallery" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                                <ImageIcon size={18} />
                                Gallery
                            </Link>

                            <Link
                                href="/contact"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-full mt-4"
                            >
                                <Phone size={18} />
                                Contact
                            </Link>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </header>
    );
}