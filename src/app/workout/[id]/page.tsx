import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  Flame,
  Star,
} from "lucide-react";

import { getWorkout } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function WorkoutDetails({ params }: Props) {
  const { id } = await params;

  let workout;

  try {
    workout = await getWorkout(id);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-[#ccff00]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Library
        </Link>

      
        <div className="grid gap-10 lg:grid-cols-2">

      
          <div className="relative min-h-[400px] overflow-hidden rounded-2xl border border-white/10 lg:min-h-[600px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">

            <div className="mb-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle: string) => (
                <span
                  key={muscle}
                  className="rounded-full border border-[#ccff00]/40 px-3 py-1 text-xs font-bold uppercase text-[#ccff00]"
                >
                  {muscle}
                </span>
              ))}
            </div>

      
            <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              {workout.name}
            </h1>

      
            <p className="mt-5 max-w-2xl leading-7 text-white/60">
              {workout.description}
            </p>

         
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">

          
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wide text-white/40">
                  Equipment
                </p>

                <p className="mt-2 font-bold">
                  {workout.equipment}
                </p>
              </div>

           
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wide text-white/40">
                  Duration
                </p>

                <p className="mt-2 flex items-center gap-2 font-bold">
                  <Clock className="h-4 w-4 text-[#ccff00]" />
                  {workout.duration} min
                </p>
              </div>

           
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wide text-white/40">
                  Calories
                </p>

                <p className="mt-2 flex items-center gap-2 font-bold">
                  <Flame className="h-4 w-4 text-[#ccff00]" />
                  {workout.caloriesBurned} kcal
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-wide text-white/40">
                  Rating
                </p>

                <p className="mt-2 flex items-center gap-2 font-bold">
                  <Star className="h-4 w-4 fill-[#ccff00] text-[#ccff00]" />
                  {workout.rating}
                </p>
              </div>

            </div>

            <div className="mt-8">
              <h2 className="text-xl font-black uppercase">
                Instructions
              </h2>

              <div className="mt-5 space-y-4">
                {workout.instructions
                  .slice(0, 4)
                  .map((instruction: string, index: number) => (
                    <div
                      key={index}
                      className="flex gap-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-black text-black">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-white/60">
                        {instruction}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

           
            <WorkoutActions workout={workout} />

          </div>
        </div>
      </div>
    </main>
  );
}