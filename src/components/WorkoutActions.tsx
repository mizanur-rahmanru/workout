"use client";

import toast from "react-hot-toast";
import { useWorkout } from "@/context/WorkoutContext";

type Workout = {
  id: string;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
  description: string;
  instructions: string[];
};

export default function WorkoutActions({
  workout,
}: {
  workout: Workout;
}) {
  const {
    plan,
    saved,
    addToPlan,
    saveWorkout,
  } = useWorkout();

  const handleAddToPlan = () => {
    if (plan.length >= 5) {
      toast.error("Today's plan can contain maximum 5 workouts.");
      return;
    }

    if (plan.some((item) => item.id === workout.id)) {
      toast.error("This workout is already in today's plan.");
      return;
    }

    addToPlan(workout);
    toast.success("Workout added to today's plan!");
  };

  const handleSave = () => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.error("This workout is already saved.");
      return;
    }

    saveWorkout(workout);
    toast.success("Workout saved for later!");
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        onClick={handleAddToPlan}
        className="rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black transition hover:opacity-90"
      >
        Add to Today&apos;s Plan
      </button>

      <button
        onClick={handleSave}
        className="rounded-full border border-[#ccff00] px-6 py-3 text-sm font-black uppercase text-[#ccff00] transition hover:bg-[#ccff00] hover:text-black"
      >
        Save for Later
      </button>
    </div>
  );
}