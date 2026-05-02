"use client";

import { useTranslations } from "next-intl";
import Reveal from "@/components/primitives/Reveal";

function StatusBadge({
  status,
  label,
}: {
  status: string;
  label: string;
}) {
  const config = {
    check: {
      bg: "bg-[rgba(63,143,110,0.14)]",
      text: "text-success",
      icon: "✓",
    },
    cross: {
      bg: "bg-[#EFE9DC]",
      text: "text-muted-soft",
      icon: "−",
    },
    partial: {
      bg: "bg-gold-tint",
      text: "text-gold-deep",
      icon: "~",
    },
  }[status] ?? { bg: "bg-gray-100", text: "text-gray-400", icon: "?" };

  return (
    <span className={`inline-flex items-center gap-1.5 text-[13px] font-medium ${config.text}`}>
      <span className={`inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${config.bg}`}>
        {config.icon}
      </span>
      {label}
    </span>
  );
}

export default function Differentiation() {
  const t = useTranslations("diff");
  const rows = t.raw("rows") as Array<{
    label: string;
    tharwa: string;
    western: string;
    local: string;
    tharwaStatus: string;
    westernStatus: string;
    localStatus: string;
  }>;

  return (
    <section className="bg-off py-[110px] max-[760px]:py-20" aria-labelledby="diff-title">
      <div className="mx-auto max-w-[1200px] px-7">
        <Reveal className="mx-auto mb-16 max-w-[760px] text-center">
          <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-gold-deep">
            {t("eyebrow")}
          </span>
          <h2 id="diff-title" className="font-display text-[clamp(34px,4.4vw,56px)] font-medium leading-[1.08] tracking-tight text-ink">
            {t("title")}
          </h2>
          <p className="mx-auto mt-[18px] max-w-[62ch] text-lg leading-relaxed text-muted">
            {t("lede")}
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="overflow-hidden rounded-lg border border-line bg-white">
            {/* Header */}
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] items-center border-b border-line bg-paper max-[760px]:grid-cols-[1.4fr_1fr_1fr_1fr]">
              <div className="p-[18px_22px]" />
              <div className="bg-gold-tint p-[18px_22px] text-[13px] font-semibold text-navy-900">
                {t("colTharwa")}
              </div>
              <div className="p-[18px_22px] font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                {t("colWestern")}
              </div>
              <div className="p-[18px_22px] font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                {t("colLocal")}
              </div>
            </div>

            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1.6fr_1fr_1fr_1fr] items-center border-b border-line transition-colors last:border-b-0 hover:bg-paper max-[760px]:grid-cols-[1.4fr_1fr_1fr_1fr] max-[760px]:text-xs [&:hover_.col-tharwa]:bg-[rgba(216,166,109,0.14)]"
              >
                <div className="p-[18px_22px] text-sm font-medium text-ink max-[760px]:p-[14px_12px] max-[760px]:text-xs">
                  {row.label}
                </div>
                <div className="col-tharwa bg-[rgba(216,166,109,0.06)] p-[18px_22px] transition-colors max-[760px]:p-[14px_12px]">
                  <StatusBadge status={row.tharwaStatus} label={row.tharwa} />
                </div>
                <div className="p-[18px_22px] max-[760px]:p-[14px_12px]">
                  <StatusBadge status={row.westernStatus} label={row.western} />
                </div>
                <div className="p-[18px_22px] max-[760px]:p-[14px_12px]">
                  <StatusBadge status={row.localStatus} label={row.local} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
