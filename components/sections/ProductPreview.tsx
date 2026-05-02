"use client";

import { useTranslations } from "next-intl";
import Reveal from "@/components/primitives/Reveal";
import DashboardPreview from "@/components/product/DashboardPreview";

export default function ProductPreview() {
  const t = useTranslations("preview");

  return (
    <section className="bg-paper py-[110px] transition-colors duration-300 dark:bg-navy-800 max-[760px]:py-20" aria-labelledby="preview-title">
      <div className="mx-auto max-w-[1200px] px-7">
        <Reveal className="mx-auto mb-16 max-w-[760px] text-center">
          <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-gold-deep dark:text-gold">
            {t("eyebrow")}
          </span>
          <h2 id="preview-title" className="font-display text-[clamp(34px,4.4vw,56px)] font-medium leading-[1.08] tracking-tight text-ink dark:text-[#F1E8D6]">
            {t("title")}
          </h2>
          <p className="mx-auto mt-[18px] max-w-[62ch] text-lg leading-relaxed text-muted dark:text-[#B7C2CE]">
            {t("lede")}
          </p>
        </Reveal>

        <Reveal delay={1}>
          <DashboardPreview />
        </Reveal>
      </div>
    </section>
  );
}
