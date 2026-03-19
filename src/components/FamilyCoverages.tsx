import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp, FadeIn, ScaleIn } from "@/components/ui/motion";

const cardKeys = ["card1", "card2", "card3"] as const;

export function FamilyCoverages() {
  const { t } = useTranslation();

  return (
    <section id="family-coverages" className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-4xl">
              <FadeUp delay={0}>
                <p className="text-label uppercase tracking-wider mb-3 md:mb-4">
                  {t("family.label")}
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-h2 mb-5 md:mb-6">
                  {t("family.headline")}
                </h2>
              </FadeUp>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground md:text-md">
                  {t("family.description")}
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {cardKeys.map((key, i) => (
              <FadeUp key={key} delay={0.3 + i * 0.12} className="flex w-full flex-col items-center text-center">
                <ScaleIn delay={0.3 + i * 0.12} className="mb-6 md:mb-8 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt={t(`family.cards.${key}.title`)}
                  />
                </ScaleIn>
                <FadeUp delay={0.38 + i * 0.12}>
                  <h3 className="text-h3 mb-5 md:mb-6">
                    {t(`family.cards.${key}.title`)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(`family.cards.${key}.description`)}
                  </p>
                </FadeUp>
              </FadeUp>
            ))}
          </div>

          {/* CTAs */}
          <FadeIn delay={0.7}>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary" size="lg">
                {t("family.cta_quote")}
              </Button>
              <Button variant="link" className="gap-1">
                {t("family.cta_protect")}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
