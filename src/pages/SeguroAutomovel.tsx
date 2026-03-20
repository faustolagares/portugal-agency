import { useTranslation } from "react-i18next";
import { ChevronRight, ClipboardList, Search, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, FadeIn, BlurUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/motion";

const faqKeys = ["q1", "q2", "q3", "q4", "q5"] as const;

const coverageCards = [
  { key: "c1", top: "15%", imgSide: "right" },
  { key: "c2", top: "18%", imgSide: "left" },
  { key: "c3", top: "21%", imgSide: "right" },
  { key: "c4", top: "24%", imgSide: "left" },
] as const;

const stepIcons = [ClipboardList, Search, ShieldCheck];

export default function SeguroAutomovel() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="px-2 md:px-[5%] pt-36 pb-16 md:pb-24 lg:pb-28">
        <div className="container max-w-lg text-center">
          <FadeUp delay={0}>
            <span className="text-label uppercase tracking-wider text-muted-foreground">
              {t("seguroAutomovelPage.label")}
            </span>
          </FadeUp>
          <BlurUp delay={0.12}>
            <h1 className="text-display mt-4 mb-5 md:mb-6">{t("seguroAutomovelPage.headline")}</h1>
          </BlurUp>
          <FadeIn delay={0.28}>
            <p className="text-body-lg text-muted-foreground mb-6 md:mb-8">
              {t("seguroAutomovelPage.description")}
            </p>
          </FadeIn>
          <FadeUp delay={0.4}>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="px-8" asChild>
                <a href="/consultoria">{t("seguroAutomovelPage.primary")}</a>
              </Button>
              <Button variant="secondary" size="lg" className="px-8" asChild>
                <a href="#contact">{t("seguroAutomovelPage.secondary")}</a>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Comparison — Layout358 */}
      <section className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto max-w-lg text-center">
              <FadeUp delay={0}>
                <span className="text-label uppercase tracking-wider text-muted-foreground">
                  {t("seguroAutomovelPage.comparison.label")}
                </span>
              </FadeUp>
              <BlurUp delay={0.12}>
                <h2 className="text-h2 mt-4 mb-5 md:mb-6">{t("seguroAutomovelPage.comparison.headline")}</h2>
              </BlurUp>
              <FadeIn delay={0.24}>
                <p className="text-muted-foreground">{t("seguroAutomovelPage.comparison.description")}</p>
              </FadeIn>
            </div>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 border border-border md:grid-cols-2">
            <SlideLeft delay={0} className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
              <div>
                <FadeUp delay={0.1}>
                  <span className="text-label uppercase tracking-wider text-muted-foreground">
                    {t("seguroAutomovelPage.comparison.tag")}
                  </span>
                </FadeUp>
                <h3 className="text-h3 mt-4 mb-5 md:mb-6">{t("seguroAutomovelPage.comparison.title")}</h3>
                <p className="text-muted-foreground">{t("seguroAutomovelPage.comparison.body")}</p>
              </div>
              <FadeUp delay={0.3}>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button variant="secondary" size="lg" asChild>
                    <a href="/consultoria">{t("seguroAutomovelPage.comparison.primary")}</a>
                  </Button>
                  <Button variant="link" className="gap-1" asChild>
                    <a href="/consultoria">
                      {t("seguroAutomovelPage.comparison.secondary")}
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </FadeUp>
            </SlideLeft>
            <SlideRight delay={0.15} className="flex items-center justify-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt={t("seguroAutomovelPage.comparison.headline")}
              />
            </SlideRight>
          </div>
        </div>
      </section>

      {/* Sticky coverage cards — Layout410 */}
      <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <FadeUp delay={0}>
              <span className="text-label uppercase tracking-wider text-muted-foreground">
                {t("seguroAutomovelPage.coverages.label")}
              </span>
            </FadeUp>
            <BlurUp delay={0.12}>
              <h2 className="text-h2 mt-4 mb-5 md:mb-6">{t("seguroAutomovelPage.coverages.headline")}</h2>
            </BlurUp>
            <FadeIn delay={0.24}>
              <p className="text-muted-foreground">{t("seguroAutomovelPage.coverages.description")}</p>
            </FadeIn>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-1 gap-6 md:gap-0">
            {coverageCards.map(({ key, top, imgSide }, i) => (
              <div
                key={key}
                className="grid grid-cols-1 content-center overflow-hidden border border-border bg-background md:sticky md:mb-[15vh] md:h-[70vh] md:grid-cols-2"
                style={{ top }}
              >
                <div
                  className={`order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 ${
                    imgSide === "right" ? "md:order-first" : "md:order-last"
                  }`}
                >
                  <FadeUp delay={0.1 + i * 0.05}>
                    <span className="text-label uppercase tracking-wider text-muted-foreground">
                      {t(`seguroAutomovelPage.coverages.${key}.tag`)}
                    </span>
                    <h3 className="text-h3 mt-4 mb-5 md:mb-6">
                      {t(`seguroAutomovelPage.coverages.${key}.title`)}
                    </h3>
                    <p className="text-muted-foreground">{t(`seguroAutomovelPage.coverages.${key}.body`)}</p>
                  </FadeUp>
                  <FadeIn delay={0.25 + i * 0.05}>
                    <div className="mt-6 flex items-center gap-4 md:mt-8">
                      <Button variant="secondary" asChild>
                        <a href="/consultoria">{t(`seguroAutomovelPage.coverages.${key}.primary`)}</a>
                      </Button>
                      <Button variant="link" className="gap-1" asChild>
                        <a href="/consultoria">
                          {t(`seguroAutomovelPage.coverages.${key}.secondary`)}
                          <ChevronRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </FadeIn>
                </div>
                <div
                  className={`order-last flex flex-col items-center justify-center ${
                    imgSide === "right" ? "md:order-last" : "md:order-first"
                  }`}
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt={t(`seguroAutomovelPage.coverages.${key}.title`)}
                    className="size-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-step process — Layout237 */}
      <section className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
              <FadeUp delay={0}>
                <span className="text-label uppercase tracking-wider text-muted-foreground">
                  {t("seguroAutomovelPage.steps.label")}
                </span>
              </FadeUp>
              <BlurUp delay={0.12}>
                <h2 className="text-h2 mt-4 mb-5 md:mb-6">{t("seguroAutomovelPage.steps.headline")}</h2>
              </BlurUp>
              <FadeIn delay={0.24}>
                <p className="text-muted-foreground">{t("seguroAutomovelPage.steps.description")}</p>
              </FadeIn>
            </div>
            <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12 w-full">
              {(["s1", "s2", "s3"] as const).map((stepKey, i) => {
                const Icon = stepIcons[i];
                return (
                  <FadeUp key={stepKey} delay={0.1 + i * 0.12}>
                    <div className="flex w-full flex-col items-center text-center">
                      <ScaleIn delay={0.15 + i * 0.12}>
                        <div className="mb-5 md:mb-6 flex items-center justify-center">
                          <Icon className="size-12 text-primary" strokeWidth={1.5} />
                        </div>
                      </ScaleIn>
                      <h3 className="text-h3 mb-5 md:mb-6">
                        {t(`seguroAutomovelPage.steps.${stepKey}.title`)}
                      </h3>
                      <p className="text-muted-foreground">
                        {t(`seguroAutomovelPage.steps.${stepKey}.description`)}
                      </p>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
            <FadeUp delay={0.45}>
              <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
                <Button variant="secondary" size="lg" asChild>
                  <a href="/consultoria">{t("seguroAutomovelPage.primary")}</a>
                </Button>
                <Button variant="link" className="gap-1" asChild>
                  <a href="/consultoria">
                    {t("seguroAutomovelPage.comparison.secondary")}
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA central */}
      <section className="bg-foreground px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container flex flex-col items-center text-center">
          <div className="max-w-lg">
            <BlurUp delay={0}>
              <h2 className="text-h2 text-white mb-5 md:mb-6">{t("seguroAutomovelPage.cta.headline")}</h2>
            </BlurUp>
            <FadeIn delay={0.16}>
              <p className="text-white/70 mb-6 md:mb-8">{t("seguroAutomovelPage.cta.description")}</p>
            </FadeIn>
            <FadeUp delay={0.28}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="px-8" asChild>
                  <a href="/consultoria">{t("seguroAutomovelPage.cta.primary")}</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 border-white/30 bg-transparent text-white hover:bg-white/10"
                  asChild
                >
                  <a href="#contact">{t("seguroAutomovelPage.cta.secondary")}</a>
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ — centered */}
      <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container max-w-2xl">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <BlurUp delay={0}>
              <h2 className="text-h2 mb-5 md:mb-6">{t("seguroAutomovelPage.faq.headline")}</h2>
            </BlurUp>
            <FadeIn delay={0.16}>
              <p className="text-muted-foreground">{t("seguroAutomovelPage.faq.description")}</p>
            </FadeIn>
          </div>
          <FadeIn delay={0.24}>
            <Accordion type="multiple" className="grid items-start gap-4">
              {faqKeys.map((key) => (
                <AccordionItem key={key} value={key} className="border border-border px-5 md:px-6">
                  <AccordionTrigger className="text-left md:py-5 text-body font-medium">
                    {t(`seguroAutomovelPage.faq.${key}.q`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground md:pb-6">
                    {t(`seguroAutomovelPage.faq.${key}.a`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
          <FadeUp delay={0.38}>
            <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
              <h3 className="text-h3 mb-3 md:mb-4">{t("seguroAutomovelPage.faq.ctaHeadline")}</h3>
              <p className="text-muted-foreground mb-6 md:mb-8">{t("seguroAutomovelPage.faq.ctaDescription")}</p>
              <Button variant="secondary" size="lg" asChild>
                <a href="#contact">{t("seguroAutomovelPage.faq.cta")}</a>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Contact — Layout Contact14 */}
      <section id="contact" className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
            <FadeUp delay={0}>
              <span className="text-label uppercase tracking-wider text-muted-foreground">
                {t("seguroAutomovelPage.contact.label")}
              </span>
            </FadeUp>
            <BlurUp delay={0.12}>
              <h2 className="text-h2 mt-4 mb-5 md:mb-6">{t("seguroAutomovelPage.contact.headline")}</h2>
            </BlurUp>
            <FadeIn delay={0.24}>
              <p className="text-muted-foreground">{t("seguroAutomovelPage.contact.description")}</p>
            </FadeIn>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
            <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
              {[
                { Icon: Mail, titleKey: "seguroAutomovelPage.contact.email.title", subtitleKey: "seguroAutomovelPage.contact.email.subtitle", valueKey: "seguroAutomovelPage.contact.email.value", href: "mailto:" },
                { Icon: Phone, titleKey: "seguroAutomovelPage.contact.phone.title", subtitleKey: "seguroAutomovelPage.contact.phone.subtitle", valueKey: "seguroAutomovelPage.contact.phone.value", href: "tel:" },
                { Icon: MapPin, titleKey: "seguroAutomovelPage.contact.address.title", subtitleKey: "seguroAutomovelPage.contact.address.subtitle", valueKey: "seguroAutomovelPage.contact.address.cta", href: "#" },
              ].map(({ Icon, titleKey, subtitleKey, valueKey, href }, i) => (
                <FadeIn key={titleKey} delay={0.1 + i * 0.12}>
                  <div>
                    <div className="mb-3 md:mb-4">
                      <Icon className="size-8 text-foreground" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-h4 mb-2">{t(titleKey)}</h3>
                    <p className="text-muted-foreground mb-2">{t(subtitleKey)}</p>
                    <a className="text-foreground underline-offset-4 hover:underline" href={href}>
                      {t(valueKey)}
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.4}>
              <img
                src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
                alt="Mapa"
                className="size-full h-[400px] object-cover md:h-[516px]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
