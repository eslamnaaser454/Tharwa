"use client";

import { useTranslations } from "next-intl";
import Reveal from "@/components/primitives/Reveal";
import TiltCard from "@/components/primitives/TiltCard";

export default function Pain() {
  const t = useTranslations("pain");
  const cells = t.raw("cells") as Array<{
    num: string;
    title: string;
    desc: string;
  }>;

  return (
    <section className="bg-paper py-[110px] transition-colors duration-300 dark:bg-navy-800 max-[760px]:py-20" aria-labelledby="pain-title">
      <div className="mx-auto max-w-[1200px] px-7">
        <Reveal className="mx-auto mb-16 max-w-[760px] text-center">
          <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-gold-deep dark:text-gold">
            {t("eyebrow")}
          </span>
          <h2 id="pain-title" className="font-display text-[clamp(34px,4.4vw,56px)] font-medium leading-[1.08] tracking-tight text-ink dark:text-[#F1E8D6]">
            {t("title")}
          </h2>
          <p className="mx-auto mt-[18px] max-w-[62ch] text-lg leading-relaxed text-muted dark:text-[#B7C2CE]">
            {t("lede")}
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="grid overflow-hidden rounded-lg border border-line bg-line transition-colors duration-300 dark:border-line-dark dark:bg-line-dark max-[760px]:grid-cols-1 max-[1100px]:grid-cols-2 min-[1100px]:grid-cols-4" style={{ gap: "1px" }}>
            {cells.map((cell, i) => (
              <TiltCard key={i} className="flex min-h-[200px] flex-col gap-3 bg-paper p-[32px_26px] transition-colors duration-300 dark:bg-navy-800">
                <span className="font-display text-sm font-semibold tracking-[0.08em] text-gold-deep dark:text-gold">
                  {cell.num}
                </span>
                <h4 className="text-lg font-semibold leading-snug text-ink dark:text-[#F1E8D6]">
                  {cell.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted dark:text-[#A4B0BC]">{cell.desc}</p>
              </TiltCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
