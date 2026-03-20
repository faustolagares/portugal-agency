import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, FadeIn, BlurUp, SlideLeft, SlideRight } from "@/components/ui/motion";

const subjectKeys = ["insurance", "personal", "auto", "workers", "tax", "notary", "other"] as const;

export default function Contato() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simula envio — substituir por integração real (Formspree, EmailJS, etc.)
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setStatus("success");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  }

  const inputClass =
    "w-full border border-border bg-background px-4 py-3 text-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="px-2 md:px-[5%] pt-36 pb-16 md:pb-24 lg:pb-28">
        <div className="container max-w-lg text-center">
          <FadeUp delay={0}>
            <span className="text-label uppercase tracking-wider text-muted-foreground">
              {t("contatoPage.label")}
            </span>
          </FadeUp>
          <BlurUp delay={0.12}>
            <h1 className="text-display mt-4 mb-5 md:mb-6">{t("contatoPage.headline")}</h1>
          </BlurUp>
          <FadeIn delay={0.28}>
            <p className="text-body-lg text-muted-foreground">{t("contatoPage.description")}</p>
          </FadeIn>
        </div>
      </section>

      {/* Main — info + form */}
      <section className="px-2 md:px-[5%] pb-16 md:pb-24 lg:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Left — contact info */}
            <SlideLeft delay={0}>
              <div className="flex flex-col gap-10">

                {/* Address */}
                <FadeIn delay={0.1}>
                  <div className="flex gap-5">
                    <div className="flex-none pt-1">
                      <MapPin className="size-6 text-foreground" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="text-label uppercase tracking-wider text-foreground mb-1">{t("contatoPage.info.address.title")}</h4>
                      <a
                        href="https://maps.google.com/?q=180+Ferry+St+Newark+NJ+07105"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
                      >
                        {t("contatoPage.info.address.value")}
                      </a>
                    </div>
                  </div>
                </FadeIn>

                {/* Phone */}
                <FadeIn delay={0.18}>
                  <div className="flex gap-5">
                    <div className="flex-none pt-1">
                      <Phone className="size-6 text-foreground" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="text-label uppercase tracking-wider text-foreground mb-1">{t("contatoPage.info.phone.title")}</h4>
                      <a
                        href={`tel:${t("contatoPage.info.phone.value").replace(/\D/g, "")}`}
                        className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
                      >
                        {t("contatoPage.info.phone.value")}
                      </a>
                    </div>
                  </div>
                </FadeIn>

                {/* Email */}
                <FadeIn delay={0.26}>
                  <div className="flex gap-5">
                    <div className="flex-none pt-1">
                      <Mail className="size-6 text-foreground" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="text-label uppercase tracking-wider text-foreground mb-1">{t("contatoPage.info.email.title")}</h4>
                      <a
                        href={`mailto:${t("contatoPage.info.email.value")}`}
                        className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
                      >
                        {t("contatoPage.info.email.value")}
                      </a>
                    </div>
                  </div>
                </FadeIn>

                {/* Hours */}
                <FadeIn delay={0.34}>
                  <div className="flex gap-5">
                    <div className="flex-none pt-1">
                      <Clock className="size-6 text-foreground" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="text-label uppercase tracking-wider text-foreground mb-3">{t("contatoPage.info.hours.title")}</h4>
                      <ul className="space-y-1">
                        <li className="text-muted-foreground">{t("contatoPage.info.hours.weekdays")}</li>
                        <li className="text-muted-foreground">{t("contatoPage.info.hours.saturday")}</li>
                        <li className="text-muted-foreground">{t("contatoPage.info.hours.sunday")}</li>
                      </ul>
                    </div>
                  </div>
                </FadeIn>

                {/* Social */}
                <FadeIn delay={0.42}>
                  <div className="flex gap-3 pt-2">
                    <a
                      href="https://www.facebook.com/portugalagency/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex size-10 items-center justify-center border border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                    >
                      <Facebook className="size-5" strokeWidth={1.75} />
                    </a>
                    <a
                      href="https://www.instagram.com/portugalagency/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex size-10 items-center justify-center border border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                    >
                      <Instagram className="size-5" strokeWidth={1.75} />
                    </a>
                  </div>
                </FadeIn>
              </div>
            </SlideLeft>

            {/* Right — form */}
            <SlideRight delay={0.15}>
              {status === "success" ? (
                <FadeIn delay={0}>
                  <div className="flex flex-col items-start gap-4 border border-border bg-muted p-8 md:p-10">
                    <div className="flex size-12 items-center justify-center rounded-full bg-foreground">
                      <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-h4 text-foreground">{t("contatoPage.form.success")}</p>
                    <Button
                      variant="secondary"
                      onClick={() => setStatus("idle")}
                      className="mt-2"
                    >
                      Enviar nova mensagem
                    </Button>
                  </div>
                </FadeIn>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-body-sm font-medium text-foreground">
                        {t("contatoPage.form.name")} <span className="text-muted-foreground">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Maria Silva"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-body-sm font-medium text-foreground">
                        {t("contatoPage.form.email")} <span className="text-muted-foreground">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="maria@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone + Subject */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-body-sm font-medium text-foreground">
                        {t("contatoPage.form.phone")}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="(973) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-body-sm font-medium text-foreground">
                        {t("contatoPage.form.subject")} <span className="text-muted-foreground">*</span>
                      </label>
                      <select
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>
                          {t("contatoPage.form.subjects.placeholder")}
                        </option>
                        {subjectKeys.map((key) => (
                          <option key={key} value={key}>
                            {t(`contatoPage.form.subjects.${key}`)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-1.5 block text-body-sm font-medium text-foreground">
                        {t("contatoPage.form.message")} <span className="text-muted-foreground">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder={t("contatoPage.form.messagePlaceholder")}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-body-sm text-destructive">{t("contatoPage.form.error")}</p>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full sm:w-auto px-8"
                    >
                      {loading ? "Enviando…" : t("contatoPage.form.submit")}
                    </Button>
                    <p className="text-body-sm text-muted-foreground">{t("contatoPage.form.note")}</p>
                  </div>
                </form>
              )}
            </SlideRight>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section className="bg-[#f0f2f5]">
        <FadeIn delay={0}>
          <iframe
            title="Portugal Agency — 180 Ferry St, Newark NJ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3944290854836!2d-74.16777492402953!3d40.73408797138756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2546a81374cf9%3A0x8dc68462b85e9bf5!2s180%20Ferry%20St%2C%20Newark%2C%20NJ%2007105!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </FadeIn>
      </section>

      {/* CTA final */}
      <section className="bg-foreground px-2 md:px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container flex flex-col items-center text-center">
          <div className="max-w-lg">
            <BlurUp delay={0}>
              <h2 className="text-h2 text-white mb-5 md:mb-6">{t("contatoPage.cta.headline")}</h2>
            </BlurUp>
            <FadeIn delay={0.16}>
              <p className="text-white/70 mb-6 md:mb-8">{t("contatoPage.cta.description")}</p>
            </FadeIn>
            <FadeUp delay={0.28}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="px-8" asChild>
                  <a href={`tel:${t("contatoPage.info.phone.value").replace(/\D/g, "")}`}>
                    {t("contatoPage.cta.primary")}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 border-white/30 bg-transparent text-white hover:bg-white/10"
                  asChild
                >
                  <a href="/consultoria">{t("contatoPage.cta.secondary")}</a>
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
