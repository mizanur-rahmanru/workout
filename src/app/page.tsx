import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";
import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="bg-[#0b0c0f] text-white">

      <Hero />

      {/* Workout Library */}
      <section
        id="library"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
      >
        {/* Section Header */}
        <div className="mb-10">
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

        {/* Workout Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout: any) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>

      </section>

    </main>
  );
}