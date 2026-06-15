"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/src/data/site-content";
import HabiBrand from "@/src/components/HabiBrand";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] bg-[#0a0908] px-4 sm:px-6 min-[810px]:px-10">
      <nav className="mx-auto flex h-16 max-w-[1080px] items-center justify-between px-0 text-white">
        <HabiBrand compact />
        <div className="hidden items-center gap-2 text-base text-[#dedede] lg:flex xl:gap-4 pl-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#pricing"
          className="hidden rounded-lg bg-white px-2 py-2 leading-none text-base font-medium text-black transition-transform hover:scale-[1.03] lg:block"
        >
          Get Started
        </a>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-9 place-items-center rounded-lg border border-white/15 lg:hidden"
        >
          <span className="text-lg leading-none">{open ? "×" : "☰"}</span>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto max-h-[calc(100dvh-64px)] max-w-[1120px] overflow-y-auto border-t border-white/10 bg-[#080808] py-3 shadow-2xl lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3.5 text-base text-white hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl bg-white px-2 py-2 text-center text-base font-medium text-black"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
