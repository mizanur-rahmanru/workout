import type { Metadata } from "next";
import "./globals.css";
import { WorkoutProvider } from "@/context/WorkoutContext";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WorkoutProvider>{children}</WorkoutProvider>
      </body>
    </html>
  );
}