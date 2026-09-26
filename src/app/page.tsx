import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main>
      <h1>FitLog</h1>

      <p>Total Workouts: {workouts.length}</p>

      <div>
        {workouts.map((workout: any) => (
          <div key={workout.id}>
            <h2>{workout.name}</h2>
            <p>{workout.equipment}</p>
            <p>{workout.duration} min</p>
            <p>{workout.caloriesBurned} kcal</p>
            <p>Rating: {workout.rating}</p>
          </div>
        ))}
      </div>
    </main>
  );
}