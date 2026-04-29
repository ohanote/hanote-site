import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { staggerContainer } from "../../utils/animations";
import { portfolioCases } from "../../data/siteData";
import PortfolioCaseCard from "../portfolio/PortfolioCaseCard";
import PortfolioVideoModal from "../portfolio/PortfolioVideoModal";

export default function PortfolioSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpen = (item) => setSelectedVideo(item);
  const handleClose = () => setSelectedVideo(null);

  return (
    <>
      <section
        id="trabalhos"
        className="scroll-mt-32 relative overflow-hidden bg-slate-900 py-12 sm:py-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_bottom,rgba(234,179,8,0.14),transparent_25%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <SectionTitle light>Veja nossos trabalhos</SectionTitle>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            Conheça produções da Hanote para marcas, empresas, eventos e
            campanhas. Nosso portfólio reúne vídeos institucionais, reels,
            coberturas e peças audiovisuais pensadas para fortalecer
            posicionamento e percepção de valor.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {portfolioCases.slice(0, 3).map((item) => (
              <PortfolioCaseCard
                key={item.id}
                item={item}
                onOpen={handleOpen}
              />
            ))}
          </motion.div>

          <motion.div
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row justify-center"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/portfolio"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#009df5]/40 bg-[#0b2239] px-6 py-4 text-base font-bold text-[#f3f5f7] transition hover:border-[#009df5] hover:bg-[#0b2239]/80 hover:shadow-lg hover:shadow-[#009df5]/20 sm:w-auto sm:px-8 sm:text-lg"
              >
                <span className="text-white">Ver portfolio</span>{" "}
                <ArrowRight className="h-4 w-4 text-white" />
              </Link>
            </motion.div>
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
