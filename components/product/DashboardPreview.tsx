"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  LayoutGrid,
  TrendingUp,
  Clock,
  Shield,
  Eye,
  MessageSquareText,
  Settings,
} from "lucide-react";
import Logo from "@/components/primitives/Logo";
import IncomeVsSpendingChart from "@/components/product/charts/IncomeVsSpendingChart";

const sidebarIcons = [LayoutGrid, TrendingUp, Clock, Shield, Eye, MessageSquareText, Settings];
const sidebarKeys = ["dashboard", "spending", "zakat", "halalScreener", "goals", "aiCoach", "settings"] as const;
const sectionBreak = 5;

export default function DashboardPreview() {
  const t = useTranslations("preview");
  const [activeCcy, setActiveCcy] = useState(0);
  const categories = t.raw("categories") as Array<{ name: string; amount: string; pct: number }>;
  const goals = t.raw("goals") as Array<{ name: string; pct: number }>;
  const ccyList = ["SAR", "AED", "EGP", "USD"];

  return (
    <div className="rounded-3xl border border-line bg-gradient-to-b from-white to-paper p-8 shadow-md-soft max-[760px]:p-[18px]">
      <div className="grid min-h-[560px] gap-[18px] max-[760px]:grid-cols-1 max-[1100px]:grid-cols-[1fr_1fr] min-[1100px]:grid-cols-[280px_1fr_320px]">
        {/* Sidebar */}
        <aside className="hidden flex-col gap-2.5 rounded-lg border border-line bg-white p-[18px_16px] min-[1100px]:flex">
          <div className="flex items-center gap-2 border-b border-line px-1 pb-3.5 pt-1.5">
            <Logo />
            <span className="font-display text-lg font-semibold tracking-tight text-ink">Tharwa</span>
          </div>
          <div className="px-1 pt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">{t("sidebar.workspace")}</div>
          {sidebarKeys.slice(0, sectionBreak).map((key, i) => {
            const Icon = sidebarIcons[i];
            return (
              <div
                key={key}
                className={`flex items-center gap-2.5 rounded-sm px-2.5 py-[9px] text-[13.5px] font-[450] transition-all ${
                  i === 0
                    ? "bg-gold-tint font-medium text-gold-deep"
                    : "text-text hover:bg-paper-2 hover:ps-3.5"
                }`}
                data-cursor-hover
              >
                <Icon className="h-4 w-4 opacity-85" strokeWidth={1.8} />
                {t(`sidebar.${key}`)}
              </div>
            );
          })}
          <div className="px-1 pt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">{t("sidebar.tools")}</div>
          {sidebarKeys.slice(sectionBreak).map((key, i) => {
            const Icon = sidebarIcons[sectionBreak + i];
            return (
              <div
                key={key}
                className="flex items-center gap-2.5 rounded-sm px-2.5 py-[9px] text-[13.5px] font-[450] text-text transition-all hover:bg-paper-2 hover:ps-3.5"
                data-cursor-hover
              >
                <Icon className="h-4 w-4 opacity-85" strokeWidth={1.8} />
                {t(`sidebar.${key}`)}
              </div>
            );
          })}
          <div className="mt-auto flex items-center gap-2.5 rounded-[10px] border border-line bg-paper p-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-800 font-display text-sm font-semibold text-gold">
              N
            </div>
            <div>
              <div className="text-[13px] font-medium text-ink">{t("sidebar.userName")}</div>
              <div className="text-[11px] text-muted">{t("sidebar.userLocation")}</div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex flex-col gap-[18px] rounded-lg border border-line bg-white p-[22px]">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.04em] text-muted">{t("greeting")}</div>
              <div className="font-display text-2xl font-semibold tracking-tight text-ink">{t("dashTitle")}</div>
            </div>
            <div className="flex gap-1 rounded-sm bg-paper-2 p-[3px]">
              {ccyList.map((ccy, i) => (
                <span
                  key={ccy}
                  onClick={() => setActiveCcy(i)}
                  className={`rounded-md px-[9px] py-[5px] font-mono text-[11px] transition-colors ${
                    i === activeCcy
                      ? "bg-white font-medium text-ink shadow-sm-soft"
                      : "text-muted hover:text-ink"
                  }`}
                  data-cursor-hover
                  role="button"
                  tabIndex={0}
                >
                  {ccy}
                </span>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 max-[760px]:grid-cols-1">
            <StatCard label={t("income")} value={t("incomeVal")} delta={t("incomeD")} up />
            <StatCard label={t("spending")} value={t("spendingVal")} delta={t("spendingD")} up={false} />
            <StatCard label={t("saved")} value={t("savedVal")} delta={t("savedD")} up />
          </div>

          {/* Chart */}
          <div className="flex flex-1 flex-col gap-3 rounded-md border border-line bg-gradient-to-b from-white to-paper p-[18px]">
            <div className="flex items-center justify-between">
              <div className="font-display text-lg font-semibold text-ink">{t("chartTitle")}</div>
              <div className="flex gap-3 text-[11px] text-muted">
                <span className="flex items-center gap-1.5"><i className="inline-block h-2 w-2 rounded-[2px] bg-navy-700" />{t("spendingLegend")}</span>
                <span className="flex items-center gap-1.5"><i className="inline-block h-2 w-2 rounded-[2px] bg-gold" />{t("incomeLegend")}</span>
              </div>
            </div>
            <IncomeVsSpendingChart />
            <div className="border-t border-line pt-3.5">
              <div className="mb-2.5 font-display text-[15px] font-semibold text-ink">{t("topCats")}</div>
              <div className="grid grid-cols-2 gap-2.5 max-[760px]:grid-cols-1">
                {categories.map((cat) => (
                  <div key={cat.name} className="flex items-center gap-2.5 text-[13px]">
                    <span className="w-[90px] font-medium text-text">{cat.name}</span>
                    <div className="flex-1 overflow-hidden rounded-[3px] bg-paper-2" style={{ height: 6 }}>
                      <div className="h-full rounded-[3px] bg-gold" style={{ width: `${cat.pct}%` }} />
                    </div>
                    <span className="w-[60px] text-end font-mono text-[11px] text-muted">{cat.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Aside */}
        <div className="flex flex-col gap-3.5">
          {/* Zakat card */}
          <div className="rounded-lg border border-transparent bg-gradient-to-br from-navy-800 to-navy-700 p-[18px] text-[#F1E8D6]">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(216,166,109,0.85)]">{t("zakatYear")}</div>
                <h4 className="font-display text-lg font-semibold text-[#F1E8D6]">{t("zakatDue")}</h4>
              </div>
              <span className="font-display text-lg text-gold">ز</span>
            </div>
            <div className="mt-1.5 font-display text-[34px] font-semibold tracking-tight text-gold">{t("zakatFigure")}</div>
            <div className="mt-1 text-xs text-[rgba(255,255,255,0.7)]">{t("zakatMeta")}</div>
            <div className="mt-3.5 h-1.5 overflow-hidden rounded-[3px] bg-[rgba(255,255,255,0.12)]">
              <div className="h-full w-[62%] rounded-[3px] bg-gold" />
            </div>
            <div className="mt-1.5 flex justify-between font-mono text-[10px] text-[rgba(255,255,255,0.55)]">
              <span>{t("nisabLabel")}</span>
              <span>{t("eligibleLabel")}</span>
            </div>
          </div>

          {/* Goals */}
          <div className="group rounded-lg border border-line bg-white p-[18px]">
            <h4 className="mb-2 font-display text-lg font-semibold text-ink">{t("goalsTitle")}</h4>
            <div className="mt-1.5 flex flex-col gap-3">
              {goals.map((goal) => (
                <div key={goal.name} className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[13px]">
                    <span className="font-medium text-text">{goal.name}</span>
                    <span className="font-mono text-[11px] text-gold-deep">{goal.pct}%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-sm bg-paper-2">
                    <div className="goal-bar-fill h-full rounded-sm bg-gradient-to-r from-gold to-gold-deep" style={{ width: `${goal.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Halal badge */}
          <div className="flex items-center gap-2.5 rounded-md border border-[rgba(63,143,110,0.25)] bg-[rgba(63,143,110,0.08)] p-[12px_14px] text-[13px] transition-transform hover:-translate-y-0.5" data-cursor-hover>
            <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[rgba(63,143,110,0.18)] font-display font-bold text-success transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:rotate-[360deg]">
              ✓
            </div>
            <div>
              <div className="font-semibold text-ink">{t("halalTitle")}</div>
              <div className="text-[11px] text-muted">{t("halalSub")}</div>
            </div>
          </div>

          {/* Chat */}
          <div className="flex flex-col gap-2.5 rounded-lg border border-line bg-white p-[18px]">
            <div className="mb-1 font-display text-base font-semibold text-ink">{t("coachTitle")}</div>
            <div className="flex items-start gap-2 text-[13px] leading-snug">
              <div className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-[7px] bg-paper-2 font-display text-[13px] font-bold text-ink">N</div>
              <div className="flex-1 rounded-[10px] border border-line bg-white px-[11px] py-2">{t("userMsg")}</div>
            </div>
            <div className="flex items-start gap-2 text-[13px] leading-snug">
              <div className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-[7px] bg-gradient-to-br from-gold to-gold-deep font-display text-[13px] font-bold text-navy-900">T</div>
              <div className="flex-1 rounded-[10px] border border-line bg-paper px-[11px] py-2">{t("botMsg")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, delta, up }: { label: string; value: string; delta: string; up: boolean }) {
  return (
    <div className="rounded-md border border-line bg-paper p-3.5">
      <div className="text-[11px] uppercase tracking-[0.06em] text-muted">{label}</div>
      <div className="mt-0.5 font-display text-[22px] font-semibold text-ink">{value}</div>
      <div className={`mt-0.5 text-[11px] ${up ? "text-success" : "text-danger"}`}>{delta}</div>
    </div>
  );
}
