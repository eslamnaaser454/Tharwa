"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import Reveal from "@/components/primitives/Reveal";
import TiltCard from "@/components/primitives/TiltCard";
import Button from "@/components/primitives/Button";

export default function Pricing() {
  const t = useTranslations("pricing");
  const [isMonthly, setIsMonthly] = useState(true);
  const tiers = t.raw("tiers") as Array<{
    name: string;
    desc: string;
    price: string;
    period: string;
    billing: string;
    cta: string;
    featured: boolean;
    recommended?: string;
    flag: string;
    features: string[];
  }>;

  return (
    <section
      id="pricing"
      className="bg-off py-[110px] max-[760px]:py-20"
      aria-labelledby="pricing-title"
    >
      <div className="mx-auto max-w-[1200px] px-7">
        <Reveal className="mx-auto mb-16 max-w-[760px] text-center">
          <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-gold-deep">
            {t("eyebrow")}
          </span>
          <h2 id="pricing-title" className="font-display text-[clamp(34px,4.4vw,56px)] font-medium leading-[1.08] tracking-tight text-ink">
            {t("title")}
          </h2>
          <p className="mx-auto mt-[18px] max-w-[62ch] text-lg leading-relaxed text-muted">
            {t("lede")}
          </p>
        </Reveal>

        <Reveal delay={1} className="mb-12 flex justify-center">
          <div
            className="inline-flex gap-1 rounded-full border border-line bg-white p-1"
            role="tablist"
          >
            <button
              type="button"
              onClick={() => setIsMonthly(true)}
              className={`rounded-full px-[18px] py-2 text-[13px] font-medium transition-all ${
                isMonthly
                  ? "bg-navy-800 text-gold"
                  : "text-muted"
              }`}
            >
              {t("monthly")}
            </button>
            <button
              type="button"
              onClick={() => setIsMonthly(false)}
              className={`rounded-full px-[18px] py-2 text-[13px] font-medium transition-all ${
                !isMonthly
                  ? "bg-navy-800 text-gold"
                  : "text-muted"
              }`}
            >
              {t("annual")}{" "}
              <span className="ms-1.5 font-mono text-[10px] text-gold-deep">
                {t("save")}
              </span>
            </button>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-3.5 max-[760px]:grid-cols-1 max-[1100px]:grid-cols-2 min-[1100px]:grid-cols-4">
          {tiers.map((tier, i) => (
            <Reveal key={i} delay={i}>
              <TiltCard
                className={`relative flex flex-col gap-4 rounded-lg border p-[30px_26px_26px] transition-all hover:-translate-y-1 hover:shadow-md-soft ${
                  tier.featured
                    ? "border-gold bg-navy-800 text-[#E5DBC4] shadow-[0_30px_70px_-30px_rgba(11,34,51,0.35),inset_0_0_0_1px_var(--gold)]"
                    : "border-line bg-white"
                }`}
              >
                {tier.recommended && (
                  <span className="absolute -top-3 start-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-3 py-[5px] font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-navy-900 rtl:translate-x-1/2">
                    {tier.recommended}
                  </span>
                )}
                {tier.flag && (
                  <span className="absolute end-[18px] top-[18px] rounded-md bg-gold-tint px-2 py-1 font-mono text-[10px] tracking-[0.1em] text-gold-deep">
                    {tier.flag}
                  </span>
                )}
                <h3 className={`font-display text-xl font-semibold ${tier.featured ? "text-[#F4EBD8]" : "text-ink"}`}>
                  {tier.name}
                </h3>
                <p className={`text-[13px] leading-snug ${tier.featured ? "text-[#A4B0BC]" : "text-muted"}`}>
                  {tier.desc}
                </p>
                <div className={`font-display text-[42px] font-semibold leading-none tracking-[-0.015em] ${tier.featured ? "text-gold" : "text-ink"}`}>
                  {tier.price}
                  <small className={`font-sans text-sm font-medium ${tier.featured ? "text-[#A4B0BC]" : "text-muted"}`}>
                    {" "}{tier.period}
                  </small>
                </div>
                <div className={`text-xs ${tier.featured ? "text-[#A4B0BC]" : "text-muted"}`}>
                  {tier.billing}
                </div>
                <ul className="mt-2 flex flex-col gap-[9px]">
                  {tier.features.map((feat, fi) => (
                    <li
                      key={fi}
                      className={`flex items-start gap-2 text-[13.5px] leading-[1.45] ${
                        tier.featured ? "text-[#C7D0DA]" : "text-text"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 ${
                          tier.featured ? "text-gold" : "text-gold-deep"
                        }`}
                        strokeWidth={2.4}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <Button
                    variant={tier.featured ? "primary" : "ghost-light"}
                    href="#"
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
