import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, FadeIn, BlurUp } from "@/components/ui/motion";

const partnerLogos = [
  { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Travelers" },
  { src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "Progressive" },
  { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Liberty Mutual" },
  { src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "Nationwide" },
  { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Hartford" },
  { src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "Chubb" },
  { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Zurich" },
  { src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "Markel" },
];

export default function Parceiros() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="px-2 md:px-[5%] pt-36 pb-16 md:pb-24 lg:pb-28">
        <div className="container max-w-lg text-center">
          <FadeUp delay={0}>
            <span className="text-label uppercase tracking-wider text-muted-foreground">
              {t("parceirosPage.label")}
            </span>
          </FadeUp>
          <BlurUp delay={0.12}>
            <h1 className="text-display mt-4 mb-5 md:mb-6">{t("parceirosPage.headline")}</h1>
          </BlurUp>
          <FadeIn delay={0.28}>
            <p className="text-body-lg text-muted-foreground mb-6 md:mb-8">
              {t("parceirosPage.description")}
            </p>
          </FadeIn>
          <FadeUp delay={0.4}>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="px-8" asChild>
                <a href="/consultoria">{t("parceirosPage.primary")}</a>
              </Button>
              <Button variant="secondary" size="lg" className="px-8" asChild>
                <a href="#contact">{t("parceirosPage.secondary")}</a>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Infinite logo scroll */}
      <section className="overflow-hidden py-12 md:py-16 lg:py-20 bg-[#f0f2f5]">
        <FadeIn delay={0}>
          <div className="container mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
            <h2 className="text-center text-h4 font-semibold">
              {t("parceirosPage.logosHeadline")}
            </h2>
          </div>
        </FadeIn>
        <div className="flex items-center pt-7 md:pt-0">
          {/* Two identical sets for seamless loop */}
          {[0, 1].map((set) => (
            <div key={set} className="flex shrink-0 animate-loop-horizontally items-center">
              {partnerLogos.map((logo, i) => (
                <img
                  key={`${set}-${i}`}
                  className="mx-7 max-h-12 shrink-0 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 md:mx-10 md:max-h-14"
                  src={logo.src}
                  alt={logo.alt}
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Value proposition */}
      <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16 md:mb-20">
            <BlurUp delay={0}>
              <h2 className="text-h2 mb-5 md:mb-6">
                Por que ser independente nos dá vantagem
              </h2>
            </BlurUp>
            <FadeIn delay={0.16}>
              <p className="text-muted-foreground">
                Como agência independente, não representamos nenhuma seguradora específica.
                Isso significa que trabalhamos exclusivamente para o seu interesse.
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { number: "20+", label: "Seguradoras parceiras", description: "Acesso a dezenas de seguradoras para garantir as melhores opções do mercado" },
              { number: "100%", label: "Independência", description: "Nossa recomendação é baseada exclusivamente no que é melhor para você" },
              { number: "3", label: "Idiomas", description: "Atendimento em português, inglês e espanhol para atender toda a comunidade" },
            ].map(({ number, label, description }, i) => (
              <FadeUp key={label} delay={0.1 + i * 0.12}>
                <div className="flex flex-col items-center text-center p-8 border border-border">
                  <span className="text-display text-primary font-semibold mb-2">{number}</span>
                  <h3 className="text-h4 mb-3">{label}</h3>
                  <p className="text-muted-foreground text-body-sm">{description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-foreground px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container flex flex-col items-center text-center">
          <div className="max-w-lg">
            <BlurUp delay={0}>
              <h2 className="text-h2 text-white mb-5 md:mb-6">{t("parceirosPage.cta.headline")}</h2>
            </BlurUp>
            <FadeIn delay={0.16}>
              <p className="text-white/70 mb-6 md:mb-8">{t("parceirosPage.cta.description")}</p>
            </FadeIn>
            <FadeUp delay={0.28}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="px-8" asChild>
                  <a href="/consultoria">{t("parceirosPage.cta.primary")}</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 border-white/30 bg-transparent text-white hover:bg-white/10"
                  asChild
                >
                  <a href="#contact">{t("parceirosPage.cta.secondary")}</a>
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
