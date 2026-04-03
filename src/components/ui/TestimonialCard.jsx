import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function TestimonialCard({ testimonial, name }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -4 }}
      className="flex flex-col mt-8 rounded-4xl bg-linear-to-r from-white to-slate-50 p-5 shadow-xl ring-1 ring-slate-200 sm:mt-10 sm:p-6 md:p-8"
    >
      <div className="flex-col gap-8 sm:gap-6">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src="/images/testimonial.jpg"
          alt="Cliente satisfeita"
          className="h-20 w-20 rounded-full object-cover shadow-lg sm:h-24 sm:w-24"
        />

        <div>
          <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 md:text-2xl">
            <span className="text-2xl font-black text-slate-400 sm:text-3xl">
              “
            </span>
            {testimonial}
            <span className="text-2xl font-black text-slate-400 sm:text-3xl">
              ”
            </span>
          </p>
          <p className="mt-4 text-base font-bold text-slate-900 sm:text-lg">
            {name}
          </p>
        </div>
        
      </div>
    </motion.div>
  );
}
