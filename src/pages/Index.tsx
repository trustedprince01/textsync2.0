
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DemoSection from "@/components/DemoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import { handleScrollAnimations } from "@/utils/scrollAnimations";

const Index = () => {
  useEffect(() => {
    const cleanup = handleScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <DemoSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
