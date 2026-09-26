import type { Metadata } from "next";
import "./globals.css";

import { WorkoutProvider } from "@/context/WorkoutContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "FitLog | Workout Library",
  description:
    "Build better habits with a focused workout library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0b0c0f] text-white antialiased">

        <WorkoutProvider>

          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <main>
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Toast Notifications */}
          <Toaster position="top-right" />

        </WorkoutProvider>

      </body>
    </html>
  );
}