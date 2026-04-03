import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import CTASection from "../components/shared/CTASection";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import PortfolioHero from "../components/portfolio/PortfolioHero";

export default function PortfolioPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="min-h-screen">
        <PortfolioHero />
        <PortfolioGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}