import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#0b0c0f] text-white">
      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">

        {/* Left Content */}
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#ccff00]">
            Workout Library
          </p>

          <h1 className="max-w-2xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            Build better habits with a focused workout library.
            Choose your exercises, track your progress, and stay
            consistent every day.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:scale-105"
          >
            Browse Workouts
            <ArrowDownRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/banner.png"
              alt="Workout"
              width={1000}
              height={700}
              priority
              className="h-[360px] w-full object-cover sm:h-[450px] lg:h-[500px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}