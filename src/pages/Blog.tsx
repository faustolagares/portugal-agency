import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, FadeIn, BlurUp, SlideLeft, SlideRight } from "@/components/ui/motion";

const tabKeys = ["all", "commercial", "personal", "tips", "trends"] as const;
const postKeys = ["p1", "p2", "p3", "p4"] as const;
const faqKeys = ["q1", "q2", "q3", "q4", "q5"] as const;

const postCategories: Record<string, string[]> = {
  all: ["p1", "p2", "p3", "p4"],
  commercial: ["p1", "p2"],
  personal: ["p3", "p4"],
  tips: ["p3", "p4"],
  trends: ["p1", "p2"],
};

export default function Blog() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="px-2 md:px-[5%] pt-36 pb-16 md:pb-24 lg:pb-28">
        <div className="container max-w-lg text-center">
          <FadeUp delay={0}>
            <span className="text-label uppercase tracking-wider text-muted-foreground">
              {t("blogPage.label")}
            </span>
          </FadeUp>
          <BlurUp delay={0.12}>
            <h1 className="text-display mt-4 mb-5 md:mb-6">{t("blogPage.headline")}</h1>
          </BlurUp>
          <FadeIn delay={0.28}>
            <p className="text-body-lg text-muted-foreground">{t("blogPage.description")}</p>
          </FadeIn>
        </div>
      </section>

      {/* Blog Grid with Tabs */}
      <section className="px-2 md:px-[5%] pb-16 md:pb-24 lg:pb-28">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <FadeIn delay={0.1}>
              <TabsList className="mb-12 flex h-auto flex-wrap gap-2 bg-transparent p-0 md:mb-16 justify-center">
                {tabKeys.map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="rounded-none border border-transparent px-4 py-2 text-label uppercase tracking-wider data-[state=active]:border-border data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=inactive]:text-muted-foreground"
                  >
                    {t(`blogPage.tabs.${tab}`)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </FadeIn>

            <AnimatePresence mode="wait">
              {tabKeys.map((tab) => (
                <TabsContent key={tab} value={tab} forceMount className={activeTab !== tab ? "hidden" : ""}>
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16"
                  >
                    {postCategories[tab].map((postKey, i) => (
                      <motion.article
                        key={postKey}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
                        className="flex size-full flex-col items-start justify-start"
                      >
                        <a href="/blog/artigo" className="mb-6 w-full block overflow-hidden">
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                            alt={t(`blogPage.posts.${postKey}.title`)}
                            className="aspect-video size-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </a>
                        <div className="mb-4 flex w-full items-center">
                          <span className="mr-4 bg-muted px-2 py-1 text-body-sm font-semibold">
                            {t(`blogPage.posts.${postKey}.category`)}
                          </span>
                          <span className="text-body-sm font-semibold text-muted-foreground">
                            {t(`blogPage.posts.${postKey}.readTime`)}
                          </span>
                        </div>
                        <a href="/blog/artigo" className="mb-2 w-full block group">
                          <h2 className="text-h3 group-hover:text-primary transition-colors duration-200">
                            {t(`blogPage.posts.${postKey}.title`)}
                          </h2>
                        </a>
                        <p className="text-muted-foreground">{t(`blogPage.posts.${postKey}.description`)}</p>
                        <Button variant="link" className="mt-6 gap-1 p-0" asChild>
                          <a href="/blog/artigo">
                            {t("blogPage.readMore")}
                            <ChevronRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </motion.article>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>

            <FadeUp delay={0.3}>
              <div className="mt-12 flex justify-center md:mt-16">
                <Button variant="secondary" size="lg">
                  {t("blogPage.viewAll")}
                </Button>
              </div>
            </FadeUp>
          </Tabs>
        </div>
      </section>

      {/* CTA — two column */}
      <section className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
            <SlideLeft delay={0}>
              <FadeUp delay={0}>
                <span className="text-label uppercase tracking-wider text-muted-foreground">
                  {t("blogPage.label")}
                </span>
              </FadeUp>
              <h2 className="text-h2 mt-5 mb-5 md:mb-6">{t("blogPage.cta.headline")}</h2>
              <p className="text-muted-foreground">{t("blogPage.cta.description")}</p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button size="lg" asChild>
                  <a href="/consultoria">{t("blogPage.cta.primary")}</a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href="#contact">{t("blogPage.cta.secondary")}</a>
                </Button>
              </div>
            </SlideLeft>
            <SlideRight delay={0.15}>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="w-full object-cover"
                alt={t("blogPage.cta.headline")}
              />
            </SlideRight>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
            <BlurUp delay={0}>
              <h2 className="text-h2 mb-5 md:mb-6">{t("blogPage.faq.headline")}</h2>
            </BlurUp>
            <FadeIn delay={0.16}>
              <p className="text-muted-foreground">{t("blogPage.faq.description")}</p>
            </FadeIn>
          </div>
          <FadeIn delay={0.22}>
            <Accordion type="multiple" className="grid items-start gap-4">
              {faqKeys.map((key) => (
                <AccordionItem key={key} value={key} className="border border-border px-5 md:px-6">
                  <AccordionTrigger className="text-left md:py-5 text-body font-medium">
                    {t(`blogPage.faq.${key}.q`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground md:pb-6">
                    {t(`blogPage.faq.${key}.a`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
          <FadeUp delay={0.35}>
            <div className="mt-12 md:mt-18 lg:mt-20">
              <h3 className="text-h3 mb-3 md:mb-4">Tem mais perguntas?</h3>
              <p className="text-muted-foreground mb-6 md:mb-8">
                Entre em contato conosco para esclarecer dúvidas específicas
              </p>
              <Button variant="secondary" size="lg" asChild>
                <a href="#contact">{t("blogPage.faq.cta")}</a>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:mb-20 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
            <div className="max-w-lg">
              <FadeUp delay={0}>
                <span className="text-label uppercase tracking-wider text-muted-foreground">
                  {t("blogPage.contact.label")}
                </span>
              </FadeUp>
              <BlurUp delay={0.12}>
                <h2 className="text-h2 mt-4 mb-5 md:mb-6">{t("blogPage.contact.headline")}</h2>
              </BlurUp>
              <FadeIn delay={0.24}>
                <p className="text-muted-foreground">{t("blogPage.contact.description")}</p>
              </FadeIn>
            </div>
            <div className="flex flex-col">
              <div className="grid grid-cols-1 gap-6 py-2">
                {[
                  { Icon: Mail, titleKey: "blogPage.contact.email.title", valueKey: "blogPage.contact.email.value", href: "mailto:" },
                  { Icon: Phone, titleKey: "blogPage.contact.phone.title", valueKey: "blogPage.contact.phone.value", href: "tel:" },
                  { Icon: MapPin, titleKey: "blogPage.contact.address.title", valueKey: "blogPage.contact.address.value", href: "#" },
                ].map(({ Icon, titleKey, valueKey, href }, i) => (
                  <FadeIn key={titleKey} delay={0.15 + i * 0.1}>
                    <div className="flex flex-row">
                      <div className="mr-4">
                        <Icon className="size-6 text-foreground" strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="text-h4 mb-1">{t(titleKey)}</h3>
                        <a className="text-muted-foreground underline-offset-4 hover:underline" href={`${href}${t(valueKey)}`}>
                          {t(valueKey)}
                        </a>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
          <FadeIn delay={0.4}>
            <img
              src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
              alt="Mapa"
              className="w-full h-[400px] object-cover md:h-[516px]"
            />
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
