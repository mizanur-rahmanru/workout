import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-[#0b0c0f] px-5 text-white">
      <div className="text-center">

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ccff00]">
          FitLog
        </p>

        <h1 className="mt-4 text-7xl font-black tracking-tight sm:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-black uppercase sm:text-3xl">
          Workout Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/50">
          The page or workout you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black transition hover:opacity-90"
        >
          Back to Workouts
        </Link>

      </div>
    </main>
  );
}