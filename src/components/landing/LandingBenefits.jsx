import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { landingData } from "../../data/siteData";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function LandingBenefits() {
  return (
    <section className="section-light py-[var(--section-padding-y)]">
      <div className="site-container">
        <div className="mb-12 max-w-3xl">
          <span className="landing-kicker">Por que essa estrutura converte melhor</span>
          <h2 className="site-display mt-4 text-3xl font-black sm:text-4xl lg:text-5xl" style={{ color: "var(--color-title)" }}>
            Uma landing pensada para vender seu serviço com clareza e valor percebido.
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {landingData.benefits.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="surface-card p-6 sm:p-7"
            >
              <CheckCircle2 className="h-7 w-7" style={{ color: "var(--color-primary)" }} />
              <h3 className="site-display mt-5 text-2xl font-extrabold" style={{ color: "var(--color-title)" }}>
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