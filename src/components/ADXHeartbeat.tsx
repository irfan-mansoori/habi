"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const adxFeatures = [
  {
    title: "Premium features",
    description: "$ADX unlocks premium features of keyAura",
    icon: "/images/premium-icon.svg",
  },
  {
    title: "33% staked",
    description: "1/3 of the $ADX total supply is staked",
    icon: "/images/stack-icon.svg",
  },
  {
    title: "Burning mechanism",
    description: "Built-in",
    icon: "/images/burning-icon.svg",
  },
  {
    title: "Fully unlocked",
    description: "Max supply already minted",
    icon: "/images/unlocked-icon.svg",
  },
  {
    title: "Staking rewards",
    description: "Earn rewards by staking $ADX",
    icon: "/images/reward-icon.svg",
  },
] as const;

export default function ADXHeartbeat() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : { opacity: 0, y: 34, filter: "blur(8px)" };
  const animate = { opacity: 1, y: 0, filter: "blur(0px)" };
  const transition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 min-[1200px]:py-24">
      <div className="mx-auto w-full max-w-[1080px]">
        <motion.div
          initial={initial}
          whileInView={animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={transition}
          className="max-w-[620px]"
          style={{ willChange: "transform, opacity, filter" }}
        >
          <p className="text-sm leading-[1.3] text-[#858585]">
            <span className="text-white/35">{`// `}</span>
            Features
          </p>
          <h2 className="mt-4 text-[28px] font-normal leading-[1.12] tracking-[-0.03em] sm:text-[32px] min-[1200px]:text-[36px]">
            $ADX <span className="text-[#858585]">is the heartbeat</span>
          </h2>
        </motion.div>

        <motion.div
          initial={initial}
          whileInView={animate}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.08 }}
          className="mt-10 overflow-hidden rounded-[9px] bg-[#171615] min-[810px]:mt-12"
          style={{ willChange: "transform, opacity, filter" }}
        >
          <div className="grid min-h-[374px] gap-8 px-6 py-8 sm:px-10 min-[810px]:grid-cols-[0.92fr_1.08fr] min-[810px]:items-center min-[810px]:px-12 min-[810px]:py-10">
            <div className="max-w-[380px]">
              {adxFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`grid grid-cols-[22px_1fr] gap-4 py-4 ${
                    index === 0 ? "pt-0" : "border-t border-white/8"
                  }`}
                >
                  <span className="relative mt-1 block size-[22px] shrink-0">
                    <Image
                      src={feature.icon}
                      alt=""
                      fill
                      sizes="22px"
                      className="object-contain"
                    />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-medium leading-[1.25] tracking-[-0.02em] text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-[1.3] text-[#858585]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mx-auto flex h-[260px] w-full max-w-[430px] items-center justify-center min-[810px]:h-[330px] min-[1200px]:h-[360px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(118,82,255,0.2)_0%,rgba(118,82,255,0.08)_30%,transparent_67%)]" />
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.92 }
                }
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative h-[220px] w-[220px] min-[810px]:h-[285px] min-[810px]:w-[285px] min-[1200px]:h-[310px] min-[1200px]:w-[310px]"
              >
                <Image
                  src="/images/gemini-icon.svg"
                  alt="$ADX token"
                  fill
                  sizes="(max-width: 809px) 220px, 310px"
                  className="object-contain scale-125 drop-shadow-[0_30px_42px_rgba(35,17,122,0.55)]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
