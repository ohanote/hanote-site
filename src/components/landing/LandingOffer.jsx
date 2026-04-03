import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { landingData } from "../../data/siteData";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function LandingOffer() {
  return (
    <section className="section-dark py-[var(--section-padding-y)]">
      <div className="site-container">
        <div className="mb-12 max-w-3xl">
          <span className="landing-kicker landing-kicker-dark">Oferta</span>
          <h2 className="site-display mt-4 text-3xl font-black sm:text-4xl lg:text-5xl" style={{ color: "var(--color-text-on-dark)" }}>
            Escolha o formato ideal para a sua campanha.
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {landingData.offers.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              className="rounded-[var(--radius-xl)] border p-6 sm:p-7"
              style={{
                background: item.featured ? "color-mix(in srgb, var(--color-surface-dark-2) 78%, var(--color-secondary) 22%)" : "var(--color-surface-dark-2)",
                borderColor: item.featured ? "rgba(255,255,255,0.18)" : "var(--color-border-on-dark)",
                boxShadow: item.featured ? "var(--shadow-card-strong)" : "none",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="site-display text-2xl font-extrabold" style={{ color: "var(--color-text-on-dark)" }}>
                    {item.name}
                  </h3>
                  <p className="mt-2" style={{ color: "var(--color-text-on-dark-muted)" }}>{item.description}</p>
                </div>
                {item.featured && (
                  <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]" style={{ background: "rgba(255,255,255,0.12)", color: "var(--color-text-on-dark)" }}>
                    Destaque
                  </span>
                )}
              </div>

              <p className="site-display mt-6 text-3xl font-black" style={{ color: "var(--color-text-on-dark)" }}>
                {item.price}
              </p>

              <div className="mt-6 space-y-3">
                {item.items.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5" style={{ color: "var(--color-primary)" }} />
                    <span style={{ color: "var(--color-text-on-dark-muted)" }}>{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#lead-form" className="btn-primary mt-8 inline-flex w-full items-center justify-center rounded-[var(--radius-md)] px-6 py-4 text-base font-extrabold">
                Solicitar proposta
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}