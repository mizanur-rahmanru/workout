"use client";

import Link from "next/link";
import { Dumbbell, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useWorkout } from "@/context/WorkoutContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useWorkout();
  const [menuOpen, setMenuOpen] = useState(false);

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  return (
    <div className="navbar sticky top-0 z-50 border-b border-white/10 bg-black text-white">
      
    
      <div className="navbar-start">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <Dumbbell className="h-7 w-7 text-[#ccff00]" />

          <span className="text-xl font-black tracking-tight">
            FITLOG
          </span>
        </Link>
      </div>

     
      <div className="navbar-center hidden md:flex">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-bold uppercase tracking-wider transition ${
              isWorkoutActive
                ? "text-[#ccff00]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-bold uppercase tracking-wider transition ${
              isPlanActive
                ? "text-[#ccff00]"
                : "text-white/60 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>
      </div>

    
      <div className="navbar-end hidden gap-3 md:flex">
        <Link
          href="/my-plan"
          className="btn min-h-0 h-auto rounded-full border-none bg-[#ccff00] px-4 py-2 text-xs font-black uppercase text-black hover:bg-[#ccff00]"
        >
          Plan
          <span>{plan.length}</span>
        </Link>

        <Link
          href="/my-plan"
          className="btn min-h-0 h-auto rounded-full border border-[#ccff00] bg-transparent px-4 py-2 text-xs font-black uppercase text-[#ccff00] hover:bg-[#ccff00] hover:text-black"
        >
          Saved
          <span>{saved.length}</span>
        </Link>
      </div>

   
      <div className="navbar-end md:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn btn-ghost text-white hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

    
      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-white/10 bg-black px-4 py-5 md:hidden">
          <div className="flex flex-col gap-4">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-bold uppercase tracking-wider ${
                isWorkoutActive
                  ? "text-[#ccff00]"
                  : "text-white/70"
              }`}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-bold uppercase tracking-wider ${
                isPlanActive
                  ? "text-[#ccff00]"
                  : "text-white/70"
              }`}
            >
              My Plan
            </Link>

            <div className="flex gap-3 pt-2">
              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black uppercase text-black"
              >
                Plan
                <span>{plan.length}</span>
              </Link>

              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#ccff00] px-4 py-2 text-xs font-black uppercase text-[#ccff00]"
              >
                Saved
                <span>{saved.length}</span>
              </Link>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}