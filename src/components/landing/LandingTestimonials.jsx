import { motion } from "framer-motion";
import { landingData } from "../../data/siteData";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function LandingTestimonials() {
  return (
    <section className="section-light py-[var(--section-padding-y)]">
      <div className="site-container">
        <div className="mb-12 max-w-3xl">
          <span className="landing-kicker">Prova social</span>
          <h2 className="site-display mt-4 text-3xl font-black sm:text-4xl lg:text-5xl" style={{ color: "var(--color-title)" }}>
            Credibilidade para reduzir objeções e aumentar a confiança.
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {landingData.testimonials.map((item) => (
            <motion.div key={item.name} variants={fadeUp} className="surface-card p-6 sm:p-7">
              <p className="text-lg leading-8 sm:text-xl" style={{ color: "var(--color-text-muted)" }}>
                “{item.quote}”
              </p>
              <div className="mt-6">
                <p className="font-extrabold" style={{ color: "var(--color-title)" }}>{item.name}</p>
                <p style={{ color: "var(--color-text-muted)" }}>{item.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}