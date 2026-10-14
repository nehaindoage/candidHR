<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight,Building2 } from "lucide-react";
=======
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
>>>>>>> fork/main

interface HeroProps {
  onOpenDemo: () => void;
}

<<<<<<< HEAD
const ROTATING_WORDS = [
  "Your Interview Time!",
  "A First Interview!",
  "A Place on Your Shortlist!",
  "Your Team’s Attention!",
  "The Next Conversation!",
  "A Closer Look!",
];

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Background Canvas Ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Customer names from the CandidHR.ai homepage

const brandLogos = [
  { name: 'Lumiverse Solutions', icon: 'building-2' },
  { name: 'Panchsheel Filters', icon: 'building-2' },
  { name: 'Forech India', icon: 'building-2' },
  { name: 'Padmini Industries', icon: 'building-2' },
  { name: 'Wings Biotech', icon: 'building-2' },
  { name: 'QubeHealth Pay', icon: 'building-2' },
  { name: 'Vikas Group', icon: 'building-2' },
  { name: 'Monitra Healthcare', icon: 'building-2' },
];


  // Initial delay reveal
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, 600);

    return () => clearTimeout(startTimer);
  }, []);

  // Rotating words cycle
  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setIsChanging(true);

      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsChanging(false);
      }, 480);
    }, 2800);

    return () => clearInterval(interval);
  }, [hasStarted]);

  // Interactive Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const sectionElement = document.getElementById("hero-section");
    if (sectionElement) {
      sectionElement.addEventListener("mousemove", handleMouseMove);
      sectionElement.addEventListener("mouseleave", handleMouseLeave);
    }

    const particleCount = Math.floor(Math.min(width, 1200) / 18);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      color: string;
    }> = [];

    const colors = ["#F13B0A", "#111827", "#94A3B8", "#F97316"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.2 + 1,
        baseAlpha: Math.random() * 0.35 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let waveOffset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      waveOffset += 0.008;

      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "rgba(241, 59, 10, 0.04)";

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 30) {
          const y =
            Math.sin(x * 0.003 + waveOffset + i) * 25 +
            Math.cos(x * 0.001 + waveOffset) * 15 +
            height * (0.35 + i * 0.15);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;

        let alpha = p.baseAlpha;

        if (dist < maxDist) {
          const factor = 1 - dist / maxDist;
          p.x -= (dx / dist) * factor * 1.5;
          p.y -= (dy / dist) * factor * 1.5;
          alpha = Math.min(1, p.baseAlpha + factor * 0.6);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ndx = p.x - p2.x;
          const ndy = p.y - p2.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);

          if (nDist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "#F13B0A";
            ctx.globalAlpha = (1 - nDist / 110) * 0.12 * alpha;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (sectionElement) {
        sectionElement.removeEventListener("mousemove", handleMouseMove);
        sectionElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const handleNextWord = () => {
    if (isChanging) return;
    setIsChanging(true);
    setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
      setIsChanging(false);
    }, 480);
  };

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-white min-h-[calc(100vh-4.5rem)] sm:min-h-[calc(100vh-5rem)] flex flex-col justify-between border-b border-slate-100"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80 transition-opacity duration-1000"
      />

      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-orange-100/40 via-red-50/20 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Centered Main Content */}
      {/* <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-10 sm:py-16">
        <h1 
          className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[4.65rem] text-slate-900 tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6"
          aria-label="Find the candidates who deserve your interview time."
        >
          <span className="block mb-1 sm:mb-2">Find the Candidates</span>
          <span className="block">
            <span>Who Deserve </span>
            <span 
              onClick={handleNextWord}
              title="Click to switch word"
              className="inline-block overflow-hidden align-bottom cursor-pointer select-none"
            >
              {hasStarted ? (
                <span
                  key={`${wordIndex}-${isChanging ? 'out' : 'in'}`}
                  className={`${
                    isChanging ? 'animate-word-out' : 'animate-word-in'
                  } text-[#F13B0A] hover:opacity-90 transition-opacity relative`}
                >
                  {ROTATING_WORDS[wordIndex]}
                </span>
              ) : (
                <span className="opacity-0 inline-block">
                  {ROTATING_WORDS[0]}
                </span>
              )}
            </span>
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed mb-10 font-normal backdrop-blur-[2px] bg-white/30 rounded-lg py-1 px-2">
          CandidHR.ai sources, screens, assesses and interviews candidates before your team spends time on the first round — so recruiters can focus on the people worth talking to.
        </p>

        <div>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#111827] hover:bg-black text-white text-base font-semibold tracking-wide shadow-md hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group backdrop-blur-xs"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div> */}

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-10 sm:py-16">
        <h1
          className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[4.65rem] text-slate-900 tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6"
          aria-label="Find the candidates who deserve your interview time."
        >
          <span className="block mb-1 sm:mb-2">Find the Candidates</span>
          <span className="block">
            <span>Who Deserve </span>
            <span
              onClick={handleNextWord}
              title="Click to switch word"
              className="inline-block overflow-hidden align-bottom cursor-pointer select-none"
            >
              {hasStarted ? (
                <span
                  key={`${wordIndex}-${isChanging ? "out" : "in"}`}
                  className={`${
                    isChanging ? "animate-word-out" : "animate-word-in"
                  } text-transparent bg-clip-text bg-gradient-to-br from-[#7076F2] to-[#ba83ece8] hover:opacity-90 transition-opacity relative`}
                >
                  {ROTATING_WORDS[wordIndex]}
                </span>
              ) : (
                <span className="opacity-0 inline-block">
                  {ROTATING_WORDS[0]}
                </span>
              )}
            </span>
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed mb-10 font-normal backdrop-blur-[2px] bg-white/30 rounded-lg py-1 px-2">
          CandidHR.ai sources, screens, assesses and interviews candidates
          before your team spends time on the first round — so recruiters can
          focus on the people worth talking to.
        </p>

        <div>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#111827] hover:bg-black text-white text-base font-semibold tracking-wide shadow-md hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group backdrop-blur-xs"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Customer strip */}
      <div className="relative z-10 w-full pb-8 sm:pb-12 pt-6 border-t border-slate-100/80 bg-white/60 backdrop-blur-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {/* {brandLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 text-slate-600 font-semibold text-xs sm:text-sm tracking-tight select-none"
              >
                {logo.isSvgImage ? (
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-5 sm:h-6 w-auto grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
                  />
                ) : (
                  <>
                    {logo.icon && (
                      <span className="font-mono text-xs opacity-75">
                        {logo.icon}
                      </span>
                    )}
                    <span>{logo.name}</span>
                  </>
                )}
              </div>
            ))} */}
            
{brandLogos.map((logo, idx) => (
  <div
    key={idx}
    className="flex items-center gap-1.5 text-slate-600 font-semibold text-xs sm:text-sm tracking-tight select-none"
  >
    <Building2
      className="w-3.5 h-3.5 shrink-0"
      aria-hidden="true"
    />
    <span>{logo.name}</span>
  </div>
))}

          </div>
        </div>
=======
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

>>>>>>> fork/main
      </div>
    </section>
  );
};
