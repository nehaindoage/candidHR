import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface FeatureDeepDives2Props {
  onOpenDemo?: () => void;
}

interface SectionStory {
  id: string;
  tabLabel: string;
  tabNumber: string;
  headlineTitle: string;
  description: string;
  ctaText: string;
  card1: {
    title: string;
    desc: string;
    image: string;
    alt: string;
    avatars?: string[];
  };
  card2: {
    title: string;
    desc: string;
    image: string;
    alt: string;
  };
  heroImage: {
    src: string;
    alt: string;
  };
}

// Using the exact same data from your original component
const STORIES: SectionStory[] = [
  {
    id: 'integrations',
    tabNumber: '01',
    tabLabel: '01 · Source',
    headlineTitle: 'Bring the right candidates to the job',
    description:
      'Create a job in seconds and tell CandidHR.ai how many candidates you want. It invites the best matches from a talent pool of 3 billion candidates worldwide and starts filling your pipeline automatically.',
    ctaText: 'Explore Sourcing',
    card1: {
      title: 'Talent pool of 3B candidates',
      desc: 'Reach a broad talent pool and invite candidates who match the role.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80',
      alt: 'Recruitment team reviewing candidate sourcing',
      avatars: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      ],
    },
    card2: {
      title: 'Automated candidate invites',
      desc: 'Start candidate outreach as soon as your job goes live.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
      alt: 'Candidate invitations and recruitment workflow',
    },
    heroImage: {
      src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
      alt: 'Recruiter using an AI hiring platform',
    },
  },
  {
    id: 'smarter-management',
    tabNumber: '02',
    tabLabel: '02 · Screen & Assess',
    headlineTitle: 'Review candidates, not every resume',
    description:
      'CandidHR.ai ranks candidates against the job description, runs role-relevant assessments, and keeps results alongside each candidate profile. See who fits the role before spending time on a first interview.',
    ctaText: 'Explore Screening',
    card1: {
      title: 'Resume screening',
      desc: 'Rank resumes against the job description and prioritize the best matches.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80',
      alt: 'Candidate resumes ranked against a job description',
      avatars: [
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
      ],
    },
    card2: {
      title: 'Pre-employment assessments',
      desc: 'Test role-relevant skills and automatically score assessment results.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
      alt: 'Candidate completing a pre-employment assessment',
    },
    heroImage: {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      alt: 'Recruiter reviewing candidate assessment results',
    },
  },
  {
    id: 'who-we-are',
    tabNumber: '03',
    tabLabel: '03 · Interview & Shortlist',
    headlineTitle: 'Know who deserves the next conversation',
    description:
      'CandidHR.ai automates structured video interviews and brings resume, job match, assessment, coding, and interview results into one ranked view. Share the shortlist with the hiring manager and focus on candidates worth interviewing.',
    ctaText: 'Explore Screening',
    card1: {
      title: 'Structured video interviews',
      desc: 'Ask consistent questions and review candidate answers before scheduling a live interview.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
      alt: 'Recruiters reviewing interview results together',
      avatars: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
      ],
    },
    card2: {
      title: 'Ranked candidate shortlist',
      desc: 'Bring key candidate signals together in one view and share it with hiring managers.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80',
      alt: 'Hiring team reviewing a ranked candidate shortlist',
    },
    heroImage: {
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
      alt: 'Candidate profile and interview review',
    },
  },
];

export const FeatureDeepDives2: React.FC<FeatureDeepDives2Props> = ({ onOpenDemo }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const activeStory = STORIES[activeStoryIndex];

  return (
    <section id="features-2" className="bg-white py-10 sm:py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 max-w-2xl leading-tight">
            From job created to <span className="text-slate-400">interview-ready.</span>
          </h2>
          <p className="text-base text-slate-600 max-w-sm md:text-right">
            Five steps from “Job created” to “Worth interviewing” — run automatically, reviewed by your team.
          </p>
        </div>

        {/* Main Cinematic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Tabs & Typography */}
          <div className="lg:col-span-5 relative">
            
            {/* Giant Background Index Number */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={`bg-${activeStory.id}`}
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.2, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute -top-24 -left-4 text-[180px] sm:text-[220px] font-extrabold text-slate-50 select-none pointer-events-none z-0 leading-none"
              >
                {activeStory.tabNumber}
              </motion.div>
            </AnimatePresence>

            {/* Tab List */}
            <div className="relative z-10 space-y-2 mb-8 border-l border-slate-200">
              {STORIES.map((story, idx) => {
                const isActive = activeStoryIndex === idx;
                return (
                  <button
                    key={story.id}
                    onMouseEnter={() => setActiveStoryIndex(idx)}
                    onClick={() => setActiveStoryIndex(idx)}
                    className={`relative w-full text-left pl-6 py-4 transition-colors duration-300 group ${
                      isActive ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {/* Active Indicator Line */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabLine"
                        className="absolute left-0 top-0 h-full w-1 bg-[#F13B0A] rounded-r-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-sm ${isActive ? 'text-[#F13B0A]' : 'text-slate-300'}`}>
                        {story.tabNumber}
                      </span>
                      <span className="text-xl font-bold tracking-tight">
                        {story.tabLabel}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Animated Text Content */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 bg-white/80 backdrop-blur-sm p-2 rounded-2xl"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 leading-snug">
                  {activeStory.headlineTitle}
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal mb-6">
                  {activeStory.description}
                </p>

                {/* CTA Button */}
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <span>{activeStory.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Right Column: Cinematic Visual & Floating Glass Cards */}
          <div className="lg:col-span-7 relative h-[500px] sm:h-[600px] lg:h-[680px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/60 bg-slate-900">
            
            {/* Crossfading Hero Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStory.heroImage.src}
                src={activeStory.heroImage.src}
                alt={activeStory.heroImage.alt}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent pointer-events-none"></div>

            {/* Floating UI Elements at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 flex flex-col sm:flex-row items-end gap-4 pointer-events-none">
              
              {/* Floating Card 1 */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`c1-${activeStory.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="pointer-events-auto bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-start gap-3 max-w-xs shadow-lg"
                >
                  <img 
                    src={activeStory.card1.image} 
                    alt={activeStory.card1.alt} 
                    className="w-14 h-14 rounded-xl object-cover border border-white/20 shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-white mb-1">
                      {activeStory.card1.title}
                      <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed line-clamp-2">
                      {activeStory.card1.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Card 2 (Smaller) */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`c2-${activeStory.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="pointer-events-auto bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl flex items-center gap-3 shadow-lg hidden md:flex"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-orange-400 border border-white/10">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <div className="pr-2">
                    <div className="text-xs font-bold text-white">{activeStory.card2.title}</div>
                    <div className="text-[10px] text-slate-300">Active Integration</div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};