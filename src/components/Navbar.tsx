import React, { useState } from 'react';
import { Menu, X, ArrowRight, Code2 } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenWpSpec: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenWpSpec }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#E4E6F0] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Logo / Brand Wordmark */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3D38F5] via-[#6C5CFF] to-[#3D38F5] flex items-center justify-center shadow-md shadow-[#3D38F5]/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-extrabold text-xl tracking-tighter font-heading">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-[#0E1330] tracking-tight leading-none font-heading">
                candid<span className="text-[#3D38F5]">HR</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#6B7290] mt-0.5 font-body">
                Talent Intelligence
              </span>
            </div>
          </a>

          {/* Mindverse OnePage Smooth Anchor Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-[#3B4262] font-body">
            <a href="#features" className="hover:text-[#3D38F5] transition-colors whitespace-nowrap">
              Features
            </a>
            <a href="#overview" className="hover:text-[#3D38F5] transition-colors whitespace-nowrap">
              Overview
            </a>
            <a href="#how-it-works" className="hover:text-[#3D38F5] transition-colors whitespace-nowrap">
              How It Works
            </a>
            <a href="#testimonials" className="hover:text-[#3D38F5] transition-colors whitespace-nowrap">
              Testimonials
            </a>
            <a href="#pricing" className="hover:text-[#3D38F5] transition-colors whitespace-nowrap">
              Pricing
            </a>
            <a href="#faq" className="hover:text-[#3D38F5] transition-colors whitespace-nowrap">
              FAQ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* <button
              onClick={onOpenWpSpec}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#3B4262] bg-[#F6F7FB] border border-[#E4E6F0] rounded-xl hover:bg-[#EEEDFF] hover:text-[#3D38F5] hover:border-[#c9c6ff] transition-all font-body cursor-pointer"
              title="View Mindverse WordPress Elementor Mapping"
            >
              <Code2 className="w-3.5 h-3.5 text-[#3D38F5]" />
              <span className="whitespace-nowrap">Mindverse Theme Spec</span>
            </button> */}

            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#3D38F5] rounded-xl hover:bg-[#2D28D6] shadow-sm shadow-[#3D38F5]/30 hover:shadow-md hover:shadow-[#3D38F5]/40 hover:-translate-y-0.5 transition-all whitespace-nowrap font-body cursor-pointer"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0E1330] rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E4E6F0] bg-white px-5 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3 font-semibold text-[#0E1330] text-sm font-body">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 hover:text-[#3D38F5]">
              Features
            </a>
            <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 hover:text-[#3D38F5]">
              Overview
            </a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 hover:text-[#3D38F5]">
              How It Works
            </a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 hover:text-[#3D38F5]">
              Testimonials
            </a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 hover:text-[#3D38F5]">
              Pricing
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 hover:text-[#3D38F5]">
              FAQ
            </a>
          </nav>

          <div className="pt-4 border-t border-[#E4E6F0] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWpSpec();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-[#3B4262] bg-[#F6F7FB] border border-[#E4E6F0] rounded-xl font-body"
            >
              <Code2 className="w-4 h-4 text-[#3D38F5]" />
              Mindverse Theme Specs
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 text-xs font-bold text-white bg-[#3D38F5] rounded-xl text-center shadow-md shadow-[#3D38F5]/30 font-body"
            >
              Book a 15-Minute Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
