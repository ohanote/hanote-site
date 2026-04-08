import { useEffect, useRef, useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { testimonials } from "../../data/siteData";
import TestimonialCard from "../ui/TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  const scrollToIndex = (index) => {
    if (!trackRef.current) return;

    const slides = trackRef.current.querySelectorAll("[data-slide]");
    const target = slides[index];
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setActiveIndex(index);
  };

  const handlePrev = () => {
    const nextIndex =
      activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    scrollToIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex =
      activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    scrollToIndex(nextIndex);
  };

  const handleScroll = () => {
    if (!trackRef.current || !isMobile) return;

    const container = trackRef.current;
    const slides = Array.from(container.querySelectorAll("[data-slide]"));

    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const distance = Math.abs(
        slide.offsetLeft - container.scrollLeft
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  return (
    <section
      id="depoimentos"
      className="scroll-mt-32 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12"
    >
      <SectionTitle>Depoimentos de Clientes</SectionTitle>

      {isMobile ? (
        <div className="mt-8">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                data-slide
                className="w-[88%] shrink-0 snap-center"
              >
                <TestimonialCard
                  testimonial={item.testimonial}
                  name={item.name}
                />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-6 bg-lime-500"
                      : "w-2.5 bg-slate-300"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              testimonial={item.testimonial}
              name={item.name}
            />
          ))}
        </div>
      )}
    </section>
  );
}