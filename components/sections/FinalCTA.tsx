"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Button from "@/components/primitives/Button";
import Reveal from "@/components/primitives/Reveal";

export default function FinalCTA() {
  const t = useTranslations("finalCta");
  const tags = t.raw("tags") as string[];

  return (
    <section
      className="on-dark relative overflow-hidden py-[140px] text-center max-[760px]:py-20"
      style={{
        background:
          "radial-gradient(700px 380px at 50% 0%, rgba(216,166,109,.18), transparent 60%), #081826",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><circle cx='1' cy='1' r='1' fill='%23D8A66D' opacity='.12'/></svg>")`,
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-7">
        <Reveal>
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
            {t("eyebrow")}
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-[18px] font-display text-[clamp(40px,5.5vw,72px)] leading-[1.05] tracking-[-0.018em] text-[#F4EBD8]">
            {t("h2_before")}
            <em className="font-medium italic text-gold">{t("h2_accent")}</em>
            <br />
            {t("h2_after")}
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mb-8 mt-5 max-w-[62ch] text-lg leading-relaxed text-[#B7C2CE]">
            {t("lede")}
          </p>
        </Reveal>
        <Reveal delay={3}>
          <Button variant="primary" size="lg" href="#">
            {t("cta")}
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </Reveal>
        <Reveal delay={4}>
          <div className="mt-[42px] flex flex-wrap justify-center gap-5">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[rgba(216,166,109,0.7)] before:block before:h-1 before:w-1 before:rounded-full before:bg-gold"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
