import type { Metadata } from "next";
import "./globals.css";
import { WorkoutProvider } from "@/context/WorkoutContext";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

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
        <WorkoutProvider>
          <Navbar />
          {children}
          <Toaster position="top-right" />
        </WorkoutProvider>
      </body>
    </html>
  );
}