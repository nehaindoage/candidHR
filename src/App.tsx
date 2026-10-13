/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { FeaturesGrid } from './components/FeaturesGrid';
import { ProductOverview } from './components/ProductOverview';
import { StatCounter } from './components/StatCounter';
import { ProcessSteps } from './components/ProcessSteps';
import { TestimonialSection } from './components/TestimonialSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { WordPressHandoffModal } from './components/WordPressHandoffModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isWpModalOpen, setIsWpModalOpen] = useState(false);
  const [selectedPlanForDemo, setSelectedPlanForDemo] = useState<string | undefined>(undefined);

  const handleOpenDemo = (planName?: string) => {
    setSelectedPlanForDemo(planName);
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#2C324E] flex flex-col font-body selection:bg-[#EEEDFF] selection:text-[#0E1330]">
      {/* 1. Header (Sticky OnePage Nav) */}
      <Navbar 
        onOpenDemo={() => handleOpenDemo()} 
        onOpenWpSpec={() => setIsWpModalOpen(true)} 
      />

      {/* Main Flow: Exact Mindverse Home-4 OnePage Layout Architecture */}
      <main className="flex-1">
        {/* 2. Hero Section: Mindverse Home 4 Hero + Interactive Dashboard Showcase */}
        <Hero onOpenDemo={() => handleOpenDemo()} />

        {/* 3. Partner & Client Logos Band */}
        <ClientLogos />

        {/* 4. Core Features Grid (Mindverse 6-Specialty Grid - #features) */}
        <FeaturesGrid />

        {/* 5. Deep-Dive Overview (Mindverse Tabbed / Split Feature - #overview) */}
        <ProductOverview />

        {/* 6. Milestone Impact Counters Strip */}
        <StatCounter />

        {/* 7. Process Steps (Mindverse 3-Step Process - #how-it-works) */}
        <ProcessSteps />

        {/* 8. Testimonials / Reviews (Mindverse Testimonials Grid - #testimonials) */}
        <TestimonialSection />

        {/* 9. SaaS Pricing Plans (Mindverse 3-Tier Pricing - #pricing) */}
        <PricingSection onSelectPlan={(plan) => handleOpenDemo(plan)} />

        {/* 10. FAQ Accordion (Mindverse FAQ - #faq) */}
        <FaqSection />

        {/* 11. High-Impact Call to Action Banner */}
        <CtaBanner onOpenDemo={() => handleOpenDemo()} />
      </main>

      {/* 12. Global Footer */}
      <Footer />

      {/* Working Interactive Modals */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
        preselectedPlan={selectedPlanForDemo} 
      />

      <WordPressHandoffModal 
        isOpen={isWpModalOpen} 
        onClose={() => setIsWpModalOpen(false)} 
      />
    </div>
  );
}
