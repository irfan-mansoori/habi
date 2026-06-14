"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const desktopLines = ["AI agents", "that trade the way you do."];
const mobileLines = ["AI agents", "that trade", "the way", "you do."];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-32 sm:px-6  sm:pt-40 lg:pt-48">
      <div className="hero-glow absolute inset-x-0 top-0 -z-10 h-[760px]" />
      <div className="mx-auto max-w-[1120px] text-center">
        <div className="mx-auto hidden max-w-3xl min-[810px]:block">
          {desktopLines.map((line, index) => (
            <motion.h1
              key={line}
              initial={{ opacity: 0, y: 42 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[56px] font-bold leading-[1.2] tracking-[-0.03em] text-white min-[1200px]:leading-none"
            >
              {line}
            </motion.h1>
          ))}
        </div>
        <div className="mx-auto max-w-sm min-[810px]:hidden">
          {mobileLines.map((line, index) => (
            <motion.h1
              key={line}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1 + index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[36px] font-normal leading-[1.15] tracking-[-0.03em] text-white min-[390px]:text-[40px] min-[390px]:leading-[48px]"
            >
              {line}
            </motion.h1>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mx-auto mt-6 max-w-[40%] px-1 text-base leading-[1.4] text-white/50"
        >
          Privacy-focused trading agents that monitor markets, understand
          intent, manage risk, and execute trades.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68, duration: 0.6 }}
          href="#why-habi"
          className="mt-7 inline-flex rounded-lg bg-white px-5 py-3 text-base font-medium text-black transition-transform hover:scale-[1.03]"
        >
          Create Your Agent
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.75, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 overflow-hidden rounded-xl p-1.5 shadow-[0_60px_160px_rgba(0,0,0,0.75)] sm:mt-20 sm:rounded-2xl sm:p-3"
        >
          <div className="relative aspect-[1.12/1] overflow-hidden rounded-lg sm:aspect-[1.5/1] sm:rounded-xl min-[810px]:aspect-[1.78/1]">
            <Image
              src="/images/hero-dashboard.png"
              alt="Golden landscape"
              fill
              priority
              sizes="(max-width: 1200px) 94vw, 1120px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute inset-x-[4%] bottom-[5%] top-[6%] overflow-hidden rounded-md border border-white/10 bg-black shadow-2xl sm:inset-x-[6%] sm:bottom-[7%] sm:top-[8%] sm:rounded-lg">
              <Image
                src="/images/hero-terminal.png"
                alt="Habi trading terminal"
                fill
                priority
                sizes="(max-width: 1200px) 82vw, 980px"
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
