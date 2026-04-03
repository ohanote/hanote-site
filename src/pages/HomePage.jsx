import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import WhyChooseSection from "../components/sections/WhyChooseSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="site-shell">
      <Header />

      <main id="topo" className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}