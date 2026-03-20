import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, FadeIn, BlurUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/motion";

const diferencialKeys = ["d1", "d2", "d3"] as const;
const numerosKeys = ["n1", "n2", "n3"] as const;
const equipaKeys = ["p1", "p2", "p3"] as const;

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("sobreNosPage.hero.label")}</p></FadeUp>
        <BlurUp delay={0.1}><h1 className="text-display mb-5 md:mb-6">{t("sobreNosPage.hero.headline")}</h1></BlurUp>
        <FadeIn delay={0.25}><p className="text-muted-foreground md:text-md mb-8 md:mb-10">{t("sobreNosPage.hero.description")}</p></FadeIn>
        <FadeUp delay={0.38}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("sobreNosPage.hero.cta_primary")}</a></Button>
            <Button variant="outline" size="lg" className="px-8" asChild><a href="/seguros-comerciais">{t("sobreNosPage.hero.cta_secondary")}</a></Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Historia() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <SlideLeft delay={0}>
            <div>
              <p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("sobreNosPage.historia.label")}</p>
              <h2 className="text-h2 mb-5 md:mb-6">{t("sobreNosPage.historia.headline")}</h2>
              <p className="text-muted-foreground md:text-md mb-5 md:mb-6">{t("sobreNosPage.historia.description")}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("sobreNosPage.historia.cta_primary")}</a></Button>
                <Button variant="link" className="gap-1" asChild>
                  <a href="/seguros-comerciais">{t("sobreNosPage.historia.cta_secondary")} <ChevronRight className="h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </SlideLeft>
          <SlideRight delay={0.15}>
            <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" className="w-full object-cover" alt="História Portugal Agency" />
          </SlideRight>
        </div>
      </div>
    </section>
  );
}

function Diferenciais() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("sobreNosPage.diferenciais.label")}</p></FadeUp>
            <FadeUp delay={0.1}><h2 className="text-h2 mb-5 md:mb-6">{t("sobreNosPage.diferenciais.headline")}</h2></FadeUp>
            <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("sobreNosPage.diferenciais.description")}</p></FadeIn>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {diferencialKeys.map((key, i) => (
            <FadeUp key={key} delay={0.3 + i * 0.12}>
              <div className="relative p-6 md:p-8 overflow-hidden min-h-[280px]">
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-foreground/90" />
                  <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" className="size-full object-cover" alt="" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-h4 text-white mb-3 md:mb-4">{t(`sobreNosPage.diferenciais.${key}.title`)}</h3>
                  <p className="text-white/70">{t(`sobreNosPage.diferenciais.${key}.description`)}</p>
                  <div className="mt-5 md:mt-6">
                    <Button variant="link" className="gap-1 p-0 h-auto text-white hover:text-white/80" asChild>
                      <a href="/seguros-comerciais">{t("sobreNosPage.historia.cta_secondary")} <ChevronRight className="h-4 w-4" /></a>
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

function Numeros() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("sobreNosPage.numeros.label")}</p></FadeUp>
          <FadeUp delay={0.1}><h2 className="text-h2 mb-5 md:mb-6">{t("sobreNosPage.numeros.headline")}</h2></FadeUp>
          <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("sobreNosPage.numeros.description")}</p></FadeIn>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-7 lg:grid-cols-[0.5fr_1fr] lg:gap-x-8 lg:gap-y-8">
          <div className="flex flex-col gap-6 md:flex-row md:gap-8 lg:flex-col">
            {numerosKeys.map((key, i) => (
              <FadeUp key={key} delay={0.3 + i * 0.1}>
                <div className="flex w-full flex-col border border-border bg-background p-8">
                  <p className="text-display mb-5 md:mb-6">{t(`sobreNosPage.numeros.${key}.num`)}</p>
                  <h3 className="text-h4 text-foreground mb-2">{t(`sobreNosPage.numeros.${key}.label`)}</h3>
                  <p className="text-muted-foreground">{t(`sobreNosPage.numeros.${key}.desc`)}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <SlideRight delay={0.3}>
            <img src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg" alt="Portugal Agency" className="aspect-[3/2] size-full object-cover" />
          </SlideRight>
        </div>
      </div>
    </section>
  );
}

function Equipa() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <SlideLeft delay={0}>
          <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
            <p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("sobreNosPage.equipa.label")}</p>
            <h2 className="text-h2 mb-5 md:mb-6">{t("sobreNosPage.equipa.headline")}</h2>
            <p className="text-muted-foreground md:text-md mb-6 md:mb-8">{t("sobreNosPage.equipa.description")}</p>
            <Button variant="outline" size="lg" className="px-8" asChild><a href="/consultoria">{t("sobreNosPage.equipa.cta")}</a></Button>
          </div>
        </SlideLeft>
        <div className="flex flex-col gap-12 md:gap-16">
          {equipaKeys.map((key, i) => (
            <FadeUp key={key} delay={0.2 + i * 0.12}>
              <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 sm:gap-x-8">
                <div className="w-full overflow-hidden">
                  <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt={t(`sobreNosPage.equipa.${key}.name`)} className="aspect-square size-full object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-3 md:mb-4">
                    <h5 className="text-h4 text-foreground">{t(`sobreNosPage.equipa.${key}.name`)}</h5>
                    <p className="text-muted-foreground">{t(`sobreNosPage.equipa.${key}.role`)}</p>
                  </div>
                  <p className="text-muted-foreground">{t(`sobreNosPage.equipa.${key}.bio`)}</p>
                  <div className="mt-6 flex gap-3">
                    <a href="#" className="text-foreground hover:text-primary transition-colors"><BiLogoLinkedinSquare className="size-6" /></a>
                    <a href="#" className="text-foreground hover:text-primary transition-colors"><FaXTwitter className="size-6 p-0.5" /></a>
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

function CtaFinal() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <BlurUp delay={0}><h2 className="text-display mb-5 md:mb-6">{t("sobreNosPage.cta.headline")}</h2></BlurUp>
          <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("sobreNosPage.cta.description")}</p></FadeIn>
          <FadeUp delay={0.32}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("sobreNosPage.cta.cta_primary")}</a></Button>
              <Button variant="outline" size="lg" className="px-8" asChild><a href="/seguros-comerciais">{t("sobreNosPage.cta.cta_secondary")}</a></Button>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.5} className="w-full">
          <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" className="size-full object-cover" alt="Portugal Agency" />
        </FadeUp>
      </div>
    </section>
  );
}

export default function SobreNos() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Historia />
        <Diferenciais />
        <Numeros />
        <Equipa />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
