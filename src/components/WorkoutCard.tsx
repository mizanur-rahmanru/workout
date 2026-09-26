import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";

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

export default function WorkoutCard({
  workout,
}: {
  workout: Workout;
}) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#121418] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/50"
    >
     
      <div className="relative h-56 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

     
      <div className="p-5">

    
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full border border-[#ccff00]/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#ccff00]"
            >
              {muscle}
            </span>
          ))}
        </div>

      
        <h3 className="text-xl font-black uppercase text-white transition group-hover:text-[#ccff00]">
          {workout.name}
        </h3>

       
        <p className="mt-2 text-sm text-white/50">
          {workout.equipment}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/60">

          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <Flame className="h-4 w-4" />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-[#ccff00] text-[#ccff00]" />
            {workout.rating}
          </span>

        </div>
      </div>
    </Link>
  );
}