import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp, FadeIn, BlurUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/motion";

const cardKeys = ["card1", "card2"] as const;

const cardMotion = [SlideLeft, SlideRight] as const;

export function Consulting() {
  const { t } = useTranslation();

  return (
    <section id="consulting" className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-4xl text-center">
            <FadeUp delay={0}>
              <p className="text-label uppercase tracking-wider mb-3 md:mb-4">
                {t("consulting.label")}
              </p>
            </FadeUp>
            <BlurUp delay={0.1}>
              <h2 className="text-h2 mb-5 md:mb-6">
                {t("consulting.headline")}
              </h2>
            </BlurUp>
            <FadeIn delay={0.22}>
              <p className="text-muted-foreground md:text-md">
                {t("consulting.description")}
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          {cardKeys.map((key, i) => {
            const CardMotion = cardMotion[i];
            return (
              <CardMotion key={key} delay={0.32 + i * 0.12}>
                <div className="border border-border p-6 md:p-8 lg:p-12 h-full">
                  <div>
                    <ScaleIn delay={0.4 + i * 0.12} className="mb-5 md:mb-6">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                        alt=""
                        className="size-12"
                      />
                    </ScaleIn>
                    <h3 className="text-h3 mb-5 text-foreground md:mb-6">
                      {t(`consulting.cards.${key}.title`)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(`consulting.cards.${key}.description`)}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                    <Button variant="secondary" size="lg">
                      {t(`consulting.cards.${key}.cta_primary`)}
                    </Button>
                    <Button variant="link" className="gap-1">
                      {t(`consulting.cards.${key}.cta_secondary`)}
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardMotion>
            );
          })}
        </div>
      </div>
    </section>
  );
}
