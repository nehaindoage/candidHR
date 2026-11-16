import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Gauge,
  ListOrdered,
  Megaphone,
  Sparkles,
  Users,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";
import howItWorksVideo from "@/assets/candidhr_how_it_works.mp4";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionHead } from "@/components/site/SectionHead";
import { Btn, Reveal } from "@/components/landing/Landing";

type Owner = "auto" | "team" | "both";

const STEPS: {
  icon: LucideIcon;
  t: string;
  d: string;
  owner: Owner;
  outcome: string;
}[] = [
  {
    icon: Sparkles,
    t: "Create the job",
    d: "Describe the role in a few lines and AI drafts the description, requirements and the scoring rubric you'll use throughout.",
    owner: "both",
    outcome: "A ready-to-post job with one consistent rubric",
  },
  {
    icon: Megaphone,
    t: "Post everywhere",
    d: "Publish to your careers page, 1,000+ job boards and every connected ATS from a single click, with duplicates removed.",
    owner: "auto",
    outcome: "Maximum reach with no double-postings",
  },
  {
    icon: Users,
    t: "Source & invite",
    d: "Matching profiles from a 2B+ talent pool are invited automatically, alongside everything that comes inbound.",
    owner: "auto",
    outcome: "A wider pool without manual sourcing",
  },
  {
    icon: Gauge,
    t: "Screen resumes",
    d: "Every resume is read, matched and scored against the role, with deal-breakers flagged before anyone opens a file.",
    owner: "auto",
    outcome: "A ranked applicant list, not a pile of PDFs",
  },
  {
    icon: ClipboardCheck,
    t: "Assess skills",
    d: "Proctored aptitude and coding tests run on the candidate's own time, with webcam, screen and anomaly monitoring.",
    owner: "auto",
    outcome: "Verified ability, not just claimed ability",
  },
  {
    icon: Video,
    t: "AI interviews",
    d: "Structured video rounds are transcribed and scored against the same rubric used in screening.",
    owner: "auto",
    outcome: "Comparable evidence from every candidate",
  },
  {
    icon: ListOrdered,
    t: "Ranked shortlist",
    d: "Every signal is combined into one ranked shortlist, synced to your ATS with reasons a hiring manager can read.",
    owner: "team",
    outcome: "Hire-ready candidates your managers trust",
  },
];

const OWNER_STYLES: Record<Owner, { label: string; className: string; icon: LucideIcon }> = {
  auto: {
    label: "Automated",
    className: "border-teal/30 bg-teal/15 text-teal",
    icon: Zap,
  },
  team: {
    label: "Your team",
    className: "border-violet/40 bg-violet/15 text-violet",
    icon: Users,
  },
  both: {
    label: "AI + you",
    className: "border-border bg-surface text-ink",
    icon: Sparkles,
  },
};

