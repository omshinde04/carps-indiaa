"use client"

import Image from "next/image"

export default function FiveMFormula() {

    return (

        <section className="relative py-20 md:py-28 bg-gray-50 overflow-hidden">

            {/* soft background glow */}

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 w-[900px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-white blur-3xl opacity-60"></div>
            </div>


            <div className="relative max-w-7xl mx-auto px-6">

                {/* Header */}

                <div className="text-center max-w-3xl mx-auto">

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">

                        The <span className="text-primary">5M Formula</span> :
                        <br className="hidden md:block" />
                        Five Experts, One Goal, Stronger You

                    </h2>

                    <p className="text-gray-600 mt-5 text-base md:text-lg leading-relaxed">

                        Our unique 5M Formula brings together Mentorship, Motivation,
                        Mastery, Mindset and Mission — the pillars of personal and
                        professional success.

                    </p>

                </div>


                {/* Diagram */}

                <div className="flex justify-center mt-10 md:mt-14 lg:mt-16">

                    <div className="relative 
                        w-[115%] sm:w-[105%] md:w-full 
                        max-w-[1200px]">

                        <Image
                            src="/formula/formula3.png"
                            alt="5M Success Formula Diagram"
                            width={1600}
                            height={1000}
                            priority
                            className="w-full h-auto object-contain select-none"
                        />

                    </div>

                </div>

            </div>

        </section>

    )

}