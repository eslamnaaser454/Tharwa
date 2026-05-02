"use client";

import { useRef, type MouseEvent } from "react";
import { useTranslations } from "next-intl";
import SpendingLineChart from "@/components/product/charts/SpendingLineChart";

export default function HeroDashboard() {
  const t = useTranslations("hero");
  const mockRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const halalRef = useRef<HTMLDivElement>(null);
  const zakatRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent) {
    const el = mockRef.current;
    const frame = frameRef.current;
    if (!el || !frame) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const isRTL = document.documentElement.dir === "rtl";
    const baseY = isRTL ? 6 : -6;
    frame.style.transform = `rotateY(${baseY + px * -8}deg) rotateX(${4 + py * -6}deg)`;
    if (halalRef.current)
      halalRef.current.style.transform = `translate(${px * -20}px, ${py * -14}px)`;
    if (zakatRef.current)
      zakatRef.current.style.transform = `translate(${px * -14}px, ${py * -10}px)`;
  }

  function handleMouseLeave() {
    if (frameRef.current) frameRef.current.style.transform = "";
    if (halalRef.current) halalRef.current.style.transform = "";
    if (zakatRef.current) zakatRef.current.style.transform = "";
  }

  return (
    <div
      ref={mockRef}
      className="relative"
      style={{ perspective: "1600px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating badges */}
      <div
        ref={halalRef}
        className="absolute end-[-24px] top-[14%] z-[2] hidden items-center gap-2.5 rounded-md border border-line bg-white p-[12px_14px] text-[13px] shadow-lg-soft transition-colors duration-300 dark:border-line-dark dark:bg-navy-700 max-[760px]:hidden min-[760px]:flex"
        style={{ animation: "float-slow 6s ease-in-out infinite" }}
        aria-hidden="true"
        data-cursor-hover
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[rgba(63,143,110,0.12)] font-display font-bold text-success">
          ✓
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.04em] text-muted">
            {t("halalCheck")}
          </div>
          <div className="font-display text-lg font-semibold leading-tight text-ink">
            {t("halalCompliant")}
          </div>
        </div>
      </div>

      <div
        ref={zakatRef}
        className="absolute start-[-32px] top-[36%] z-[2] hidden items-center gap-2.5 rounded-md border border-line bg-white p-[12px_14px] text-[13px] shadow-lg-soft transition-colors duration-300 dark:border-line-dark dark:bg-navy-700 max-[760px]:hidden min-[760px]:flex"
        style={{ animation: "float-slow 6s ease-in-out infinite", animationDelay: "-2s" }}
        aria-hidden="true"
        data-cursor-hover
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-gold-tint font-display font-bold text-gold-deep">
          ز
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.04em] text-muted">
            {t("zakatEstimate")}
          </div>
          <div className="font-display text-lg font-semibold leading-tight text-ink">
            {t("zakatValue")}
          </div>
        </div>
      </div>

      {/* Mock frame */}
      <div
        ref={frameRef}
        className="relative rounded-xl bg-gradient-to-b from-paper to-paper-2 p-[18px] shadow-[0_60px_120px_-40px_rgba(0,0,0,0.5),0_30px_60px_-20px_rgba(216,166,109,0.18),inset_0_1px_0_rgba(255,255,255,0.6)] transition-transform duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] rtl:[transform:rotateY(6deg)_rotateX(4deg)] ltr:[transform:rotateY(-6deg)_rotateX(4deg)]"
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-2 pb-3.5 pt-1.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E0B8A6]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8D2A2]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#B6CDB7]" />
          </div>
          <div className="mx-3.5 flex flex-1 items-center gap-2 rounded-sm border border-line bg-white px-3 py-1.5 font-mono text-[11px] text-muted dark:border-line-dark dark:bg-navy-700 dark:text-[#A4B0BC]">
            <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 1 1 8 0v3" />
            </svg>
            {t("mockUrl")}
          </div>
          <span className="font-mono text-[11px] text-muted dark:text-[#A4B0BC]">EN · AR</span>
        </div>

        {/* Mock body */}
        <div className="grid grid-cols-2 gap-3.5 rounded-[14px] border border-line bg-white p-5 transition-colors duration-300 dark:border-line-dark dark:bg-[rgba(255,255,255,0.025)] max-[760px]:grid-cols-1">
          {/* Balance card */}
          <div className="col-span-full rounded-[14px] border border-transparent bg-gradient-to-br from-navy-800 to-navy-700 p-4 text-[#F1E8D6]">
            <div className="flex justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.06em] text-[rgba(216,166,109,0.85)]">
                  {t("balanceLabel")}
                </div>
                <div className="mt-1 font-display text-[30px] font-semibold tracking-tight text-[#F4EBD8]">
                  {t("balanceValue")}
                  <small className="text-sm font-normal text-[rgba(255,255,255,0.55)]">
                    {t("balanceCents")}
                  </small>
                </div>
                <div className="mt-1.5 text-xs font-medium text-[#A8E0C2]">
                  {t("balanceDelta")}
                </div>
              </div>
              <div className="text-end">
                <div className="text-[11px] uppercase tracking-[0.06em] text-[rgba(216,166,109,0.85)]">
                  {t("asOf")}
                </div>
                <div className="mt-1 font-mono text-[11px] text-[rgba(255,255,255,0.7)]">
                  {t("balanceDate")}
                </div>
              </div>
            </div>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {["SAR", "AED", "EGP", "USD"].map((ccy, i) => (
                <span
                  key={ccy}
                  className={`rounded-md border px-[9px] py-1 font-mono text-[11px] ${
                    i === 0
                      ? "border-gold bg-gold text-navy-900"
                      : "border-[rgba(216,166,109,0.24)] bg-[rgba(216,166,109,0.12)] text-gold-soft"
                  }`}
                  data-cursor-hover
                >
                  {ccy}
                </span>
              ))}
            </div>
          </div>

          {/* Spending chart */}
          <div className="col-span-full rounded-[14px] border border-line bg-white p-[18px_16px_12px] transition-colors duration-300 dark:border-line-dark dark:bg-[rgba(255,255,255,0.025)]">
            <div className="mb-3.5 flex items-end justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.06em] text-muted dark:text-[#A4B0BC]">{t("spendingLabel")}</div>
                <div className="font-display text-lg font-semibold text-ink dark:text-[#F1E8D6]">{t("spendingValue")}</div>
              </div>
              <div className="flex gap-0.5 rounded-sm bg-paper-2 p-[3px] dark:bg-navy-900">
                {["1W", "1M", "3M", "1Y"].map((tab, i) => (
                  <span
                    key={tab}
                    className={`rounded-md px-2 py-1 text-[11px] ${
                      i === 1
                        ? "bg-white font-medium text-ink shadow-sm-soft"
                        : "text-muted"
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
            </div>
            <SpendingLineChart />
          </div>

          {/* AI bubble */}
          <div className="col-span-full grid grid-cols-[36px_1fr] items-start gap-3 rounded-[14px] border border-line bg-gradient-to-b from-paper to-white p-[14px_16px]" data-cursor-hover>
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br from-gold to-gold-deep font-display text-lg font-bold text-navy-900">
              T
            </div>
            <div className="text-[13px] leading-snug text-text">
              <span className="me-1.5 font-semibold text-ink">{t("coachName")}</span>
              {t("coachMsg")}
              <span className="ms-1.5 rounded bg-gold-tint px-1.5 py-px font-mono text-[10px] text-gold-deep">
                EN
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
