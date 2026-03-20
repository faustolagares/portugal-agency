import { useTranslation } from "react-i18next";
import { ChevronRight, ShieldCheck, Users, Zap, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, FadeIn, BlurUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/motion";

const tabKeys = ["tab1", "tab2", "tab3"] as const;
const tabImages = [
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
];
const vantagensIcons = [ShieldCheck, Users, Zap];
const vantagemKeys = ["v1", "v2", "v3"] as const;
const statsKeys = ["n1", "n2", "n3"] as const;
const faqKeys = ["q1", "q2", "q3", "q4", "q5"] as const;

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("workersCompPage.hero.label")}</p></FadeUp>
        <BlurUp delay={0.1}><h1 className="text-display mb-5 md:mb-6">{t("workersCompPage.hero.headline")}</h1></BlurUp>
        <FadeIn delay={0.25}><p className="text-muted-foreground md:text-md mb-8 md:mb-10">{t("workersCompPage.hero.description")}</p></FadeIn>
        <FadeUp delay={0.38}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("workersCompPage.hero.cta_primary")}</a></Button>
            <Button variant="outline" size="lg" className="px-8" asChild><a href="/consultoria">{t("workersCompPage.hero.cta_secondary")}</a></Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function OQueE() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("workersCompPage.oQueE.label")}</p></FadeUp>
            <FadeUp delay={0.1}><h2 className="text-h2 mb-5 md:mb-6">{t("workersCompPage.oQueE.headline")}</h2></FadeUp>
            <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("workersCompPage.oQueE.description")}</p></FadeIn>
          </div>
        </div>
        <FadeUp delay={0.3}>
          <Tabs defaultValue="tab1" className="flex flex-col items-center">
            <TabsList className="mb-12 flex flex-wrap gap-2 md:mb-16 bg-transparent border-b border-border w-full rounded-none justify-start px-0">
              {tabKeys.map((key) => (
                <TabsTrigger key={key} value={key} className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 mr-6 pb-2 text-label uppercase tracking-wider">
                  {t(`workersCompPage.oQueE.${key}.label`)}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabKeys.map((key, i) => (
              <TabsContent key={key} value={key} className="w-full">
                <div className="grid grid-cols-1 border border-border md:grid-cols-2 md:items-center bg-background">
                  <div className="p-6 md:p-8 lg:p-12">
                    <p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t(`workersCompPage.oQueE.${key}.tag`)}</p>
                    <h3 className="text-h3 mb-5 md:mb-6 text-foreground">{t(`workersCompPage.oQueE.${key}.title`)}</h3>
                    <p className="text-muted-foreground">{t(`workersCompPage.oQueE.${key}.description`)}</p>
                    <div className="mt-6 flex items-center gap-4 md:mt-8">
                      <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("workersCompPage.oQueE.cta_primary")}</a></Button>
                      <Button variant="link" className="gap-1" asChild><a href="/consultoria">{t("workersCompPage.oQueE.cta_secondary")} <ChevronRight className="h-4 w-4" /></a></Button>
                    </div>
                  </div>
                  <div className="aspect-square"><img src={tabImages[i]} className="w-full h-full object-cover" alt="" /></div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </FadeUp>
      </div>
    </section>
  );
}

function PorqueContratar() {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("workersCompPage.porQue.label")}</p></FadeUp>
            <FadeUp delay={0.1}><h2 className="text-h2 mb-5 md:mb-6">{t("workersCompPage.porQue.headline")}</h2></FadeUp>
            <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("workersCompPage.porQue.description")}</p></FadeIn>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {vantagemKeys.map((key, i) => {
            const Icon = vantagensIcons[i];
            return (
              <FadeUp key={key} delay={0.3 + i * 0.12}>
                <div className="relative p-6 md:p-8 overflow-hidden min-h-[280px]">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-foreground/90" />
                    <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" className="size-full object-cover" alt="" />
                  </div>
                  <div className="relative z-10">
                    <ScaleIn delay={0.35 + i * 0.12} className="mb-5 md:mb-6">
                      <Icon className="size-12 text-white" strokeWidth={1.5} />
                    </ScaleIn>
                    <h3 className="text-h4 text-white mb-3 md:mb-4">{t(`workersCompPage.porQue.${key}.title`)}</h3>
                    <p className="text-white/70">{t(`workersCompPage.porQue.${key}.description`)}</p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatsVideo() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <FadeUp delay={0}><p className="text-label uppercase tracking-wider mb-3 md:mb-4">{t("workersCompPage.stats.label")}</p></FadeUp>
          <FadeUp delay={0.1}><h2 className="text-h2 mb-5 md:mb-6">{t("workersCompPage.stats.headline")}</h2></FadeUp>
          <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("workersCompPage.stats.description")}</p></FadeIn>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-0 lg:grid-cols-[0.5fr_1fr]">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 md:gap-y-12 md:p-8 lg:grid-cols-1 lg:gap-x-0 lg:p-12">
            {statsKeys.map((key, i) => (
              <FadeUp key={key} delay={0.3 + i * 0.12}>
                <div>
                  <p className="text-display mb-2">{t(`workersCompPage.stats.${key}.number`)}</p>
                  <h3 className="text-h4 text-foreground">{t(`workersCompPage.stats.${key}.label`)}</h3>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.5} className="flex flex-col">
            <img src="https://assets-global.website-files.com/624380709031623bfe4aee60/6243807090316259584aee68_placeholder-video-thumbnail.svg" alt="" className="aspect-[3/2] size-full object-cover" />
          </FadeUp>
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
        <FadeUp delay={0}><h2 className="text-h2 mb-5 md:mb-6 text-center">{t("workersCompPage.faq.headline")}</h2></FadeUp>
        <FadeIn delay={0.1}><p className="text-muted-foreground md:text-md text-center mb-12 md:mb-18 lg:mb-20">{t("workersCompPage.faq.description")}</p></FadeIn>
        <FadeUp delay={0.2}>
          <Accordion type="multiple" className="grid gap-4">
            {faqKeys.map((key, i) => (
              <AccordionItem key={key} value={`item-${i}`} className="border border-border px-5 md:px-6">
                <AccordionTrigger className="md:py-5 md:text-md text-left">{t(`workersCompPage.faq.${key}.q`)}</AccordionTrigger>
                <AccordionContent className="md:pb-6 text-muted-foreground">{t(`workersCompPage.faq.${key}.a`)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
}

function Contacto() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20">
          <SlideLeft delay={0.2}>
            <div className="grid gap-10">
              {[
                { Icon: Mail, href: "mailto:info@portugalagency.com", val: "info@portugalagency.com" },
                { Icon: Phone, href: "tel:+12015550100", val: "+1 (201) 555-0100" },
                { Icon: MapPin, href: null, val: null },
              ].map(({ Icon, href, val }, idx) => (
                <div key={idx}>
                  <div className="mb-3 md:mb-4"><Icon className="size-8 text-foreground" strokeWidth={1.5} /></div>
                  {val && href && <a className="underline text-foreground hover:text-primary transition-colors" href={href}>{val}</a>}
                  {!val && (
                    <Button variant="link" className="gap-1 p-0 h-auto" asChild>
                      <a href="/consultoria">{t("workersCompPage.hero.cta_secondary")} <ChevronRight className="h-4 w-4" /></a>
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </SlideLeft>
          <SlideRight delay={0.3}>
            <img src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg" alt="Map" className="size-full h-[400px] object-cover md:h-[516px]" />
          </SlideRight>
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
          <BlurUp delay={0}><h2 className="text-display mb-5 md:mb-6">{t("workersCompPage.cta.headline")}</h2></BlurUp>
          <FadeIn delay={0.2}><p className="text-muted-foreground md:text-md">{t("workersCompPage.cta.description")}</p></FadeIn>
          <FadeUp delay={0.32}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button size="lg" className="px-8" asChild><a href="/consultoria">{t("workersCompPage.cta.cta_primary")}</a></Button>
              <Button variant="outline" size="lg" className="px-8" asChild><a href="/consultoria">{t("workersCompPage.cta.cta_secondary")}</a></Button>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.5} className="w-full">
          <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" className="size-full object-cover" alt="Workers Compensation" />
        </FadeUp>
      </div>
    </section>
  );
}

export default function WorkersCompensation() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <OQueE />
        <PorqueContratar />
        <StatsVideo />
        <Faq />
        <Contacto />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
