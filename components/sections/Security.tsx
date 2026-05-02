"use client";

import { useTranslations } from "next-intl";
import { Lock, Shield, AlertCircle, Activity } from "lucide-react";
import Reveal from "@/components/primitives/Reveal";
import TiltCard from "@/components/primitives/TiltCard";

const iconMap: Record<string, React.ElementType> = {
  Lock,
  Shield,
  AlertCircle,
  Activity,
};

export default function Security() {
  const t = useTranslations("security");
  const cards = t.raw("cards") as Array<{
    title: string;
    desc: string;
    icon: string;
  }>;

  return (
    <section
      id="security"
      className="on-dark relative bg-navy-800 py-[110px] text-[#E5DBC4] max-[760px]:py-20"
      aria-labelledby="security-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_50%_0%,rgba(216,166,109,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1200px] px-7">
        <Reveal className="mx-auto mb-16 max-w-[760px] text-center">
          <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
            {t("eyebrow")}
          </span>
          <h2 id="security-title" className="font-display text-[clamp(34px,4.4vw,56px)] font-medium leading-[1.08] tracking-tight text-[#F1E8D6]">
            {t("title")}
          </h2>
          <p className="mx-auto mt-[18px] max-w-[62ch] text-lg leading-relaxed text-[#B7C2CE]">
            {t("lede")}
          </p>
        </Reveal>

        <div className="grid gap-[18px] max-[760px]:grid-cols-1 min-[760px]:grid-cols-2">
          {cards.map((card, i) => {
            const Icon = iconMap[card.icon] ?? Shield;
            return (
              <Reveal key={i} delay={i}>
                <TiltCard className="grid grid-cols-[48px_1fr] gap-[18px] rounded-lg border border-line-dark bg-[rgba(255,255,255,0.025)] p-[30px_28px]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gold-tint text-gold">
                    <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-display text-xl font-semibold text-[#F1E8D6]">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#A4B0BC]">
                      {card.desc}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={4}>
          <div className="mt-8 flex items-start gap-3.5 rounded-md border border-dashed border-[rgba(216,166,109,0.35)] p-[22px_26px]">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" strokeWidth={1.8} />
            <div className="text-[13.5px] leading-relaxed text-[#B7C2CE]">
              <strong className="font-semibold text-gold">{t("disclaimerLabel")}</strong>{" "}
              {t("disclaimer")}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
