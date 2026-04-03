import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { landingData } from "../../data/siteData";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function LandingHeroForm() {
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${landingData.heroImage}')` }}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />

      <div className="site-container relative grid min-h-[760px] items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md md:text-sm"
            style={{
              background: "var(--glass-bg)",
              borderColor: "var(--glass-border)",
              color: "var(--color-text-on-dark-muted)",
            }}
          >
            {landingData.badge}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="site-display text-4xl font-black leading-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ color: "var(--color-text-on-dark)" }}
          >
            {landingData.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8"
            style={{ color: "var(--color-text-on-dark-muted)" }}
          >
            {landingData.subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 grid gap-3 sm:grid-cols-2">
            {landingData.authorityItems.slice(0, 4).map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5" style={{ color: "var(--color-primary)" }} />
                <span style={{ color: "var(--color-text-on-dark-muted)" }}>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          id="lead-form"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="surface-card-dark rounded-[var(--radius-xl)] p-6 sm:p-8"
        >
          <h2 className="site-display text-2xl font-black sm:text-3xl" style={{ color: "var(--color-text-on-dark)" }}>
            Receba uma proposta para sua landing com vídeo
          </h2>

          <p className="mt-3 text-sm leading-7 sm:text-base" style={{ color: "var(--color-text-on-dark-muted)" }}>
            Preencha os dados e vamos te mostrar o melhor formato para sua campanha, oferta ou serviço.
          </p>

          <form className="mt-6 space-y-4">
            <input type="text" placeholder="Nome" className="form-control h-14 w-full rounded-[var(--radius-md)] px-4" />
            <input type="email" placeholder="E-mail" className="form-control h-14 w-full rounded-[var(--radius-md)] px-4" />
            <input type="tel" placeholder="WhatsApp" className="form-control h-14 w-full rounded-[var(--radius-md)] px-4" />
            <textarea placeholder="Conte rapidamente o que você quer vender ou divulgar" rows={4} className="form-control w-full rounded-[var(--radius-md)] px-4 py-4" />

            <button type="submit" className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] px-6 py-4 text-base font-extrabold">
              {landingData.ctaLabel} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}