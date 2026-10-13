import React from 'react';
import { FileEdit, Video, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Define Role & Source Talent',
      description: 'Generate clear, jargon-free role descriptions with AI in seconds. Invite pre-matched candidates from our global network or screen incoming applicants.',
      icon: <FileEdit className="w-5 h-5 text-[#3D38F5]" />
    },
    {
      num: '02',
      title: 'Work-Sample Assessment & Screening',
      description: 'Candid HR evaluates actual project track records and invites finalists to realistic scenario assessments that evaluate genuine problem-solving depth without camera pressure.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#12B886]" />
    },
    {
      num: '03',
      title: 'Review Shortlist & Make Offers',
      description: 'Hiring managers review prioritized candidate dossiers with verified rubric scores. Schedule final rounds and hire with confidence.',
      icon: <ArrowRight className="w-5 h-5 text-[#3D38F5]" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D38F5] font-body">
            Simple Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E1330] tracking-tight font-heading">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-[#4A516D] font-body">
            From role kickoff to shortlisted talent in three straightforward steps.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#F6F7FB] border border-[#E4E6F0] hover:border-[#c9c6ff] transition-all duration-200 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E6F0] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-[#E4E6F0] group-hover:text-[#3D38F5]/30 transition-colors tabular-nums font-heading">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0E1330] font-heading">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A516D] leading-relaxed font-body">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E4E6F0] text-xs font-bold text-[#3D38F5] flex items-center gap-1 font-body">
                <span>Step {step.num} Detail</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
