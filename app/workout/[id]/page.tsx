import Link from "next/link";
import { ArrowLeft, Flame, Gauge, Star, Timer } from "lucide-react";
import { notFound } from "next/navigation";
import { getWorkout } from "@/lib/api";
import DetailActions from "@/components/DetailActions";

export default async function WorkoutDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) notFound();

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <Link href="/" className="mb-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white/45 hover:text-fit-lime">
        <ArrowLeft size={15}/> Back to library
      </Link>

      <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-fit-panel lg:grid-cols-[.95fr_1.05fr]">
        <div className="min-h-[430px] bg-black lg:min-h-[680px]">
          <img src={workout.image} alt={workout.name} className="h-full w-full object-cover" />
        </div>

        <div className="p-6 sm:p-9 lg:p-12">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span key={group} className="rounded-full bg-fit-lime px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-black">{group}</span>
            ))}
          </div>

          <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-fit-lime">{workout.difficulty}</p>
          <h1 className="mt-2 text-4xl font-black uppercase leading-none sm:text-5xl">{workout.name}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">{workout.description}</p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            {[
              ["Equipment", workout.equipment],
              ["Difficulty", workout.difficulty],
              ["Sets", String(workout.sets)],
              ["Reps", workout.reps],
              ["Duration", `${workout.duration} min`],
              ["Calories", `${workout.caloriesBurned} kcal`],
              ["Rating", String(workout.rating)]
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-2 border-b border-white/10 px-4 py-3 text-sm last:border-b-0">
                <span className="text-[10px] font-black uppercase tracking-wider text-white/35">{label}</span>
                <span className="font-bold text-white/80">{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-black uppercase tracking-[0.2em]">Instructions</h2>
            <ol className="mt-4 space-y-3">
              {workout.instructions.map((instruction, index) => (
                <li key={instruction} className="flex gap-3 rounded-xl border border-white/10 bg-black/20 p-3 text-sm leading-6 text-white/65">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-black text-fit-lime">{String(index + 1).padStart(2, "0")}</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8">
            <DetailActions workout={workout} />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 text-center text-[10px] font-black uppercase tracking-wider text-white/35">
            <span className="flex items-center justify-center gap-1.5"><Timer size={13}/> {workout.duration} min</span>
            <span className="flex items-center justify-center gap-1.5"><Flame size={13}/> {workout.caloriesBurned} kcal</span>
            <span className="flex items-center justify-center gap-1.5"><Star size={13}/> {workout.rating}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
