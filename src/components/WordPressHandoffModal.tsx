import React, { useState } from 'react';
import { X, Check, Copy, Code, Layers, Palette, Sparkles, ExternalLink } from 'lucide-react';

interface WpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WordPressHandoffModal: React.FC<WpModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const wpSpecs = `/* CaseThemes Mindverse Home-4 Onepage Theme Mapping */

Target Demo: https://mindverse.casethemes.net/home-4-onepage
Theme Author: Case-Themes (ThemeForest Power Elite Author)
Builder: Elementor / CaseThemes Core Elements

1. Navigation (Header Builder):
   - Style: One-page navigation with smooth anchor links
   - Menu Items: #features, #overview, #how-it-works, #testimonials, #pricing, #faq
   - CTA Button: "Book a Demo"

2. Hero Section (Mindverse Home 4 Hero):
   - Widget: "CaseThemes Hero Showcase" or 2-column Elementor Section
   - Left / Top: Eyebrow badge, Outfit Bold Heading, description, dual CTA buttons
   - Right / Center: Interactive Dashboard card with candidate shortlist & audio/video player simulation

3. Client Logos (Mindverse Clients Marquee):
   - Widget: "CaseThemes Partner / Client Grid"
   - Content: 8 enterprise logos (Lumiverse, Forech, Panchsheel, QubeHealth, etc.)

4. Core Features Grid (#features):
   - Widget: "CaseThemes Feature Box Grid" (3 Columns x 2 Rows = 6 Cards)
   - Icons: Sourcing, Explainable Screening, Video Intros, Coding, Shortlists, Integrations

5. Deep-Dive Overview (#overview):
   - Widget: "CaseThemes Advanced Tabs / Split Box"
   - 3 Tabs: Multidimensional Screening | Async Video Responses | Collaborative Shortlists
   - Right: Media frame with authentic team photo & verified badge

6. Milestone Impact Band:
   - Widget: "CaseThemes Counter / Milestones" (4 Columns)
   - 68% Faster Time-to-Hire | 3.4x Completion | 94% Satisfaction | 16+ hrs Saved Weekly

7. Process Steps (#how-it-works):
   - Widget: "CaseThemes Process Steps" (3 Columns)
   - 01 Define Role -> 02 Screening & Video -> 03 Shortlist & Offers

8. Customer Testimonials (#testimonials):
   - Widget: "CaseThemes Testimonials Grid / Carousel"
   - 3 Cards with 5-star rating, quote, author, role, company, metric chip

9. Pricing Plans (#pricing):
   - Widget: "CaseThemes Pricing Table" (3 Columns with Monthly/Annual Switch)
   - Starter ($0) | Growth Team ($159/mo) | Enterprise ($399/mo)

10. FAQ Section (#faq):
    - Widget: "CaseThemes Accordion" (5 Q&As)

11. Call to Action Banner:
    - Widget: "CaseThemes Call to Action" (Dark Navy Background #0E1330)
    - Form: Quick walk-through request form (Gravity Forms / WPForms)

12. Footer (Footer Builder):
    - 4-column layout + copyright bar + social links

Theme Color Palette (Global Elementor / theme.json):
- Navy (Dark): #0E1330
- Primary (Indigo): #3D38F5
- Secondary (Purple): #6C5CFF
- Mint (Accent): #12B886
- Mint Surface: #E3F8F1
- Lavender Surface: #EEEDFF
- Light Surface: #F6F7FB
- Border Line: #E4E6F0
- Body Text: #2D334A / #4A516D

Typography:
- Heading Font: Outfit (Weights: 600, 700, 800)
- Body Font: Plus Jakarta Sans (Weights: 400, 500, 600)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(wpSpecs);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E1330]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-[#E4E6F0] shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col font-body">
        
        {/* Header */}
        <div className="p-6 border-b border-[#E4E6F0] flex items-center justify-between bg-[#F6F7FB]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#3D38F5] text-white flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-[#0E1330] font-heading">
                Mindverse CaseThemes WordPress Mapping
              </h3>
              <p className="text-xs text-[#6B7290]">
                Mapped 1-to-1 to <span className="font-semibold text-[#0E1330]">https://mindverse.casethemes.net/home-4-onepage</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#6B7290] hover:text-[#0E1330] rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-[#3B4262]">
          
          {/* Theme Target Note */}
          <div className="p-4 rounded-xl bg-[#EEEDFF] border border-[#d9d6ff] flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#3D38F5] shrink-0 mt-0.5" />
            <div className="text-[#2C324E] leading-relaxed">
              <strong className="block font-bold text-[#0E1330]">Engineered to Match Mindverse Home 4 Onepage:</strong>
              This application has been structured with the exact section sequence and layout hierarchy of the Mindverse Home-4 OnePage demo. When your developer installs the theme on WordPress with Elementor, every block can be imported and styled seamlessly.
            </div>
          </div>

          {/* Section Blueprint Checklist */}
          <div>
            <h4 className="text-xs font-bold text-[#0E1330] uppercase tracking-wider mb-2 flex items-center gap-1.5 font-heading">
              <Layers className="w-4 h-4 text-[#3D38F5]" />
              <span>Section-by-Section Theme Template Mapping</span>
            </h4>
            <div className="space-y-1.5 border border-[#E4E6F0] rounded-xl overflow-hidden divide-y divide-[#E4E6F0] text-xs">
              <div className="p-2.5 bg-slate-50 flex items-center justify-between">
                <span className="font-bold text-[#0E1330]">1. Sticky Onepage Header</span>
                <span className="text-[#6B7290]">CaseThemes Header Builder (#features, #overview, #pricing, etc.)</span>
              </div>
              <div className="p-2.5 bg-white flex items-center justify-between">
                <span className="font-bold text-[#0E1330]">2. Home 4 Hero Showcase</span>
                <span className="text-[#6B7290]">CaseThemes Hero Widget + Candidate Dashboard Mockup</span>
              </div>
              <div className="p-2.5 bg-slate-50 flex items-center justify-between">
                <span className="font-bold text-[#0E1330]">3. Client Logo Marquee</span>
                <span className="text-[#6B7290]">CaseThemes Partner / Client Grid (8 Logos)</span>
              </div>
              <div className="p-2.5 bg-white flex items-center justify-between">
                <span className="font-bold text-[#0E1330]">4. Core Specialties Grid (#features)</span>
                <span className="text-[#6B7290]">CaseThemes Feature Box Grid (6 Cards)</span>
              </div>
              <div className="p-2.5 bg-slate-50 flex items-center justify-between">
                <span className="font-bold text-[#0E1330]">5. Deep-Dive Overview (#overview)</span>
                <span className="text-[#6B7290]">CaseThemes Tabbed Split Box (3 Tabs)</span>
              </div>
              <div className="p-2.5 bg-white flex items-center justify-between">
                <span className="font-bold text-[#0E1330]">6. Milestone Impact Counters</span>
                <span className="text-[#6B7290]">CaseThemes Milestone Counter (4 Columns)</span>
              </div>
              <div className="p-2.5 bg-slate-50 flex items-center justify-between">
                <span className="font-bold text-[#0E1330]">7. 3-Step Process (#how-it-works)</span>
                <span className="text-[#6B7290]">CaseThemes Process Steps (3 Steps)</span>
              </div>
              <div className="p-2.5 bg-white flex items-center justify-between">
                <span className="font-bold text-[#0E1330]">8. Customer Testimonials (#testimonials)</span>
                <span className="text-[#6B7290]">CaseThemes Testimonial Cards (3 Reviews)</span>
              </div>
              <div className="p-2.5 bg-slate-50 flex items-center justify-between">
                <span className="font-bold text-[#0E1330]">9. SaaS Pricing Table (#pricing)</span>
                <span className="text-[#6B7290]">CaseThemes Pricing Table (3 Plans + Monthly/Annual)</span>
              </div>
              <div className="p-2.5 bg-white flex items-center justify-between">
                <span className="font-bold text-[#0E1330]">10. Accordion FAQ (#faq)</span>
                <span className="text-[#6B7290]">CaseThemes Accordion Widget (5 FAQs)</span>
              </div>
              <div className="p-2.5 bg-slate-50 flex items-center justify-between">
                <span className="font-bold text-[#0E1330]">11. Call to Action Banner</span>
                <span className="text-[#6B7290]">CaseThemes CTA Banner Widget</span>
              </div>
              <div className="p-2.5 bg-white flex items-center justify-between">
                <span className="font-bold text-[#0E1330]">12. Global Footer</span>
                <span className="text-[#6B7290]">CaseThemes Footer Template Builder</span>
              </div>
            </div>
          </div>

          {/* Copyable Developer Spec */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#0E1330] font-heading">
                Full Developer Handoff Instructions:
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F6F7FB] border border-[#E4E6F0] rounded-lg text-xs font-bold text-[#3D38F5] hover:bg-[#EEEDFF] cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#12B886]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Specs!' : 'Copy Handoff Notes'}</span>
              </button>
            </div>
            <pre className="p-3 bg-[#0E1330] text-[#B4B9D6] rounded-xl text-[11px] overflow-x-auto font-mono max-h-48 leading-relaxed">
              {wpSpecs}
            </pre>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F6F7FB] border-t border-[#E4E6F0] flex items-center justify-between">
          <a
            href="https://mindverse.casethemes.net/home-4-onepage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#3D38F5] hover:underline flex items-center gap-1"
          >
            <span>View Theme Reference</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-[#0E1330] rounded-xl hover:bg-[#3D38F5] transition-colors cursor-pointer"
          >
            Close Blueprint
          </button>
        </div>

      </div>
    </div>
  );
};
