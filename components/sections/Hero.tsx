"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Button from "@/components/primitives/Button";
import Reveal from "@/components/primitives/Reveal";
import HeroDashboard from "@/components/product/HeroDashboard";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="on-dark relative overflow-hidden bg-navy-800 px-0 py-[90px] text-[#F1E8D6] max-[760px]:py-[60px]" style={{
      background: "radial-gradient(900px 500px at 85% -10%, rgba(216,166,109,.18), transparent 60%), radial-gradient(700px 500px at -10% 30%, rgba(185,132,0,.10), transparent 55%), #0B2233",
    }}>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(216,166,109,0.35)] to-transparent" />

      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-7 max-[1100px]:grid-cols-1 min-[1100px]:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              {t("eyebrow")}
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-[18px] font-display text-[clamp(44px,6vw,80px)] font-medium leading-[1.02] tracking-[-0.018em] text-[#F4EBD8]">
              {t("h1_before")}
              <span className="bg-[linear-gradient(transparent_78%,rgba(216,166,109,0.55)_78%)] bg-no-repeat px-1">
                {t("h1_underline")}
              </span>
              <br />
              {t("h1_mid")}
              <span className="font-display italic text-gold">
                {t("h1_accent")}
              </span>
              {t("h1_after")}
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-[22px] max-w-[54ch] text-lg leading-relaxed text-[#B7C2CE]">
              {t("sub")}
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" href="#pricing">
                {t("ctaPrimary")}
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
              <Button variant="ghost-dark" size="lg" href="#pricing">
                {t("ctaSecondary")}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-[38px] flex flex-wrap gap-7 border-t border-line-dark pt-6">
              <MetaItem k={t("metaCurrenciesValue")} v={t("metaCurrencies")} />
              <MetaItem k={t("metaLanguagesValue")} v={t("metaLanguages")} />
              <MetaItem k={t("metaHalalValue")} v={t("metaHalal")} />
            </div>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <HeroDashboard />
        </Reveal>
      </div>
    </section>
  );
}

function MetaItem({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-display text-2xl font-semibold tracking-tight text-gold">
        {k}
      </span>
      <span className="text-xs uppercase tracking-[0.04em] text-[#94A0AE]">
        {v}
      </span>
    </div>
  );
}
