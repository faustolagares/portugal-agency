import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, FadeIn, BlurUp, SlideLeft, SlideRight } from "@/components/ui/motion";

const productKeys = ["p1", "p2", "p3", "p4"] as const;
const productHrefs = ["/seguro-residencial", "/consultoria", "/consultoria", "/consultoria"];
const benefitKeys = ["b1", "b2", "b3"] as const;
const faqKeys = ["q1", "q2", "q3", "q4", "q5"] as const;

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("seguroPessoalPage.hero.label")}</p></FadeUp>
        <BlurUp delay={0.1}><h1 className="text-display mb-5 md:mb-6">{t("seguroPessoalPage.hero.headline")}</h1></BlurUp>
        <FadeIn delay={0.25}><p className="text-muted-foreground md:text-md mb-8 md:mb-10">{t("seguroPessoalPage.hero.description")}</p></FadeIn>
        <FadeUp delay={0.38}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("seguroPessoalPage.hero.cta_primary")}</a></Button>
            <Button variant="outline" size="lg" className="px-8" asChild><a href="/consultoria">{t("seguroPessoalPage.hero.cta_secondary")}</a></Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Produtos() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("seguroPessoalPage.products.label")}</p></FadeUp>
            <FadeUp delay={0.1}><h2 className="text-h2 mb-5 md:mb-6">{t("seguroPessoalPage.products.headline")}</h2></FadeUp>
            <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("seguroPessoalPage.products.description")}</p></FadeIn>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {productKeys.map((key, i) => (
            <FadeUp key={key} delay={0.3 + i * 0.1}>
              <div className="flex flex-col border border-border bg-background h-full">
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="text-label uppercase tracking-wider mb-2">{t(`seguroPessoalPage.products.${key}.label`)}</p>
                    <h3 className="text-h4 mb-2 text-foreground">{t(`seguroPessoalPage.products.${key}.title`)}</h3>
                    <p className="text-muted-foreground">{t(`seguroPessoalPage.products.${key}.description`)}</p>
                  </div>
                  <div className="mt-5 md:mt-6">
                    <Button variant="link" className="gap-1 p-0 h-auto" asChild>
                      <a href={productHrefs[i]}>{t("seguroPessoalPage.hero.cta_secondary")} <ChevronRight className="h-4 w-4" /></a>
                    </Button>
                  </div>
                </div>
                <div className="w-full">
                  <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" alt="" className="w-full object-cover" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("seguroPessoalPage.benefits.label")}</p></FadeUp>
            <FadeUp delay={0.1}><h2 className="text-h2 mb-5 md:mb-6">{t("seguroPessoalPage.benefits.headline")}</h2></FadeUp>
            <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("seguroPessoalPage.benefits.description")}</p></FadeIn>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <FadeUp delay={0.3} className="sm:col-span-2">
              <div className="grid grid-cols-1 border border-border sm:grid-cols-2 h-full">
                <div className="flex flex-1 flex-col justify-center p-6">
                  <p className="text-label uppercase tracking-wider mb-2">{t("seguroPessoalPage.benefits.b1.tag")}</p>
                  <h3 className="text-h4 mb-2 text-foreground">{t("seguroPessoalPage.benefits.b1.title")}</h3>
                  <p className="text-muted-foreground">{t("seguroPessoalPage.benefits.b1.description")}</p>
                  <div className="mt-5 md:mt-6">
                    <Button variant="link" className="gap-1 p-0 h-auto" asChild>
                      <a href="/consultoria">{t("seguroPessoalPage.hero.cta_primary")} <ChevronRight className="h-4 w-4" /></a>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg" alt="" className="size-full object-cover" />
                </div>
              </div>
            </FadeUp>
            {(["b2", "b3"] as const).map((key, i) => (
              <FadeUp key={key} delay={0.4 + i * 0.12}>
                <div className="flex flex-col border border-border h-full">
                  <div className="flex flex-col justify-center p-6 flex-1">
                    <p className="text-label uppercase tracking-wider mb-2">{t(`seguroPessoalPage.benefits.${key}.tag`)}</p>
                    <h3 className="text-h4 mb-2 text-foreground">{t(`seguroPessoalPage.benefits.${key}.title`)}</h3>
                    <p className="text-muted-foreground">{t(`seguroPessoalPage.benefits.${key}.description`)}</p>
                    <div className="mt-5 md:mt-6">
                      <Button variant="link" className="gap-1 p-0 h-auto" asChild>
                        <a href="/consultoria">{t("seguroPessoalPage.hero.cta_primary")} <ChevronRight className="h-4 w-4" /></a>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" alt="" className="w-full object-cover" />
                  </div>
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
    <section className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <FadeUp delay={0}><h2 className="text-h2 mb-5 md:mb-6 text-center">{t("seguroPessoalPage.faq.headline")}</h2></FadeUp>
        <FadeIn delay={0.1}><p className="text-muted-foreground md:text-md text-center mb-12 md:mb-18 lg:mb-20">{t("seguroPessoalPage.faq.description")}</p></FadeIn>
        <FadeUp delay={0.2}>
          <Accordion type="multiple" className="grid gap-4">
            {faqKeys.map((key, i) => (
              <AccordionItem key={key} value={`item-${i}`} className="border border-border px-5 md:px-6 bg-background">
                <AccordionTrigger className="md:py-5 md:text-md text-left">{t(`seguroPessoalPage.faq.${key}.q`)}</AccordionTrigger>
                <AccordionContent className="md:pb-6 text-muted-foreground">{t(`seguroPessoalPage.faq.${key}.a`)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
        <FadeIn delay={0.4}>
          <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
            <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("seguroPessoalPage.hero.cta_primary")}</a></Button>
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
          <BlurUp delay={0}><h2 className="text-display mb-5 md:mb-6">{t("seguroPessoalPage.cta.headline")}</h2></BlurUp>
          <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("seguroPessoalPage.cta.description")}</p></FadeIn>
          <FadeUp delay={0.32}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("seguroPessoalPage.cta.cta_primary")}</a></Button>
              <Button variant="outline" size="lg" className="px-8" asChild><a href="/consultoria">{t("seguroPessoalPage.cta.cta_secondary")}</a></Button>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.5} className="w-full">
          <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" className="size-full object-cover" alt="Seguros Pessoais" />
        </FadeUp>
      </div>
    </section>
  );
}

export default function SeguroPessoal() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Produtos />
        <Beneficios />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
