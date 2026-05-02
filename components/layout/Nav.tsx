"use client";

import { useTranslations } from "next-intl";
import Logo from "@/components/primitives/Logo";
import LangToggle from "@/components/primitives/LangToggle";
import Button from "@/components/primitives/Button";

export default function Nav() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-line-dark bg-[rgba(11,34,51,0.78)] backdrop-blur-[14px]">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-7">
        <a
          href="#"
          className="flex items-center gap-2.5 text-[#F1E8D6]"
          aria-label="Tharwa home"
        >
          <Logo />
          <span className="font-display text-2xl font-semibold tracking-tight text-gold">
            Tharwa
          </span>
        </a>

        <nav>
          <ul className="hidden gap-[34px] md:flex" role="list">
            {(["features", "how", "security", "pricing"] as const).map(
              (key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="relative py-2 text-sm font-[450] text-[#C7D0DA] transition-colors after:absolute after:inset-x-0 after:bottom-0.5 after:h-px after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-gold hover:after:origin-left hover:after:scale-x-100 rtl:after:origin-left rtl:hover:after:origin-right"
                  >
                    {t(key)}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <LangToggle />
          <Button variant="primary" href="#pricing">
            {t("startFree")}
          </Button>
        </div>
      </div>
    </header>
  );
}
