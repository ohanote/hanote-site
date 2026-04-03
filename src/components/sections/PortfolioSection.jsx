import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import PortfolioCard from "../ui/PortfolioCard";
import { portfolio } from "../../data/siteData";
import { staggerContainer } from "../../utils/animations";

import { useState } from "react";
import { portfolioCases } from "../../data/siteData";
import PortfolioCaseCard from "../portfolio/PortfolioCaseCard";
import PortfolioVideoModal from "../portfolio/PortfolioVideoModal";

export default function PortfolioSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpen = (item) => setSelectedVideo(item);
  const handleClose = () => setSelectedVideo(null);

  const counter = 0;

  return (
    <>
      <section
        id="trabalhos"
        className="scroll-mt-32 relative overflow-hidden bg-slate-900 py-12 sm:py-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_bottom,rgba(234,179,8,0.14),transparent_25%)]" />
        <div className="relative mb-12 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <SectionTitle light>Veja Nossos Trabalhos</SectionTitle>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 cursor-pointer"
          >
            {portfolioCases.slice(0, 3).map((item) => (
              <PortfolioCaseCard
                key={item.id}
                item={item}
                onOpen={handleOpen}
              />
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
