import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navKeys = ["home", "about", "services", "contact"] as const;

export function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-foreground text-accent-foreground backdrop-blur"
            : "bg-transparent border-none"
        }`}
      >
        <div className="px-2 md:px-[5%]">
          <div className="container flex items-center justify-between py-2">
            <a
              href="/"
              className={`text-h4 font-semibold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-accent-foreground" : "text-foreground"
              }`}
            >
              {t("nav.brand")}
            </a>

            <nav className="hidden items-center gap-xl md:flex" aria-label={t("nav.menu_aria")}>
              {navKeys.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className={`text-label uppercase tracking-wider transition-colors ${
                    scrolled
                      ? "!text-accent-foreground/70 hover:!text-accent-foreground"
                      : "!text-muted-foreground hover:!text-foreground"
                  }`}
                >
                  {t(`nav.${key}`)}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-md md:flex">
              <LanguageSwitcher />
              <Button size="sm" className="text-button px-lg text-primary-foreground">
                {t("nav.cta")}
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
        <div className="fixed inset-0 z-[100] bg-foreground flex flex-col md:hidden">
          <div className="container flex items-center justify-between py-2">
            <a href="/" className="text-h4 font-semibold tracking-tight text-white">
              {t("nav.brand")}
            </a>
            <button
              className="p-2 text-white"
              onClick={() => setOpen(false)}
              aria-label={t("nav.menu_aria")}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {navKeys.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-label uppercase tracking-wider text-lg !text-white/70 transition-colors hover:!text-white"
                onClick={() => setOpen(false)}
              >
                {t(`nav.${key}`)}
              </a>
            ))}
          </nav>

          <div className="container flex flex-col items-center gap-6 pb-12">
            <div className="text-white">
              <LanguageSwitcher />
            </div>
            <Button size="lg" className="text-button px-lg text-primary-foreground">
              {t("nav.cta")}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}