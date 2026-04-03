import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../../data/siteData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (item) => {
    if (item.type === "route") {
      navigate(item.id);
      setMobileMenuOpen(false);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(item.id), 120);
      return;
    }

    scrollToSection(item.id);
  };

  return (
    <motion.header initial={false} animate={{ y: 0 }} className="fixed inset-x-0 top-0 z-50">
      <div className="site-container pt-4">
        <motion.div
          initial={false}
          animate={{
            backgroundColor: isScrolled ? "rgba(2, 6, 23, 0.92)" : "rgba(2, 6, 23, 0.75)",
            borderColor: isScrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)",
            paddingTop: isScrolled ? 10 : 12,
            paddingBottom: isScrolled ? 10 : 12,
            boxShadow: isScrolled ? "var(--shadow-header)" : "var(--shadow-card-strong)",
            scale: isScrolled ? 0.985 : 1,
          }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="rounded-[var(--radius-lg)] border px-4 text-white backdrop-blur-xl sm:px-5 lg:px-6"
        >
          <div className="flex items-center justify-between gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate("/")}
              className="flex cursor-pointer items-center gap-2 text-left"
            >
              <span className="site-display text-2xl font-black tracking-tight sm:text-3xl">
                Oha<span style={{ color: "var(--color-accent)" }}>note</span>
              </span>
              <span className="text-xl font-black sm:text-2xl" style={{ color: "var(--color-secondary)" }}>
                ›
              </span>
            </motion.button>

            <nav className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  whileHover={{ y: -2 }}
                  onClick={() => handleNavClick(item)}
                  className="cursor-pointer text-sm font-semibold transition"
                  style={{ color: "var(--color-text-on-dark-muted)" }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <div className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavClick({ id: "orcamento", type: "scroll" })}
                className="btn-primary cursor-pointer rounded-[var(--radius-sm)] px-5 py-3 text-sm font-extrabold"
              >
                Solicitar orçamento
              </motion.button>
            </div>

            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-[var(--radius-sm)] border text-white transition lg:hidden"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
              }}
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                <div className="mt-4 border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.label}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -12 }}
                        transition={{ delay: index * 0.04 }}
                        onClick={() => handleNavClick(item)}
                        className="cursor-pointer rounded-[var(--radius-sm)] px-3 py-3 text-left text-sm font-semibold transition"
                        style={{ color: "var(--color-text-on-dark-muted)" }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
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