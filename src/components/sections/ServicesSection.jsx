import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/siteData";
import { staggerContainer } from "../../utils/animations";

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="scroll-mt-32 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12"
    >
      <SectionTitle>O que podemos criar com você</SectionTitle>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </motion.div>
    </section>
  );
}