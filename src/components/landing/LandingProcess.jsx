import { motion } from "framer-motion";
import { landingData } from "../../data/siteData";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function LandingProcess() {
  return (
    <section className="section-soft py-[var(--section-padding-y)]">
      <div className="site-container">
        <div className="mb-12 max-w-3xl">
          <span className="landing-kicker">Como funciona</span>
          <h2 className="site-display mt-4 text-3xl font-black sm:text-4xl lg:text-5xl" style={{ color: "var(--color-title)" }}>
            Um processo simples para tirar sua campanha do papel.
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {landingData.process.map((item) => (
            <motion.div key={item.step} variants={fadeUp} className="surface-card p-6">
              <span className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: "var(--color-primary)" }}>
                {item.step}
              </span>
              <h3 className="site-display mt-4 text-2xl font-extrabold" style={{ color: "var(--color-title)" }}>
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 sm:text-base" style={{ color: "var(--color-text-muted)" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}