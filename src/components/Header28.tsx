import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import { Button } from "@/components/ui/button";
import { FaCirclePlay } from "react-icons/fa6";
import { ShieldCheck, DollarSign, FileSignature } from "lucide-react";
import { FadeUp, FadeIn, PulseLoop } from "@/components/ui/motion";

const seals = [
  { key: "insurance", Icon: ShieldCheck },
  { key: "tax",       Icon: DollarSign },
  { key: "notary",    Icon: FileSignature },
] as const;

export function Header28() {
  const { t, i18n } = useTranslation();
  const isWider = i18n.language === 'en' || i18n.language === 'es';
  const headlineMaxWidth = isWider ? '58.17rem' : '52.92rem';

  return (
    <section id="home" className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20 mx-auto pt-10 md:pt-0" style={{ maxWidth: headlineMaxWidth }}>
            <FadeUp delay={0}>
              <h1 className="text-display text-[2.75rem] md:text-[4rem] lg:text-[5rem] mb-5 md:mb-6" style={{ textWrap: 'balance' }}>
                {t("hero.headline")}
              </h1>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="text-h3 text-foreground mb-8 md:mb-10">
                {t("hero.subtitle")}
              </p>
            </FadeUp>
            <FadeIn delay={0.24}>
              <p className="text-muted-foreground md:text-md">
                {t("hero.description")}
              </p>
            </FadeIn>
            <FadeUp delay={0.36}>
              <div className="mt-6 flex justify-center md:mt-8">
                <div className="inline-flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="px-8 w-full sm:w-auto">
                    {t("hero.cta_primary")}
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 w-full sm:w-auto">
                    {t("hero.cta_secondary")}
                  </Button>
                </div>
              </div>
              <FadeIn delay={0.48}>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  {seals.map(({ key, Icon }, i) => (
                    <div key={key} className="flex items-center gap-2 text-sm text-foreground">
                      <Icon className="size-4 shrink-0 text-foreground" strokeWidth={1.75} />
                      <span>{t(`hero.seals.${key}`)}</span>
                      {i < seals.length - 1 && (
                        <span className="hidden sm:inline ml-2 text-border">·</span>
                      )}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </FadeUp>
          </div>
          <FadeUp delay={0.5} className="w-full">
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative flex w-full items-center justify-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt={t("hero.video_alt")}
                    className="size-full object-cover"
                  />
                  <span className="absolute z-10">
                    <PulseLoop>
                      <FaCirclePlay className="size-16 text-white" />
                    </PulseLoop>
                  </span>
                  <span className="absolute inset-0 z-0 bg-black/50" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKPlThpbBk?si=5bxjkJRv7LxzGpgN" />
              </DialogContent>
            </Dialog>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
