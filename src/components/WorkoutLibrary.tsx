"use client";

import { useMemo, useState } from "react";
import WorkoutCard from "@/components/WorkoutCard";

type Workout = {
  id: string;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
};

type Props = {
  workouts: Workout[];
};

export default function WorkoutLibrary({ workouts }: Props) {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = useMemo(() => {
    const sorted = [...workouts];

    if (sortBy === "duration") {
      sorted.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      sorted.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    }

    if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    return sorted;
  }, [workouts, sortBy]);

  return (
    <section
      id="library"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
    >
      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ccff00]">
            Explore
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
            The Library
          </h2>

          <p className="mt-3 text-white/50">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-3">
          <label
            htmlFor="sort"
            className="text-xs font-bold uppercase tracking-wide text-white/40"
          >
            Sort by
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-full border border-white/10 bg-[#121418] px-4 py-2.5 text-sm font-semibold text-white outline-none transition focus:border-[#ccff00]"
          >
            <option value="duration">
              Duration
            </option>

            <option value="calories">
              Calories
            </option>

            <option value="rating">
              Rating
            </option>
          </select>
        </div>

      </div>

      {/* Workout Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </section>
  );
}