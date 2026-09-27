import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto grid min-h-[70vh] max-w-3xl place-items-center px-4 text-center">
      <div>
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-fit-lime text-black"><Dumbbell /></div>
        <p className="mt-7 text-xs font-black uppercase tracking-[0.3em] text-fit-lime">404 Error</p>
        <h1 className="mt-3 text-5xl font-black uppercase">Page not found.</h1>
        <p className="mx-auto mt-4 max-w-lg text-white/50">The route you entered does not exist. Head back to the workout library and keep training.</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-fit-lime px-6 py-3 text-sm font-black uppercase text-black"><ArrowLeft size={17}/> Back to workouts</Link>
      </div>
    </section>
  );
}
