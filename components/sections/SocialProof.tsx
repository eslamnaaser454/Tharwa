"use client";

import { useTranslations } from "next-intl";
import Reveal from "@/components/primitives/Reveal";
import TiltCard from "@/components/primitives/TiltCard";

export default function SocialProof() {
  const t = useTranslations("proof");
  const stats = t.raw("stats") as Array<{ eyebrow: string; value: string }>;
  const testimonials = t.raw("testimonials") as Array<{
    quote: string;
    name: string;
    role: string;
    initial: string;
  }>;

  return (
    <section className="bg-paper py-[110px] max-[760px]:py-20" aria-labelledby="proof-title">
      <div className="mx-auto max-w-[1200px] px-7">
        <Reveal className="mx-auto mb-16 max-w-[760px] text-center">
          <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-gold-deep">
            {t("eyebrow")}
          </span>
          <h2 id="proof-title" className="font-display text-[clamp(34px,4.4vw,56px)] font-medium leading-[1.08] tracking-tight text-ink">
            {t("title")}
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <div className="mb-12 grid overflow-hidden rounded-lg border border-line bg-white max-[760px]:grid-cols-1 min-[760px]:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="border-b border-line p-[32px_28px] last:border-b-0 min-[760px]:border-b-0 min-[760px]:border-e min-[760px]:last:border-e-0"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-gold-deep">
                  {stat.eyebrow}
                </div>
                <div className="mt-2 font-display text-[28px] font-semibold leading-[1.15] tracking-tight text-ink">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-[18px] max-[760px]:grid-cols-1 max-[1100px]:grid-cols-2 min-[1100px]:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={i} delay={i}>
              <TiltCard
                className={`flex flex-col gap-[18px] rounded-lg border border-line bg-white p-[28px_26px] ${
                  i === testimonials.length - 1
                    ? "max-[1100px]:col-span-full min-[1100px]:col-auto"
                    : ""
                }`}
              >
                <blockquote className="font-display text-[21px] font-medium leading-[1.35] tracking-tight text-ink before:me-0.5 before:text-4xl before:leading-none before:text-gold before:content-['“']">
                  {item.quote}
                </blockquote>
                <div className="mt-auto flex items-center gap-3">
                  <div className="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-deep font-display text-base font-semibold text-navy-900 transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:rotate-[-6deg] hover:scale-[1.12]">
                    {item.initial}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ink">
                      {item.name}
                    </div>
                    <div className="text-xs text-muted">{item.role}</div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
