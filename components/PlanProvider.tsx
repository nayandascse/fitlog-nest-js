"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import type { Workout } from "@/types/workout";

type PlanContextType = {
  plan: Workout[];
  saved: Workout[];
  doneIds: number[];
  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  saveForLater: (workout: Workout) => void;
  removeSaved: (id: number) => void;
  markDone: (id: number) => void;
  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
};

const PlanContext = createContext<PlanContextType | null>(null);

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";
const DONE_KEY = "fitlog-done";

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [doneIds, setDoneIds] = useState<number[]>([]);

  useEffect(() => {
    try {
      setPlan(JSON.parse(localStorage.getItem(PLAN_KEY) || "[]"));
      setSaved(JSON.parse(localStorage.getItem(SAVED_KEY) || "[]"));
      setDoneIds(JSON.parse(localStorage.getItem(DONE_KEY) || "[]"));
    } catch {
      localStorage.removeItem(PLAN_KEY);
      localStorage.removeItem(SAVED_KEY);
      localStorage.removeItem(DONE_KEY);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    localStorage.setItem(DONE_KEY, JSON.stringify(doneIds));
  }, [doneIds]);

  const addToPlan = (workout: Workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      toast("Already in today's plan.");
      return;
    }
    if (plan.length >= 5) {
      toast.error("Today's plan is full. Finish a lift before adding another.");
      return;
    }
    setPlan((current) => [...current, workout]);
    toast.success("Added to today's plan");
  };

  const removeFromPlan = (id: number) => {
    setPlan((current) => current.filter((item) => item.id !== id));
    setDoneIds((current) => current.filter((item) => item !== id));
    toast.success("Removed from today's plan");
  };

  const saveForLater = (workout: Workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast("Already saved for later.");
      return;
    }
    setSaved((current) => [...current, workout]);
    toast.success("Saved for later");
  };

  const removeSaved = (id: number) => {
    setSaved((current) => current.filter((item) => item.id !== id));
    toast.success("Removed from saved");
  };

  const markDone = (id: number) => {
    setDoneIds((current) => current.includes(id) ? current : [...current, id]);
    toast.success("Workout marked as done");
  };

  const value = useMemo(
    () => ({
      plan,
      saved,
      doneIds,
      addToPlan,
      removeFromPlan,
      saveForLater,
      removeSaved,
      markDone,
      isInPlan: (id: number) => plan.some((item) => item.id === id),
      isSaved: (id: number) => saved.some((item) => item.id === id)
    }),
    [plan, saved, doneIds]
  );

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) throw new Error("usePlan must be used inside PlanProvider");
  return context;
}
