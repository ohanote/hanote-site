import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioCases } from "../../data/siteData";
import PortfolioCaseCard from "./PortfolioCaseCard";
import PortfolioVideoModal from "./PortfolioVideoModal";
import { staggerContainer } from "../../utils/animations";

export default function PortfolioGrid() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpen = (item) => setSelectedVideo(item);
  const handleClose = () => setSelectedVideo(null);

  return (
    <>
      <section className="section-light py-(--section-padding-y)">
        <div className="site-container">
          <div className="mb-12 max-w-3xl">
            <span
              className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]"
              style={{
                background: "color-mix(in srgb, var(--color-primary) 14%, white)",
                color: "var(--color-primary)",
              }}
            >
              Seleção de Cases
            </span>

            <h2 className="site-display text-3xl font-black sm:text-4xl lg:text-5xl" style={{ color: "var(--color-title)" }}>
              Trabalhos pensados para gerar presença e percepção de valor.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 sm:text-lg" style={{ color: "var(--color-text-muted)" }}>
              Uma página de portfólio com estética limpa, foco visual nas capas e hierarquia semelhante a referências premium, sem perder a identidade da Ohanote.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 cursor-pointer"
          >
            {portfolioCases.map((item) => (
              <PortfolioCaseCard key={item.id} item={item} onOpen={handleOpen} />
            ))}
          </motion.div>

                    <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {portfolioCases.map((item) => (
              <PortfolioCaseCard key={item.id} item={item} onOpen={handleOpen} />
            ))}
          </motion.div>
        </div>
      </section>

      <PortfolioVideoModal
        item={selectedVideo}
        isOpen={Boolean(selectedVideo)}
        onClose={handleClose}
      />
    </>
  );
}