import React from 'react';
import { ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface ClosingCtaProps {
  onOpenDemo: () => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-16 lg:py-20 bg-[#F6F7FB] border-t border-[#E4E6F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-[#0E1330] text-white p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-xl">
          
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9F96FF]">
              Start With Empathy
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to make hiring feel <span className="text-[#6C5CFF]">human again?</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B4B9D6] leading-relaxed">
              Bring one of your real open positions. We'll show you how Candid HR sources, screens, and shortlists candidates with complete transparency and respect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-[#3D38F5] rounded-xl hover:bg-[#2D28D6] shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span>Schedule 15-Minute Role Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#B4B9D6]">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#12B886]" />
              <span>Free forever tier available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#12B886]" />
              <span>Zero candidate ghosting</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#6C5CFF]" />
              <span>SOC 2 Type II Certified</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
