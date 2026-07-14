"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";

const LINKS = [
  ["#about", "About"],
  ["#timeline", "Timeline"],
  ["#sponsors", "Sponsors"],
  ["#faq", "FAQ"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-8 md:py-5">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground"
        >
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(212,162,47,0.9)] transition-transform duration-300 group-hover:scale-125"
          />
          IEM / UEM
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="relative font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground [&::after]:absolute [&::after]:-bottom-1.5 [&::after]:left-0 [&::after]:h-px [&::after]:w-0 [&::after]:bg-accent [&::after]:transition-all [&::after]:duration-300 hover:[&::after]:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#about"
            className="group hidden items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent shadow-[0_0_24px_-8px_rgba(212,162,47,0.5)] backdrop-blur-md transition-all duration-200 hover:bg-accent/20 active:translate-y-[1px] md:inline-flex"
          >
            Register now!
            <ArrowUpRight
              size={14}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-foreground backdrop-blur-md transition-colors hover:bg-white/[0.1] md:hidden"
          >
            {open ? <X size={16} weight="bold" /> : <List size={16} weight="bold" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 font-mono text-xs uppercase tracking-[0.24em] text-zinc-300 transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent"
          >
            Register now!
            <ArrowUpRight size={14} weight="bold" />
          </a>
        </nav>
      </div>
    </header>
  );
}
