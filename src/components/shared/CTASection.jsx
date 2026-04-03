import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { fadeUp } from "../../utils/animations";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="section-dark py-[var(--section-padding-y)]">
      <div className="site-container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="overflow-hidden rounded-[var(--radius-xl)] border px-6 py-10 sm:px-10 sm:py-14"
          style={{
            borderColor: "var(--color-border-on-dark)",
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--color-surface-dark-2) 90%, black), color-mix(in srgb, var(--color-surface-dark) 88%, var(--color-secondary) 12%))",
            boxShadow: "var(--shadow-card-strong)",
          }}
        >
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]"
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "var(--color-text-on-dark-muted)",
              }}
            >
              Vamos criar o seu próximo projeto
            </span>

            <h2 className="site-display text-3xl font-black sm:text-4xl lg:text-5xl" style={{ color: "var(--color-text-on-dark)" }}>
              Quer uma página e um portfólio com presença premium para sua marca?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 sm:text-lg" style={{ color: "var(--color-text-on-dark-muted)" }}>
              A Ohanote combina direção visual, captação e apresentação para transformar vídeo em valor percebido.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate("/#orcamento")}
                className="btn-primary inline-flex cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-md)] px-6 py-4 text-base font-extrabold sm:w-auto"
              >
                Solicitar orçamento <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => navigate("/")}
                className="inline-flex cursor-pointer items-center justify-center rounded-[var(--radius-md)] border px-6 py-4 text-base font-bold"
                style={{
                  borderColor: "var(--color-border-on-dark)",
                  color: "var(--color-text-on-dark)",
                }}
              >
                Voltar para a home
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}