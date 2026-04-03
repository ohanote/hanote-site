import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { fadeUp } from "../../utils/animations";

export default function PortfolioCard({ title, image }) {
  return (
    <motion.div variants={fadeUp} className="group">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-white/10"
      >
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64 lg:h-72"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/30" />
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/60 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25 sm:h-20 sm:w-20"
        >
          <Play className="ml-1 h-7 w-7 fill-current sm:h-9 sm:w-9" />
        </motion.button>
      </motion.div>
      <p className="mt-3 text-center text-lg font-bold text-white sm:mt-4 sm:text-xl">{title}</p>
    </motion.div>
  );
}