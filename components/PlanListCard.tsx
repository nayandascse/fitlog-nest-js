"use client";

import Link from "next/link";
import { Check, CircleX, Eye, Flame, Star, Timer } from "lucide-react";
import type { Workout } from "@/types/workout";
import { usePlan } from "@/components/PlanProvider";

export default function PlanListCard({ workout, savedTab = false }: { workout: Workout; savedTab?: boolean }) {
  const { doneIds, markDone, removeFromPlan, removeSaved } = usePlan();
  const done = doneIds.includes(workout.id);

  return (
    <article className={`grid gap-4 rounded-2xl border p-4 sm:grid-cols-[140px_1fr_auto] sm:items-center ${done ? "border-fit-lime/40 bg-fit-lime/[.04]" : "border-white/10 bg-fit-panel"}`}>
      <div className="h-28 overflow-hidden rounded-xl bg-black">
        <img src={workout.image} alt={workout.name} className="h-full w-full object-cover" />
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((group) => (
            <span key={group} className="rounded-full bg-white/5 px-2 py-1 text-[9px] font-black uppercase tracking-wider text-fit-lime">{group}</span>
          ))}
        </div>
        <h3 className="mt-2 text-xl font-black uppercase">{workout.name}</h3>
        <p className="mt-1 text-xs text-white/45">{workout.equipment}</p>
        <div className="mt-3 flex flex-wrap gap-4 text-xs text-white/50">
          <span className="flex items-center gap-1"><Timer size={14}/> {workout.duration} min</span>
          <span className="flex items-center gap-1"><Flame size={14}/> {workout.caloriesBurned} kcal</span>
          <span className="flex items-center gap-1"><Star size={14} className="fill-fit-lime text-fit-lime"/> {workout.rating}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 sm:flex-col">
        <Link href={`/workout/${workout.id}`} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs font-black uppercase hover:border-fit-lime hover:text-fit-lime">
          <Eye size={14}/> View Details
        </Link>

        {!savedTab && (
          <button
            onClick={() => markDone(workout.id)}
            disabled={done}
            className={`inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-black uppercase ${done ? "bg-fit-lime text-black" : "bg-white/10 hover:bg-fit-lime hover:text-black"}`}
          >
            <Check size={14}/> {done ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          onClick={() => savedTab ? removeSaved(workout.id) : removeFromPlan(workout.id)}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-400/20 px-3 py-2 text-xs font-black uppercase text-red-300 hover:bg-red-400/10"
        >
          <CircleX size={14}/> Remove
        </button>
      </div>
    </article>
  );
}
