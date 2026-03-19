import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { BlurUp, FadeIn, FadeUp } from "@/components/ui/motion";

export function CtaSection() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-4xl text-center md:mb-18 lg:mb-20">
          <BlurUp delay={0}>
            <h2 className="text-display mb-5 md:mb-6">
              {t("cta.headline")}
            </h2>
          </BlurUp>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground md:text-md">
              {t("cta.description")}
            </p>
          </FadeIn>
          <FadeUp delay={0.32}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button size="lg" className="px-8">
                {t("cta.cta_primary")}
              </Button>
              <Button variant="secondary" size="lg" className="px-8">
                {t("cta.cta_secondary")}
              </Button>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.55} className="w-full">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="size-full object-cover"
            alt={t("cta.image_alt")}
          />
        </FadeUp>
      </div>
    </section>
  );
}
