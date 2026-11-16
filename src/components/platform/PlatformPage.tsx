import {
  ArrowRight,
  BadgeCheck,
  Brain,
  Check,
  ClipboardCheck,
  Database,
  Gauge,
  ListOrdered,
  Lock,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";
import heroImg from "@/assets/hero_recruiter_leader.jpg";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Btn, Reveal } from "@/components/landing/Landing";
import { useEffect, useRef, useState } from "react";
import { SectionHead } from "@/components/site/SectionHead";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <img
        src={`https://res.cloudinary.com/dnm6dyuaw/image/upload/v1794813379/candidbanner_b8rh1f.png`}
        alt="Recruiting team working with CandidHR.ai"
        className="absolute inset-0 h-full w-full object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1240px] px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-3 py-1.5 text-xs font-semibold text-ink-foreground backdrop-blur">
              <span className="pulse-dot h-2 w-2 rounded-full bg-teal" /> About the platform
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.03] text-ink-foreground md:text-[64px]">
              The AI recruiter behind every <span className="text-gradient">great shortlist.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/75">
              CandidHR.ai is the recruitment platform that sources, screens, assesses and interviews
              applicants — so your hiring team spends its time only on the people worth meeting.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
            <Btn>
              Book a demo{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Btn>
            <Btn variant="ghost" href="#capabilities">
              Explore the platform
            </Btn>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const MISSION_STATS = [
  { v: "5 of 7", l: "hiring steps run without a recruiter" },
  { v: "<7 days", l: "average lead time per hire" },
  { v: "12 min", l: "median recruiter time per role, per day" },
  { v: "94%", l: "of shortlisted candidates are hire-ready" },
];

function Mission() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <span className="eyebrow">Why we built CandidHR.ai</span>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] text-ink md:text-5xl">
            Hiring teams don't need more applicants.{" "}
            <span className="text-violet">They need the right ones.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
            Recruiters spend their days reading resumes, chasing no-shows and repeating the same
            intro call. None of it decides a hire — yet it takes most of the week.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
            We built a platform that carries that work end to end: it finds the talent, reads every
            application, runs the first rounds and explains who is worth meeting. Your team stays in
            control of the decisions that actually matter.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {MISSION_STATS.map((s, k) => (
            <Reveal
              key={s.l}
              delay={k * 0.06}
              className={`rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-soft ${
                k === 0 || k === 3 ? "bg-violet-soft" : "border border-border bg-card"
              }`}
            >
              <div className="text-4xl font-extrabold tracking-tight text-ink">{s.v}</div>
              <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PILLARS: { icon: LucideIcon; t: string; d: string; tags: string[] }[] = [
  {
    icon: Search,
    t: "Source",
    d: "Search a 2B+ profile pool, auto-invite matching talent and post once to 1,000+ job boards.",
    tags: ["Talent pool", "Job boards", "Auto-invite"],
  },
  {
    icon: Gauge,
    t: "Screen",
    d: "Every resume is read, scored against the role and checked for deal-breakers before a human looks.",
    tags: ["Resume match", "Deal-breakers", "Scoring"],
  },
  {
    icon: ClipboardCheck,
    t: "Assess",
    d: "Proctored aptitude and coding tests run on the candidate's own time, with anomaly detection built in.",
    tags: ["Aptitude", "Coding", "Proctoring"],
  },
  {
    icon: Video,
    t: "Interview",
    d: "AI video rounds are transcribed, analysed against your rubric and turned into structured evidence.",
    tags: ["Video", "Transcripts", "Rubrics"],
  },
];

function Capabilities() {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-surface py-24">
      <div className="grid-fade" />
      <div className="relative mx-auto max-w-[1240px] px-6">
        <SectionHead
          center
          eyebrow="What the platform covers"
          title={
            <>
              Four stages, <span className="text-violet">one connected flow</span>
            </>
          }
          lead="Each stage feeds the next, so nothing is re-entered, re-scheduled or lost between tools."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, t, d, tags }, k) => (
            <Reveal
              key={t}
              delay={k * 0.06}
              className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-violet hover:shadow-soft"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-soft">
                  <Icon className="h-5 w-5 text-violet" />
                </div>
                <span className="text-[11px] font-bold text-muted-foreground">0{k + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{t}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-surface px-2.5 py-1 text-[11px] font-semibold text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const ENGINES: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: Database,
    t: "Matching engine",
    d: "Reads the role's intent, not just keywords, then scores every profile on skills, seniority and evidence.",
  },
  {
    icon: Brain,
    t: "Assessment engine",
    d: "Calibrated tests score each skill separately and flag unusual behaviour during proctored sessions.",
  },
  {
    icon: ListOrdered,
    t: "Interview intelligence",
    d: "Speech-to-text plus rubric scoring turns a recorded round into comparable, reviewable signals.",
  },
  {
    icon: Sparkles,
    t: "Ranking layer",
    d: "Combines every signal into one ranked shortlist — each placement explained in plain language.",
  },
];

function UnderTheHood() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(ENGINES.length);
      return;
    }
    const el = wrapRef.current;
    if (!el) return;

    let timer: number | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        setActive(0);
        timer = window.setInterval(
          () => setActive((prev) => (prev + 1) % (ENGINES.length + 1)),
          2600,
        );
      },
      { threshold: 0.25 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (timer !== undefined) window.clearInterval(timer);
    };
  }, []);

  const railProgress =
    active <= 0 ? 0 : active >= ENGINES.length - 1 ? 100 : (active / (ENGINES.length - 1)) * 100;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <SectionHead
          center
          eyebrow="Under the hood"
          title={
            <>
              Built on <span className="text-violet">explainable AI</span>, not a black box
            </>
          }
          lead="Every score traces back to something a hiring manager can read, question and override."
        />
        <div ref={wrapRef} className="relative">
          <div className="pointer-events-none absolute inset-x-[12.5%] top-7 hidden h-px -translate-y-1/2 bg-border lg:block">
            <div
              className="milestone-fill h-full bg-gradient-to-r from-violet to-teal transition-[width] duration-[2600ms] ease-linear"
              style={{
                width: `${railProgress}%`,
                transitionDuration: active <= 0 ? "0ms" : undefined,
              }}
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ENGINES.map(({ icon: Icon, t, d }, k) => {
              const state = active === k ? "active" : active > k ? "done" : "idle";
              return (
                <Reveal key={t} delay={k * 0.06} className="relative text-center">
                  <div
                    className={`relative mx-auto grid h-14 w-14 place-items-center rounded-2xl border bg-card transition-all duration-500 ${
                      state === "active"
                        ? "scale-105 border-primary bg-primary text-primary-foreground shadow-violet ring-4 ring-violet/15"
                        : state === "done"
                          ? "border-violet/40 bg-violet-soft text-violet"
                          : "border-border text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                    {state === "done" && (
                      <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-teal text-ink shadow-soft">
                        <Check className="h-3 w-3" aria-hidden="true" />
                      </span>
                    )}
                  </div>
                  <div
                    className={`mt-4 text-[11px] font-bold transition-colors duration-500 ${
                      state === "idle" ? "text-muted-foreground/70" : "text-violet"
                    }`}
                  >
                    STEP 0{k + 1}
                  </div>
                  <h3
                    className={`mt-1 font-bold transition-colors duration-500 ${
                      state === "idle" ? "text-muted-foreground" : "text-ink"
                    }`}
                  >
                    {t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const DECISIONS = [
  { t: "Draft the job description", owner: "AI", human: false },
  { t: "Source and invite talent", owner: "AI", human: false },
  { t: "Screen every application", owner: "AI", human: false },
  { t: "Run assessments and interviews", owner: "AI", human: false },
  { t: "Approve the job and rubric", owner: "Your team", human: true },
  { t: "Interview the shortlist", owner: "Your team", human: true },
  { t: "Make the offer", owner: "Your team", human: true },
];

function HumanInTheLoop() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.22em] text-teal">
            <span className="h-px w-7 bg-teal" /> Human in the loop
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] text-ink-foreground md:text-5xl">
            Automation for the work. <span className="text-teal">People for the decisions.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-foreground/70">
            The platform never hires anyone. It clears the noise, shows its reasoning and hands your
            team a shortlist they can defend — approving the role at the start and meeting only the
            people who made it through.
          </p>
          <ul className="mt-7 space-y-3 text-ink-foreground/85">
            {[
              "Your team approves the job and the scoring rubric",
              "Every automated decision is visible and reversible",
              "Final interviews and offers stay entirely with you",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal/15 text-teal">
                  <Check className="h-3 w-3" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={0.1}
          className="rounded-3xl border border-ink-foreground/10 bg-ink-foreground/5 p-6 backdrop-blur"
        >
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-ink-foreground/55">
            <span>Who does what</span>
            <span className="flex items-center gap-1 text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Senior Data Engineer
            </span>
          </div>
          <ul className="mt-4 divide-y divide-ink-foreground/10">
            {DECISIONS.map((d, k) => (
              <li key={d.t} className="flex items-center justify-between gap-4 py-3.5">
                <span className="flex items-center gap-3 text-sm text-ink-foreground/85">
                  <span className="w-4 text-[11px] font-bold text-ink-foreground/40">0{k + 1}</span>
                  {d.t}
                </span>
                <span
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold ${
                    d.human
                      ? "border-violet/40 bg-violet/20 text-ink-foreground"
                      : "border-teal/30 bg-teal/15 text-teal"
                  }`}
                >
                  {d.human ? <Users className="h-3 w-3" /> : <Sparkles className="h-3 w-3" />}
                  {d.owner}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const TRUST: { icon: LucideIcon; t: string; d: string }[] = [
  {
    icon: BadgeCheck,
    t: "SOC 2 Type II",
    d: "Independently audited controls across security, availability and confidentiality.",
  },
  {
    icon: Lock,
    t: "Role-based access",
    d: "Granular permissions and full audit trails on every candidate record and decision.",
  },
  {
    icon: Scale,
    t: "Bias-aware scoring",
    d: "Rubric-based evaluation with human review, so scores can be checked and challenged.",
  },
  {
    icon: ShieldCheck,
    t: "Privacy by default",
    d: "Candidate data stays encrypted in transit and at rest, with regional retention controls.",
  },
];

function Trust() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <SectionHead
          center
          eyebrow="Trust & security"
          title={
            <>
              Enterprise-grade <span className="text-violet">from day one</span>
            </>
          }
          lead="The same controls protect a single startup hiring manager and a global talent team."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map(({ icon: Icon, t, d }, k) => (
            <Reveal
              key={t}
              delay={k * 0.06}
              className="rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-soft">
                <Icon className="h-5 w-5 text-ink" />
              </div>
              <h3 className="mt-5 text-base font-bold text-ink">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="px-6 py-24">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px] bg-violet-soft px-8 py-20 text-center">
        <div className="aurora">
          <div className="blob b1" />
          <div className="blob b2" />
        </div>
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-ink md:text-5xl">
            See the platform on a real job.{" "}
            <span className="text-gradient">Matches in 60 seconds.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Bring one live role and watch sourcing, screening, assessments and interviews run end to
            end — with your team only stepping in at the end.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Btn>
              Book a demo <ArrowRight className="h-4 w-4" />
            </Btn>
            <Btn variant="ghost" href="/how-it-works">
              See how it works
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Mission />
        <Capabilities />
        <UnderTheHood />
        <HumanInTheLoop />
        <Trust />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
