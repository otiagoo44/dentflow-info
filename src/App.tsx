import { useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { StickyCTA } from "@/components/StickyCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { DiagnosticSection } from "@/components/sections/DiagnosticSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { ForWhomSection } from "@/components/sections/ForWhomSection";
import { ImplementationSection } from "@/components/sections/ImplementationSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { useScrollDepthTracking } from "@/hooks/useReveal";
import { trackEvent } from "@/lib/analytics";
import { BrandIntro } from "@/components/BrandIntro";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function App() {
  const handleDepth = useCallback((depth: 50 | 90) => {
    trackEvent(depth === 50 ? "scroll_50" : "scroll_90");
  }, []);

  useScrollDepthTracking(handleDepth);

  return (
    <div className="min-h-screen bg-bg font-sans text-text antialiased">
      <BrandIntro />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <DiagnosticSection />
        <SolutionSection />
        <ProductDemo />
        <ForWhomSection />
        <ImplementationSection />
        <BenefitsSection />
        <AboutSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
