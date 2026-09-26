import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="bg-[#0b0c0f] text-white">
      <Hero />

      <WorkoutLibrary workouts={workouts} />
    </main>
  );
}