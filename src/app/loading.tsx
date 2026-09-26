export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0c0f] text-white">
      <div className="flex flex-col items-center gap-5">

      
        <span className="loading loading-spinner loading-lg text-[#ccff00]" />

    
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
          Loading workouts...
        </p>

      </div>
    </main>
  );
}