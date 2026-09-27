"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Loader2, SlidersHorizontal } from "lucide-react";
import toast from "react-hot-toast";
import WorkoutCard from "@/components/WorkoutCard";
import type { Workout } from "@/types/workout";
import { API_URL } from "@/lib/api";

type SortKey = "duration" | "calories" | "rating";

const Library = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [sortBy, setSortBy] = useState<SortKey>("duration");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error();
        setWorkouts(await response.json());
      } catch {
        toast.error("Could not load workout data.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const sorted = useMemo(() => {
    return [...workouts].sort((a, b) => {
      if (sortBy === "duration") return a.duration - b.duration;
      if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
      return b.rating - a.rating;
    });
  }, [workouts, sortBy]);

  return (
    <section id="library" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-fit-lime">12 lifts</p>
          <h2 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-5xl">The Library</h2>
          <p className="mt-2 text-sm text-white/45">Twelve lifts covering every major muscle group.</p>
        </div>

        <label className="relative w-full sm:w-52">
          <SlidersHorizontal className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-fit-lime" size={16} />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortKey)}
            className="w-full appearance-none rounded-xl border border-white/15 bg-fit-panel py-3 pl-10 pr-9 text-xs font-black uppercase tracking-wider outline-none focus:border-fit-lime"
          >
            <option value="duration">Sort By: Duration</option>
            <option value="calories">Sort By: Calories</option>
            <option value="rating">Sort By: Rating</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" size={16} />
        </label>
      </div>

      {loading ? (
        <div className="grid min-h-[420px] place-items-center rounded-2xl border border-white/10 bg-fit-panel">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="animate-spin text-fit-lime" size={36} />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/50">Loading workouts…</p>
          </div>
        </div>
      ) : sorted.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-fit-panel p-16 text-center">
          <p className="font-black uppercase">No workouts found.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {sorted.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)}
        </div>
      )}
    </section>
  );
}

export default Library;
