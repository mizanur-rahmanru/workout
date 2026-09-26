"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Flame, Star, X } from "lucide-react";
import toast from "react-hot-toast";

import { useWorkout } from "@/context/WorkoutContext";

export default function MyPlan() {
  const {
    plan,
    saved,
    completed,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useWorkout();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const currentWorkouts =
    activeTab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const handleRemove = (id: string) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
      toast.success("Workout removed from today's plan.");
    } else {
      removeFromSaved(id);
      toast.success("Workout removed from saved.");
    }
  };

  const handleDone = (id: string) => {
    markAsDone(id);
    toast.success("Workout marked as done!");
  };

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ccff00]">
            Your Workouts
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl">
            My Plan
          </h1>

          <p className="mt-3 max-w-2xl text-white/50">
            Track your workouts, manage your plan, and keep your
            progress consistent.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-[#121418] p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-white/40">
              Exercises
            </p>

            <p className="mt-2 text-3xl font-black text-[#ccff00]">
              {plan.length}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121418] p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-white/40">
              Minutes
            </p>

            <p className="mt-2 text-3xl font-black text-[#ccff00]">
              {totalMinutes}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121418] p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-white/40">
              Calories
            </p>

            <p className="mt-2 text-3xl font-black text-[#ccff00]">
              {totalCalories}
            </p>
          </div>

        </div>

        {/* Tabs */}
        <div className="mt-12 flex gap-6 border-b border-white/10">

          <button
            onClick={() => setActiveTab("plan")}
            className={`pb-4 text-sm font-bold uppercase tracking-wide transition ${
              activeTab === "plan"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-white/40 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`pb-4 text-sm font-bold uppercase tracking-wide transition ${
              activeTab === "saved"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-white/40 hover:text-white"
            }`}
          >
            Saved
          </button>

        </div>

        {/* Workout List */}
        {currentWorkouts.length === 0 ? (
          <div className="flex min-h-[350px] flex-col items-center justify-center text-center">

            <h2 className="text-3xl font-black uppercase">
              Nothing Here Yet
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/50">
              {activeTab === "plan"
                ? "Add workouts from the library to build your today's plan."
                : "Save workouts from the library so you can find them later."}
            </p>

            <Link
              href="/"
              className="mt-6 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black transition hover:opacity-90"
            >
              Go to Workouts
            </Link>

          </div>
        ) : (
          <div className="mt-8 grid gap-5">

            {currentWorkouts.map((workout) => {
              const isDone = completed.includes(workout.id);

              return (
                <div
                  key={workout.id}
                  className={`overflow-hidden rounded-2xl border bg-[#121418] transition ${
                    isDone
                      ? "border-[#ccff00]/40"
                      : "border-white/10"
                  }`}
                >

                  <div className="flex flex-col md:flex-row">

                    {/* Image */}
                    <div className="relative h-56 w-full shrink-0 md:h-auto md:w-64">
                      <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">

                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <div className="flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscle) => (
                              <span
                                key={muscle}
                                className="rounded-full border border-[#ccff00]/30 px-2.5 py-1 text-[10px] font-bold uppercase text-[#ccff00]"
                              >
                                {muscle}
                              </span>
                            ))}
                          </div>

                          <h2
                            className={`mt-3 text-2xl font-black uppercase ${
                              isDone
                                ? "text-white/50 line-through"
                                : "text-white"
                            }`}
                          >
                            {workout.name}
                          </h2>

                          <p className="mt-2 text-sm text-white/50">
                            {workout.equipment}
                          </p>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => handleRemove(workout.id)}
                          className="rounded-full p-2 text-white/40 transition hover:bg-red-500/10 hover:text-red-400"
                          aria-label="Remove workout"
                        >
                          <X className="h-5 w-5" />
                        </button>

                      </div>

                      {/* Stats */}
                      <div className="mt-5 flex flex-wrap gap-5 text-xs text-white/50">

                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {workout.duration} min
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Flame className="h-4 w-4" />
                          {workout.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Star className="h-4 w-4 text-[#ccff00]" />
                          {workout.rating}
                        </span>

                      </div>

                      {/* Actions */}
                      <div className="mt-6 flex flex-wrap gap-3">

                        <Link
                          href={`/workout/${workout.id}`}
                          className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-bold uppercase transition hover:border-[#ccff00] hover:text-[#ccff00]"
                        >
                          View Details
                        </Link>

                        {activeTab === "plan" && (
                          <button
                            onClick={() => handleDone(workout.id)}
                            disabled={isDone}
                            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-black uppercase transition ${
                              isDone
                                ? "cursor-default bg-[#ccff00]/20 text-[#ccff00]"
                                : "bg-[#ccff00] text-black hover:opacity-90"
                            }`}
                          >
                            <Check className="h-4 w-4" />

                            {isDone ? "Done" : "Mark as Done"}
                          </button>
                        )}

                      </div>

                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        )}

      </div>
    </main>
  );
}