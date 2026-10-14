import React from 'react';
<<<<<<< HEAD
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ShieldCheck, 
  FileText, 
  RotateCcw, 
  Cookie
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/dx6zonqrt/image/upload/v1791892051/hrlogo_v4ojqx.png" 
                alt="Netzur Logo" 
                className="h-15 w-auto object-contain"
              />
            </div>

            <p className="text-slate-600 font-medium text-xs">
              AI recruitment software that screens, assesses and interviews candidates — so your recruiters spend their time on the people worth talking to.
            </p>

            <p className="text-slate-800 text-xs leading-relaxed max-w-sm">
               <a href="mailto:info@candidhr.ai">info@candidhr.ai</a>
               
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a href="#" target="_blank" aria-label="Facebook" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-[#F13B0A] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" aria-label="X (Twitter)" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-[#F13B0A] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-[#F13B0A] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" aria-label="Instagram" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-[#F13B0A] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#hero-section" className="hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#feature" className="hover:text-slate-900 transition-colors">Features</a></li>
              <li><a href="#solutions" className="hover:text-slate-900 transition-colors">Solution</a></li>
              <li><a href="#why-netzur" className="hover:text-slate-900 transition-colors">Why CandidHR</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Results</a></li>
              {/* <li><a href="https://netzur.com/wp-content/uploads/2025/06/NETZUR_IMBS_2.0_USER_MANUAL.pdf" target="_blank" className="hover:text-slate-900 transition-colors">Knowledge Base</a></li> */}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900">
              Solutions
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#">High-volume hiring</a></li>
              <li><a href="#">Campus hiring</a></li>
              <li><a href="#">Staffing agencies</a></li>
              <li><a href="#"></a>Startups</li>
              <li><a href="#"></a>Enterprises</li>
=======
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
>>>>>>> fork/main
              
            </ul>
          </div>

<<<<<<< HEAD
          {/* Office Locations & Contact Column */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900">
              Contact & Offices
            </h4>
            <div className="space-y-3 text-slate-600 text-[11px] leading-relaxed">
              <div>
                <strong className="text-slate-800 flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#F13B0A]" />
                  Pune
                </strong>
                <span className="block pl-5"> Houston · Salt Lake City</span>
              </div>
              {/* <div>
                <strong className="text-slate-800 flex items-center gap-1.5 font-bold">
                  <Building2 className="w-3.5 h-3.5 text-[#F13B0A]" />
                  Pune 
                </strong>
                <span className="block pl-5"> Houston · Salt Lake City</span>
              </div> */}
              {/* <div className="pt-2 space-y-1 pl-0.5">
                <a href="mailto:sales@netzur.com" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#F13B0A]" />
                  <span>sales@netzur.com</span>
                </a>
                <a href="tel:+919408053196" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#F13B0A]" />
                  <span>+91 94080 53196</span>
                </a>
                <a href="tel:+916355086848" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#F13B0A]" />
                  <span>+91 63550 86848</span>
                </a>
              </div> */}
            </div>
          </div>

        </div>

        {/* Legal & Policy Highlights */}
        <div className="pt-8 pb-8 border-t border-slate-200 flex flex-wrap gap-6 justify-between text-slate-700 text-xs">
          <a href="/privacy-policy" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
            <ShieldCheck className="w-4 h-4 text-[#F13B0A]" />
            <span>Privacy Policy</span>
          </a>
          <a href="/refund-policy" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
            <RotateCcw className="w-4 h-4 text-[#F13B0A]" />
            <span>Refund Policy</span>
          </a>
          <a href="/terms-condition" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
            <FileText className="w-4 h-4 text-[#F13B0A]" />
            <span>Terms & Conditions</span>
          </a>
          <a href="/cookies-policy" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
            <Cookie className="w-4 h-4 text-[#F13B0A]" />
            <span>Cookie Policies</span>
          </a>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
          <div>
            © 2026 Netzur Networks Pvt Ltd (Formerly Janitor Network Pvt Ltd). All Rights Reserved.
=======
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© 2026 Candid HR · Diacto Labs Private Limited</p>
          <div className="flex items-center gap-4">
            <span><a href="#" className="hover:text-white transition-colors">Security & Privacy</a></span>
             <span>·</span>
            <span><a href="#" className="hover:text-white transition-colors">Terms of Service</a></span>
>>>>>>> fork/main
          </div>
        </div>

      </div>
    </footer>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> fork/main
