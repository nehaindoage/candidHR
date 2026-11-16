import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarClock,
  Check,
  Flame,
  GraduationCap,
  Layers,
  Quote,
  Rocket,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionHead } from "@/components/site/SectionHead";
import { Btn, Reveal } from "@/components/landing/Landing";
import { RESULTS, TEAMS } from "@/components/landing/data";

const ICONS: LucideIcon[] = [Users, Flame, GraduationCap, Building2, Rocket];

const SOLUTIONS = TEAMS.map((team, k) => ({
  ...team,
  icon: ICONS[k] ?? Users,
}));

const VOLUMES: { icon: LucideIcon; tag: string; t: string; d: string }[] = [
  {
    icon: Sparkles,
    tag: "One role",
    t: "Hiring a single role",
    d: "Start free on one live job and see a ranked shortlist before you commit to anything.",
  },
  {
    icon: CalendarClock,
    tag: "Ongoing",
    t: "Hiring every month",
    d: "Run all your roles through one flow, with shortlists syncing to the ATS you already use.",
  },
  {
    icon: Layers,
    tag: "At scale",
    t: "Hiring at scale",
    d: "Screen, test and interview thousands per drive without adding recruiter headcount.",
  },
];

const OUTCOME = RESULTS[0]!;

function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 md:py-24">
      <div className="aurora">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>
      <div className="grid-fade" />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-semibold text-ink shadow-soft backdrop-blur">
              <span className="pulse-dot h-2 w-2 rounded-full bg-teal" /> Solutions
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.04] text-ink md:text-[60px]">
              Solve the hiring problem <span className="text-gradient">you actually have.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              From a first recruiter to a global talent team, CandidHR.ai adapts to your volume,
              your process and your tools — without asking you to rebuild how you hire.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
            <Btn>
              Book a demo{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Btn>
            <Btn variant="ghost" href="/how-it-works">
              See how it works
            </Btn>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-[28px] border border-border bg-card p-6 shadow-lift">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              <span>Find your fit</span>
              <span className="flex items-center gap-1 text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" /> 5 solutions
              </span>
            </div>
            <div className="mt-4 space-y-2">
              {SOLUTIONS.map(({ icon: Icon, t }) => (
                <a
                  key={t}
                  href="#solutions"
                  className="group flex items-center gap-3 rounded-2xl border border-transparent px-3 py-3 transition hover:border-border hover:bg-surface"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-soft text-violet">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1 text-sm font-semibold text-ink">{t}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-violet" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <SectionHead
          eyebrow="By team"
          title={
            <>
              Built for teams with <span className="text-violet">more applicants than time</span>
            </>
          }
          lead="Same platform, tuned to the way your team actually hires."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {SOLUTIONS.map(({ icon: Icon, t, c, h }, k) => (
            <Reveal
              key={t}
              delay={(k % 2) * 0.06}
              className={`flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-soft ${
                k === SOLUTIONS.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-soft text-violet">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{t}</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Solution 0{k + 1}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c}</p>

              <div className="mt-5 border-t border-border pt-4">
                <div className="text-[11px] font-bold uppercase tracking-widest text-teal">
                  How CandidHR.ai helps
                </div>
                <ul
                  className={`mt-3 gap-x-8 gap-y-2.5 ${k === SOLUTIONS.length - 1 ? "sm:columns-2" : ""}`}
                >
                  {h.map((item) => (
                    <li
                      key={item}
                      className="flex break-inside-avoid gap-2.5 py-1 text-sm text-ink"
                    >
                      <span className="mt-2 h-1.5 w-3 shrink-0 rounded-full bg-gradient-to-r from-violet to-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Volumes() {
  return (
    <section className="relative overflow-hidden bg-surface py-24">
      <div className="grid-fade" />
      <div className="relative mx-auto max-w-[1240px] px-6">
        <SectionHead
          center
          eyebrow="By hiring volume"
          title={
            <>
              Start where you are, <span className="text-violet">scale when you're ready</span>
            </>
          }
          lead="The same connected flow covers a single role and a thousand-applicant drive."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {VOLUMES.map(({ icon: Icon, tag, t, d }, k) => (
            <Reveal
              key={t}
              delay={k * 0.06}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-violet hover:shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-card text-violet shadow-soft">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-surface px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  {tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{t}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
              <div className="mt-5 flex items-center gap-2 text-xs font-bold text-teal">
                <Check className="h-3.5 w-3.5" aria-hidden="true" /> Same platform, no rebuild
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcome() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 lg:grid-cols-[1.25fr_1fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.22em] text-teal">
            <span className="h-px w-7 bg-teal" /> Outcomes
          </span>
          <Quote className="mt-6 h-9 w-9 text-teal/40" aria-hidden="true" />
          <blockquote className="mt-4 text-2xl font-bold leading-snug text-ink-foreground md:text-3xl">
            “{OUTCOME.quote}”
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-violet text-sm font-bold text-primary-foreground">
              {OUTCOME.who
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </div>
            <div>
              <div className="font-bold text-ink-foreground">{OUTCOME.who}</div>
              <div className="text-sm text-ink-foreground/60">{OUTCOME.role}</div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-3">
          {OUTCOME.stats.map((stat) => (
            <Reveal
              key={stat.l}
              className="flex items-center justify-between rounded-2xl border border-ink-foreground/10 bg-ink-foreground/5 px-6 py-5 backdrop-blur"
            >
              <span className="text-sm text-ink-foreground/70">{stat.l}</span>
              <span className="text-3xl font-extrabold tracking-tight text-ink-foreground">
                {stat.v}
              </span>
            </Reveal>
          ))}
          <Reveal className="flex items-center gap-2 rounded-2xl border border-ink-foreground/10 bg-ink-foreground/5 px-6 py-4 text-xs font-semibold text-ink-foreground/60 backdrop-blur">
            <Briefcase className="h-4 w-4 text-teal" aria-hidden="true" /> Measured across live
            hiring teams, not a lab benchmark
          </Reveal>
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
            Bring your hardest role.{" "}
            <span className="text-gradient">We'll bring the shortlist.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell us what you're hiring for and we'll show the flow that fits your team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Btn>
              Book a demo <ArrowRight className="h-4 w-4" />
            </Btn>
            <Btn variant="ghost" href="/platform">
              Explore the platform
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Solutions />
        <Volumes />
        <Outcome />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
