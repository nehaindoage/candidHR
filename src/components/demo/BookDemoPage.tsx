import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Check,
  MessagesSquare,
  Sparkles,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/landing/Landing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const EXPECTATIONS = [
  {
    icon: CalendarClock,
    t: "30 minutes, no slides",
    d: "A working session on your roles, not a deck. Bring one live job and we'll run it together.",
  },
  {
    icon: Sparkles,
    t: "See matches on your own job",
    d: "Watch sourcing, screening and assessments produce a ranked shortlist from your real description.",
  },
  {
    icon: MessagesSquare,
    t: "A plan you can hand over",
    d: "Leave with a rollout plan for your team, ATS setup and the first roles worth automating.",
  },
];

const CUSTOMER_STATS = [
  { v: "7,000+", l: "applicants processed" },
  { v: "80", l: "hires made" },
  { v: "<7 days", l: "average lead time per hire" },
];

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor} className="text-xs font-bold text-ink">
        {label}
      </Label>
      {children}
    </div>
  );
}

function DemoForm() {
  const [submitted, setSubmitted] = useState<{ name: string; email: string } | null>(null);

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center shadow-lift">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-teal-soft text-teal">
          <Check className="h-7 w-7" />
        </span>
        <h2 className="mt-6 text-2xl font-extrabold text-ink">
          Thanks{submitted.name ? `, ${submitted.name.split(" ")[0]}` : ""} — you're in.
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          We'll email <span className="font-semibold text-ink">{submitted.email}</span> within one
          business day to set up a time that works for your team.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-violet transition hover:-translate-y-0.5"
          >
            Back to home
          </Link>
          <Link
            to="/platform"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-bold text-ink transition hover:border-violet"
          >
            Explore the platform
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      className="rounded-3xl border border-border bg-card p-7 shadow-lift md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setSubmitted({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
        });
      }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-extrabold text-ink">Book your walkthrough</h2>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-soft px-2.5 py-1 text-[11px] font-bold text-ink">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-teal" /> Replies in 1 day
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Tell us a little about your hiring and we'll come prepared with your roles.
      </p>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" htmlFor="name">
            <Input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Rhea Kapoor"
              className="h-11 rounded-xl bg-background"
            />
          </Field>
          <Field label="Work email" htmlFor="email">
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="rhea@company.com"
              className="h-11 rounded-xl bg-background"
            />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Company" htmlFor="company">
            <Input
              id="company"
              name="company"
              required
              autoComplete="organization"
              placeholder="Company name"
              className="h-11 rounded-xl bg-background"
            />
          </Field>
          <Field label="Hiring team size" htmlFor="team-size">
            <select
              id="team-size"
              name="teamSize"
              required
              defaultValue=""
              className="flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="" disabled>
                Select a range
              </option>
              <option value="1-5">1–5 people</option>
              <option value="6-20">6–20 people</option>
              <option value="21-50">21–50 people</option>
              <option value="50+">50+ people</option>
            </select>
          </Field>
        </div>

        <Field label="What would you like to see? (optional)" htmlFor="message">
          <Textarea
            id="message"
            name="message"
            rows={3}
            placeholder="e.g. high-volume campus hiring, or one senior engineering role"
            className="resize-none rounded-xl bg-background"
          />
        </Field>
      </div>

      <Button
        type="submit"
        className="mt-6 h-12 w-full rounded-full text-[15px] font-bold shadow-violet"
      >
        Request my demo <ArrowRight className="h-4 w-4" />
      </Button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
        <BadgeCheck className="h-3.5 w-3.5 text-teal" /> No spam. No obligation. Cancel anytime.
      </p>
    </form>
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

      <div className="relative mx-auto grid max-w-[1240px] items-start gap-12 px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-semibold text-ink shadow-soft backdrop-blur">
            <span className="pulse-dot h-2 w-2 rounded-full bg-teal" /> Book a demo
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.04] text-ink md:text-[56px]">
            Bring a role. <br />
            <span className="text-gradient">Meet your shortlist.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            See CandidHR.ai on your own job description — sourcing, screening, assessments and AI
            interviews, all in one 30-minute walkthrough.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "See ranked matches in about 60 seconds",
              "Watch the full candidate journey on your role",
              "Get a rollout plan for your team and ATS",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-[15px] text-ink">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-soft text-teal">
                  <Check className="h-3 w-3" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-ink">
            <BadgeCheck className="h-4 w-4 text-teal" /> SOC 2 Type II certified · Trusted by
            growing hiring teams
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <DemoForm />
        </Reveal>
      </div>
    </section>
  );
}

function WhatHappens() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">What to expect</span>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] text-ink md:text-5xl">
            A working session, <span className="text-violet">not a sales pitch</span>
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
            Thirty minutes with a product specialist and your own job description.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {EXPECTATIONS.map(({ icon: Icon, t, d }, k) => (
            <Reveal
              key={t}
              delay={k * 0.06}
              className="rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-soft text-violet">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.22em] text-teal">
            <span className="h-px w-7 bg-teal" /> Customer results
          </span>
          <blockquote className="mt-5 text-2xl font-bold leading-snug text-ink-foreground md:text-3xl">
            “No more screening thousands of resumes manually, countless screening calls, scheduling
            nightmares and candidate ghosting.”
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-violet text-sm font-bold text-primary-foreground">
              NK
            </div>
            <div>
              <div className="font-bold text-ink-foreground">Nawal Karkal</div>
              <div className="text-sm text-ink-foreground/60">
                Group Director HR, Diacto Technologies
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-3">
          {CUSTOMER_STATS.map((s) => (
            <Reveal
              key={s.l}
              className="flex items-center justify-between rounded-2xl border border-ink-foreground/10 bg-ink-foreground/5 px-6 py-5 backdrop-blur"
            >
              <span className="text-sm text-ink-foreground/70">{s.l}</span>
              <span className="text-3xl font-extrabold tracking-tight text-ink-foreground">
                {s.v}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BookDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <WhatHappens />
        <Proof />
      </main>
      <Footer />
    </div>
  );
}
