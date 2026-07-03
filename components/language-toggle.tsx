"use client";

import type { Lang } from "@/content/dictionary";
import { useLanguage } from "./language-provider";

const options: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "pt", label: "PT" },
];

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={`inline-flex items-center rounded-full border border-border p-0.5 text-xs font-medium ${className ?? ""}`}
    >
      {options.map((opt) => {
        const active = lang === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLang(opt.value)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              active ? "bg-foreground text-background" : "text-muted hover:text-foreground"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
