"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Workout = {
  id: string;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
  description: string;
  instructions: string[];
};

type WorkoutContextType = {
  plan: Workout[];
  saved: Workout[];
  completed: string[];

  addToPlan: (workout: Workout) => boolean;
  removeFromPlan: (id: string) => void;

  saveWorkout: (workout: Workout) => boolean;
  removeFromSaved: (id: string) => void;

  markAsDone: (id: string) => void;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);

export function WorkoutProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [completed, setCompleted] = useState<string[]>([]);


  useEffect(() => {
    const storedPlan = localStorage.getItem("workout-plan");
    const storedSaved = localStorage.getItem("workout-saved");
    const storedCompleted = localStorage.getItem("workout-completed");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    if (storedCompleted) {
      setCompleted(JSON.parse(storedCompleted));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("workout-plan", JSON.stringify(plan));
  }, [plan]);

 
  useEffect(() => {
    localStorage.setItem("workout-saved", JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    localStorage.setItem(
      "workout-completed",
      JSON.stringify(completed)
    );
  }, [completed]);

  
  const addToPlan = (workout: Workout) => {
    if (plan.length >= 5) return false;

    if (plan.some((item) => item.id === workout.id)) {
      return false;
    }

    setPlan((previousPlan) => [
      ...previousPlan,
      workout,
    ]);

    return true;
  };

  
  const removeFromPlan = (id: string) => {
    setPlan((previousPlan) =>
      previousPlan.filter((item) => item.id !== id)
    );
  };


  const saveWorkout = (workout: Workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      return false;
    }

    setSaved((previousSaved) => [
      ...previousSaved,
      workout,
    ]);

    return true;
  };


  const removeFromSaved = (id: string) => {
    setSaved((previousSaved) =>
      previousSaved.filter((item) => item.id !== id)
    );
  };

  
  const markAsDone = (id: string) => {
    setCompleted((previousCompleted) => {
      if (previousCompleted.includes(id)) {
        return previousCompleted;
      }

      return [...previousCompleted, id];
    });
  };

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        saved,
        completed,

        addToPlan,
        removeFromPlan,

        saveWorkout,
        removeFromSaved,

        markAsDone,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );
  }

  return context;
}