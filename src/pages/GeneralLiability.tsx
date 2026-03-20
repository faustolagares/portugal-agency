import { useTranslation } from "react-i18next";
import { ChevronRight, DollarSign, FileCheck, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, FadeIn, BlurUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/motion";

const whyIcons = [DollarSign, FileCheck, Zap, ShieldCheck];
const whyKeys = ["f1", "f2", "f3", "f4"] as const;
const faqKeys = ["q1", "q2", "q3", "q4", "q5"] as const;

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("generalLiabilityPage.hero.label")}</p></FadeUp>
        <BlurUp delay={0.1}><h1 className="text-display mb-5 md:mb-6">{t("generalLiabilityPage.hero.headline")}</h1></BlurUp>
        <FadeIn delay={0.25}><p className="text-muted-foreground md:text-md mb-8 md:mb-10">{t("generalLiabilityPage.hero.description")}</p></FadeIn>
        <FadeUp delay={0.38}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("generalLiabilityPage.hero.cta_primary")}</a></Button>
            <Button variant="outline" size="lg" className="px-8" asChild><a href="/consultoria">{t("generalLiabilityPage.hero.cta_secondary")}</a></Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function OQue() {
  const { t } = useTranslation();
  const items = t("generalLiabilityPage.what.items", { returnObjects: true }) as string[];
  return (
    <section className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <SlideLeft delay={0}>
            <div>
              <p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("generalLiabilityPage.what.label")}</p>
              <h2 className="text-h2 mb-5 md:mb-6">{t("generalLiabilityPage.what.headline")}</h2>
              <p className="text-muted-foreground md:text-md mb-5 md:mb-6">{t("generalLiabilityPage.what.description")}</p>
              <ul className="my-4 grid gap-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("generalLiabilityPage.what.cta_primary")}</a></Button>
                <Button variant="link" className="gap-1" asChild><a href="/consultoria">{t("generalLiabilityPage.what.cta_secondary")} <ChevronRight className="h-4 w-4" /></a></Button>
              </div>
            </div>
          </SlideLeft>
          <SlideRight delay={0.15}>
            <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" className="w-full object-cover" alt="General Liability" />
          </SlideRight>
        </div>
      </div>
    </section>
  );
}

function PorQue() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-start md:gap-x-12 lg:gap-x-20">
          <SlideRight delay={0}>
            <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" className="w-full object-cover" alt="Benefícios" />
          </SlideRight>
          <div>
            <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("generalLiabilityPage.why.label")}</p></FadeUp>
            <FadeUp delay={0.1}><h2 className="text-h2 mb-5 md:mb-6">{t("generalLiabilityPage.why.headline")}</h2></FadeUp>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              {whyKeys.map((key, i) => {
                const Icon = whyIcons[i];
                return (
                  <FadeUp key={key} delay={0.2 + i * 0.1}>
                    <div>
                      <ScaleIn delay={0.25 + i * 0.1} className="mb-3 md:mb-4">
                        <Icon className="size-12 text-primary" strokeWidth={1.5} />
                      </ScaleIn>
                      <h3 className="text-h4 mb-2 text-foreground">{t(`generalLiabilityPage.why.${key}.title`)}</h3>
                      <p className="text-muted-foreground">{t(`generalLiabilityPage.why.${key}.description`)}</p>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <FadeUp delay={0}><h2 className="text-h2 mb-5 md:mb-6 text-center">{t("generalLiabilityPage.faq.headline")}</h2></FadeUp>
        <FadeIn delay={0.1}><p className="text-muted-foreground md:text-md text-center mb-12 md:mb-18 lg:mb-20">{t("generalLiabilityPage.faq.description")}</p></FadeIn>
        <FadeUp delay={0.2}>
          <Accordion type="multiple" className="grid gap-4">
            {faqKeys.map((key, i) => (
              <AccordionItem key={key} value={`item-${i}`} className="border border-border px-5 md:px-6 bg-background">
                <AccordionTrigger className="md:py-5 md:text-md text-left">{t(`generalLiabilityPage.faq.${key}.q`)}</AccordionTrigger>
                <AccordionContent className="md:pb-6 text-muted-foreground">{t(`generalLiabilityPage.faq.${key}.a`)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
        <FadeIn delay={0.4}>
          <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
            <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("generalLiabilityPage.hero.cta_primary")}</a></Button>
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
          <BlurUp delay={0}><h2 className="text-display mb-5 md:mb-6">{t("generalLiabilityPage.cta.headline")}</h2></BlurUp>
          <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("generalLiabilityPage.cta.description")}</p></FadeIn>
          <FadeUp delay={0.32}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("generalLiabilityPage.cta.cta_primary")}</a></Button>
              <Button variant="outline" size="lg" className="px-8" asChild><a href="/consultoria">{t("generalLiabilityPage.cta.cta_secondary")}</a></Button>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.5} className="w-full">
          <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" className="size-full object-cover" alt="General Liability" />
        </FadeUp>
      </div>
    </section>
  );
}

export default function GeneralLiability() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <OQue />
        <PorQue />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
