import { CandidateProfile, JourneyStage, PricingPlan, FaqItem } from '../types';

export const HERO_CANDIDATES: CandidateProfile[] = [
  {
    id: 'c1',
    name: 'Rhea Kapoor',
    role: 'Senior Data Engineer',
    experience: '8 yrs exp',
    location: 'Bengaluru · Hybrid',
    matchScore: 96,
    highlight: 'Built real-time streaming pipeline scaling to 4M events/sec',
    verifiedSkills: ['Python & PySpark', 'Snowflake Architecture', 'AWS Ecosystem', 'Team Mentorship'],
    humanNotes: 'Demonstrated exceptional project ownership during scenario evaluation; articulates architectural tradeoffs with humility and clarity.',
    assessmentScore: 94,
    workSampleScore: 96,
    collaborationScore: 95,
    noticePeriod: '30 Days',
    compAlignment: 'Within Budget',
    avatarBg: 'bg-indigo-600 text-white'
  },
  {
    id: 'c2',
    name: 'Arjun Nair',
    role: 'Product Systems Lead',
    experience: '6 yrs exp',
    location: 'Pune · Remote',
    matchScore: 93,
    highlight: 'Reduced latency by 45% on enterprise data warehouse',
    verifiedSkills: ['Distributed Systems', 'PostgreSQL & ClickHouse', 'Data Governance', 'Cross-functional'],
    humanNotes: 'Excels at collaborative problem solving. Clear communicator with deep curiosity for end-user workflow impact.',
    assessmentScore: 91,
    workSampleScore: 93,
    collaborationScore: 92,
    noticePeriod: '15 Days',
    compAlignment: 'Within Budget',
    avatarBg: 'bg-emerald-600 text-white'
  },
  {
    id: 'c3',
    name: 'Meera Iyer',
    role: 'Infrastructure Architect',
    experience: '7 yrs exp',
    location: 'Bengaluru · Onsite',
    matchScore: 90,
    highlight: 'Led cloud migration across 18 distributed microservices',
    verifiedSkills: ['Cloud Security', 'Kubernetes', 'Terraform & CI/CD', 'Resilience Design'],
    humanNotes: 'Values psychological safety and transparent code reviews. Thoughtful listener who asks penetrating questions.',
    assessmentScore: 89,
    workSampleScore: 90,
    collaborationScore: 91,
    noticePeriod: '30 Days',
    compAlignment: 'Within Budget',
    avatarBg: 'bg-violet-600 text-white'
  }
];

export const TRUST_COMPANIES = [
  { name: 'Lumiverse Solutions', category: 'Technology' },
  { name: 'Forech India', category: 'Industrial Systems' },
  { name: 'Panchsheel Filters', category: 'Precision Manufacturing' },
  { name: 'Padmini Industries', category: 'Automotive & Precision' },
  { name: 'Wings Biotech', category: 'Healthcare Tech' },
  { name: 'QubeHealth Pay', category: 'Fintech & Insurance' },
  { name: 'Vikas Group', category: 'Enterprise Services' },
  { name: 'KBP Engineering', category: 'Infrastructure' }
];

export interface FeatureItem {
  iconName: string;
  tag: string;
  title: string;
  description: string;
}

