import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp, FadeIn, ScaleIn } from "@/components/ui/motion";

const cardKeys = ["card1", "card2", "card3"] as const;

export function Blog() {
  const { t } = useTranslation();

  return (
    <section id="blog" className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-4xl text-center">
            <FadeUp delay={0}>
              <p className="text-label uppercase tracking-wider mb-3 md:mb-4">
                {t("blog.label")}
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-h2 mb-5 md:mb-6">
                {t("blog.headline")}
              </h2>
            </FadeUp>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground md:text-md">
                {t("blog.description")}
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {cardKeys.map((key, i) => (
            <FadeUp key={key} delay={0.3 + i * 0.12} className="flex size-full flex-col items-center justify-start border border-border">
              <ScaleIn delay={0.3 + i * 0.12} className="w-full">
                <a href="#" className="w-full block">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt={t(`blog.cards.${key}.title`)}
                    className="aspect-[3/2] size-full object-cover"
                  />
                </a>
              </ScaleIn>
              <FadeUp delay={0.38 + i * 0.12} className="w-full">
                <div className="px-5 py-6 md:p-6">
                  <div className="mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-secondary px-2 py-1 text-sm font-semibold text-secondary-foreground">
                      {t(`blog.cards.${key}.tag`)}
                    </p>
                    <p className="inline text-sm font-semibold text-muted-foreground">
                      {t(`blog.cards.${key}.read_time`)}
                    </p>
                  </div>
                  <a className="mb-2 block max-w-full" href="#">
                    <h3 className="text-h4 text-foreground">
                      {t(`blog.cards.${key}.title`)}
                    </h3>
                  </a>
                  <p className="text-muted-foreground">
                    {t(`blog.cards.${key}.description`)}
                  </p>
                  <Button variant="link" className="mt-6 gap-1 p-0 h-auto">
                    {t(`blog.cards.${key}.cta`)}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </FadeUp>
            </FadeUp>
          ))}
        </div>
        <FadeIn delay={0.7}>
          <div className="flex items-center justify-center">
            <Button variant="default" size="lg" className="mt-10 md:mt-14 lg:mt-16">
              {t("blog.cta_all")}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
