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
      className="bg-slate-950 px-4 py-8 text-sm text-slate-300 sm:px-6 md:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <p className="text-base font-extrabold text-white">
            Hanote Produtora Audiovisual
          </p>
          <p className="mt-2 leading-7 text-slate-400">
            Vídeos para marcas, empresas, campanhas e eventos com direção visual,
            narrativa e produção profissional.
          </p>
        </div>

        <address className="not-italic">
          <div className="flex flex-col gap-3 text-slate-300">
            <a href="tel:+5519999999999" className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4 text-lime-400" /> (19) 99999-9999
            </a>

            <a href="mailto:contato@hanote.com.br" className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4 text-lime-400" /> contato@hanote.com.br
            </a>

            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-lime-400" /> Indaiatuba/SP
            </span>
          </div>
        </address>
      </div>

      <div className="mx-auto mt-6 max-w-7xl border-t border-white/10 pt-6 text-slate-400">
        © 2026 Hanote. Todos os direitos reservados.
      </div>
    </motion.footer>
  );
}