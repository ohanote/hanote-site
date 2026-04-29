import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function PortfolioHero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/portfolio-hero.jpg')" }}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />

      <div className="site-container relative grid min-h-[520px] items-end py-16 sm:min-h-[620px] lg:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md md:text-sm"
            style={{
              borderColor: "var(--glass-border)",
              background: "var(--glass-bg)",
              color: "var(--color-text-on-dark-muted)",
            }}
          >
            Portfólio de Vídeo
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="site-display text-4xl font-black leading-tight sm:text-5xl lg:text-7xl"
            style={{ color: "var(--color-text-on-dark)" }}
          >
            Projetos que unem estética, narrativa e resultado.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8"
            style={{ color: "var(--color-text-on-dark-muted)" }}
          >
            Uma seleção de trabalhos da Hanote com direção visual forte, acabamento premium e foco em impacto de marca.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}