import Hero from "@/components/Hero";
import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="bg-[#0b0c0f]">
      <Hero />

      <section
        id="library"
        className="mx-auto min-h-[500px] max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
      >
        <h2 className="text-4xl font-black uppercase text-white">
          The Library
        </h2>

        <p className="mt-3 text-white/60">
          Twelve lifts covering every major muscle group.
        </p>

        <p className="mt-8 text-[#ccff00]">
          Workouts loaded: {workouts.length}
        </p>
      </section>
    </main>
  );
}