import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const languages = ["pt", "en", "es"] as const;
const labels: Record<string, string> = { pt: "PT", en: "EN", es: "ES" };

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language?.substring(0, 2) || "pt";

  const cycle = () => {
    const idx = languages.indexOf(current as (typeof languages)[number]);
    const next = languages[(idx + 1) % languages.length];
    i18n.changeLanguage(next);
  };

  return (
    <button
      onClick={cycle}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-current transition-colors hover:opacity-80"
      aria-label="Change language"
    >
      <Globe className="h-4 w-4" />
      <span>{labels[current] || "PT"}</span>
    </button>
  );
}
