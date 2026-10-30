const L = "https://dersjb4x67dvf.cloudfront.net/tenants";
export const LOGOS = [
  { n: "Ross Warner HR", s: `${L}/3K0O2uCF83GKjpMf3EdLoIvse4M/logo/ross-warner.png` },
  { n: "Vikas Group", s: `${L}/3HGXv7F104FiNp5F2WV7nIrXt6A/logo/vikas-group_logo.png` },
  { n: "Wings Biotech", s: `${L}/3JUcWa5q4fQ2CNAduH5cIJODzPa/logo/wings-bbiotech-logos.jpg` },
  { n: "Zenithive", s: `${L}/3HPB8KS0lzLJ03OcWtWxcqtDPRi/logo/zenithhive.png` },
  { n: "Lumiverse Solutions", s: `${L}/2yVjU2itZfPyZI1OC6ckiHfG8pc/logo/lumiverse-logo.webp` },
  { n: "Forech India", s: `${L}/3ILlG6KcdmY6XvOwkDMj2EFDDHf/logo/forech-logo.png` },
  { n: "Panchsheel Filters", s: `${L}/3J5kAWPAANdWzSFPyDlJgkRj36S/logo/pf-logo_73MPWM0.png` },
  { n: "QubeHealth Pay", s: `${L}/3FwvyINpCGp8cIFNorfoTCqJYC9/logo/qubehealth-logo.jpg` },
  { n: "Padmini Industries", s: `${L}/3JRy7fNdDCqbsIzFl2b0HCEiWp8/logo/padmini_1503x351.png` },
  { n: "GloLicense", s: `${L}/3JoFN6gln0xsZTL9lpeEzfMNo4z/logo/glolicense_minimal_whitespace.png` },
  { n: "Monitra Healthcare", s: `${L}/3Jo95IGd54F5MLR276CryUamJkc/logo/monitrahealt-logo.png` },
  { n: "KBP Engineering", s: `${L}/3JjPPnRW5MM7YDBIfloIur92WUy/logo/kbp_logo.png` },
  { n: "HireFusions", s: `${L}/3Kj008N1sOrrXqzVz8EZ43ZtwFI/logo/hirefusions.png` },
  { n: "Barbowws", s: `${L}/3Fu8Y8GtzQJcwPSXBVsUdypiHiQ/logo/barbowws-logo-v19.png` },
  { n: "Diacto Technologies", s: "https://dersjb4x67dvf.cloudfront.net/org_logo/diacto.ico" },
  { n: "ZenZ Innovation", s: `${L}/3CbpnESBtZNc5TNtvgGWI2KJEiv/logo/zenz-innovation.png` },
];

export const ATS = ["Greenhouse", "Lever", "Workday", "Ashby", "BambooHR", "Bullhorn", "Darwinbox", "iCIMS", "Keka", "SmartRecruiters", "Workable", "Zoho Recruit"];
export const BOARDS = ["LinkedIn", "Indeed", "Glassdoor", "Google for Jobs", "ZipRecruiter", "Naukri", "Talent.com", "Dice"];

export const RESULTS = [
  {
    company: "Diacto Technologies",
    headline: "7,000+ applicants. 80 hires. Under 7 days per hire.",
    quote: "No more screening thousands of resumes manually, countless screening calls, scheduling nightmares and candidate ghosting. Never thought hiring could be this easy.",
    who: "Nawal Karkal",
    role: "Group Director HR, Diacto Technologies",
    stats: [ { v: "7,000+", l: "applicants processed" }, { v: "80", l: "hires" }, { v: "<7 days", l: "avg. lead time per hire" } ],
  },
  {
    company: "Lumiverse Solutions",
    headline: "360 interviews. 25 qualified candidates. Just 3 hours.",
    quote: "CandidHR delivered our top 25 pre-qualified candidates in just 3 hours. Our managers sat down only with people who were truly hire-ready.",
    who: "Amar Thakare",
    role: "CEO & Managing Director, Lumiverse Solutions",
    stats: [ { v: "360", l: "candidates interviewed" }, { v: "25", l: "hire-ready candidates" }, { v: "3 hrs", l: "applications to shortlist" } ],
  },
];

export const TEAMS = [
  { t: "Talent acquisition", c: "Hundreds of applicants per role and a shortlist due by Friday.", h: ["Every resume read and ranked against the job", "AI video first rounds without a recruiter on the call", "Ranked shortlist with evidence managers trust"] },
  { t: "High-volume hiring", c: "Thousands of applicants and the same first-round questions on repeat.", h: ["Screen, test and interview at scale", "Candidates complete rounds on their own time", "Deal-breakers flagged up front"] },
  { t: "Campus & early careers", c: "Huge batches, thin resumes and a fixed drive date.", h: ["Judge skills with aptitude and coding tests", "Webcam, screen and anomaly proctoring", "Rank the whole batch by performance"] },
  { t: "Staffing agencies", c: "Many clients, many roles — the fastest shortlist wins.", h: ["Auto-invite from a 2 Billion+ talent pool", "Client shortlists backed by scores and recordings", "Run it under your own brand"] },
  { t: "Startups", c: "No recruiter yet, or one person doing everything.", h: ["AI drafts the job description", "Post once to 1,000+ job boards", "Start free on one real role"] },
];

export const PLANS = [
  { n: "Free", p: "$0", per: "/ forever", d: "Prove the value on one real open role.", f: ["1 active job", "AI resume screening & ranking", "Automated video interviews", "Standard aptitude assessments"], cta: "Get started free" },
  { n: "Growth", p: "$399", per: "/ month", d: "For talent teams and agencies hiring every month.", f: ["Up to 10 active jobs", "Unlimited AI resume screening", "Proctored technical & coding tests", "Standard ATS sync & webhooks"], cta: "Start Growth trial", pop: true },
  { n: "Enterprise", p: "Custom", per: "", d: "Premium reach, white label and custom workflows.", f: ["2 Billion+ talent pool", "153 ATS integrations", "1,000+ job boards", "Dedicated account manager & SLA"], cta: "Contact sales" },
];

export const FAQ = [
  { q: "How fast can we see results?", a: "Bring a real job description and you'll see ranked matches in about 60 seconds." },
  { q: "Does it replace our ATS?", a: "No. CandidHR.ai syncs two-way with 153 ATS platforms so shortlists land where your team already works." },
  { q: "Is candidate data secure?", a: "CandidHR.ai is SOC 2 Type II certified, with role-based access and full audit trails." },
  { q: "Can we try it for free?", a: "Yes. The Free plan covers one active job with resume screening and video interviews." },
];
