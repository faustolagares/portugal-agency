import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { BiSolidStar } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, FadeIn, BlurUp, SlideLeft, SlideRight } from "@/components/ui/motion";

const coverageKeys = ["c1", "c2", "c3", "c4"] as const;
const testimonialKeys = ["t1", "t2", "t3"] as const;
const faqKeys = ["q1", "q2", "q3", "q4", "q5"] as const;

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("seguroResidencialPage.hero.label")}</p></FadeUp>
        <BlurUp delay={0.1}><h1 className="text-display mb-5 md:mb-6">{t("seguroResidencialPage.hero.headline")}</h1></BlurUp>
        <FadeIn delay={0.25}><p className="text-muted-foreground md:text-md mb-8 md:mb-10">{t("seguroResidencialPage.hero.description")}</p></FadeIn>
        <FadeUp delay={0.38}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("seguroResidencialPage.hero.cta_primary")}</a></Button>
            <Button variant="outline" size="lg" className="px-8" asChild><a href="/consultoria">{t("seguroResidencialPage.hero.cta_secondary")}</a></Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Coberturas() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f0f2f5]">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <SlideLeft delay={0}>
          <div className="md:sticky md:top-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center px-2 md:px-[5%] py-16 md:py-0">
              <div className="mx-auto max-w-md w-full">
                <p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("seguroResidencialPage.coverages.label")}</p>
                <h2 className="text-h2 mb-5 md:mb-6">{t("seguroResidencialPage.coverages.headline")}</h2>
                <p className="text-muted-foreground md:text-md mb-6 md:mb-8">{t("seguroResidencialPage.coverages.description")}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("seguroResidencialPage.coverages.cta_primary")}</a></Button>
                  <Button variant="link" className="gap-1" asChild><a href="/consultoria">{t("seguroResidencialPage.coverages.cta_secondary")} <ChevronRight className="h-4 w-4" /></a></Button>
                </div>
              </div>
            </div>
          </div>
        </SlideLeft>
        <div>
          {coverageKeys.map((key, i) => (
            <SlideRight key={key} delay={0.1 + i * 0.1}>
              <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-border bg-background px-[5%] py-10 md:px-10">
                <div className="max-w-md">
                  <div className="mb-6 md:mb-8">
                    <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" alt="" className="size-full object-cover" />
                  </div>
                  <h3 className="text-h4 mb-3 md:mb-4 text-foreground">{t(`seguroResidencialPage.coverages.${key}.title`)}</h3>
                  <p className="text-muted-foreground">{t(`seguroResidencialPage.coverages.${key}.description`)}</p>
                </div>
              </div>
            </SlideRight>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <FadeUp delay={0}><h2 className="text-h2 mb-5 md:mb-6">{t("seguroResidencialPage.testimonials.headline")}</h2></FadeUp>
          <FadeIn delay={0.1}><p className="text-muted-foreground md:text-md">{t("seguroResidencialPage.testimonials.description")}</p></FadeIn>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialKeys.map((key, i) => (
            <FadeUp key={key} delay={0.2 + i * 0.12}>
              <div className="flex w-full flex-col items-start justify-between border border-border p-6 md:p-8 h-full">
                <div className="mb-5 md:mb-6">
                  <div className="mb-5 flex md:mb-6">
                    {[0,1,2,3,4].map((s) => <BiSolidStar key={s} className="mr-1 size-6 text-primary" />)}
                  </div>
                  <blockquote className="md:text-md text-foreground">{t(`seguroResidencialPage.testimonials.${key}.quote`)}</blockquote>
                </div>
                <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:flex-row md:items-center">
                  <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="" className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4" />
                  <div>
                    <p className="font-semibold text-foreground">{t(`seguroResidencialPage.testimonials.${key}.name`)}</p>
                    <p className="text-muted-foreground">{t(`seguroResidencialPage.testimonials.${key}.role`)}</p>
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

function Faq() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <FadeUp delay={0}><h2 className="text-h2 mb-5 md:mb-6 text-center">{t("seguroResidencialPage.faq.headline")}</h2></FadeUp>
        <FadeIn delay={0.1}><p className="text-muted-foreground md:text-md text-center mb-12 md:mb-18 lg:mb-20">{t("seguroResidencialPage.faq.description")}</p></FadeIn>
        <FadeUp delay={0.2}>
          <Accordion type="multiple" className="grid gap-4">
            {faqKeys.map((key, i) => (
              <AccordionItem key={key} value={`item-${i}`} className="border border-border px-5 md:px-6 bg-background">
                <AccordionTrigger className="md:py-5 md:text-md text-left">{t(`seguroResidencialPage.faq.${key}.q`)}</AccordionTrigger>
                <AccordionContent className="md:pb-6 text-muted-foreground">{t(`seguroResidencialPage.faq.${key}.a`)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
        <FadeIn delay={0.4}>
          <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
            <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("seguroResidencialPage.hero.cta_primary")}</a></Button>
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
          <BlurUp delay={0}><h2 className="text-display mb-5 md:mb-6">{t("seguroResidencialPage.cta.headline")}</h2></BlurUp>
          <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("seguroResidencialPage.cta.description")}</p></FadeIn>
          <FadeUp delay={0.32}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("seguroResidencialPage.cta.cta_primary")}</a></Button>
              <Button variant="outline" size="lg" className="px-8" asChild><a href="/consultoria">{t("seguroResidencialPage.cta.cta_secondary")}</a></Button>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.5} className="w-full">
          <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" className="size-full object-cover" alt="Seguro Residencial" />
        </FadeUp>
      </div>
    </section>
  );
}

export default function SeguroResidencial() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Coberturas />
        <Testimonials />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
