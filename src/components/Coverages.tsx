import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { FadeUp, BlurUp, FadeIn } from "@/components/ui/motion";

export function Coverages() {
  const { t } = useTranslation();

  return (
    <section id="coverages" className="bg-foreground px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto text-center" style={{ maxWidth: '49.9rem' }}>
          <FadeUp delay={0}>
            <span className="text-label uppercase tracking-wider">
              {t("coverages.label")}
            </span>
          </FadeUp>
          <BlurUp delay={0.12}>
            <h2 className="text-display mt-4 text-white">
              {t("coverages.headline")}
            </h2>
          </BlurUp>
          <FadeIn delay={0.28}>
            <p className="mt-5 text-white/70 md:text-md md:mt-6">
              {t("coverages.description")}
            </p>
          </FadeIn>
          <FadeUp delay={0.38}>
            <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
              <Button size="lg" className="px-8">
                {t("coverages.cta_business")}
              </Button>
              <Button variant="outline" size="lg" className="px-8 border-white/30 bg-transparent text-white hover:bg-white/10">
                {t("coverages.cta_family")}
              </Button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
