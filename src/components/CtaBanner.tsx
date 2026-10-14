<<<<<<< HEAD
import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Headphones, Check } from 'lucide-react';
=======
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
>>>>>>> fork/main

interface CtaBannerProps {
  onOpenDemo: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenDemo }) => {
<<<<<<< HEAD
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#353F4F] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-slate-700">
          
          {/* Subtle network lines */}
          <div className="absolute inset-0 opacity-5 pointer-events-none subtle-grid" />
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-[#F13B0A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#F13B0A]" />
              Enterprise Onboarding & 48-Hour Migration
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Ready to Modernize Your ISP Billing & Operations?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Join over 420 broadband and telecom operators saving thousands of hours, accelerating cashflow, and providing seamless subscriber connectivity.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#F13B0A] text-white font-bold text-base hover:bg-[#D73307] active:scale-[0.99] transition-all cursor-pointer shadow-lg shadow-orange-950/20"
              >
                Schedule Guided Platform Demo
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-base hover:bg-slate-700 transition-all cursor-pointer"
              >
                Explore Sandbox Tenant
              </button>
            </div>

            {/* Enterprise Guarantees */}
            <div className="pt-6 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F13B0A]" />
                <span>Zero-risk trial on sandbox</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F13B0A]" />
                <span>Custom RADIUS / OLT validation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F13B0A]" />
                <span>24/7 Tier-3 telecom support</span>
              </div>
            </div>

          </div>

        </div>
=======
  const [roleTitle, setRoleTitle] = useState('Senior Product Engineer');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-[#E4E6F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-[#0E1330] text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#3D38F5]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#12B886]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#A9A6FF] font-body">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Test Candid HR On Your Real Role</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight font-heading">
                Stop spending recruiter time on candidates who <span className="text-[#6C5CFF]">aren't going to make the cut.</span>
              </h2>

              <p className="text-sm text-[#B4B9D6] leading-relaxed font-body">
                Bring your actual job description. In a 15-minute walkthrough, we'll demonstrate how Candid HR attracts, screens, and shortlists finalists with authentic cultural clarity.
              </p>

              <div className="flex items-center gap-4 text-xs text-[#B4B9D6] pt-1 font-body">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#4ade9e]" />
                  <span>SOC 2 Type II Certified</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#4ade9e]" />
                  <span>No credit card needed</span>
                </div>
              </div>
            </div>

            {/* Right Fast Booking Widget */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-5 text-[#0E1330] shadow-md font-body">
              {submitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#E3F8F1] flex items-center justify-center text-[#12B886]">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0E1330] font-heading">
                    Walkthrough Scheduled!
                  </h3>
                  <p className="text-xs text-[#4A516D] leading-relaxed">
                    We've assigned a senior talent lead to test Candid HR against <strong className="text-[#0E1330]">{roleTitle}</strong>. Confirmation sent to {email}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#3D38F5] underline hover:text-[#2D28D6]"
                  >
                    Submit another role
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="text-left">
                    <span className="text-xs font-bold text-[#0E1330] block font-heading">
                      Quick Role Walkthrough
                    </span>
                    <span className="text-[11px] text-[#6B7290]">
                      See matched candidates live in 15 minutes.
                    </span>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-[#0E1330] uppercase tracking-wider block mb-1">
                      Open Position
                    </label>
                    <input
                      type="text"
                      value={roleTitle}
                      onChange={(e) => setRoleTitle(e.target.value)}
                      placeholder="e.g. Senior Data Engineer"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#E4E6F0] focus:border-[#3D38F5] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-[#0E1330] uppercase tracking-wider block mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#E4E6F0] focus:border-[#3D38F5] focus:outline-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-[#3D38F5] hover:bg-[#2D28D6] text-white text-xs font-bold rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                  >
                    <span>Request Live Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

>>>>>>> fork/main
      </div>
    </section>
  );
};
