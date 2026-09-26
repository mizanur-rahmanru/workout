"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0c0f]">
            <div className="navbar mx-auto min-h-[72px] max-w-7xl px-5 sm:px-8 lg:px-10">


                <div className="navbar-start">
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3"
                    >
                      
                        <Image
                            src="/logo.png"
                            alt="FitLog Logo"
                            width={40}
                            height={40}
                            priority
                            className="h-9 w-9 object-contain"
                        />

                        
                        <span className="text-xl font-black tracking-tight">
                            <span className="text-[#ccff00]">FIT</span>
                            <span className="text-white">LOG</span>
                        </span>
                    </Link>
                </div>

                <div className="navbar-center hidden md:flex">
                    <nav className="flex items-center gap-8">

                        <Link
                            href="/"
                            className={`text-sm font-semibold transition ${isWorkoutActive
                                ? "text-[#ccff00]"
                                : "text-white/60 hover:text-white"
                                }`}
                        >
                            Workout
                        </Link>

                        <Link
                            href="/my-plan"
                            className={`text-sm font-semibold transition ${isPlanActive
                                ? "text-[#ccff00]"
                                : "text-white/60 hover:text-white"
                                }`}
                        >
                            My Plan
                        </Link>

                    </nav>
                </div>


                <div className="navbar-end hidden md:flex">
                    <div className="flex items-center gap-3">


                        <Link
                            href="/my-plan"
                            className="flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-bold text-black transition hover:opacity-90"
                        >
                            <span>Plan</span>

                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1.5 text-[10px] font-bold text-[#ccff00]">
                                {plan.length}
                            </span>
                        </Link>


                        <Link
                            href="/my-plan"
                            className="flex items-center gap-2 rounded-full border border-[#ccff00]/70 px-3 py-1.5 text-xs font-bold text-[#ccff00] transition hover:bg-[#ccff00] hover:text-black"
                        >
                            <span>Saved</span>

                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-current px-1.5 text-[10px] font-bold">
                                {saved.length}
                            </span>
                        </Link>

                    </div>
                </div>

                <div className="navbar-end md:hidden">
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="btn btn-ghost btn-sm text-white hover:bg-white/10"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="border-t border-white/10 bg-[#0b0c0f] px-5 py-5 md:hidden">
                    <nav className="flex flex-col gap-4">

                        <Link
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className={`text-sm font-semibold ${isWorkoutActive
                                ? "text-[#ccff00]"
                                : "text-white/70"
                                }`}
                        >
                            Workout
                        </Link>

                        <Link
                            href="/my-plan"
                            onClick={() => setMenuOpen(false)}
                            className={`text-sm font-semibold ${isPlanActive
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
                                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#ccff00] py-2 text-xs font-bold text-black"
                            >
                                Plan
                                <span className="rounded-full bg-black px-2 py-0.5 text-[#ccff00]">
                                    {plan.length}
                                </span>
                            </Link>

                            <Link
                                href="/my-plan"
                                onClick={() => setMenuOpen(false)}
                                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#ccff00]/70 py-2 text-xs font-bold text-[#ccff00]"
                            >
                                Saved
                                <span className="rounded-full border border-current px-2 py-0.5">
                                    {saved.length}
                                </span>
                            </Link>

                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}