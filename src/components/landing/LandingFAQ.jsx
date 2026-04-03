import { landingData } from "../../data/siteData";
import AccordionItem from "../ui/AccordionItem";

export default function LandingFAQ() {
  return (
    <section className="section-light py-[var(--section-padding-y)]">
      <div className="site-container max-w-4xl">
        <div className="mb-10">
          <span className="landing-kicker">FAQ</span>
          <h2 className="site-display mt-4 text-3xl font-black sm:text-4xl lg:text-5xl" style={{ color: "var(--color-title)" }}>
            Dúvidas comuns antes de contratar.
          </h2>
        </div>

        <div className="space-y-4">
          {landingData.faqs.map((item) => (
            <AccordionItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}