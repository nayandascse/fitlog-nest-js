"use client";

import { Check, BookmarkPlus, Dumbbell } from "lucide-react";
import toast from "react-hot-toast";
import type { Workout } from "@/types/workout";
import { usePlan } from "@/components/PlanProvider";

export default function DetailActions({ workout }: { workout: Workout }) {
  const { addToPlan, saveForLater, isInPlan, isSaved } = usePlan();

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        onClick={() => addToPlan(workout)}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-fit-lime px-5 py-3.5 text-sm font-black uppercase tracking-wider text-black transition hover:brightness-95"
      >
        {isInPlan(workout.id) ? <Check size={18} /> : <Dumbbell size={18} />}
        {isInPlan(workout.id) ? "In today's plan" : "Add to today's plan"}
      </button>
      <button
        onClick={() => saveForLater(workout)}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-black uppercase tracking-wider transition hover:border-fit-lime hover:text-fit-lime"
      >
        {isSaved(workout.id) ? <Check size={18} /> : <BookmarkPlus size={18} />}
        {isSaved(workout.id) ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}