export const MINDVERSE_FEATURES: FeatureItem[] = [
  {
    iconName: 'file-text',
    tag: 'Sourcing',
    title: 'Warm Sourcing & Clean JDs',
    description: 'AI drafts clear, jargon-free role outcomes that attract authentic talent, inviting qualified candidates automatically.'
  },
  {
    iconName: 'sparkles',
    tag: 'Screening',
    title: 'Explainable Match Scoring',
    description: 'No black-box mystery. Every candidate match reveals transparent criteria, verified achievements, and key discussion areas.'
  },
  {
    iconName: 'code',
    tag: 'Work Samples',
    title: 'Objective Scenario & Skill Tests',
    description: 'Practical domain challenges and hands-on rubrics that evaluate real-world problem solving without camera or layout bias.'
  },
  {
    iconName: 'badge-check',
    tag: 'Readiness',
    title: 'Verified Candidate Dossiers',
    description: 'Instant visibility into notice periods, comp expectations, verified skills, and past impact rubrics.'
  },
  {
    iconName: 'users',
    tag: 'Shortlist',
    title: 'Collaborative Manager Shortlists',
    description: 'Recruiters and hiring managers share a prioritized talent shortlist with instant one-click final round scheduling.'
  },
  {
    iconName: 'layers',
    tag: 'Integrations',
    title: 'Full ATS & WhatsApp Sync',
    description: 'Integrates natively with Greenhouse, Lever, Workday, Ashby, and candidate messaging via WhatsApp.'
  }
];

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  avatarText: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "360 applicants, 25 qualified candidates, all in just 3 hours. Our engineering leads arrived at the final interviews with total confidence on who actually fit our engineering culture.",
    author: "Amar Thakare",
    role: "CEO & MD",
    company: "Lumiverse Solutions",
    metric: "360 to 25 finalists in 3 hrs",
    avatarText: "AT"
  },
  {
    quote: "Candidates consistently tell us how much they appreciate the structured work-sample format. No awkward excuses to slip away from work for 15-minute phone screens, and zero ghosting.",
    author: "Priya Sharma",
    role: "Head of Talent Acquisition",
    company: "Forech India",
    metric: "4.9/5 candidate feedback rating",
    avatarText: "PS"
  },
  {
    quote: "We reclaimed over 16 hours of recruiter time per role every single week. Instead of sifting through keyword-stuffed resumes, we only talk to interview-ready talent.",
    author: "Rohit Verma",
    role: "VP Engineering",
    company: "QubeHealth Pay",
    metric: "16+ hours saved per role",
    avatarText: "RV"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Ideal for boutique teams hiring 1-2 key roles per month.',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      'Up to 2 active job openings',
      'AI Job Description writer',
      'Resume screening & match explanation',
      'Work-sample & scenario evaluation (up to 20 candidates)',
      'Community & email support',
      'Gutenberg & ATS webhook ready'
    ],
    ctaLabel: 'Start Free Forever'
  },
  {
    id: 'growth',
    name: 'Growth Team',
    tagline: 'For fast-scaling companies focused on culture & high quality.',
    monthlyPrice: 199,
    annualPrice: 159,
    isPopular: true,
    features: [
      'Up to 10 active job openings',
      'Curated talent pool invitations (500/mo)',
      'Full scenario assessment analysis & rubric scoring',
      'Technical & domain skill assessments',
      'Collaborative team reviews & shortlists',
      'WhatsApp candidate messaging integration',
      'Standard ATS & Slack sync'
    ],
    ctaLabel: 'Start 14-Day Free Trial'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For high-volume hiring organizations & progressive staffing agencies.',
    monthlyPrice: 499,
    annualPrice: 399,
    features: [
      'Unlimited active job openings',
      'Global 3B candidate pool access with Deep Search',
      'Full custom branding & white-label candidate portal',
      'Advanced coding sandbox & domain rubrics',
      'Custom role-based permissions & audit trails',
      'SOC 2 Type II compliance & dedicated account manager',
      'Enterprise ATS integrations (Workday, Greenhouse, Lever)'
    ],
    ctaLabel: 'Talk to Talent Architect'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How is Candid HR different from a traditional AI ATS?',
    answer: 'Traditional applicant tracking systems simply store resumes and rely on crude keyword filters that reject great non-traditional candidates. Candid HR does the thoughtful qualitative evaluation upfront: reading achievements in context, offering respectful work-sample scenario assessments, and providing clear explanations of why someone fits your team culture.',
    category: 'technology'
  },
  {
    question: 'Does Candid HR replace human recruiters or hiring managers?',
    answer: 'Never. Candid HR eliminates repetitive screening fatigue—like reading 500 identical PDF resumes or conducting 30 repetitive phone screens just to check basic prerequisites. By delivering a curated, explainable shortlist of the top 10 candidates, recruiters spend their time where human empathy and connection matter most.',
    category: 'recruiters'
  },
  {
    question: 'How do candidates feel about the work-sample assessment approach?',
    answer: 'Candidates consistently prefer our approach because it respects their time and capabilities. Instead of taking unpaid time off for a 20-minute preliminary phone screen during work hours or suffering through webcam recordings, they solve realistic domain dilemmas on their own schedule and receive prompt feedback.',
    category: 'candidates'
  },
  {
    question: 'How does Candid HR evaluate cultural contribution without bias?',
    answer: 'Rather than subjective "culture fit" bias, we focus on cultural contribution and communication clarity. We evaluate how candidates unpack past challenges, structure their thought process, articulate team collaboration, and explain tradeoffs.',
    category: 'recruiters'
  },
  {
    question: 'Can this be built directly using the Mindverse WordPress Theme?',
    answer: 'Yes! Every section of this page matches the CaseThemes Mindverse Home-4 OnePage Elementor template layout (Hero, Logo Grid, 6-Feature Specialty Grid, Tabbed Product Showcase, Stat Counter, 3-Step Process, Testimonial Cards, Pricing Table, FAQ, CTA Banner, and Footer).',
    category: 'technology'
  }
];
