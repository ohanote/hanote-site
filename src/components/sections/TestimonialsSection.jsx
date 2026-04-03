import SectionTitle from "../ui/SectionTitle";
import { testimonials } from "../../data/siteData";
import TestimonialCard from "../ui/TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="scroll-mt-32 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12"
    >
      <SectionTitle>Depoimentos de Clientes</SectionTitle>

      <div className="flex gap-8">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            testimonial={item.testimonial}
            name={item.name}
          />
        ))}
      </div>
    </section>
  );
}
