"use client";

import { useTranslations } from "next-intl";
import Logo from "@/components/primitives/Logo";

export default function Footer() {
  const t = useTranslations("footer");

  const productHrefs = ["#features", "#how", "#pricing", "#security"];
  const companyHrefs = ["#", "#", "#", "#"];
  const legalHrefs = ["#", "#", "#", "#"];

  return (
    <footer className="border-t border-line-dark bg-navy-900 pb-9 pt-16 text-[#A4B0BC]">
      <div className="mx-auto max-w-[1200px] px-7">
        <div className="mb-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="font-display text-[28px] font-semibold tracking-tight text-gold">
                Tharwa
              </span>
            </div>
            <p className="mt-3 max-w-[34ch] text-[13px] leading-relaxed text-[#94A0AE]">
              {t("tagline")}
            </p>
          </div>

          <FooterCol
            title={t("product")}
            links={t.raw("productLinks") as string[]}
            hrefs={productHrefs}
          />
          <FooterCol
            title={t("company")}
            links={t.raw("companyLinks") as string[]}
            hrefs={companyHrefs}
          />
          <FooterCol
            title={t("legal")}
            links={t.raw("legalLinks") as string[]}
            hrefs={legalHrefs}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3.5 border-t border-line-dark pt-7 text-xs text-muted">
          <div>{t("copyright")}</div>
          <div className="flex gap-[18px] font-mono tracking-[0.06em]">
            <span>EN</span>
            <span>·</span>
            <span>العربية</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  hrefs,
}: {
  title: string;
  links: string[];
  hrefs: string[];
}) {
  return (
    <div>
      <h4 className="mb-[18px] text-xs font-semibold uppercase tracking-[0.08em] text-[#F1E8D6]">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5" role="list">
        {links.map((label, i) => (
          <li key={i}>
            <a
              href={hrefs[i]}
              className="text-[13.5px] text-[#A4B0BC] transition-colors hover:text-gold"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
