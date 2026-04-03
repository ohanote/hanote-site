import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl bg-white p-6 text-center shadow-lg shadow-slate-200/60 ring-1 ring-slate-200 sm:p-8"
    >
      <motion.div
        whileHover={{ scale: 1.06, rotate: -4 }}
        transition={{ duration: 0.25 }}
        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 sm:mb-5 sm:h-16 sm:w-16"
      >
        <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
      </motion.div>
      <h3 className="mb-2 text-lg font-extrabold text-slate-900 sm:text-xl">{title}</h3>
      <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{description}</p>
    </motion.div>
  );
}