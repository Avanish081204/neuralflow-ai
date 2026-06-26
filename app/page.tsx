'use client';

import { useScrollReveal } from '@/components/useScrollReveal';
import { use3DScroll } from '@/components/use3DScroll';
import Navbar          from '@/components/Navbar';
import HeroSection     from '@/components/HeroSection';
import BentoAccordion  from '@/components/BentoAccordion';
import PricingSection  from '@/components/PricingSection';
import SocialProof     from '@/components/SocialProof';
import Footer          from '@/components/Footer';

export default function Home() {
  // Global scroll observers
  useScrollReveal();
  use3DScroll();

  return (
    <main id="main-content">
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <BentoAccordion />
      <div className="section-divider" />
      <PricingSection />
      <div className="section-divider" />
      <SocialProof />
      <Footer />
    </main>
  );
}
