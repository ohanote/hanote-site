import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { fadeUp } from "../../utils/animations";

export default function ContactSection() {
  const config = {
    brandName: "Hanote",
    niche:
      "Profissionais liberais: clínicas, arquitetos, advogados e especialistas que precisam atrair mais clientes com autoridade",
    whatsappNumber: "5519996678922",
    whatsappLabel: "(19) 99667-8922",
    formEndpoint: "https://formspree.io/f/xzdygrnq",
    primaryCta: "Quero receber uma proposta",
  };
  return (
    <section
      id="orcamento"
      className="scroll-mt-32 relative overflow-hidden bg-slate-950 py-12 text-white sm:py-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-slate-950/85" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <SectionTitle light>Vamos tirar sua ideia do papel</SectionTitle>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mt-5 max-w-3xl text-center text-sm text-slate-300 sm:mt-6 sm:text-base md:text-lg"
        >
          Seu próximo projeto merece mais do que um vídeo bonito
        </motion.p>

        <motion.form
          action={config.formEndpoint}
          method="POST"
          target="blank"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-8 max-w-4xl sm:mt-10"
        >
          {/* Hidden fields (Formspree) */}
          <input
            type="hidden"
            name="_subject"
            value={`Novo lead do site - ${config.brandName}`}
          />
          <input type="hidden" name="origem" value="Landing Page" />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <input
              name="nome"
              type="text"
              placeholder="Nome"
              required
              className="h-14 rounded-2xl border border-white/10 bg-white px-4 text-slate-900 outline-none transition focus:-translate-y-0.5 focus:border-lime-400 focus:shadow-lg focus:shadow-lime-500/10 placeholder:text-slate-400"
            />

            <input
              name="email"
              type="email"
              placeholder="E-mail"
              required
              className="h-14 rounded-2xl border border-white/10 bg-white px-4 text-slate-900 outline-none transition focus:-translate-y-0.5 focus:border-lime-400 focus:shadow-lg focus:shadow-lime-500/10 placeholder:text-slate-400"
            />

            <input
              name="telefone"
              type="tel"
              placeholder="Telefone"
              required
              className="h-14 rounded-2xl border border-white/10 bg-white px-4 text-slate-900 outline-none transition focus:-translate-y-0.5 focus:border-lime-400 focus:shadow-lg focus:shadow-lime-500/10 placeholder:text-slate-400 md:col-span-2 lg:col-span-1"
            />
          </div>

          <textarea
            name="mensagem"
            placeholder="Mensagem"
            rows={5}
            className="mt-4 w-full rounded-2xl border border-white/10 bg-white px-4 py-4 text-slate-900 outline-none transition focus:-translate-y-0.5 focus:border-lime-400 focus:shadow-lg focus:shadow-lime-500/10 placeholder:text-slate-400"
          />

          <div className="mt-6 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-lime-500 px-8 py-4 text-lg font-extrabold text-white shadow-lg shadow-lime-950/40 transition hover:bg-lime-400 sm:min-w-56 sm:w-auto sm:text-xl"
            >
              Enviar <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
