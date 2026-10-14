import React, { useState } from "react";
import { Check, Sparkles, Users, CheckCircle2 } from "lucide-react";
import candidateExperience from "../assets/images/candid_candidate_experience_1791869817951.jpg";
import workplaceCulture from "../assets/images/candid_workplace_culture_1791869797749.jpg";

export const ProductOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "screening" | "video" | "shortlist"
  >("screening");

  return (
    <section
      id="overview"
      className="py-20 lg:py-24 bg-[#F6F7FB]/70 border-t border-[#E4E6F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D38F5] font-body">
            Deep-Dive Overview
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E1330] tracking-tight font-heading">
            Designed for authentic{" "}
            <span className="text-[#3D38F5]">workplace culture</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4A516D] font-body">
            Explore how Candid HR preserves human context and connection
            throughout every step.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab("screening")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer font-body ${
              activeTab === "screening"
                ? "bg-[#0E1330] text-white shadow-sm"
                : "bg-white text-[#6B7290] hover:text-[#0E1330] border border-[#E4E6F0]"
            }`}
          >
            01. Multidimensional Screening
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer font-body ${
              activeTab === "video"
                ? "bg-[#0E1330] text-white shadow-sm"
                : "bg-white text-[#6B7290] hover:text-[#0E1330] border border-[#E4E6F0]"
            }`}
          >
            02. Work-Sample & Case Rubrics
          </button>
          <button
            onClick={() => setActiveTab("shortlist")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer font-body ${
              activeTab === "shortlist"
                ? "bg-[#0E1330] text-white shadow-sm"
                : "bg-white text-[#6B7290] hover:text-[#0E1330] border border-[#E4E6F0]"
            }`}
          >
            03. Collaborative Shortlists
          </button>
        </div>

        {/* Split Content Box */}
        <div className="bg-white rounded-3xl border border-[#E4E6F0] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Description */}
            <div className="lg:col-span-5 space-y-5">
              {activeTab === "screening" && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEEDFF] text-[#3D38F5] text-xs font-bold font-body">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Transparent Qualitative Review</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0E1330] leading-snug font-heading">
                    No black-box rejections. Every score explains its reasons.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A516D] leading-relaxed font-body">
                    Instead of arbitrary percentage pills or keyword counters,
                    Candid HR analyzes project trajectory, engineering depth,
                    and problem-solving history.
                  </p>
                  <ul className="space-y-2.5 pt-1 font-body text-xs sm:text-sm text-[#2C324E]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>Evaluates real impact, not resume buzzwords</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>Surfaces discussion areas for interviewers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>Eliminates formatting and layout bias</span>
                    </li>
                  </ul>
                </>
              )}

              {activeTab === "video" && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3F8F1] text-[#0A7F5D] text-xs font-bold font-body">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Objective Work-Sample Assessments</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0E1330] leading-snug font-heading">
                    Evaluate real problem-solving, not camera performance.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A516D] leading-relaxed font-body">
                    Practical scenario challenges and real-world domain rubrics
                    give candidates the space to showcase how they actually
                    solve technical dilemmas and communicate tradeoffs.
                  </p>
                  <ul className="space-y-2.5 pt-1 font-body text-xs sm:text-sm text-[#2C324E]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>
                        Hands-on scenario challenges modeled on daily work
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>
                        Evaluates logic, edge cases, and reasoning depth
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>
                        Completely eliminates webcam shyness and superficial
                        bias
                      </span>
                    </li>
                  </ul>
                </>
              )}

              {activeTab === "shortlist" && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEEDFF] text-[#3D38F5] text-xs font-bold font-body">
                    <Users className="w-3.5 h-3.5" />
                    <span>Collaborative Hiring Handoff</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0E1330] leading-snug font-heading">
                    Hiring managers review the top 10 candidates with complete
                    context.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A516D] leading-relaxed font-body">
                    A unified talent card brings together verified coding
                    rubrics, communication observations, and project histories
                    in one shareable dashboard.
                  </p>
                  <ul className="space-y-2.5 pt-1 font-body text-xs sm:text-sm text-[#2C324E]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>One-click team round scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>Zero candidate ghosting at every milestone</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>
                        Recruiters spend 80% time connecting with finalists
                      </span>
                    </li>
                  </ul>
                </>
              )}
            </div>

            {/* Right Media / UI View */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-[#E4E6F0] shadow-sm aspect-16/10 relative">
                {/* <img
                  src={
                    activeTab === 'video'
                      ? "/src/assets/images/candid_candidate_experience_1791869817951.jpg"
                      : "/src/assets/images/candid_workplace_culture_1791869797749.jpg"
                  }
                  alt="Candid HR collaborative workplace preview"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                /> */}

                <img
                  src={
                    activeTab === "video"
                      ? candidateExperience
                      : workplaceCulture
                  }
                  alt="Candid HR collaborative workplace preview"
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E4E6F0] shadow-md flex items-center justify-between text-xs font-body">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#12B886]" />
                    <span className="font-bold text-[#0E1330]">
                      Candid Verified ID #4829
                    </span>
                  </div>
                  <span className="text-[#3D38F5] font-semibold">
                    10 Interview-Ready Talent
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
