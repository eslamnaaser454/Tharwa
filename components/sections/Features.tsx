"use client";

import { useTranslations } from "next-intl";
import {
  MessageSquareText,
  TrendingUp,
  Clock,
  ShieldCheck,
  Eye,
  Globe,
} from "lucide-react";
import Reveal from "@/components/primitives/Reveal";
import TiltCard from "@/components/primitives/TiltCard";

const iconMap: Record<string, React.ElementType> = {
  MessageSquareText,
  TrendingUp,
  Clock,
  ShieldCheck,
  Eye,
  Globe,
};

export default function Features() {
  const t = useTranslations("features");
  const items = t.raw("items") as Array<{
    title: string;
    desc: string;
    tag: string;
    icon: string;
  }>;

  return (
    <section
      id="features"
      className="bg-off py-[110px] transition-colors duration-300 dark:bg-navy-900 max-[760px]:py-20"
      aria-labelledby="features-title"
    >
      <div className="mx-auto max-w-[1200px] px-7">
        <div className="mb-14 grid items-end gap-12 max-[760px]:grid-cols-1 min-[760px]:grid-cols-2">
          <Reveal>
            <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-gold-deep dark:text-gold">
              {t("eyebrow")}
            </span>
            <h2
              id="features-title"
              className="mt-3.5 font-display text-[clamp(34px,4.4vw,56px)] font-medium leading-[1.08] tracking-tight text-ink dark:text-[#F1E8D6]"
            >
              {t("title")}
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-lg leading-relaxed text-muted dark:text-[#B7C2CE]">{t("lede")}</p>
          </Reveal>
        </div>

        <div className="grid gap-[18px] max-[760px]:grid-cols-1 max-[1100px]:grid-cols-2 min-[1100px]:grid-cols-3">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Globe;
            return (
              <Reveal key={i} delay={i} as="article">
                <TiltCard className="group flex min-h-[260px] flex-col gap-3.5 rounded-lg border border-line bg-white p-[28px_26px_26px] transition-all hover:-translate-y-[3px] hover:border-[rgba(216,166,109,0.4)] hover:shadow-md-soft dark:border-line-dark dark:bg-[rgba(255,255,255,0.025)] dark:hover:border-gold">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gold-tint text-gold-deep transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-rotate-[8deg] group-hover:scale-[1.08] group-hover:bg-gold group-hover:text-navy-900">
                    <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-[21px] font-semibold leading-[1.08] text-ink dark:text-[#F1E8D6]">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-muted dark:text-[#A4B0BC]">
                    {item.desc}
                  </p>
                  <span className="mt-auto font-mono text-[11px] tracking-[0.06em] text-gold-deep dark:text-gold">
                    {item.tag}
                  </span>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
