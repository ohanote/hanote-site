import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function SectionTitle({ children, light = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex items-center gap-3 sm:gap-4 mb-14"
    >
      <div
        className={`h-px flex-1 ${light ? "bg-white/20" : "bg-slate-300"}`}
      />
      <h2
        className={`text-center text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {children}
      </h2>
      <div
        className={`h-px flex-1 ${light ? "bg-white/20" : "bg-slate-300"}`}
      />
    </motion.div>
  );
}
