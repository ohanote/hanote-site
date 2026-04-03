import LandingMinimalHeader from "../components/landing/LandingMinimalHeader";
import LandingHeroForm from "../components/landing/LandingHeroForm";
import LandingAuthorityBar from "../components/landing/LandingAuthorityBar";
import LandingBenefits from "../components/landing/LandingBenefits";
import LandingProcess from "../components/landing/LandingProcess";
import LandingTestimonials from "../components/landing/LandingTestimonials";
import LandingOffer from "../components/landing/LandingOffer";
import LandingFAQ from "../components/landing/LandingFAQ";
import Footer from "../components/layout/Footer";

export default function LandingPage() {
  return (
    <div className="site-shell">
      <LandingMinimalHeader />
      <main className="min-h-screen">
        <LandingHeroForm />
        <LandingAuthorityBar />
        <LandingBenefits />
        <LandingProcess />
        <LandingTestimonials />
        <LandingOffer />
        <LandingFAQ />
      </main>
      <Footer />
    </div>
  );
}