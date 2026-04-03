import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { fadeUp } from "../../utils/animations";

export default function PortfolioCaseCard({ item, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(item)}
      variants={fadeUp}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="group block w-full overflow-hidden rounded-xl border text-left"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
        />

        <div
          className="absolute inset-0 opacity-90 transition duration-300 group-hover:opacity-100"
          style={{ background: "var(--portfolio-card-overlay)" }}
        />

        <div
          className="absolute left-5 top-5 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]"
          style={{
            background: "rgba(255,255,255,0.12)",
            color: "var(--color-text-on-dark)",
            backdropFilter: "blur(12px)",
          }}
        >
          {item.category}
        </div>

        <div
          className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border transition duration-300 group-hover:scale-105"
          style={{
            borderColor: "rgba(255,255,255,0.24)",
            background: "rgba(255,255,255,0.12)",
            color: "var(--color-text-on-dark)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Play className="ml-0.5 h-5 w-5 fill-current" />
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span
            className="text-xs font-bold uppercase tracking-[0.16em]"
            style={{ color: "var(--color-text-muted)" }}
          >
            {item.year}
          </span>
          <ArrowUpRight className="h-5 w-5" style={{ color: "var(--color-primary)" }} />
        </div>

        <h3
          className="site-display text-2xl font-extrabold leading-tight"
          style={{ color: "var(--color-title)" }}
        >
          {item.title}
        </h3>

        <p
          className="mt-4 text-sm leading-7 sm:text-base"
          style={{ color: "var(--color-text-muted)" }}
        >
          {item.description}
        </p>
      </div>
    </motion.button>
  );
}