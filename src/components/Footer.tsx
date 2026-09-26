import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08090b] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-black tracking-tight"
        >
          <span className="text-[#ccff00]">FIT</span>
          <span>LOG</span>
        </Link>

        {/* Copyright */}
        <p className="text-xs text-white/40">
          © 2025 FitLog. All rights reserved.
        </p>

      </div>
    </footer>
  );
}