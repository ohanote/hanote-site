import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { fadeIn } from "../../utils/animations";

export default function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      className="bg-slate-950 px-4 py-6 text-sm text-slate-300 sm:px-6 md:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:items-center md:text-left">
        <p>© 2026 Ohanote Produtora de Vídeo - Indaiatuba/SP</p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5 md:justify-end md:gap-6">
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-lime-400" /> 19 99667-8922
          </span>
          <span className="inline-flex items-center gap-2 break-all">
            <Mail className="h-4 w-4 shrink-0 text-lime-400" /> contato@ohanote.com.br
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-lime-400" /> Indaiatuba/SP
          </span>
        </div>
      </div>
    </motion.footer>
  );
}