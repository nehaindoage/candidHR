import React from 'react';
import { TRUST_COMPANIES } from '../data/content';
import { Building2 } from 'lucide-react';

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-12 border-y border-[#E4E6F0] bg-[#F6F7FB]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-6">
          <p className="text-xs uppercase font-extrabold tracking-widest text-[#6B7290] font-body">
            Trusted by recruitment leaders and progressive talent teams
          </p>
        </div>

        {/* Logo Badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {TRUST_COMPANIES.map((company, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-[#6B7290] hover:text-[#3D38F5] transition-colors cursor-default group"
            >
              <div className="w-7 h-7 rounded-lg bg-white border border-[#E4E6F0] flex items-center justify-center text-[#6B7290] group-hover:text-[#3D38F5] group-hover:border-[#c9c6ff] transition-colors shadow-2xs">
                <Building2 className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-[#0E1330] group-hover:text-[#3D38F5] transition-colors tracking-tight font-heading">
                  {company.name}
                </span>
                <span className="text-[10px] text-[#6B7290] font-medium leading-none font-body">
                  {company.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
