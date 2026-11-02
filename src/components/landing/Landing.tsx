import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, Play, Bot, Gauge, Users, Megaphone, Link2, Mail, ShieldCheck, Sparkles, Search, FileText, ClipboardCheck, Video, ListOrdered, Plus, Minus, Quote,Clock,Phone,CircleX ,Zap} from "lucide-react";
import logo from "@/assets/logo_HR.png";
import heroImg from "@/assets/hero_recruiter_leader.jpg"
import corePlatform from "@/assets/candidhr_core_platform.mp4"
import howWorks from "@/assets/candidhr_how_it_works.mp4"
import walkThrough from "@/assets/candidhr_applicants_walkthrough.mp4"
import { LOGOS, ATS, BOARDS, RESULTS, TEAMS, PLANS, FAQ } from "./data";
import { Button } from "../ui/button";

const HERO_IMG = heroImg;

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (el.classList.add("in"), io.disconnect()), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}s` }}>{children}</div>;
}

function Btn({ children, variant = "primary", href = "#demo" }: { children: ReactNode; variant?: "primary" | "ghost" | "ink"; href?: string }) {
  const v = {
    primary: "bg-primary text-primary-foreground shadow-violet hover:-translate-y-0.5",
    ghost: "bg-card text-ink border border-border hover:border-violet hover:-translate-y-0.5",
    ink: "bg-ink text-ink-foreground hover:-translate-y-0.5",
  }[variant];
  return <a href={href} className={`group inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-bold transition-all ${v}`}>{children}</a>;
}

function Head({ eyebrow, title, lead, center }: { eyebrow: string; title: ReactNode; lead?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] text-ink md:text-5xl">{title}</h2>
      {lead && <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">{lead}</p>}
    </Reveal>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-ink"><img src={logo} alt="" className="h-8 w-auto" />CandidHR<span className="text-violet">.ai</span></a>
        <nav className="hidden gap-8 text-[14.5px] font-semibold text-ink md:flex">
          {["Platform", "How it works", "Results", "Integrations", "Pricing", "FAQ"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="transition-colors hover:text-violet">{l}</a>
          ))}
        </nav>
        <a href="#demo" className="inline-flex h-10 items-center rounded-full bg-ink px-5 text-sm font-bold text-ink-foreground">Book a demo</a>
      </div>
    </header>
  );
}

const STAGES = [
  { i: Search, t: "Source", d: "2B+ talent pool" },
  { i: FileText, t: "Screen", d: "Every resume read" },
  { i: ClipboardCheck, t: "Assess", d: "Skills & coding" },
  { i: Video, t: "Interview", d: "AI video rounds" },
  { i: ListOrdered, t: "Shortlist", d: "Ranked, with reasons" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pb-20 pt-16 md:pt-24">
      <div className="aurora"><div className="blob b1" /><div className="blob b2" /><div className="blob b3" /></div>
      <div className="grid-fade" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-60" preserveAspectRatio="none" viewBox="0 0 1200 700" aria-hidden>
        {[0, 1, 2, 3, 4].map((k) => (
          <path key={k} className="flow-line" d={`M-50 ${520 + k * 30} C 300 ${380 + k * 40}, 700 ${640 - k * 30}, 1250 ${300 + k * 45}`} fill="none" stroke="var(--violet)" strokeOpacity={0.18 - k * 0.025} strokeWidth="1.5" style={{ animationDuration: `${6 + k * 2}s` }} />
        ))}
      </svg>

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-semibold text-ink shadow-soft backdrop-blur">
              <span className="pulse-dot h-2 w-2 rounded-full bg-teal" /> AI recruitment software for modern hiring teams
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.03] text-ink md:text-[68px]">
              Stop screening resumes.<br /><span className="text-gradient">Start meeting your best candidates.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              CandidHR.ai sources, screens, assesses and interviews every applicant before your team's first call — so the only people you meet are worth your time.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
            <Btn>Book a demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Btn>
            <Btn variant="ghost" href="#how-it-works"><Play className="h-4 w-4 text-violet" /> Watch the walkthrough</Btn>
          </Reveal>
          <Reveal delay={0.2} className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-teal" /> SOC 2 Type II certified · See matches in 60 seconds
          </Reveal>
          <Reveal delay={0.25} className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card/70 backdrop-blur">
            {[["2B+", "profiles to source"], ["153", "ATS integrations"], ["1,000+", "job boards"]].map(([v, l]) => (
              <div key={l} className="px-5 py-4"><div className="text-2xl font-extrabold text-ink">{v}</div><div className="text-xs text-muted-foreground">{l}</div></div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-card shadow-lift">
            <img src={HERO_IMG} alt="Talent acquisition leader reviewing a CandidHR.ai shortlist" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="float-y absolute -left-6 bottom-10 w-[290px] rounded-2xl border border-border bg-card p-5 shadow-lift md:-left-14">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              <span>Senior Data Engineer</span><span className="flex items-center gap-1 text-teal"><span className="h-1.5 w-1.5 rounded-full bg-teal" />Live</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-violet-soft font-bold text-violet">RK</div>
              <div><div className="font-bold text-ink">Rhea Kapoor</div><div className="text-xs text-muted-foreground">8 yrs · Python, AWS, Snowflake</div></div>
              <div className="ml-auto text-2xl font-extrabold text-violet">96%</div>
            </div>
            {[["Resume match", 96], ["Assessment", 91], ["Video interview", 88]].map(([l, v]) => (
              <div key={l as string} className="mt-3">
                <div className="flex justify-between text-xs"><span className="text-muted-foreground">{l}</span><span className="font-bold text-ink">{v}%</span></div>
                <div className="mt-1 h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-gradient-to-r from-violet to-teal" style={{ width: `${v}%` }} /></div>
              </div>
            ))}
          </div>
          <div className="float-y absolute -right-3 top-8 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft" style={{ animationDelay: "-3s" }}>
            <div className="flex items-center gap-2 text-sm font-bold text-ink"><Sparkles className="h-4 w-4 text-violet" /> #1 on shortlist</div>
            <div className="text-xs text-muted-foreground">All deal-breakers met</div>
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 max-w-[1240px] px-6">
        <Reveal className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {STAGES.map(({ i: I, t, d }, k) => (
            <div key={t} className="group relative rounded-2xl border border-border bg-card/80 p-4 backdrop-blur transition-all hover:-translate-y-1 hover:border-violet hover:shadow-soft">
              <div className="flex items-center gap-2 text-[11px] font-bold text-muted-foreground">0{k + 1}</div>
              <I className="mt-2 h-5 w-5 text-violet" />
              <div className="mt-2 font-bold text-ink">{t}</div>
              <div className="text-xs text-muted-foreground">{d}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function LogoRow({ items, reverse, dur }: { items: typeof LOGOS; reverse?: boolean; dur: number }) {
  const set = (hidden?: boolean) => (
    <div className={`marquee-track ${reverse ? "reverse" : ""}`} style={{ ["--dur" as string]: `${dur}s` }} aria-hidden={hidden}>
      {items.map((l) => (
        <div key={l.n} className="flex h-20 w-48 shrink-0 items-center justify-center rounded-2xl border border-border bg-card px-6">
          <img src={l.s} alt={hidden ? "" : l.n} loading="lazy" className="max-h-10 max-w-full object-contain" />
        </div>
      ))}
    </div>
  );
  return <div className="marquee">{set()}{set(true)}</div>;
}

function Logos() {
  const rot = (n: number) => [...LOGOS.slice(n), ...LOGOS.slice(0, n)];
  return (
    <section className="py-20">
      <Reveal className="mx-auto mb-10 max-w-[1240px] px-6 text-center">
        <span className="eyebrow">Trusted by hiring teams</span>
        <p className="mt-3 text-2xl font-bold text-ink">Recruiters at growing companies already hire this way</p>
      </Reveal>
      <div className="space-y-4">
        <LogoRow items={rot(0)} dur={45} />
        <LogoRow items={rot(5)} dur={55} reverse />
        <LogoRow items={rot(10)} dur={50} />
      </div>
    </section>
  );
}
const steps = [
  { icon: FileText, before: "Write the job description from scratch", after: "AI drafts the job description, you approve it", team: true },
  { icon: Clock, before: "Post the job and wait", after: "Auto-invite top talent from the 2 Billion+ talent pool", team: false },
  { icon: FileText, before: "Open 500+ resumes one by one", after: "AI matches every resume to the role", team: false },
  { icon: Phone, before: "Schedule phone screens, chase no-shows", after: "Proctored technical & aptitude tests", team: false },
  { icon: Mail, before: "Email tests and check submissions", after: "Video interviews transcribed & analysed", team: false },
  { icon: Phone, before: "Run repetitive intro calls", after: "Ranked shortlist with hiring evidence", team: false },
  { icon: CircleX, before: "Discover the candidate wasn't qualified", after: "Your recruiters interview the best", team: true },
];

function HowItWorks() {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [entered, setEntered] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(board);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="how-it-works" className={`hiring-workflow bg-surface py-20 md:py-24 ${entered ? "workflow-entered" : ""}`} aria-labelledby="workflow-title">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-3xl">
          <span className="eyebrow workflow-eyebrow">How it works</span>
          <h2 id="workflow-title" className="mt-4 text-4xl font-extrabold leading-[1.08] text-ink md:text-5xl">Who does what, <span className="text-violet">from job created to hire</span></h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">Your team owns both ends: approving the job and the final interviews. Steps 2 to 6 run on their own.</p>
          </div>
          <Button asChild className="h-auto min-h-12 whitespace-normal rounded-lg px-5 py-3 text-left text-sm font-bold"><a href="#demo">See it on your own job <ArrowRight aria-hidden="true" /></a></Button>
        </div>
        <div ref={boardRef} className="workflow-board">
          <div className="workflow-backdrop workflow-auto-backdrop" aria-hidden="true" />
          <div className="workflow-columns workflow-heading">
            <div className="workflow-manual-heading">
              <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Without CandidHR.ai</p>
              <h3 className="mt-2 text-[22px] font-extrabold text-ink">Every step is manual</h3>
            </div>
            <div className="workflow-auto-heading">
              <p className="text-xs font-extrabold uppercase tracking-widest text-teal">With CandidHR.ai</p>
              <h3 className="mt-2 text-[22px] font-extrabold text-ink-foreground">Your team does 2 of 7 steps</h3>
            </div>
          </div>
          <ol className="workflow-steps">
            {steps.map(({ icon: Icon, before, after, team }, index) => (
              <li key={after} className={`workflow-columns workflow-row ${activeRow === index ? "is-active" : ""}`} onMouseEnter={() => setActiveRow(index)} onMouseLeave={() => setActiveRow(null)}>
                <div className={`workflow-before ${index === 6 ? "workflow-waste" : ""}`}>
                  <span className="workflow-before-icon"><Icon className="h-4 w-4" aria-hidden="true" /></span>
                  <span className="workflow-strike">{before}</span>
                </div>
                <div className={`workflow-after ${team ? "workflow-team" : ""}`}>
                  <span className="workflow-number">0{index + 1}</span>
                  <span className="workflow-step-text">{after}<small className="workflow-mobile-before">Before: <span className="workflow-strike">{before}</span></small></span>
                  <span className={`workflow-owner ${team ? "owner-team" : "owner-auto"}`}>{team ? <Users aria-hidden="true" /> : <Zap aria-hidden="true" />}{team ? "Your team" : "Automated"}</span>
                </div>
              </li>
            ))}
          </ol>
          <div className="workflow-columns workflow-summary">
            <div className="workflow-manual-summary"><div className="workflow-bar workflow-manual-bar" /><p><span className="workflow-key manual-key" />Manual · 7 of 7 steps</p></div>
            <div className="workflow-auto-summary"><div className="workflow-bar workflow-auto-bar"><span /><span /><span /></div><div className="workflow-legend"><p><span className="workflow-key team-key" />Your team · 2 steps</p><p><span className="workflow-key auto-key" />Automated · 5 steps</p></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
// function HowItWorks() {
//   const manual = ["Write the job description from scratch", "Post the job and wait", "Open 500+ resumes one by one", "Schedule phone screens, chase no-shows", "Email tests and check submissions", "Run repetitive intro calls", "Discover the candidate wasn't qualified"];
//   const auto = [["AI drafts the job description", "Your team"], ["Auto-invite top talent from 2B+ pool", "Automated"], ["AI matches every resume to the role", "Automated"], ["Proctored technical & aptitude tests", "Automated"], ["Video interviews transcribed & analysed", "Automated"], ["Ranked shortlist with hiring evidence", "Automated"], ["Your recruiters interview the best", "Your team"]];
//   return (
//     <section id="how-it-works" className="bg-surface py-24">
//       <div className="mx-auto max-w-[1240px] px-6">
//         <Head eyebrow="How it works" title={<>Who does what, from <span className="text-violet">job created to hire</span></>} lead="Your team owns both ends. Everything in between runs on its own." />
//         <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
//           <Reveal className="rounded-3xl border border-border bg-card p-8">
//             <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Without CandidHR.ai</div>
//             <ul className="mt-6 space-y-3">
//               {manual.map((m) => (
//                 <li key={m} className="flex items-center gap-3 text-[15px] text-muted-foreground line-through decoration-border">
//                   <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-warn" /> {m}
//                 </li>
//               ))}
//             </ul>
//           </Reveal>
//           <Reveal delay={0.1} className="relative overflow-hidden rounded-3xl bg-ink p-8 text-ink-foreground shadow-lift">
//             <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet/40 blur-3xl" />
//             <div className="relative text-xs font-bold uppercase tracking-widest text-teal">With CandidHR.ai</div>
//             <ol className="relative mt-6 space-y-2">
//               {auto.map(([t, tag], k) => (
//                 <li key={t} className="flex items-center gap-4 rounded-xl border border-ink-foreground/10 bg-ink-foreground/5 px-4 py-3">
//                   <span className="text-xs font-bold text-ink-foreground/50">0{k + 1}</span>
//                   <span className="flex-1 text-[15px] font-semibold">{t}</span>
//                   <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${tag === "Automated" ? "bg-teal/20 text-teal" : "bg-ink-foreground/15 text-ink-foreground"}`}>{tag}</span>
//                 </li>
//               ))}
//             </ol>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Results() {
//   const [i, setI] = useState(0);
//   const r = RESULTS[i]!;
//   return (
//     <section id="results" className="py-24">
//       <div className="mx-auto max-w-[1240px] px-6">
//         <div className="flex flex-wrap items-end justify-between gap-6">
//           <Head eyebrow="Customer results" title={<>Hiring results teams <span className="text-violet">can measure</span></>} />
//           <div className="mb-14 flex gap-2 rounded-full border border-border bg-surface p-1">
//             {RESULTS.map((x, k) => (
//               <button key={x.company} onClick={() => setI(k)} className={`rounded-full px-5 py-2 text-sm font-bold transition ${k === i ? "bg-ink text-ink-foreground" : "text-muted-foreground hover:text-ink"}`}>{x.company}</button>
//             ))}
//           </div>
//         </div>
//         <div key={i} className="grid gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 lg:grid-cols-[1.4fr_1fr]">
//           <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10">
//             <Quote className="h-10 w-10 text-violet/30" />
//             <h3 className="mt-4 text-3xl font-extrabold leading-tight text-ink">{r.headline}</h3>
//             <p className="mt-5 text-lg leading-relaxed text-muted-foreground">“{r.quote}”</p>
//             <div className="mt-8 flex items-center gap-3">
//               <div className="grid h-11 w-11 place-items-center rounded-full bg-violet text-sm font-bold text-primary-foreground">{r.who.split(" ").map((p) => p[0]).join("")}</div>
//               <div><div className="font-bold text-ink">{r.who}</div><div className="text-sm text-muted-foreground">{r.role}</div></div>
//             </div>
//           </div>
//           <div className="grid gap-4">
//             {r.stats.map((s, k) => (
//               <div key={s.l} className={`flex items-center justify-between rounded-3xl p-7 ${k === 0 ? "bg-violet text-primary-foreground" : k === 1 ? "bg-teal-soft text-ink" : "border border-border bg-card text-ink"}`}>
//                 <span className="text-sm font-semibold opacity-80">{s.l}</span>
//                 <span className="text-4xl font-extrabold tracking-tight">{s.v}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
function Results() {
  const [i, setI] = useState(0);
  const r = RESULTS[i];
  if (!r) return null;
  return (
    <section id="results" className="py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Head eyebrow="Customer results" title={<>Hiring results teams <span className="text-violet">can measure</span></>} />
          <div className="mb-14 flex gap-2 rounded-full border border-border bg-surface p-1">
            {RESULTS.map((x, k) => (
              <button key={x.company} onClick={() => setI(k)} className={`rounded-full px-5 py-2 text-sm font-bold transition ${k === i ? "bg-ink text-ink-foreground" : "text-muted-foreground hover:text-ink"}`}>{x.company}</button>
            ))}
          </div>
        </div>
        <div key={i} className="grid gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 lg:grid-cols-[1.4fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10">
            <Quote className="h-10 w-10 text-violet/30" />
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">“{r.quote}”</p>
            <div className="mt-8 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-violet text-sm font-bold text-primary-foreground">{r.who.split(" ").map((p) => p[0]).join("")}</div>
              <div><div className="font-bold text-ink">{r.who}</div><div className="text-sm text-muted-foreground">{r.role}</div></div>
            </div>
          </div>
          <div className="grid gap-4">
            {r.stats.map((s, k) => (
              <div key={s.l} className={`flex items-center justify-between rounded-3xl p-7 ${k === 0 ? "bg-violet text-primary-foreground" : k === 1 ? "bg-teal-soft text-ink" : "border border-border bg-card text-ink"}`}>
                <span className="text-sm font-semibold opacity-80">{s.l}</span>
                <span className="text-4xl font-extrabold tracking-tight">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function Chip({ t }: { t: string }) {
  return <span className="shrink-0 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-ink shadow-soft">{t}</span>;
}

function Integrations() {
  return (
    <section id="integrations" className="relative overflow-hidden bg-surface py-24">
      <div className="grid-fade" />
      <div className="relative mx-auto max-w-[1240px] px-6">
        <Head center eyebrow="ATS integration & job board posting" title={<>Connected to the tools <span className="text-violet">you already use</span></>} lead="Keep your ATS and reach every board, with no change to your workflow." />
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="text-5xl font-extrabold text-ink">153</div>
            <div className="mt-1 font-bold text-ink">ATS integrations</div>
            <p className="mt-2 text-sm text-muted-foreground">Two-way sync — shortlists land where your team already works.</p>
            <div className="mt-6 flex flex-wrap gap-2">{ATS.map((a) => <span key={a} className="rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-ink">{a}</span>)}<span className="rounded-lg bg-violet-soft px-3 py-1.5 text-xs font-bold text-violet">+141 more</span></div>
          </Reveal>

          <Reveal delay={0.1} className="relative mx-auto grid h-72 w-72 place-items-center">
            <div className="orbit absolute inset-0 rounded-full border border-dashed border-violet/30">
              {[0, 90, 180, 270].map((d) => <span key={d} className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet" style={{ transform: `rotate(${d}deg) translate(144px) ` }} />)}
            </div>
            <div className="orbit-rev absolute inset-10 rounded-full border border-dashed border-teal/50">
              {[45, 225].map((d) => <span key={d} className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-teal" style={{ transform: `rotate(${d}deg) translate(104px)` }} />)}
            </div>
            <div className="relative grid h-28 w-28 place-items-center rounded-3xl bg-ink text-center shadow-lift">
              <img src={logo} alt="CandidHR.ai" className="h-14 w-auto" />
            </div>
          </Reveal>

          <Reveal delay={0.2} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="text-5xl font-extrabold text-ink">1,000+</div>
            <div className="mt-1 font-bold text-ink">Job boards worldwide</div>
            <p className="mt-2 text-sm text-muted-foreground">Post once, distribute everywhere, with automatic deduplication.</p>
            <div className="mt-6 flex flex-wrap gap-2">{BOARDS.map((a) => <span key={a} className="rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-ink">{a}</span>)}<span className="rounded-lg bg-teal-soft px-3 py-1.5 text-xs font-bold text-ink">+ niche boards</span></div>
          </Reveal>
        </div>
        <div className="mt-14 space-y-3">
          <div className="marquee">{[0, 1].map((k) => <div key={k} className="marquee-track" style={{ ["--dur" as string]: "35s" }}>{ATS.map((a) => <Chip key={a} t={a} />)}</div>)}</div>
          <div className="marquee">{[0, 1].map((k) => <div key={k} className="marquee-track reverse" style={{ ["--dur" as string]: "30s" }}>{[...BOARDS, ...BOARDS].map((a, j) => <Chip key={a + j} t={a} />)}</div>)}</div>
        </div>
      </div>
    </section>
  );
}

function Teams() {
  const [i, setI] = useState(0);
  const t = TEAMS[i]!;
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <Head eyebrow="Who it's for" title={<>Built for teams with <span className="text-violet">more applicants than time</span></>} />
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="flex flex-col gap-2">
            {TEAMS.map((x, k) => (
              <button key={x.t} onClick={() => setI(k)} className={`flex items-center justify-between rounded-2xl px-5 py-4 text-left font-bold transition ${k === i ? "bg-ink text-ink-foreground shadow-lift" : "bg-surface text-ink hover:bg-violet-soft"}`}>
                {x.t} <ArrowRight className={`h-4 w-4 transition ${k === i ? "opacity-100" : "opacity-0"}`} />
              </button>
            ))}
          </div>
          <div key={i} className="grid gap-6 rounded-3xl border border-border p-10 animate-in fade-in duration-500 md:grid-cols-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-warn">The challenge</div>
              <p className="mt-3 text-2xl font-bold leading-snug text-ink">{t.c}</p>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal">How CandidHR.ai helps</div>
              <ul className="mt-3 space-y-3">{t.h.map((h) => <li key={h} className="flex gap-3 text-ink"><span className="mt-2.5 h-1.5 w-4 shrink-0 rounded-full bg-gradient-to-r from-violet to-teal" />{h}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-surface py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <Head center eyebrow="Pricing" title={<>Plans that <span className="text-violet">scale with your hiring</span></>} lead="Try screening and video interviews on a real role for free." />
        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((p, k) => (
            <Reveal key={p.n} delay={k * 0.08} className={`relative flex flex-col rounded-3xl p-8 ${p.pop ? "bg-ink text-ink-foreground shadow-lift md:-translate-y-4" : "border border-border bg-card text-ink"}`}>
              {p.pop && <span className="absolute right-6 top-6 rounded-full bg-teal px-3 py-1 text-xs font-bold text-ink">Most popular</span>}
              <div className="font-bold">{p.n}</div>
              <div className="mt-4 flex items-baseline gap-1"><span className="text-5xl font-extrabold">{p.p}</span><span className="text-sm opacity-70">{p.per}</span></div>
              <p className="mt-3 text-sm opacity-75">{p.d}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">{p.f.map((f) => <li key={f} className="flex gap-2"><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${p.pop ? "bg-teal" : "bg-violet"}`} />{f}</li>)}</ul>
              <a href="#demo" className={`mt-8 inline-flex h-12 items-center justify-center rounded-full font-bold transition hover:-translate-y-0.5 ${p.pop ? "bg-primary text-primary-foreground" : "border border-border hover:border-violet"}`}>{p.cta}</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [o, setO] = useState(0);
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 lg:grid-cols-[1fr_1.4fr]">
        <Head eyebrow="FAQ" title={<>Questions, <span className="text-violet">answered</span></>} />
        <div className="divide-y divide-border border-y border-border">
          {FAQ.map((f, k) => (
            <div key={f.q}>
              <button onClick={() => setO(o === k ? -1 : k)} className="flex w-full items-center justify-between py-6 text-left text-lg font-bold text-ink">
                {f.q}{o === k ? <Minus className="h-5 w-5 text-violet" /> : <Plus className="h-5 w-5 text-violet" />}
              </button>
              {o === k && <p className="pb-6 text-muted-foreground animate-in fade-in">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="demo" className="px-6 pb-24">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px] bg-violet-soft px-8 py-20 text-center">
        <div className="aurora"><div className="blob b1" /><div className="blob b2" /></div>
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-ink md:text-5xl">Bring a real job description. <span className="text-gradient">See matches in 60 seconds.</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">From the founder: recruiter time should go to the conversations that decide a hire — not the noise before them.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Btn>Book a demo <ArrowRight className="h-4 w-4" /></Btn>
            <Btn variant="ghost" href="#pricing">Start free</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

// const VID = "https://candid-hr-ai.vercel.app/assets";
// const VIDEOS = [
//   { t: "Core platform", d: "A tour of the recruiter workspace, from job to ranked shortlist.", src: `${VID}/candidhr_core_platform-2kdDARZa.mp4` },
//   { t: "How it works", d: "The full candidate journey, step by step.", src: `${VID}/candidhr_how_it_works-C8Ftecmx.mp4` },
//   { t: "Applicant scoring", d: "How every applicant is scored, ranked and explained.", src: `${VID}/candidhr_applicants_walkthrough_1-CLHw3ULg.mp4` },
// ];
const VIDEOS = [
  {
    t: "Core platform",
    d: "A tour of the recruiter workspace, from job to ranked shortlist.",
    src: corePlatform,
  },
  {
    t: "How it works",
    d: "The full candidate journey, step by step.",
    src: howWorks,
  },
  {
    t: "Applicant scoring",
    d: "How every applicant is scored, ranked and explained.",
    src: walkThrough,
  },
];

function WhatItDoes() {
  const items = [
    { i: Search, t: "Finds the right people", d: "Auto-invites matching talent from a 2B+ profile pool and 1,000+ job boards." },
    { i: Gauge, t: "Reads every resume", d: "Matches each application to the role and flags deal-breakers before anyone looks." },
    { i: Bot, t: "Runs the first rounds", d: "Proctored tests and AI video interviews, completed on the candidate's own time." },
    { i: ListOrdered, t: "Hands you a shortlist", d: "A ranked list with scores, recordings and reasons your managers can trust." },
  ];
  return (
    <section id="platform" className="py-24">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <span className="eyebrow">What does CandidHR.ai do?</span>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] text-ink md:text-5xl">Your AI recruiter for <span className="text-violet">everything before round one</span></h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">CandidHR.ai takes over the repetitive part of hiring — sourcing, screening, testing and first interviews — so your recruiters spend their time only with candidates who are ready to hire.</p>
          <div className="mt-8"><Btn>See it on your role <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Btn></div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(({ i: I, t, d }, k) => (
            <Reveal key={t} delay={k * 0.06} className={`rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-soft ${k === 0 || k === 3 ? "bg-violet-soft" : "border border-border bg-card"}`}>
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-card shadow-soft"><I className="h-5 w-5 text-violet" /></div>
              <h3 className="mt-5 text-lg font-bold text-ink">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformVideos() {
  const [i, setI] = useState(0);
  const v = VIDEOS[i]!;
  return (
    // <section className="relative overflow-hidden bg-surface py-24">
    //   <div className="aurora"><div className="blob b2" /></div>
    //   <div className="relative mx-auto max-w-[1240px] px-6">
    //     <Head center eyebrow="See the platform in action" title={<>Watch CandidHR.ai <span className="text-violet">do the work</span></>} lead="Short walkthroughs of the real product." />
    //     <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
    //       <div className="flex flex-col gap-3">
    //         {VIDEOS.map((x, k) => (
    //           <button key={x.t} onClick={() => setI(k)} className={`rounded-2xl p-5 text-left transition ${k === i ? "bg-card shadow-lift ring-2 ring-violet" : "bg-card/60 hover:bg-card"}`}>
    //             <div className="flex items-center gap-3">
    //               <span className={`grid h-9 w-9 place-items-center rounded-full ${k === i ? "bg-primary text-primary-foreground" : "bg-violet-soft text-violet"}`}><Play className="h-4 w-4" /></span>
    //               <span className="font-bold text-ink">{x.t}</span>
    //             </div>
    //             <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
    //           </button>
    //         ))}
    //       </div>
    //       <Reveal className="overflow-hidden rounded-[28px] border border-border bg-card p-2 shadow-lift">
    //         <video key={v.src} src={v.src} controls playsInline preload="metadata" className="aspect-video w-full rounded-[22px] bg-muted" />
    //       </Reveal>
    //     </div>
    //   </div>
    // </section>
    <section className="relative overflow-hidden bg-surface py-24">
  <div className="aurora"><div className="blob b2" /></div>
  <div className="relative mx-auto max-w-[1240px] px-6">
    <Head
      center
      eyebrow="See the platform in action"
      title={<>Watch CandidHR.ai <span className="text-violet">do the work</span></>}
      lead="Short walkthroughs of the real product."
    />
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div className="flex flex-col gap-3">
        {VIDEOS.map((x, k) => (
          <button
            key={x.t}
            onClick={() => setI(k)}
            className={`rounded-2xl p-5 text-left transition ${k === i ? "bg-card shadow-lift ring-2 ring-violet" : "bg-card/60 hover:bg-card"}`}
          >
            <div className="flex items-center gap-3">
              <span className={`grid h-9 w-9 place-items-center rounded-full ${k === i ? "bg-primary text-primary-foreground" : "bg-violet-soft text-violet"}`}>
                <Play className="h-4 w-4" />
              </span>
              <span className="font-bold text-ink">{x.t}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
          </button>
        ))}
      </div>

      <Reveal className="overflow-hidden rounded-[28px] border border-border bg-card p-2 shadow-lift">
        <video
          key={v.src}
          src={v.src}
          autoPlay
          muted
          controls
          playsInline
          preload="auto"
          onEnded={() => setI((prev) => (prev + 1) % VIDEOS.length)}
          className="aspect-video w-full rounded-[22px] bg-muted"
        />
      </Reveal>
    </div>
  </div>
</section>
  );
}

function JobToShortlist() {
  const steps = [
    { i: Sparkles, t: "Create the job", d: "AI drafts the description from a few lines." },
    { i: Megaphone, t: "Post everywhere", d: "One click to 1,000+ boards and your careers page." },
    { i: Users, t: "Source & invite", d: "Matching talent invited from the 2B+ pool." },
    { i: FileText, t: "Screen resumes", d: "Every application scored against the role." },
    { i: ClipboardCheck, t: "Assess skills", d: "Proctored aptitude and coding tests." },
    { i: Video, t: "AI interviews", d: "Video rounds transcribed and analysed." },
    { i: ListOrdered, t: "Ranked shortlist", d: "Evidence-backed, synced to your ATS." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <Head center eyebrow="One connected flow" title={<>Everything from <span className="text-violet">job created to shortlist</span></>} lead="Seven steps that used to take weeks, now run in a single place." />
        <div className="relative">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-violet via-teal to-violet opacity-40 lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-7">
            {steps.map(({ i: I, t, d }, k) => (
              <Reveal key={t} delay={k * 0.05} className="relative text-center">
                <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-border bg-card shadow-soft"><I className="h-6 w-6 text-violet" /></div>
                <div className="mt-4 text-[11px] font-bold text-muted-foreground">STEP 0{k + 1}</div>
                <h3 className="mt-1 font-bold text-ink">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: "Product", l: [["Platform", "#platform"], ["How it works", "#how-it-works"], ["Integrations", "#integrations"], ["Pricing", "#pricing"]] },
    { h: "Company", l: [["Customer results", "#results"], ["FAQ", "#faq"], ["Book a demo", "#demo"]] },
    { h: "Connect", l: [["YouTube", "https://youtube.com/@CandidHR.AIOfficial"], ["info@candidhr.ai", "mailto:info@candidhr.ai"]] },
  ];
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="#" className="flex items-center gap-2 text-xl font-extrabold text-ink"><img src={logo.url} alt="" className="h-8 w-auto" />CandidHR<span className="text-violet">.ai</span></a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">AI recruitment software that sources, screens, assesses and interviews candidates before your first round.</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-ink"><ShieldCheck className="h-4 w-4 text-teal" /> SOC 2 Type II certified</div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div className="text-xs font-bold uppercase tracking-widest text-ink">{c.h}</div>
            <ul className="mt-4 space-y-3 text-sm">
              {c.l.map(([t, h]) => <li key={t}><a href={h} className="flex items-center gap-2 text-muted-foreground transition hover:text-violet" {...(h!.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>{h!.startsWith("mailto") ? <Mail className="h-4 w-4" /> : h!.startsWith("http") ? <Link2 className="h-4 w-4" /> : null}{t}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3 px-6 py-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Diacto Labs Private Limited. All rights reserved.</span>
          <span>Made for hiring teams with more applicants than time.</span>
        </div>
      </div>
    </footer>
  );
}

export function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Logos />
        <WhatItDoes />
        <PlatformVideos />
        <HowItWorks />
        <JobToShortlist />
        <Results />
        <Integrations />
        <Teams />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
