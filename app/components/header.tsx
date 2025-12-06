"use client";
import Link from "next/link";
import { useState } from "react";

const services = [
  { href: "/services", label: "Advisory" },
  { href: "/services", label: "Analytics" },
  { href: "/services", label: "Training" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center space-x-3">
        <img src="/logo.svg" alt="Company Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold tracking-tight">Company Name</span>
      </div>

      <nav className="space-x-6 hidden md:flex items-center text-sm font-semibold text-slate-700">
        <Link href="/" className="hover:text-brand-700">Home</Link>
        <Link href="/about" className="hover:text-brand-700">About</Link>
        <div className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="hover:text-brand-700 flex items-center gap-1"
            aria-expanded={open}
            aria-haspopup="true"
          >
            Services ▾
          </button>
          {open && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 w-44 border border-slate-200">
              {services.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link href="/insights" className="hover:text-brand-700">Insights</Link>
        <Link href="/contact" className="hover:text-brand-700">Contact</Link>
      </nav>

      <Link
        href="/contact"
        className="hidden md:inline-flex items-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition"
      >
        Book a call
      </Link>
    </header>
  );
}
