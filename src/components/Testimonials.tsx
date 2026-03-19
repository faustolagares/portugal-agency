import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";
import { FadeUp, FadeIn, ScaleIn, SlideLeft } from "@/components/ui/motion";

const testimonialKeys = ["t1", "t2", "t3"] as const;

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-18 lg:mb-20">
          <FadeUp delay={0}>
            <p className="text-label uppercase tracking-wider mb-3 md:mb-4">
              {t("testimonials.label")}
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-h2 mb-5 md:mb-6">
              {t("testimonials.headline")}
            </h2>
          </FadeUp>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground md:text-md">
              {t("testimonials.description")}
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonialKeys.map((key, i) => (
            <FadeUp key={key} delay={0.3 + i * 0.12}>
              <div className="border border-border p-6 md:p-8 h-full flex flex-col">
                <ScaleIn delay={0.35 + i * 0.12}>
                  <Quote className="mb-5 size-8 text-foreground md:mb-6" />
                </ScaleIn>
                <blockquote className="mb-5 text-foreground md:mb-6 md:text-md flex-1">
                  {t(`testimonials.items.${key}.quote`)}
                </blockquote>
                <SlideLeft delay={0.42 + i * 0.12}>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                      alt={t(`testimonials.items.${key}.name`)}
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">
                        {t(`testimonials.items.${key}.name`)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t(`testimonials.items.${key}.role`)}
                      </p>
                    </div>
                  </div>
                </SlideLeft>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
