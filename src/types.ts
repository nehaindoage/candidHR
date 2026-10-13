export interface CandidateProfile {
  id: string;
  name: string;
  role: string;
  experience: string;
  location: string;
  matchScore: number;
  highlight: string;
  verifiedSkills: string[];
  humanNotes: string;
  videoStatus?: string;
  assessmentScore: number;
  workSampleScore?: number;
  collaborationScore?: number;
  noticePeriod?: string;
  compAlignment?: string;
  avatarBg: string;
}

export interface JourneyStage {
  id: string;
  stepNumber: string;
  title: string;
  shortDesc: string;
  humanBenefit: string;
  features: string[];
  previewType: 'sourcing' | 'screening' | 'interview' | 'shortlist';
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  isPopular?: boolean;
  features: string[];
  ctaLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'candidates' | 'recruiters' | 'technology';
}
