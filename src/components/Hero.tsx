import React, { useState } from 'react';
import { HERO_CANDIDATES } from '../data/content';
import { CandidateProfile } from '../types';
import { 
  ArrowRight, 
  Check, 
  Calendar, 
  ShieldCheck, 
  Users, 
  MessageSquareQuote,
  Star
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const [activeCand, setActiveCand] = useState<CandidateProfile>(HERO_CANDIDATES[0]);
  const [scheduled, setScheduled] = useState(false);

  const handleSchedule = () => {
    setScheduled(true);
    setTimeout(() => setScheduled(false), 2500);
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#F6F7FB]/70 via-white to-white overflow-hidden">
      {/* Mindverse Soft Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#EEEDFF]/80 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mindverse Home 4 Centered Hero Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFF] border border-[#d9d6ff] text-[#3D38F5] text-xs font-semibold font-body">
            <span className="w-2 h-2 rounded-full bg-[#12B886]" />
            <span>Human-Centric AI Talent Platform</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E1330] tracking-tight leading-[1.12] font-heading">
            Hiring built for human potential, <br className="hidden sm:inline" />
            <span className="text-[#3D38F5]">not keyword clutter.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-[#4A516D] max-w-2xl mx-auto leading-relaxed font-body">
            Candid HR replaces robotic resume bots with authentic human understanding. Source, screen, and interview candidates with clarity and respect—so your team talks to people who truly belong.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-[#3D38F5] rounded-xl hover:bg-[#2D28D6] shadow-md shadow-[#3D38F5]/25 hover:shadow-lg hover:shadow-[#3D38F5]/35 hover:-translate-y-0.5 transition-all font-body cursor-pointer"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#overview"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0E1330] bg-white border border-[#E4E6F0] rounded-xl hover:bg-[#F6F7FB] hover:border-[#c9c6ff] transition-all font-body cursor-pointer shadow-2xs"
            >
              <span>Explore Live Workflow</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#3D38F5]" />
            </a>
          </div>

          {/* Trust strip */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#6B7290] font-body">
            <div className="flex items-center gap-1.5 font-semibold text-[#0E1330]">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>4.9/5 Rating</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5 font-semibold text-[#0E1330]">
              <Users className="w-4 h-4 text-[#3D38F5]" />
              <span>250+ Talent Teams</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5 font-semibold text-[#0E1330]">
              <ShieldCheck className="w-4 h-4 text-[#12B886]" />
              <span>SOC 2 Type II Certified</span>
            </div>
          </div>

        </div>

        {/* Mindverse Home 4 Interactive Dashboard Showcase Mockup */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-[#E4E6F0] bg-white shadow-xl shadow-[#0E1330]/06 overflow-hidden">
          
          {/* Mockup Top Browser Bar */}
          <div className="px-5 py-3.5 bg-[#F6F7FB] border-b border-[#E4E6F0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E4E6F0]" />
              <span className="w-3 h-3 rounded-full bg-[#E4E6F0]" />
              <span className="w-3 h-3 rounded-full bg-[#E4E6F0]" />
              <span className="ml-2 text-xs font-semibold text-[#6B7290] hidden sm:inline">
                candidhr.ai / dashboard / active-roles
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-[#0A7F5D] bg-[#E3F8F1] px-2.5 py-0.5 rounded-full">
                Live Shortlist · 10 Interview-Ready
              </span>
            </div>
          </div>

          {/* Mockup Dashboard Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Top Pipeline Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E4E6F0]">
              <div>
                <h3 className="text-base font-bold text-[#0E1330] font-heading">
                  Role: Senior Data Engineering Lead
                </h3>
                <p className="text-xs text-[#6B7290] font-body mt-0.5">
                  500 Screened · 50 Qualified · 3 Finalist Profiles Previewed Below
                </p>
              </div>

              {/* Candidate selector pills */}
              <div className="flex items-center gap-1.5 bg-[#F6F7FB] p-1 rounded-xl border border-[#E4E6F0]">
                {HERO_CANDIDATES.map((cand) => (
                  <button
                    key={cand.id}
                    onClick={() => setActiveCand(cand)}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer font-body ${
                      activeCand.id === cand.id
                        ? 'bg-white text-[#0E1330] shadow-xs font-bold'
                        : 'text-[#6B7290] hover:text-[#0E1330]'
                    }`}
                  >
                    {cand.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Candidate Card Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Profile Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base shrink-0 shadow-xs font-heading ${activeCand.avatarBg}`}>
                      {activeCand.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0E1330] font-heading">
                        {activeCand.name}
                      </h4>
                      <p className="text-xs text-[#6B7290] font-body">
                        {activeCand.role} · {activeCand.experience} · {activeCand.location}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-2xl font-black text-[#3D38F5] leading-none tabular-nums font-heading">
                      {activeCand.matchScore}%
                    </span>
                    <span className="text-[10px] text-[#6B7290] block font-medium font-body">
                      Candid Match
                    </span>
                  </div>
                </div>

                {/* Trajectory */}
                <div className="p-3.5 rounded-xl bg-[#F6F7FB] border border-[#E4E6F0] space-y-1">
                  <span className="text-[11px] font-bold text-[#0E1330] uppercase tracking-wider block font-body">
                    Demonstrated Project Impact:
                  </span>
                  <p className="text-xs text-[#2C324E] font-body leading-relaxed">
                    "{activeCand.highlight}"
                  </p>
                </div>

                {/* Human qualitative evaluator note */}
                <div className="p-3.5 rounded-xl bg-[#EEEDFF]/40 border border-[#d9d6ff] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E1330] font-body">
                    <MessageSquareQuote className="w-3.5 h-3.5 text-[#3D38F5]" />
                    <span>Qualitative Evaluator & Peer Reference Note</span>
                  </div>
                  <p className="text-xs text-[#4A516D] font-body leading-relaxed italic">
                    "{activeCand.humanNotes}"
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {activeCand.verifiedSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-[#F6F7FB] text-[#2C324E] border border-[#E4E6F0] font-body"
                    >
                      <Check className="w-3 h-3 text-[#12B886]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action & Verified Dossier Panel (Replacing Video) */}
              <div className="lg:col-span-4 bg-[#F6F7FB] p-5 rounded-2xl border border-[#E4E6F0] space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0E1330] block font-heading">
                      Verified Candidate Dossier
                    </span>
                    <span className="text-[10px] font-bold text-[#0A7F5D] bg-[#E3F8F1] px-2 py-0.5 rounded">
                      Audited
                    </span>
                  </div>

                  {/* Competency Metric Bars */}
                  <div className="space-y-2 bg-white p-3 rounded-xl border border-[#E4E6F0] text-xs font-body">
                    <div>
                      <div className="flex justify-between text-[11px] font-medium text-[#2C324E] mb-1">
                        <span>Work-Sample & Case Study</span>
                        <span className="font-bold text-[#3D38F5]">{activeCand.workSampleScore || 95}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#F6F7FB] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#3D38F5] rounded-full" 
                          style={{ width: `${activeCand.workSampleScore || 95}%` }} 
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] font-medium text-[#2C324E] mb-1">
                        <span>Team Collaboration Rubric</span>
                        <span className="font-bold text-[#12B886]">{activeCand.collaborationScore || 94}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#F6F7FB] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#12B886] rounded-full" 
                          style={{ width: `${activeCand.collaborationScore || 94}%` }} 
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] font-medium text-[#2C324E] mb-1">
                        <span>System Architecture Depth</span>
                        <span className="font-bold text-[#6C5CFF]">{activeCand.assessmentScore || 92}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#F6F7FB] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#6C5CFF] rounded-full" 
                          style={{ width: `${activeCand.assessmentScore || 92}%` }} 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hiring Readiness Metadata */}
                  <div className="p-2.5 bg-white rounded-xl border border-[#E4E6F0] space-y-1 text-[11px] text-[#4A516D] font-body">
                    <div className="flex justify-between">
                      <span>Notice Period:</span>
                      <strong className="text-[#0E1330]">{activeCand.noticePeriod || '30 Days'}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Compensation:</span>
                      <strong className="text-[#0A7F5D]">{activeCand.compAlignment || 'Within Budget Band'}</strong>
                    </div>
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="space-y-2 pt-2 border-t border-[#E4E6F0]">
                  <button
                    onClick={handleSchedule}
                    disabled={scheduled}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer font-body ${
                      scheduled
                        ? 'bg-[#12B886] text-white'
                        : 'bg-[#0E1330] hover:bg-[#3D38F5] text-white shadow-xs'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{scheduled ? 'Fast-Track Invite Sent!' : 'Fast-Track to Final Round'}</span>
                  </button>
                  <p className="text-[10px] text-center text-[#6B7290] font-body">
                    Includes verified work sample & reference signals
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
