"use client";

import { useTranslations } from "next-intl";
import Reveal from "@/components/primitives/Reveal";

const stepVisuals = [
  <svg key="1" width="100%" height="110" viewBox="0 0 240 110">
    <rect x="20" y="22" width="200" height="14" rx="3" fill="rgba(216,166,109,.15)" stroke="rgba(216,166,109,.35)" />
    <rect x="20" y="22" width="120" height="14" rx="3" fill="#D8A66D" />
    <rect x="20" y="48" width="200" height="14" rx="3" fill="rgba(216,166,109,.15)" stroke="rgba(216,166,109,.35)" />
    <rect x="20" y="48" width="80" height="14" rx="3" fill="#D8A66D" />
    <rect x="20" y="74" width="200" height="14" rx="3" fill="rgba(216,166,109,.15)" stroke="rgba(216,166,109,.35)" />
    <rect x="20" y="74" width="160" height="14" rx="3" fill="#D8A66D" />
  </svg>,
  <svg key="2" width="100%" height="110" viewBox="0 0 240 110">
    <rect x="14" y="20" width="150" height="22" rx="11" fill="#fff" opacity=".95" />
    <text x="28" y="35" fontFamily="Inter" fontSize="10" fill="#1A2A3A">Save SAR 600 toward Hajj?</text>
    <rect x="76" y="48" width="150" height="22" rx="11" fill="rgba(216,166,109,.85)" />
    <text x="92" y="63" fontFamily="Inter" fontSize="10" fill="#0B2233" fontWeight="500">Yes, set it up</text>
    <rect x="14" y="76" width="120" height="22" rx="11" fill="#fff" opacity=".95" />
    <text x="28" y="91" fontFamily="Inter" fontSize="10" fill="#1A2A3A">Done. Goal updated ✓</text>
  </svg>,
  <svg key="3" width="100%" height="110" viewBox="0 0 240 110">
    <path d="M20 80 Q70 30, 120 60 T220 30" stroke="rgba(216,166,109,.3)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
    <circle cx="20" cy="80" r="6" fill="#D8A66D" />
    <circle cx="80" cy="50" r="6" fill="#D8A66D" />
    <circle cx="140" cy="56" r="6" fill="rgba(216,166,109,.5)" />
    <circle cx="200" cy="36" r="6" fill="rgba(216,166,109,.25)" />
    <text x="6" y="100" fontFamily="JetBrains Mono" fontSize="8" fill="#A4B0BC">NOW</text>
    <text x="180" y="22" fontFamily="JetBrains Mono" fontSize="8" fill="#D8A66D">2030</text>
  </svg>,
];

export default function HowItWorks() {
  const t = useTranslations("how");
  const steps = t.raw("steps") as Array<{
    num: string;
    title: string;
    desc: string;
  }>;

  return (
    <section
      id="how"
      className="on-dark relative bg-navy-800 py-[110px] text-[#E5DBC4] max-[760px]:py-20"
      aria-labelledby="how-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_50%_0%,rgba(216,166,109,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1200px] px-7">
        <Reveal className="mx-auto mb-16 max-w-[760px] text-center">
          <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
            {t("eyebrow")}
          </span>
          <h2 id="how-title" className="font-display text-[clamp(34px,4.4vw,56px)] font-medium leading-[1.08] tracking-tight text-[#F1E8D6]">
            {t("title")}
          </h2>
          <p className="mx-auto mt-[18px] max-w-[62ch] text-lg leading-relaxed text-[#B7C2CE]">
            {t("lede")}
          </p>
        </Reveal>

        <div className="relative grid gap-2 max-[760px]:grid-cols-1 min-[760px]:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i}>
              <div className="relative rounded-lg border border-line-dark bg-[rgba(255,255,255,0.025)] p-[36px_30px_30px]">
                <span className="font-display text-sm font-semibold tracking-[0.1em] text-gold">
                  {step.num}
                </span>
                <h3 className="mb-2.5 mt-3.5 font-display text-2xl font-semibold text-[#F1E8D6]">
                  {step.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#A4B0BC]">
                  {step.desc}
                </p>
                <div className="mt-6 flex h-[140px] items-center justify-center overflow-hidden rounded-[10px] border border-line-dark bg-[rgba(11,22,34,0.45)] p-3.5">
                  {stepVisuals[i]}
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute end-[-18px] top-1/2 z-[2] hidden h-px w-9 bg-gold after:absolute after:end-0 after:top-[-3px] after:h-[7px] after:w-[7px] after:rotate-45 after:border-e after:border-t after:border-gold rtl:rotate-180 min-[980px]:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
