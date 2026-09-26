# FITLOG

A modern and responsive workout library built with Next.js, TypeScript, and Tailwind CSS. FitLog helps users explore workouts, view detailed exercise information, create a daily workout plan, and save workouts for later.

## 🚀 Live Project

https://workout-three-navy.vercel.app/
## 📌 Project Overview

FitLog is a workout management web application where users can browse a collection of exercises, check workout details, create their own daily workout plan, and save exercises for later.

The application fetches workout data from an external API and provides a responsive experience across mobile, tablet, and desktop devices.

## 🛠️ Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Hot Toast
- Lucide React
- REST API
- LocalStorage
- Next.js App Router

## ✨ Key Features

### 1. Workout Library
Browse all available workouts in a responsive grid layout with workout images, muscle groups, equipment, duration, calories, and ratings.

### 2. Workout Details
View detailed information about each workout including description, equipment, duration, calories, rating, and step-by-step instructions.

### 3. Today's Workout Plan
Add workouts to your daily plan and manage them from the My Plan page.

### 4. Save Workouts
Save workouts for later and access them from the Saved section.

### 5. Workout Sorting
Sort workouts by:
- Duration
- Calories
- Rating

### 6. Mark Workout as Done
Mark workouts as completed with visual feedback and toast notifications.

### 7. Persistent Data
Workout plans, saved workouts, and completed workouts are stored using LocalStorage.

### 8. Responsive Design
The application is designed to work smoothly across:
- Mobile
- Tablet
- Desktop

### 9. Toast Notifications
Users receive instant feedback when adding, saving, removing, or completing workouts.

### 10. Custom 404 Page
A custom not-found page is displayed for invalid routes and unavailable workouts.

## 📂 Project Structure

```text
workout/
├── public/
│   ├── banner.png
│   └── logo.png
│
├── src/
│   ├── app/
│   │   ├── workout/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── my-plan/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── WorkoutActions.tsx
│   │   ├── WorkoutCard.tsx
│   │   └── WorkoutLibrary.tsx
│   │
│   ├── context/
│   │   └── WorkoutContext.tsx
│   │
│   └── lib/
│       └── api.ts
│
└── README.md
