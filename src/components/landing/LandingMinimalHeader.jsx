import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function LandingMinimalHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="site-container pt-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between rounded-[var(--radius-lg)] border px-4 py-3 backdrop-blur-xl"
          style={{
            background: "rgba(2, 6, 23, 0.8)",
            borderColor: "var(--color-border-on-dark)",
            color: "var(--color-text-on-dark)",
            boxShadow: "var(--shadow-header)",
          }}
        >
          <div className="flex items-center gap-2">
            <span className="site-display text-2xl font-black tracking-tight sm:text-3xl">
              Oha<span style={{ color: "var(--color-accent)" }}>note</span>
            </span>
            <span className="text-xl font-black sm:text-2xl" style={{ color: "var(--color-secondary)" }}>
              ›
            </span>
          </div>

          <a
            href="#lead-form"
            className="btn-primary inline-flex items-center gap-2 rounded-[var(--radius-sm)] px-4 py-2 text-sm font-extrabold"
          >
            <Phone className="h-4 w-4" /> Falar com a Ohanote
          </a>
        </motion.div>
      </div>
    </header>
  );
}