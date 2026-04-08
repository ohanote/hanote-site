import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function PortfolioVideoModal({ item, isOpen, onClose }) {
  const modalRef = useRef(null);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [openedAsMobile, setOpenedAsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobileViewport(media.matches);

    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setOpenedAsMobile(window.matchMedia("(max-width: 767px)").matches);
    } else {
      setOpenedAsMobile(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !item || !openedAsMobile) return;

    const enterImmersiveMode = async () => {
      const target = modalRef.current;
      if (!target) return;

      try {
        if (!document.fullscreenElement && target.requestFullscreen) {
          await target.requestFullscreen();
        }
      } catch {
        // fallback: continua como modal ocupando a tela inteira
      }

      try {
        if (item.videoType === "short" && screen.orientation?.lock) {
          await screen.orientation.lock("portrait");
        }
      } catch {
        // fallback: mantém o vídeo sem infos extras
      }
    };

    enterImmersiveMode();
  }, [openedAsMobile, isOpen, item]);

  const handleClose = async () => {
    try {
      if (screen.orientation?.unlock) {
        screen.orientation.unlock();
      }
    } catch {
      // ignore
    }

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch {
      // ignore
    }

    onClose();
  };

  if (!item) return null;

  const isShort = item.videoType === "short";
  const renderAsMobile = isOpen ? openedAsMobile : isMobileViewport;

  const mobilePlayerStyle = isShort
    ? {
        width: "min(100dvw, calc(100dvh * 9 / 16))",
        aspectRatio: "9 / 16",
      }
    : {
        width: "min(100dvw, calc(100dvh * 16 / 9))",
        aspectRatio: "16 / 9",
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-[80] bg-black ${
            renderAsMobile ? "p-0" : "flex items-center justify-center p-4 backdrop-blur-sm"
          }`}
          onClick={renderAsMobile ? undefined : handleClose}
        >
          {renderAsMobile ? (
            <div className="relative flex h-full w-full items-center justify-center bg-black">
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border text-white"
                style={{
                  borderColor: "rgba(255,255,255,0.16)",
                  background: "rgba(15,23,42,0.72)",
                }}
                aria-label="Fechar vídeo"
              >
                <X className="h-5 w-5" />
              </button>

              <div
                className="max-h-[100dvh] max-w-[100dvw] bg-black"
                style={mobilePlayerStyle}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0&playsinline=1`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[var(--radius-xl)] border"
              style={{
                background: "var(--color-surface-dark)",
                borderColor: "var(--color-border-on-dark)",
                boxShadow: "var(--shadow-card-strong)",
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border text-white"
                style={{
                  borderColor: "rgba(255,255,255,0.16)",
                  background: "rgba(15,23,42,0.72)",
                }}
                aria-label="Fechar vídeo"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0&playsinline=1`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "var(--color-text-on-dark-muted)",
                    }}
                  >
                    {item.category}
                  </span>
                  <span
                    className="text-xs font-bold uppercase tracking-[0.16em]"
                    style={{ color: "var(--color-text-on-dark-muted)" }}
                  >
                    {item.year}
                  </span>
                </div>

                <h3
                  className="site-display mt-4 text-2xl font-extrabold sm:text-3xl"
                  style={{ color: "var(--color-text-on-dark)" }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-3 max-w-3xl text-sm leading-7 sm:text-base"
                  style={{ color: "var(--color-text-on-dark-muted)" }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}