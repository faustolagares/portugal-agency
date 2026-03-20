import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { BiLinkAlt, BiLogoFacebookCircle, BiLogoLinkedinSquare, BiSolidStar } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, FadeIn, BlurUp, SlideLeft } from "@/components/ui/motion";

const relatedKeys = ["p1", "p2", "p3"] as const;
const tagKeys = ["t1", "t2", "t3", "t4"] as const;

const ShareIcons = () => (
  <div className="flex items-center gap-2">
    {[
      { Icon: BiLinkAlt, label: "Copiar link" },
      { Icon: BiLogoLinkedinSquare, label: "LinkedIn" },
      { Icon: FaXTwitter, label: "X (Twitter)" },
      { Icon: BiLogoFacebookCircle, label: "Facebook" },
    ].map(({ Icon, label }) => (
      <a
        key={label}
        href="#"
        aria-label={label}
        className="flex size-8 items-center justify-center rounded-full bg-muted text-foreground hover:bg-border transition-colors"
      >
        <Icon className="size-4" />
      </a>
    ))}
  </div>
);

export default function PostagemBlog() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Article Header */}
      <section className="px-2 md:px-[5%] pt-36 pb-0">
        <div className="container">
          {/* Narrow text column */}
          <div className="mx-auto mb-10 flex w-full max-w-[720px] flex-col items-start">
            {/* Breadcrumb */}
            <FadeIn delay={0}>
              <nav aria-label="breadcrumb" className="mb-6 flex items-center gap-2 text-body-sm text-muted-foreground">
                <a href="/blog" className="hover:text-foreground transition-colors">
                  {t("blogPostPage.breadcrumb.blog")}
                </a>
                <ChevronRight className="h-3 w-3" />
                <span className="text-foreground">{t("blogPostPage.breadcrumb.category")}</span>
              </nav>
            </FadeIn>

            {/* Title */}
            <BlurUp delay={0.1}>
              <h1 className="text-display mb-8 md:mb-10">{t("blogPostPage.title")}</h1>
            </BlurUp>

            {/* Author + Share row */}
            <FadeIn delay={0.24}>
              <div className="flex w-full flex-col items-start justify-between sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex-none">
                    <img
                      src="/logos/portugal-agency-blue-logo.png"
                      alt={t("blogPostPage.author")}
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{t("blogPostPage.author")}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <p className="text-body-sm text-muted-foreground">{t("blogPostPage.date")}</p>
                      <span className="text-muted-foreground">·</span>
                      <p className="text-body-sm text-muted-foreground">{t("blogPostPage.readTime")}</p>
                    </div>
                  </div>
                </div>
                <ShareIcons />
              </div>
            </FadeIn>
          </div>

          {/* Hero image — full container width */}
          <FadeIn delay={0.32}>
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="aspect-[2.5] w-full object-cover"
                alt={t("blogPostPage.title")}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article Body */}
      <section className="px-2 md:px-[5%] py-12 md:py-16 lg:py-20">
        <div className="container">
          {/* Central narrow column — editorial blog style */}
          <div className="mx-auto max-w-[720px]">
            <SlideLeft delay={0}>
              <div className="prose prose-neutral prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-blockquote:border-primary prose-blockquote:text-foreground prose-strong:text-foreground mb-12 md:mb-16">
                <h3>Introdução</h3>
                <p>
                  Quando se fala em proteção para empresas em New Jersey, dois seguros se destacam como pilares
                  fundamentais: o <strong>General Liability</strong> e o <strong>Workers' Compensation</strong>.
                  Mas o que cada um cobre, e como você escolhe a combinação certa?
                </p>
                <p>
                  Neste guia, vamos detalhar cada tipo de cobertura, seus benefícios específicos, e quando
                  cada um se aplica — para que você possa tomar decisões informadas sem depender de jargões
                  do setor.
                </p>
                <figure>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Coberturas para empresas"
                  />
                  <figcaption>Entender cada tipo de cobertura é o primeiro passo para uma proteção eficaz.</figcaption>
                </figure>
                <h4>General Liability: proteção contra terceiros</h4>
                <p>
                  O seguro de Responsabilidade Civil Geral (General Liability) protege sua empresa contra
                  reclamações de terceiros — clientes, fornecedores ou visitantes — por danos corporais ou
                  materiais ocorridos em decorrência das suas operações.
                </p>
                <blockquote>
                  "A Portugal Agency não vende apólices — ajuda você a entender o que realmente precisa,
                  comparando dezenas de seguradoras para encontrar a solução certa."
                </blockquote>
                <h4>Workers' Compensation: proteção para funcionários</h4>
                <p>
                  Em New Jersey, este seguro é obrigatório para qualquer empresa com funcionários. Ele cobre
                  despesas médicas, reabilitação e parte dos salários perdidos em caso de acidentes ou doenças
                  relacionadas ao trabalho.
                </p>
                <h4>Conclusão</h4>
                <p>
                  A cobertura certa depende do tamanho e tipo do seu negócio. O ideal é contar com uma
                  agência independente — como a Portugal Agency — que analisa seu perfil específico e encontra
                  as melhores opções no mercado sem conflito de interesse.
                </p>
              </div>
            </SlideLeft>

            {/* Bottom share + tags */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-semibold mb-3">{t("blogPostPage.share")}</p>
                  <ShareIcons />
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2 sm:justify-end">
                    {tagKeys.map((key) => (
                      <li key={key} className="flex">
                        <a
                          href="/blog"
                          className="bg-muted px-2 py-1 text-body-sm font-semibold hover:bg-border transition-colors"
                        >
                          {t(`blogPostPage.tags.${key}`)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Divider */}
            <div className="my-8 h-px bg-border md:my-12" />

            {/* Author bio */}
            <FadeIn delay={0.15}>
              <div className="flex items-center gap-4">
                <img
                  src="/logos/portugal-agency-blue-logo.png"
                  alt={t("blogPostPage.author")}
                  className="size-14 rounded-full object-cover flex-none"
                />
                <div>
                  <p className="font-semibold">{t("blogPostPage.author")}</p>
                  <p className="text-muted-foreground">{t("blogPostPage.authorRole")}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto w-full max-w-lg text-center">
              <FadeUp delay={0}>
                <span className="text-label uppercase tracking-wider text-muted-foreground">
                  {t("blogPostPage.related.label")}
                </span>
              </FadeUp>
              <BlurUp delay={0.12}>
                <h2 className="text-h2 mt-4 mb-5 md:mb-6">{t("blogPostPage.related.headline")}</h2>
              </BlurUp>
              <FadeIn delay={0.24}>
                <p className="text-muted-foreground">{t("blogPostPage.related.description")}</p>
              </FadeIn>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            {relatedKeys.map((key, i) => (
              <FadeUp key={key} delay={0.08 + i * 0.1}>
                <article className="flex size-full flex-col items-center justify-start border border-border">
                  <a href="/blog/artigo" className="w-full block overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt={t(`blogPostPage.related.posts.${key}.title`)}
                      className="aspect-[3/2] size-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </a>
                  <div className="px-5 py-6 md:p-6 w-full">
                    <div className="mb-4 flex w-full items-center">
                      <span className="mr-4 bg-muted px-2 py-1 text-body-sm font-semibold">
                        {t(`blogPostPage.related.posts.${key}.category`)}
                      </span>
                      <span className="text-body-sm font-semibold text-muted-foreground">
                        {t(`blogPostPage.related.posts.${key}.readTime`)}
                      </span>
                    </div>
                    <a href="/blog/artigo" className="mb-2 block group">
                      <h3 className="text-h4 group-hover:text-primary transition-colors duration-200">
                        {t(`blogPostPage.related.posts.${key}.title`)}
                      </h3>
                    </a>
                    <p className="text-muted-foreground">{t(`blogPostPage.related.posts.${key}.description`)}</p>
                    <Button variant="link" className="mt-6 gap-1 p-0" asChild>
                      <a href="/blog/artigo">
                        {t("blogPage.readMore")}
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.35}>
            <div className="mt-10 flex justify-center md:mt-14">
              <Button variant="secondary" size="lg" asChild>
                <a href="/blog">{t("blogPostPage.related.viewAll")}</a>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-foreground px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container flex flex-col items-center text-center">
          <div className="max-w-lg">
            <BlurUp delay={0}>
              <h2 className="text-h2 text-white mb-5 md:mb-6">{t("blogPostPage.cta.headline")}</h2>
            </BlurUp>
            <FadeIn delay={0.16}>
              <p className="text-white/70 mb-6 md:mb-8">{t("blogPostPage.cta.description")}</p>
            </FadeIn>
            <FadeUp delay={0.28}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="px-8" asChild>
                  <a href="/consultoria">{t("blogPostPage.cta.primary")}</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 border-white/30 bg-transparent text-white hover:bg-white/10"
                  asChild
                >
                  <a href="/consultoria">{t("blogPostPage.cta.secondary")}</a>
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
