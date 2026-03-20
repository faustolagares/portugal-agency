import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const columnKeys = ["insurance", "blog", "follow", "commercial", "personal", "company"] as const;

const columnLinkHrefs: Record<string, string[]> = {
  insurance: ["/consultoria", "/seguros-comerciais", "/seguros-pessoais", "/seguro-residencial", "/seguro-automovel"],
  blog: ["/blog", "/blog/artigo", "/blog", "/blog", "/blog"],
  follow: ["#", "#", "#", "#", "#"],
  commercial: ["/workers-compensation", "/general-liability", "/seguros-comerciais", "/consultoria", "/parceiros"],
  personal: ["/seguros-pessoais", "/seguro-residencial", "/seguro-automovel", "/consultoria", "#"],
  company: ["/sobre-nos", "/parceiros", "/blog", "/consultoria", "#"],
};

export function Footer() {
  const { t } = useTranslation();

  const socialIcons = [
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Youtube, label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-accent-foreground px-2 md:px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        {/* Hero + CTAs */}
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="max-w-lg">
            <h2 className="text-h2 mb-5 md:mb-6">
              {t("footer.headline")}
            </h2>
            <p className="text-accent-foreground/70">
              {t("footer.description")}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8 lg:mt-0">
            <Button size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
              {t("footer.cta_subscribe")}
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              {t("footer.cta_contact")}
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="py-12 md:py-18 lg:py-20">
          <div className="h-px w-full bg-accent-foreground/20" />
        </div>

        {/* Link columns */}
        <div className="mb-12 grid grid-cols-2 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          {columnKeys.map((col) => (
            <div key={col} className="flex flex-col items-start justify-start">
              <h3 className="text-h4 mb-2">
                {t(`footer.columns.${col}.title`)}
              </h3>
              <ul>
                {[0, 1, 2, 3, 4].map((i) => {
                  const link = t(`footer.columns.${col}.links.${i}`, { defaultValue: "" });
                  if (!link) return null;
                  const href = columnLinkHrefs[col]?.[i] ?? "#";
                  return (
                    <li key={i} className="py-2 text-sm">
                      <a href={href} className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Logo + avatars */}
        <div className="flex flex-col items-start justify-between pb-6 sm:flex-row sm:items-center md:pb-8">
          <a href="#" className="mb-6 sm:mb-0 flex items-center gap-2.5">
            <img
              src="/logos/portugual-agency-white-logo.png"
              alt="Portugal Agency"
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold tracking-tighter text-white">
              Portugal Agency
            </span>
          </a>
        </div>

        {/* Bottom divider */}
        <div className="h-px w-full bg-accent-foreground/20" />

        {/* Copyright + social */}
        <div className="flex flex-col-reverse items-start gap-4 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between md:pt-8">
          <p className="text-accent-foreground/70">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-3">
            {socialIcons.map(({ icon: Icon, label }) => (
              <a key={label} href="#" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
