import React from 'react';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0E1330] text-[#B4B9D6] border-t border-white/10 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3D38F5] to-[#6C5CFF] flex items-center justify-center text-white font-extrabold text-base">
                C
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                candid<span className="text-[#6C5CFF]">HR</span>
              </span>
            </div>

            <p className="text-xs text-[#B4B9D6] leading-relaxed max-w-sm">
              Human-centric recruitment platform. Source, screen, and interview candidates with authentic clarity—so recruiters spend time with people worth talking to.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4ade9e]" />
              <span>SOC 2 Type II Certified · GDPR Compliant</span>
            </div>

            <div className="space-y-1 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#6C5CFF]" />
                <a href="mailto:info@candidhr.ai" className="hover:text-white transition-colors">
                  info@candidhr
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#6C5CFF]" />
                <span>Pune · Houston · Salt Lake City</span>
              </div>
            </div>
          </div>

          {/* Col 1: Platform */}
          <div className="space-y-2.5 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Platform
            </h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Human-First Sourcing</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Asynchronous Video</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Talent Shortlists</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & Plans</a></li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-2.5 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Solutions
            </h4>
            <ul className="space-y-2">
              <li><a href="#experience" className="hover:text-white transition-colors">In-House Talent Teams</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Fast-Growing Startups</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Staffing & Agencies</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Campus Hiring</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-2.5 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Company
            </h4>
            <ul className="space-y-2">
              <li><a href="#experience" className="hover:text-white transition-colors">Why Candid HR</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© 2026 Candid HR · Diacto Labs Private Limited</p>
          <div className="flex items-center gap-4">
            <span><a href="#" className="hover:text-white transition-colors">Security & Privacy</a></span>
             <span>·</span>
            <span><a href="#" className="hover:text-white transition-colors">Terms of Service</a></span>
          </div>
        </div>

      </div>
    </footer>
  );
};
