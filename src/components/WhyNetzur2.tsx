import React from 'react';
import { Layers, CreditCard, Users, Cpu, MapPin, ArrowRight, Check } from 'lucide-react';

interface WhyNetzur2Props {
  onOpenDemo?: () => void;
}

interface WhyCardData {
  id: string;
  category: string;
  title: string;
  metric: string;
  metricLabel: string;
  teaser: string;
  icon: React.ElementType;
  bgImage?: string; 
  specDetails: {
    subtitle: string;
    points: string[];
  };
  isFeature?: boolean; // Determines if it's a large image card
}

const WHY_CARDS: WhyCardData[] = [
  {
    id: '1',
    category: 'The real problem',
    title: 'The problem isn’t finding applicants.',
    metric: '500',
    metricLabel: 'Applicants',
    teaser: 'It’s finding the right ones. Every open role creates noise: resumes that look right but aren’t, candidates who know the keywords, and interviews that reveal too little too late.',
    icon: Layers,
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    specDetails: {
      subtitle: 'Move the work earlier',
      points: [
        'Find candidates who match the job — not just the keywords',
        'Assess skills before the first interview',
        'Spend recruiter time on people worth talking to',
      ],
    },
    isFeature: true,
  },
  {
    id: '2',
    category: '01 · Source',
    title: 'Bring the right candidates to the job',
    metric: '3B',
    metricLabel: 'Candidate talent pool',
    teaser: 'Create a job in seconds and invite best-matched candidates from a talent pool of 3 billion candidates worldwide.',
    icon: CreditCard,
    specDetails: {
      subtitle: 'AI sourcing',
      points: [
        'Set how many candidates you want',
        'Start filling your pipeline when the job goes live',
      ],
    },
  },
  {
    id: '3',
    category: '02 · Screen',
    title: 'Review the right resumes',
    metric: '50',
    metricLabel: 'Look qualified',
    teaser: 'Rank candidates against your job description so recruiters don’t have to open resumes one by one.',
    icon: Users,
    specDetails: {
      subtitle: 'Resume screening',
      points: [
        'Compare experience with job requirements',
        'Prioritize candidates by job match',
      ],
    },
  },
  {
    id: '4',
    category: '03 · Assess',
    title: 'See what candidates can do',
    metric: '5',
    metricLabel: 'Automated hiring steps',
    teaser: 'Send role-relevant assessments candidates complete on their own schedule, with results scored automatically.',
    icon: Cpu,
    specDetails: {
      subtitle: 'Pre-employment assessments',
      points: [
        'Test skills beyond the resume',
        'Keep results with each candidate profile',
      ],
    },
  },
  {
    id: '5',
    category: '04 · Interview',
    title: 'Let the first interview happen automatically',
    metric: '10',
    metricLabel: 'Worth interviewing',
    teaser: 'Use automated video interviews to gather structured answers before your calendar gets involved.',
    icon: MapPin,
    specDetails: {
      subtitle: 'Video interviews',
      points: [
        'Ask every candidate consistent questions',
        'Review transcripts and candidate answers',
        'Keep recruiter time for meaningful conversations',
      ],
    },
  },
];

export const WhyNetzur2: React.FC<WhyNetzur2Props> = ({ onOpenDemo }) => {
  return (
    <section id="why-netzur-2" className="bg-white py-10 sm:py-18 border-b-1 border-b-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Heading Left, Description Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight max-w-xl">
            The real problem <span className="text-slate-400">is finding the right people.</span>
          </h2>
          <p className="text-base text-slate-600 max-w-sm md:text-left">
            CandidHR.ai moves repetitive screening earlier in the hiring process — and automates it — so recruiters spend time where human judgment matters most.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-[minmax(300px,auto)]">
          {WHY_CARDS.map((card) => {
            const Icon = card.icon;
            
            // Feature Card (Dark with Image)
            if (card.isFeature) {
              return (
                <div 
                  key={card.id} 
                  className="group relative md:col-span-2 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {/* Background Image */}
                  <img 
                    src={card.bgImage} 
                    alt={card.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/20"></div>

                  {/* Content */}
                  <div className="relative h-full p-8 lg:p-10 flex flex-col justify-end min-h-[320px] z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-orange-400 tracking-widest uppercase">
                        {card.category}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-300 max-w-lg leading-relaxed mb-6">
                      {card.teaser}
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                      {card.specDetails.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-200">
                          <Check className="w-3.5 h-3.5 text-[#F13B0A] stroke-[3]" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Glassmorphism Button */}
                    <button
                      onClick={(e) => { e.stopPropagation(); onOpenDemo?.(); }}
                      className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                    >
                      Explore Demo
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            }

            // Standard Card (Clean White)
            return (
              <div 
                key={card.id} 
                className="group relative bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col cursor-pointer overflow-hidden"
              >
                {/* Giant Background Metric */}
                {/* <div className="absolute -top-4 -right-8 text-[180px] font-extrabold text-slate-50 select-none pointer-events-none z-0 leading-none">
          {card.id} 
                </div> */}

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#F13B0A] flex items-center justify-center text-slate-700 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">
                      {card.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {card.teaser}
                  </p>

                  <div className="mt-auto space-y-3 pt-6 border-t border-slate-100">
                    {card.specDetails.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-orange-50 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#F13B0A] stroke-[4]" />
                        </div>
                        <span className="leading-relaxed font-medium">{point}</span>
                      </div>
                    ))}
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