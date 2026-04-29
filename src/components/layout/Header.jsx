import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "/images/SVG/logo-hanote.svg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <motion.header
      initial={false}
      animate={{ y: 0 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={false}
          animate={{
            backgroundColor: isScrolled
              ? "rgba(2, 6, 23, 0.92)"
              : "rgba(2, 6, 23, 0.75)",
            borderColor: isScrolled
              ? "rgba(255,255,255,0.12)"
              : "rgba(255,255,255,0.08)",
            paddingTop: isScrolled ? 10 : 12,
            paddingBottom: isScrolled ? 10 : 12,
            boxShadow: isScrolled
              ? "0 20px 50px rgba(2, 6, 23, 0.28)"
              : "0 10px 30px rgba(2, 6, 23, 0.18)",
            scale: isScrolled ? 0.985 : 1,
          }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="rounded-2xl border px-4 text-white backdrop-blur-xl sm:px-5 lg:px-6"
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/"
              aria-label="Ir para a home da Hanote"
              className="flex items-center"
            >
              <img src={Logo} alt="Logo Hanote" className="h-6 w-auto" />
            </Link>

            <nav
              aria-label="Principal"
              className="hidden items-center gap-6 lg:flex"
            >
              <a
                href="/#servicos"
                className="text-sm font-semibold text-slate-200 transition hover:text-white"
              >
                Serviços
              </a>
              <a
                href="/#diferenciais"
                className="text-sm font-semibold text-slate-200 transition hover:text-white"
              >
                Diferenciais
              </a>
              <Link
                to="/portfolio"
                className="text-sm font-semibold text-slate-200 transition hover:text-white"
              >
                Portfólio
              </Link>
              <a
                href="/#depoimentos"
                className="text-sm font-semibold text-slate-200 transition hover:text-white"
              >
                Depoimentos
              </a>
              <a
                href="/#orcamento"
                className="rounded-xl bg-lime-500 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-lime-400"
              >
                Solicitar orçamento
              </a>
            </nav>

            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="overflow-hidden lg:hidden"
              >
                <div className="mt-4 border-t border-white/10 pt-4">
                  <nav className="flex flex-col gap-2">
                    <a
                      href="/#servicos"
                      onClick={closeMenu}
                      className="rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-white"
                    >
                      Serviços
                    </a>
                    <a
                      href="/#diferenciais"
                      onClick={closeMenu}
                      className="rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-white"
                    >
                      Diferenciais
                    </a>
                    <Link
                      to="/portfolio"
                      onClick={closeMenu}
                      className="rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-white"
                    >
                      Portfólio
                    </Link>
                    <a
                      href="/#depoimentos"
                      onClick={closeMenu}
                      className="rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-white"
                    >
                      Depoimentos
                    </a>
                    <a
                      href="/#orcamento"
                      onClick={closeMenu}
                      className="mt-2 rounded-xl bg-lime-500 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-lime-400"
                    >
                      Solicitar orçamento
                    </a>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.header>
  );
}
