import { useTranslation } from "react-i18next";
import { ChevronRight, ShieldCheck, CheckCircle, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SlideLeft, SlideRight, FadeIn, ScaleIn } from "@/components/ui/motion";

const features = [
  { key: "f1", Icon: ShieldCheck },
  { key: "f2", Icon: CheckCircle },
  { key: "f3", Icon: Scale },
] as const;

export function AutoProtection() {
  const { t } = useTranslation();

  return (
    <section id="auto-protection" className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <SlideLeft delay={0} className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt={t("auto.headline")}
            />
          </SlideLeft>

          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
              {features.map(({ key, Icon }, i) => (
                <SlideRight key={key} delay={0.15 + i * 0.13}>
                  <div className="flex self-start">
                    <div className="mr-6 flex-none self-start">
                      <ScaleIn delay={0.2 + i * 0.13}>
                        <Icon className="size-12 text-primary" strokeWidth={1.5} />
                      </ScaleIn>
                    </div>
                    <div>
                      <h3 className="text-h4 mb-3 md:mb-4 text-foreground">
                        {t(`auto.features.${key}.title`)}
                      </h3>
                      <p className="text-muted-foreground">
                        {t(`auto.features.${key}.description`)}
                      </p>
                    </div>
                  </div>
                </SlideRight>
              ))}
            </div>
            <FadeIn delay={0.55}>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button variant="secondary" size="lg" asChild>
                  <a href="/seguro-automovel">{t("auto.cta_quote")}</a>
                </Button>
                <Button variant="link" className="gap-1" asChild>
                  <a href="/seguro-automovel">
                    {t("auto.cta_protect")}
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
