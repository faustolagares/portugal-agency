import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const mainNavKeys = ["home", "about", "services", "contact"] as const;
const mainNavHrefs: Record<string, string> = {
  home: "/",
  about: "/sobre-nos",
  services: "#services",
  contact: "#contact",
};

const servicesLinks = [
  { href: "/seguros-comerciais", labelKey: "segurosComercPage.hero.headline" },
  { href: "/workers-compensation", labelKey: "workersCompPage.hero.headline" },
  { href: "/general-liability", labelKey: "generalLiabilityPage.hero.headline" },
  { href: "/seguros-pessoais", labelKey: "seguroPessoalPage.hero.headline" },
  { href: "/seguro-residencial", labelKey: "seguroResidencialPage.hero.headline" },
  { href: "/seguro-automovel", labelKey: "seguroAutomovelPage.headline" },
];

export function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = `text-label uppercase tracking-wider transition-colors ${
    scrolled ? "!text-accent-foreground/70 hover:!text-accent-foreground" : "!text-muted-foreground hover:!text-foreground"
  }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-foreground text-accent-foreground backdrop-blur" : "bg-transparent border-none"
        }`}
      >
        <div className="px-2 md:px-[5%]">
          <div className="container flex items-center justify-between py-2">
            <a href="/" className="flex items-center gap-2.5">
              <img
                src={scrolled ? "/logos/portugual-agency-white-logo.png" : "/logos/portugal-agency-blue-logo.png"}
                alt="Portugal Agency"
                className="h-8 w-auto"
              />
              <span className={`text-h4 font-semibold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-accent-foreground" : "text-foreground"
              }`}>
                {t("nav.brand")}
              </span>
            </a>

            <nav className="hidden items-center gap-xl md:flex" aria-label={t("nav.menu_aria")}>
              <a href="/" className={linkClass}>{t("nav.home")}</a>
              <a href="/sobre-nos" className={linkClass}>{t("nav.about")}</a>

              {/* Services dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setServicesOpen((p) => !p)}
                  className={`${linkClass} flex items-center gap-1`}
                >
                  {t("nav.services")}
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-background border border-border shadow-lg py-2 z-50">
                    {servicesLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                      >
                        {t(link.labelKey)}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="/blog" className={linkClass}>{t("nav.blog")}</a>
              <a href="#contact" className={linkClass}>{t("nav.contact")}</a>
            </nav>

            <div className="hidden items-center gap-md md:flex">
              <LanguageSwitcher />
              <Button size="sm" className="text-button px-lg text-primary-foreground" asChild>
                <a href="/consultoria">{t("nav.cta")}</a>
              </Button>
            </div>

            <button
              className={`p-2 md:hidden transition-colors ${scrolled ? "text-accent-foreground" : "text-foreground"}`}
              onClick={() => setOpen(true)}
              aria-label={t("nav.menu_aria")}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-foreground flex flex-col md:hidden overflow-y-auto">
          <div className="container flex items-center justify-between py-2 shrink-0">
            <a href="/" className="flex items-center gap-2.5">
              <img src="/logos/portugual-agency-white-logo.png" alt="Portugal Agency" className="h-8 w-auto" />
              <span className="text-h4 font-semibold tracking-tight text-white">{t("nav.brand")}</span>
            </a>
            <button className="p-2 text-white" onClick={() => setOpen(false)} aria-label={t("nav.menu_aria")}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-6 py-8">
            <a href="/" className="text-label uppercase tracking-wider text-lg !text-white/70 hover:!text-white transition-colors" onClick={() => setOpen(false)}>{t("nav.home")}</a>
            <a href="/sobre-nos" className="text-label uppercase tracking-wider text-lg !text-white/70 hover:!text-white transition-colors" onClick={() => setOpen(false)}>{t("nav.about")}</a>

            <div className="w-full text-center">
              <p className="text-label uppercase tracking-wider text-lg !text-white/40 mb-3">{t("nav.services")}</p>
              {servicesLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1.5 text-sm !text-white/60 hover:!text-white transition-colors"
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </div>

            <a href="/blog" className="text-label uppercase tracking-wider text-lg !text-white/70 hover:!text-white transition-colors" onClick={() => setOpen(false)}>{t("nav.blog")}</a>
            <a href="#contact" className="text-label uppercase tracking-wider text-lg !text-white/70 hover:!text-white transition-colors" onClick={() => setOpen(false)}>{t("nav.contact")}</a>
          </nav>

          <div className="container flex flex-col items-center gap-6 pb-12 shrink-0">
            <div className="text-white"><LanguageSwitcher /></div>
            <Button size="lg" className="text-button px-lg text-primary-foreground" asChild>
              <a href="/consultoria">{t("nav.cta")}</a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
