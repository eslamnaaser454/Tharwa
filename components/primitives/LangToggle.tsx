"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LangToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function toggle() {
    const next = locale === "ar" ? "en" : "ar";
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/"));
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-1.5 rounded-full border border-line-dark px-3 py-[7px] text-xs font-medium tracking-[0.04em] text-[#C7D0DA] transition-colors hover:border-gold hover:text-gold"
      type="button"
      aria-label="Switch language"
    >
      <span className="h-[5px] w-[5px] rounded-full bg-gold" />
      <span className={locale === "en" ? "text-gold" : "opacity-45"}>EN</span>
      <span> · </span>
      <span className={locale === "ar" ? "text-gold" : "opacity-45"}>
        العربية
      </span>
    </button>
  );
}
