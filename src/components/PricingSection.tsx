import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/content';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-[#F6F7FB]/60 border-t border-[#E4E6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D38F5]">
            Simple Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E1330] tracking-tight">
            Plans that grow with your <span className="text-[#3D38F5]">team</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4A516D]">
            Start free on your current opening or scale with our curated talent sourcing.
          </p>

          {/* Billing Switcher */}
          <div className="pt-2 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold">
            <span className={!isAnnual ? 'text-[#0E1330] font-bold' : 'text-[#6B7290]'}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-7 rounded-full bg-[#0E1330] p-1 transition-colors relative cursor-pointer"
              aria-label="Toggle Annual Billing"
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={isAnnual ? 'text-[#0E1330] font-bold' : 'text-[#6B7290]'}>Annual</span>
              <span className="text-[11px] font-bold text-[#0A7F5D] bg-[#E3F8F1] px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`p-6 sm:p-7 rounded-2xl bg-white border transition-all flex flex-col justify-between relative ${
                  plan.isPopular
                    ? 'border-[#3D38F5] shadow-lg shadow-[#3D38F5]/10 ring-2 ring-[#3D38F5]/20'
                    : 'border-[#E4E6F0] shadow-2xs hover:border-[#c9c6ff]'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#3D38F5] text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-[#0E1330]">{plan.name}</h3>
                    <p className="text-xs text-[#6B7290] mt-0.5">{plan.tagline}</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0E1330] tabular-nums tracking-tight">
                      ${price}
                    </span>
                    <span className="text-xs text-[#6B7290]">
                      {price === 0 ? 'free forever' : '/ mo billed ' + (isAnnual ? 'annually' : 'monthly')}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      plan.isPopular
                        ? 'bg-[#3D38F5] text-white hover:bg-[#2D28D6] shadow-sm'
                        : 'bg-[#F6F7FB] text-[#0E1330] hover:bg-[#EEEDFF] hover:text-[#3D38F5] border border-[#E4E6F0]'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="pt-4 border-t border-[#E4E6F0] space-y-2.5">
                    <span className="text-[11px] font-bold text-[#0E1330] uppercase tracking-wider block">
                      Includes:
                    </span>
                    <ul className="space-y-2 text-xs text-[#3B4262]">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#12B886] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
