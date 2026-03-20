import { useTranslation } from "react-i18next";
import { CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, FadeIn, BlurUp, SlideLeft, SlideRight } from "@/components/ui/motion";

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("consultoriaPage.hero.label")}</p></FadeUp>
        <BlurUp delay={0.1}><h1 className="text-display mb-5 md:mb-6">{t("consultoriaPage.hero.headline")}</h1></BlurUp>
        <FadeIn delay={0.25}><p className="text-muted-foreground md:text-md mb-8 md:mb-10">{t("consultoriaPage.hero.description")}</p></FadeIn>
        <FadeUp delay={0.38}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("consultoriaPage.hero.cta_primary")}</a></Button>
            <Button variant="outline" size="lg" className="px-8" asChild><a href="#process">{t("consultoriaPage.hero.cta_secondary")}</a></Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Processo sticky ─────────────────────────────────────────────────────────
const stepKeys = ["s1", "s2", "s3", "s4"] as const;
const stepImages = [
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg",
];
const stepStickyClasses = [
  "lg:top-0 lg:mb-48",
  "lg:top-16 lg:-mt-32 lg:mb-32",
  "lg:top-32 lg:-mt-16 lg:mb-16",
  "lg:top-0 lg:mb-16",
];

function Processo() {
  const { t } = useTranslation();
  return (
    <section id="process" className="bg-[#f0f2f5]">
      <div className="sticky top-0">
        {stepKeys.map((key, i) => (
          <div key={key}>
            <div className="relative -top-32 h-0" />
            <div className={`relative border-t border-border bg-background pb-8 md:pb-14 lg:sticky lg:pb-0 ${stepStickyClasses[i]}`}>
              <div className="px-2 md:px-[5%]">
                <div className="container">
                  <div className="flex h-16 w-full items-center border-b border-border">
                    <span className="mr-5 text-label font-semibold text-muted-foreground md:mr-6">0{i + 1}</span>
                    <span className="text-label font-semibold uppercase tracking-wider">{t(`consultoriaPage.steps.${key}.anchor`)}</span>
                  </div>
                  <div className="py-8 md:py-10 lg:py-12">
                    <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                      <SlideLeft delay={0.1}>
                        <div>
                          <p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t(`consultoriaPage.steps.${key}.tag`)}</p>
                          <h2 className="text-h2 mb-5 md:mb-6">{t(`consultoriaPage.steps.${key}.headline`)}</h2>
                          <p className="text-muted-foreground md:text-md">{t(`consultoriaPage.steps.${key}.description`)}</p>
                          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            <Button size="lg" className="px-8" asChild><a href="/consultoria">{t(`consultoriaPage.steps.${key}.cta_primary`)}</a></Button>
                            <Button variant="link" className="gap-1" asChild>
                              <a href="/consultoria">{t(`consultoriaPage.steps.${key}.cta_secondary`)} <ChevronRight className="h-4 w-4" /></a>
                            </Button>
                          </div>
                        </div>
                      </SlideLeft>
                      <SlideRight delay={0.2}>
                        <img src={stepImages[i]} className="h-[25rem] w-full object-cover sm:h-[30rem] lg:h-[60vh]" alt={t(`consultoriaPage.steps.${key}.anchor`)} />
                      </SlideRight>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Opções ───────────────────────────────────────────────────────────────────
const opcaoKeys = ["o1", "o2", "o3"] as const;
const opcaoImages = [
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
];

function Opcoes() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("consultoriaPage.options.label")}</p></FadeUp>
          <FadeUp delay={0.1}><h2 className="text-h2 mb-5 md:mb-6">{t("consultoriaPage.options.headline")}</h2></FadeUp>
          <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("consultoriaPage.options.description")}</p></FadeIn>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {opcaoKeys.map((key, i) => (
            <FadeUp key={key} delay={0.3 + i * 0.12}>
              <div className="flex flex-col border border-border h-full">
                <div className="w-full">
                  <img src={opcaoImages[i]} alt={t(`consultoriaPage.options.${key}.title`)} className="w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    <p className="text-label uppercase tracking-wider mb-2">{t(`consultoriaPage.options.${key}.label`)}</p>
                    <h3 className="text-h4 mb-3 md:mb-4 text-foreground">{t(`consultoriaPage.options.${key}.title`)}</h3>
                    <p className="text-muted-foreground mb-5 md:mb-6">{t(`consultoriaPage.options.${key}.description`)}</p>
                    <ul className="grid gap-2 mb-5 md:mb-6">
                      {(["f1", "f2", "f3"] as const).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="size-4 shrink-0 text-primary" strokeWidth={1.75} />
                          {t(`consultoriaPage.options.${key}.${f}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button size="lg" className="px-8" asChild><a href="/consultoria">{t(`consultoriaPage.options.${key}.cta_primary`)}</a></Button>
                    <Button variant="link" className="gap-1" asChild>
                      <a href="/consultoria">{t(`consultoriaPage.options.${key}.cta_secondary`)} <ChevronRight className="h-4 w-4" /></a>
                    </Button>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA final ───────────────────────────────────────────────────────────────
function CtaFinal() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <BlurUp delay={0}><h2 className="text-display mb-5 md:mb-6">{t("consultoriaPage.cta.headline")}</h2></BlurUp>
          <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("consultoriaPage.cta.description")}</p></FadeIn>
          <FadeUp delay={0.32}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("consultoriaPage.cta.cta_primary")}</a></Button>
              <Button variant="outline" size="lg" className="px-8" asChild><a href="/consultoria">{t("consultoriaPage.cta.cta_secondary")}</a></Button>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.5} className="w-full">
          <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" className="size-full object-cover" alt="Consultoria" />
        </FadeUp>
      </div>
    </section>
  );
}

export default function Consultoria() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Processo />
        <Opcoes />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
