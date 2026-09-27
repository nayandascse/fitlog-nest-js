import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";


const Hero = () => {
    return (
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-24 lg:pt-20">
            <div>
                <div className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-fit-lime">
                    <span className="h-px w-8 bg-fit-lime" /> Workout Library
                </div>
                <h1 className="max-w-3xl text-5xl font-black uppercase leading-[.92] tracking-tight sm:text-6xl lg:text-7xl">
                    Train with intent.<br />
                    <span className="text-fit-lime">Log every set.</span>
                </h1>
                <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="#library" className="inline-flex items-center gap-2 rounded-full bg-fit-lime px-6 py-3 text-sm font-black uppercase tracking-wider text-black transition hover:scale-[1.02]">
                        Browse workouts <ArrowDown size={17} />
                    </Link>
                    <Link href="/my-plan" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-black uppercase tracking-wider transition hover:border-fit-lime hover:text-fit-lime">
                        My plan <ArrowRight size={17} />
                    </Link>
                </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute inset-5 rounded-[2rem] bg-fit-lime/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-fit-panel shadow-lime-glow">
                    <Image src="/banner.png" width={832} height={464} alt="FitLog workout banner" priority className="h-auto w-full object-cover" />
                    <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/75 px-4 py-2 text-xs font-black uppercase tracking-wider backdrop-blur">
                        Consistency {'>'} motivation
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;