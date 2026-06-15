import { benefits } from "@/src/data/site-content";

type BenefitIcon = (typeof benefits)[number]["icon"];

function Icon({ name }: { name: BenefitIcon }) {
  const props = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "receipt") {
    return (
      <svg {...props}>
        <path d="M5.5 5.5h17v17l-2.8-1.7-2.8 1.7-2.9-1.7-2.9 1.7-2.8-1.7-2.8 1.7v-17Z" />
        <path d="M9 10.5h10M9 15h10" />
      </svg>
    );
  }

  if (name === "steps") {
    return (
      <svg {...props}>
        <path d="M4 21h7v-5h6v-5h7" />
      </svg>
    );
  }

  if (name === "send") {
    return (
      <svg {...props}>
        <path d="m4.8 12.5 18-7.3-7.3 18-3.2-7.5-7.5-3.2Z" />
        <path d="m12.3 15.7 4.8-4.8" />
      </svg>
    );
  }

  if (name === "hash") {
    return (
      <svg {...props}>
        <path d="M10.5 4 8 24M20 4l-2.5 20M4.5 10.5h19M3.5 17.5h19" />
      </svg>
    );
  }

  if (name === "chat") {
    return (
      <svg {...props}>
        <path d="M5 6.5h18v14H14l-5.5 3v-3H5v-14Z" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M8.2 11.5a5.8 5.8 0 0 1 11.6 0c0 7 2.7 7 2.7 8.5h-17c0-1.5 2.7-1.5 2.7-8.5Z" />
      <path d="M11.5 22.5a2.8 2.8 0 0 0 5 0" />
    </svg>
  );
}

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:py-[110px]"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="max-w-3xl">
          <p className="text-[14px] leading-none tracking-[-0.02em] text-white/40">
            {"// Benefits"}
          </p>
          <h2 className="mt-5 text-[32px] font-normal leading-[1.2] tracking-[-0.03em] min-[1200px]:text-[36px] min-[1200px]:leading-[1.1]">
            Ship faster.
            <span className="text-white/40"> Code better.</span>
          </h2>
        </div>
        <div className="mt-10 grid gap-3.5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="flex min-h-[245px] flex-col rounded-[9px] bg-[#151414] p-5 transition-colors duration-300 hover:bg-[#191818] sm:min-h-[190px] sm:p-6"
            >
              <span className="grid size-12 place-items-center rounded-full bg-[#080808] text-[#f4f4f2] sm:size-[64px]">
                <Icon name={benefit.icon} />
              </span>
              <h3 className="mt-auto pt-8 text-[16px] font-semibold leading-[1.2] tracking-[-0.025em] sm:text-[16px]">
                {benefit.title}
              </h3>
              <p className="mt-2.5 max-w-[360px] text-base leading-[1.3] text-white/45">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
