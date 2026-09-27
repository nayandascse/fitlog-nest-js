"use client";

import Image from "next/image";
import Link from "next/link";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { PlanProvider, usePlan} from "@/app/components/PlanProvider";


const Navbar = () => {


    const pathname = usePathname();
    const { plan, saved } = usePlan();
    const [open, setOpen] = useState(false);

    const active = (href: string) =>
        pathname === href ? "text-fit-lime" : "text-white/60 hover:text-white";

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-fit-bg/95 backdrop-blur">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/logo.png" width={42} height={42} alt="FitLog logo" className="h-10 w-10 object-contain" />
                    <span className="hidden text-xl font-black tracking-[0.18em] sm:block">FITLOG</span>
                </Link>

                <nav className="hidden items-center gap-9 md:flex">
                    <Link href="/" className={`text-sm font-bold uppercase tracking-widest transition ${active("/")}`}>Workout</Link>
                    <Link href="/my-plan" className={`text-sm font-bold uppercase tracking-widest transition ${active("/my-plan")}`}>My Plan</Link>
                </nav>

                <div className="hidden items-center gap-2 sm:flex">
                    <Link href="/my-plan" className="flex items-center gap-2 rounded-full bg-fit-lime px-4 py-2 text-xs font-black uppercase tracking-wider text-black">
                        Plan <span className="rounded-full bg-black px-2 py-0.5 text-fit-lime">{plan.length}</span>
                    </Link>
                    <Link href="/my-plan" className="flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-black uppercase tracking-wider text-white">
                        Saved <span className="rounded-full border border-white/30 px-2 py-0.5">{saved.length}</span>
                    </Link>
                </div>

                <button onClick={() => setOpen((v) => !v)} className="rounded-lg border border-white/10 p-2 md:hidden" aria-label="Toggle menu">
                    {open ? <X size={21} /> : <Menu size={21} />}
                </button>
            </div>

            {open && (
                <div className="border-t border-white/10 px-4 py-5 md:hidden">
                    <div className="flex flex-col gap-4">
                        <Link onClick={() => setOpen(false)} href="/" className={active("/")}>WORKOUT</Link>
                        <Link onClick={() => setOpen(false)} href="/my-plan" className={active("/my-plan")}>MY PLAN</Link>
                        <div className="flex gap-2 pt-2">
                            <Link href="/my-plan" className="flex items-center gap-2 rounded-full bg-fit-lime px-3 py-2 text-xs font-black text-black"><Dumbbell size={14} /> PLAN {plan.length}</Link>
                            <Link href="/my-plan" className="rounded-full border border-white/30 px-3 py-2 text-xs font-black">SAVED {saved.length}</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;