function OwnerChip({ owner, dark = false }: { owner: Owner; dark?: boolean }) {
  const { label, className, icon: Icon } = OWNER_STYLES[owner];
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold ${
        dark ? "border-ink-foreground/20 bg-ink-foreground/10 text-ink-foreground" : className
      }`}
    >
      <Icon className="h-3 w-3" aria-hidden="true" />
      {label}
    </span>
  );
}

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
              <span className="pulse-dot h-2 w-2 rounded-full bg-teal" /> How it works
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.04] text-ink md:text-[60px]">
              From job created to <span className="text-gradient">ranked shortlist.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Seven steps that used to take weeks now run in one connected flow. Your team approves
              the job at the start and meets the shortlist at the end — everything between happens
              on its own.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
            <Btn>
              Book a demo{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Btn>
            <Btn variant="ghost" href="#walkthrough">
              Watch the walkthrough
            </Btn>
          </Reveal>
          <Reveal
            delay={0.2}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Zap className="h-4 w-4 text-teal" /> 5 of 7 steps run automatically · first matches in
            about 60 seconds
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-[28px] border border-border bg-card p-6 shadow-lift">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              <span>Senior Data Engineer</span>
              <span className="flex items-center gap-1 text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Live
              </span>
            </div>
            <ol className="mt-5 space-y-3.5">
              {STEPS.map(({ icon: Icon, t, owner }, k) => (
                <li key={t} className="flex items-center gap-3">
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${
                      k < 5
                        ? "bg-violet-soft text-violet"
                        : k === 5
                          ? "bg-teal-soft text-ink"
                          : "bg-surface text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-ink">{t}</span>
                    <span className="block text-[11px] text-muted-foreground">
                      {k < 6 ? "Complete" : "Ready for review"}
                    </span>
                  </span>
                  <OwnerChip owner={owner} />
                </li>
              ))}
            </ol>
            <div className="mt-5 flex items-center gap-2 rounded-xl bg-surface px-4 py-3 text-xs font-semibold text-muted-foreground">
              <ListOrdered className="h-4 w-4 text-violet" /> 12 candidates on the shortlist, all
              with evidence
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <SectionHead
          eyebrow="Step by step"
          title={
            <>
              Every stage, <span className="text-violet">and who owns it</span>
            </>
          }
          lead="One connected flow, from the first draft of the job to the shortlist in your ATS."
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-6 left-7 top-6 w-px bg-gradient-to-b from-violet via-teal to-violet opacity-25" />
          <ol className="space-y-4">
            {STEPS.map(({ icon: Icon, t, d, owner, outcome }, k) => (
              <li key={t} className="relative grid grid-cols-[56px_1fr] gap-4 sm:gap-5">
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-border bg-card text-violet shadow-soft">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <Reveal
                  delay={Math.min(k * 0.04, 0.2)}
                  className="rounded-3xl border border-border bg-card p-5 transition hover:shadow-soft sm:p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                      Step 0{k + 1}
                    </span>
                    <OwnerChip owner={owner} />
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-ink">{t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
                  <div className="mt-4 flex items-start gap-2 border-t border-border pt-3 text-xs text-muted-foreground">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
                    <span>
                      <span className="font-bold text-ink">Outcome:</span> {outcome}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Touchpoints() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.22em] text-teal">
            <span className="h-px w-7 bg-teal" /> Your team stays in control
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] text-ink-foreground md:text-5xl">
            Two touchpoints. <span className="text-teal">Everything else runs itself.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-foreground/70">
            Automation handles the volume; your recruiters handle the judgement. Approve the role
            and the rubric up front, then meet a shortlist you can defend.
          </p>
          <div className="mt-7">
            <Btn variant="ghost" href="/book-a-demo">
              See it on your own job <ArrowRight className="h-4 w-4" />
            </Btn>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {[
            {
              icon: Sparkles,
              tag: "Before launch",
              t: "Approve the job and the rubric",
              d: "Review the AI-drafted description and the criteria every candidate will be scored on.",
            },
            {
              icon: Users,
              tag: "After the shortlist",
              t: "Interview and decide",
              d: "Meet only the ranked, evidence-backed candidates — and make the call with your own team.",
            },
          ].map(({ icon: Icon, tag, t, d }, k) => (
            <Reveal
              key={t}
              delay={k * 0.08}
              className="rounded-3xl border border-ink-foreground/10 bg-ink-foreground/5 p-6 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink-foreground/10 text-teal">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-ink-foreground/50">
                  {tag}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink-foreground">{t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-foreground/65">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Walkthrough() {
  return (
    <section id="walkthrough" className="relative overflow-hidden bg-surface py-24">
      <div className="aurora">
        <div className="blob b2" />
      </div>
      <div className="relative mx-auto max-w-[1240px] px-6">
        <SectionHead
          center
          eyebrow="See it in action"
          title={
            <>
              Watch the journey <span className="text-violet">end to end</span>
            </>
          }
          lead="A short walkthrough of the real product, from posting the job to the final shortlist."
        />
        <Reveal className="mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-border bg-card p-2 shadow-lift">
          <video
            src={howItWorksVideo}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="aspect-video w-full rounded-[22px] bg-muted"
          />
        </Reveal>
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
            Bring a real job description.{" "}
            <span className="text-gradient">See matches in 60 seconds.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We'll run your role through the same seven steps — live, on the call.
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

export function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Timeline />
        <Touchpoints />
        <Walkthrough />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
