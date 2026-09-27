import React from 'react';
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                <div className="flex items-center gap-3">
                    <Image src="/logo.png" width={32} height={32} alt="FitLog logo" className="h-8 w-8 object-contain" />
                    <span className="font-black tracking-[0.18em]">FITLOG</span>
                </div>
                <p className="text-xs uppercase tracking-wider text-white/45">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </footer>
    );
};

export default Footer;