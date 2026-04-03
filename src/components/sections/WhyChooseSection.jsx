import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { reasons } from "../../data/siteData";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function WhyChooseSection() {
  return (
    <section id="diferenciais" className="scroll-mt-32 border-y border-slate-200 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12">
        <SectionTitle>Por que Escolhem a Ohanote?</SectionTitle>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex gap-3 sm:gap-4"
            >
              <motion.div whileHover={{ scale: 1.08 }}>
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-lime-500 sm:h-7 sm:w-7" />
              </motion.div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900 sm:text-lg">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}