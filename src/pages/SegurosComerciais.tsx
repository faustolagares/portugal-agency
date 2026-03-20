import { useTranslation } from "react-i18next";
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, FadeIn, BlurUp, SlideLeft, SlideRight } from "@/components/ui/motion";

const stepKeys = ["s1", "s2", "s3", "s4"] as const;
const stepImages = [
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg",
];
const stepStickyClasses = ["lg:top-0 lg:mb-48", "lg:top-16 lg:-mt-32 lg:mb-32", "lg:top-32 lg:-mt-16 lg:mb-16", "lg:top-0 lg:mb-16"];
const produtoKeys = ["p1", "p2", "p3", "p4"] as const;
const produtoHrefs = ["/workers-compensation", "/general-liability", "/consultoria", "/consultoria"];
const faqKeys = ["q1", "q2", "q3", "q4", "q5"] as const;
const cardKeys = ["c1", "c2", "c3"] as const;

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("segurosComercPage.hero.label")}</p></FadeUp>
        <BlurUp delay={0.1}><h1 className="text-display mb-5 md:mb-6">{t("segurosComercPage.hero.headline")}</h1></BlurUp>
        <FadeIn delay={0.25}><p className="text-muted-foreground md:text-md mb-8 md:mb-10">{t("segurosComercPage.hero.description")}</p></FadeIn>
        <FadeUp delay={0.38}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("segurosComercPage.hero.cta_primary")}</a></Button>
            <Button variant="outline" size="lg" className="px-8" asChild><a href="/consultoria">{t("segurosComercPage.hero.cta_secondary")}</a></Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Processo() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f0f2f5]">
      <div className="sticky top-0">
        {stepKeys.map((key, i) => (
          <Fragment key={key}>
            <div className="relative -top-32 h-0" />
            <div className={`relative border-t border-border bg-background pb-8 md:pb-14 lg:sticky lg:pb-0 ${stepStickyClasses[i]}`}>
              <div className="px-2 md:px-[5%]">
                <div className="container">
                  <div className="flex h-16 w-full items-center border-b border-border">
                    <span className="mr-5 text-label font-semibold text-muted-foreground md:mr-6">0{i + 1}</span>
                    <span className="text-label font-semibold uppercase tracking-wider">{t(`segurosComercPage.steps.${key}.anchor`)}</span>
                  </div>
                  <div className="py-8 md:py-10 lg:py-12">
                    <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                      <SlideLeft delay={0.1}>
                        <div>
                          <p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t(`segurosComercPage.steps.${key}.tag`)}</p>
                          <h2 className="text-h2 mb-5 md:mb-6">{t(`segurosComercPage.steps.${key}.headline`)}</h2>
                          <p className="text-muted-foreground md:text-md">{t(`segurosComercPage.steps.${key}.description`)}</p>
                          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("segurosComercPage.hero.cta_primary")}</a></Button>
                            <Button variant="link" className="gap-1" asChild><a href="/consultoria">{t("segurosComercPage.hero.cta_secondary")} <ChevronRight className="h-4 w-4" /></a></Button>
                          </div>
                        </div>
                      </SlideLeft>
                      <SlideRight delay={0.2}>
                        <img src={stepImages[i]} className="h-[25rem] w-full object-cover sm:h-[30rem] lg:h-[60vh]" alt={t(`segurosComercPage.steps.${key}.anchor`)} />
                      </SlideRight>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}

