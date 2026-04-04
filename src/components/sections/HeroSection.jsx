import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden pt-28 sm:pt-32"
      aria-labelledby="hero-title"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40 lg:to-transparent" />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[6%] top-32 hidden h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl md:block"
      />
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-[10%] hidden h-40 w-40 rounded-full bg-amber-400/10 blur-3xl md:block"
      />

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-4 py-10 sm:min-h-[700px] sm:px-6 sm:py-12 md:px-8 lg:min-h-[760px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-12 lg:py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 shadow-lg backdrop-blur md:text-sm"
          >
            Audiovisual para marcas, negócios e projetos
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={fadeUp}
            className="max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Filmes que elevam a <span className="text-amber-400">percepção</span>
            <br className="hidden sm:block" />
            da sua <span className="text-amber-400">marca</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base text-slate-200 sm:mt-6 sm:text-lg md:text-xl lg:text-2xl"
          >
            A Hanote transforma estratégia, estética e narrativa em vídeos que geram valor real para o seu negócio.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#orcamento"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-lime-500 px-6 py-4 text-base font-extrabold text-white shadow-2xl shadow-lime-950/30 transition hover:bg-lime-400 sm:w-auto sm:px-8 sm:text-lg"
            >
              Solicitar orçamento <ArrowRight className="h-4 w-4" />
            </motion.a>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/portfolio"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur-md transition hover:bg-white/15 sm:w-auto sm:px-8 sm:text-lg"
              >
                Ver portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base italic text-slate-200 sm:mt-8 sm:text-lg"
          >
            Impulsione seu negócio com vídeos profissionais
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-[1.75rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-md sm:p-4"
          >
            <img
              src="/images/hero.jpg"
              alt="Equipe gravando vídeo profissional"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-64 w-full rounded-[1.35rem] object-cover sm:h-80 md:h-[360px] lg:h-[420px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}