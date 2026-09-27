"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Flame, ListChecks, Timer } from "lucide-react";
import { usePlan } from "@/components/PlanProvider";
import PlanListCard from "@/components/PlanListCard";

type Tab = "plan" | "saved";

export default function MyPlanPage() {
  const { plan, saved } = usePlan();
  const [tab, setTab] = useState<Tab>("plan");

  const minutes = useMemo(() => plan.reduce((sum, item) => sum + item.duration, 0), [plan]);
  const calories = useMemo(() => plan.reduce((sum, item) => sum + item.caloriesBurned, 0), [plan]);
  const items = tab === "plan" ? plan : saved;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-fit-lime">Your training log</p>
        <h1 className="mt-2 text-5xl font-black uppercase tracking-tight">My Plan</h1>
        <p className="mt-3 text-sm leading-6 text-white/45">Cap of five lifts for today. Finish them, then load more.</p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <Metric icon={<ListChecks size={19}/>} label="Exercises" value={plan.length}/>
        <Metric icon={<Timer size={19}/>} label="Minutes" value={minutes}/>
        <Metric icon={<Flame size={19}/>} label="Calories" value={calories}/>
      </div>

      <div className="mt-10 flex gap-2 border-b border-white/10">
        <button onClick={() => setTab("plan")} className={`rounded-t-xl px-5 py-3 text-xs font-black uppercase tracking-wider ${tab === "plan" ? "bg-fit-lime text-black" : "text-white/45 hover:text-white"}`}>
          Today&apos;s Plan ({plan.length})
        </button>
        <button onClick={() => setTab("saved")} className={`rounded-t-xl px-5 py-3 text-xs font-black uppercase tracking-wider ${tab === "saved" ? "bg-fit-lime text-black" : "text-white/45 hover:text-white"}`}>
          Saved ({saved.length})
        </button>
      </div>

      <div className="mt-5">
        {items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-white/15 bg-fit-panel p-12 text-center sm:p-20">
            <CheckCircle2 className="mx-auto text-fit-lime" size={38}/>
            <h2 className="mt-5 text-2xl font-black uppercase">Nothing here yet</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/45">Browse the library and add a lift to get today moving.</p>
            <Link href="/" className="mt-7 inline-flex items-center gap-2 rounded-full bg-fit-lime px-6 py-3 text-xs font-black uppercase tracking-wider text-black">
              Go to workouts <ArrowRight size={15}/>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((workout) => (
              <PlanListCard key={workout.id} workout={workout} savedTab={tab === "saved"} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-fit-panel p-5">
      <div className="flex items-center gap-2 text-fit-lime">{icon}<span className="text-[10px] font-black uppercase tracking-wider">{label}</span></div>
      <p className="mt-3 text-3xl font-black">{value}</p>
    </div>
  );
}
