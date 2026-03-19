import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp, FadeIn } from "@/components/ui/motion";

const cardKeys = ["card1", "card2"] as const;

const cardEntry = [
  { x: -32, y: 24 },
  { x: 32,  y: 24 },
];

export function CoverageCards() {
  const { t } = useTranslation();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="coverage-cards" className="bg-[#f0f2f5] px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Header */}
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <FadeUp delay={0}>
            <p className="text-label uppercase tracking-wider mb-3 md:mb-4">
              {t("coverageCards.label")}
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-h2 mb-5 md:mb-6">
              {t("coverageCards.headline")}
            </h2>
          </FadeUp>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground md:text-md">
              {t("coverageCards.description")}
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-8">
          {cardKeys.map((key, i) => (
            <motion.a
              key={key}
              href="#"
              className={`relative flex w-full flex-col overflow-hidden md:w-1/2 lg:h-full lg:transition-all lg:duration-200 ${
                hoveredIdx === i ? "lg:!w-[70%]" : ""
              }`}
              initial={{ opacity: 0, x: cardEntry[i].x, y: cardEntry[i].y }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.3 + i * 0.12 }}
              onMouseOver={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Background */}
              <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt={t(`coverageCards.cards.${key}.title`)}
                  className="size-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8 lg:p-12">
                <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
                <div className="z-10">
                  <p className="text-label mb-2 font-semibold text-white">
                    {t(`coverageCards.cards.${key}.label`)}
                  </p>
                  <h3 className="text-h3 text-white">
                    {t(`coverageCards.cards.${key}.title`)}
                  </h3>

                  {/* Mobile */}
                  <div className="lg:hidden">
                    <p className="mt-5 text-white md:mt-6">
                      {t(`coverageCards.cards.${key}.mobile_description`)}
                    </p>
                    <div className="mt-6 md:mt-8">
                      <Button variant="link" className="text-white gap-1 p-0 h-auto">
                        {t(`coverageCards.cards.${key}.cta`)}
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Desktop hover */}
                <AnimatePresence>
                  {hoveredIdx === i && (
                    <motion.div
                      className="z-10 hidden lg:block lg:w-[528px]"
                      initial={{ opacity: 0, height: 0, y: 50 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 50 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="mt-5 text-white md:mt-6">
                        {t(`coverageCards.cards.${key}.hover_description`)}
                      </p>
                      <div className="mt-6 md:mt-8">
                        <Button variant="link" className="text-white gap-1 p-0 h-auto">
                          {t(`coverageCards.cards.${key}.cta`)}
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
