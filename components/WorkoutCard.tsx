"use client";

import Link from "next/link";
import { ArrowUpRight, Flame, Star, Timer } from "lucide-react";
import type { Workout } from "@/types/workout";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-fit-panel transition duration-300 hover:-translate-y-1 hover:border-fit-lime/50 hover:shadow-lime-glow"
    >
      <div className="relative h-52 overflow-hidden bg-black">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {workout.muscleGroups.slice(0, 2).map((group) => (
            <span key={group} className="rounded-full bg-black/75 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-fit-lime backdrop-blur">
              {group}
            </span>
          ))}
        </div>
        <span className="absolute right-3 top-3 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-black uppercase backdrop-blur">
          {workout.difficulty}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-black uppercase leading-tight">{workout.name}</h3>
            <p className="mt-2 text-xs text-white/45">{workout.equipment}</p>
          </div>
          <span className="rounded-full border border-white/10 p-2 text-white/40 transition group-hover:border-fit-lime group-hover:text-fit-lime">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-4 text-xs">
          <span className="flex items-center gap-1.5 text-white/55"><Timer size={14} /> {workout.duration} min</span>
          <span className="flex items-center gap-1.5 text-white/55"><Flame size={14} /> {workout.caloriesBurned} kcal</span>
          <span className="flex items-center justify-end gap-1.5 text-white/70"><Star size={14} className="fill-fit-lime text-fit-lime" /> {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}
