import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Users, Clock, Globe } from "lucide-react";
import { SlideLeft, SlideRight, ExpandLine, FadeUp, ScaleIn, FadeIn } from "@/components/ui/motion";

const featureIcons = [Shield, Users, Clock, Globe] as const;
const featureKeys = ["protection", "community", "speed", "languages"] as const;

export function Foundation() {
  const { t } = useTranslation();

  return (
    <section id="about" className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Top: Label + Headline | Description */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <SlideLeft delay={0}>
            <div>
              <span className="text-label uppercase tracking-wider">
                {t("foundation.label")}
              </span>
              <h2 className="text-h2 mt-4">
                {t("foundation.headline")}
              </h2>
            </div>
          </SlideLeft>
          <SlideRight delay={0.15}>
            <div className="flex flex-col justify-end">
              <p className="text-body-lg text-muted-foreground">
                {t("foundation.description")}
              </p>
            </div>
          </SlideRight>
        </div>

        {/* Separator */}
        <ExpandLine delay={0.3} className="my-12 border-t border-border md:my-16" />

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-0">
          {featureKeys.map((key, i) => {
            const Icon = featureIcons[i];
            return (
              <FadeUp key={key} delay={0.35 + i * 0.1}>
                <div
                  className={`flex flex-col gap-4 ${i > 0 ? "md:border-l md:border-border md:pl-8" : ""} ${i < featureKeys.length - 1 ? "md:pr-8" : ""}`}
                >
                  <ScaleIn delay={0.45 + i * 0.1}>
                    <Icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
                  </ScaleIn>
                  <h3 className="text-h4 text-foreground whitespace-pre-line">
                    {t(`foundation.features.${key}.title`)}
                  </h3>
                  <p className="text-body-sm text-muted-foreground">
                    {t(`foundation.features.${key}.description`)}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* CTAs */}
        <FadeIn delay={0.7}>
          <div className="mt-12 flex items-center gap-4 md:mt-16">
            <Button variant="outline" size="lg" className="px-8">
              {t("foundation.cta_primary")}
            </Button>
            <Button variant="link" className="gap-1">
              {t("foundation.cta_secondary")}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