function ComoFunciona() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("segurosComercPage.comoFunciona.label")}</p></FadeUp>
          <FadeUp delay={0.1}><h2 className="text-h2 mb-5 md:mb-6">{t("segurosComercPage.comoFunciona.headline")}</h2></FadeUp>
          <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("segurosComercPage.comoFunciona.description")}</p></FadeIn>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {cardKeys.map((key, i) => (
            <FadeUp key={key} delay={0.3 + i * 0.12}>
              <div className="flex flex-col border border-border h-full">
                <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                  <p className="text-label uppercase tracking-wider mb-2">{t(`segurosComercPage.comoFunciona.${key}.label`)}</p>
                  <h3 className="text-h4 mb-3 md:mb-4 text-foreground">{t(`segurosComercPage.comoFunciona.${key}.title`)}</h3>
                  <p className="text-muted-foreground">{t(`segurosComercPage.comoFunciona.${key}.description`)}</p>
                  <div className="mt-5 md:mt-6">
                    <Button variant="link" className="gap-1 p-0 h-auto" asChild>
                      <a href="/consultoria">{t("segurosComercPage.hero.cta_secondary")} <ChevronRight className="h-4 w-4" /></a>
                    </Button>
                  </div>
                </div>
                <div className="w-full"><img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="" className="w-full object-cover" /></div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function Produtos() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-12 lg:gap-20">
          <SlideLeft delay={0}>
            <div className="md:sticky md:top-20">
              <p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("segurosComercPage.produtos.label")}</p>
              <h2 className="text-h2 mb-5 md:mb-6">{t("segurosComercPage.produtos.headline")}</h2>
              <p className="text-muted-foreground md:text-md mb-6 md:mb-8">{t("segurosComercPage.produtos.description")}</p>
              <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("segurosComercPage.produtos.cta")}</a></Button>
            </div>
          </SlideLeft>
          <div className="flex flex-col gap-6">
            {produtoKeys.map((key, i) => (
              <FadeUp key={key} delay={0.15 + i * 0.1}>
                <div className="border border-border bg-background p-6 md:p-8">
                  <h3 className="text-h4 text-foreground mb-2">{t(`segurosComercPage.produtos.${key}.title`)}</h3>
                  <p className="text-muted-foreground mb-4">{t(`segurosComercPage.produtos.${key}.description`)}</p>
                  <Button variant="link" className="gap-1 p-0 h-auto" asChild>
                    <a href={produtoHrefs[i]}>{t("segurosComercPage.hero.cta_secondary")} <ChevronRight className="h-4 w-4" /></a>
                  </Button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <FadeUp delay={0}><h2 className="text-h2 mb-5 md:mb-6 text-center">{t("segurosComercPage.faq.headline")}</h2></FadeUp>
        <FadeIn delay={0.1}><p className="text-muted-foreground md:text-md text-center mb-12 md:mb-18 lg:mb-20">{t("segurosComercPage.faq.description")}</p></FadeIn>
        <FadeUp delay={0.2}>
          <Accordion type="multiple" className="grid gap-4">
            {faqKeys.map((key, i) => (
              <AccordionItem key={key} value={`item-${i}`} className="border border-border px-5 md:px-6">
                <AccordionTrigger className="md:py-5 md:text-md text-left">{t(`segurosComercPage.faq.${key}.q`)}</AccordionTrigger>
                <AccordionContent className="md:pb-6 text-muted-foreground">{t(`segurosComercPage.faq.${key}.a`)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
        <FadeIn delay={0.4}>
          <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
            <h4 className="text-h4 mb-3 md:mb-4">{t("segurosComercPage.cta.headline")}</h4>
            <p className="text-muted-foreground md:text-md mb-6 md:mb-8">{t("segurosComercPage.cta.description")}</p>
            <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("segurosComercPage.hero.cta_secondary")}</a></Button>
          </div>
        </FadeIn>
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
          <BlurUp delay={0}><h2 className="text-display mb-5 md:mb-6">{t("segurosComercPage.cta.headline")}</h2></BlurUp>
          <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("segurosComercPage.cta.description")}</p></FadeIn>
          <FadeUp delay={0.32}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("segurosComercPage.cta.cta_primary")}</a></Button>
              <Button variant="outline" size="lg" className="px-8" asChild><a href="/consultoria">{t("segurosComercPage.cta.cta_secondary")}</a></Button>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.5} className="w-full">
          <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" className="size-full object-cover" alt="Seguros Comerciais" />
        </FadeUp>
      </div>
    </section>
  );
}

export default function SegurosComerciais() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Processo />
        <ComoFunciona />
        <Produtos />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
