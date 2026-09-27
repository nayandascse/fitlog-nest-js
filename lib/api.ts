import type { Workout } from "@/types/workout";

export const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Could not load workout data.");
  }

  return response.json();
}

export async function getWorkout(id: string): Promise<Workout | null> {
  const response = await fetch(`${API_URL}/${id}`, { cache: "no-store" });

  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Could not load this workout.");

  return response.json();
}
