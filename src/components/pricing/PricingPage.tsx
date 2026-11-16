import { useState } from "react";
import { ArrowRight, Check, Minus, Plus, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SectionHead } from "@/components/site/SectionHead";
import { Btn, Reveal } from "@/components/landing/Landing";
import { PLANS } from "@/components/landing/data";

const COMPARE: { label: string; values: (string | boolean)[] }[] = [
  { label: "Active jobs", values: ["1", "10", "Unlimited"] },
  { label: "AI resume screening", values: [true, "Unlimited", "Unlimited"] },
  { label: "Automated video interviews", values: [true, true, true] },
  { label: "Aptitude assessments", values: ["Standard", "Proctored", "Proctored + custom"] },
  { label: "Coding tests", values: [false, true, true] },
  { label: "ATS integrations", values: ["Standard sync", "153 two-way", "153 two-way + custom"] },
  { label: "Job boards", values: [false, "1,000+", "1,000+ and niche"] },
  { label: "2B+ talent pool", values: [false, false, true] },
  { label: "White label & SLA", values: [false, false, true] },
  { label: "Support", values: ["Email", "Priority", "Dedicated CSM"] },
];

const PRICING_FAQ = [
  {
    q: "Is there a free trial?",
    a: "Yes. The Free plan covers one active job with AI screening and video interviews, for as long as you need to prove the value on a real role.",
  },
  {
    q: "What counts as an active job?",
    a: "A role is active while it is accepting applications or running assessments. Once you close or fill it, the seat is released for your next opening.",
  },
  {
    q: "Can we change plans later?",
    a: "Plans can be upgraded at any time and downgraded at the end of a billing period. Annual billing saves 20% over monthly.",
  },
  {
    q: "Do you offer annual or enterprise contracts?",
    a: "Yes. Annual billing is available on every paid plan, and Enterprise adds custom terms, security review and a dedicated account manager.",
  },
];

function PriceToggle({ annual, onChange }: { annual: boolean; onChange: (next: boolean) => void }) {
  return (
    <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-border bg-surface p-1">
      <button
        type="button"
        onClick={() => onChange(false)}
        className={`rounded-full px-5 py-2 text-sm font-bold transition ${
          annual ? "text-muted-foreground hover:text-ink" : "bg-ink text-ink-foreground"
        }`}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => onChange(true)}
        className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold transition ${
          annual ? "bg-ink text-ink-foreground" : "text-muted-foreground hover:text-ink"
        }`}
      >
        Annual
        <span className="rounded-full bg-teal-soft px-2 py-0.5 text-[10px] font-extrabold text-ink">
          −20%
        </span>
      </button>
    </div>
  );
}

function Hero() {
  const [annual, setAnnual] = useState(false);

  const priceFor = (name: string) => {
    if (name === "Free") return "$0";
    if (name === "Enterprise") return "Custom";
    return annual ? "$319" : "$399";
  };

  const perFor = (name: string) => {
    if (name === "Free") return "/ forever";
    if (name === "Enterprise") return "pricing";
    return annual ? "/ mo, billed yearly" : "/ month";
  };

  return (
    <section className="relative overflow-hidden bg-surface pb-24 pt-16 md:pt-20">
      <div className="aurora">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>
      <div className="grid-fade" />

      <div className="relative mx-auto max-w-[1240px] px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Pricing</span>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] text-ink md:text-[56px]">
            Plans that scale <span className="text-gradient">with your hiring.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Try screening and AI interviews on a real role for free. Upgrade when the shortlist
            starts paying for itself.
          </p>
          <PriceToggle annual={annual} onChange={setAnnual} />
          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-teal" /> No setup fees
            </span>
            <span>Cancel anytime</span>
            <span>SOC 2 Type II certified</span>
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {PLANS.map((plan, k) => {
            const isGrowth = plan.n === "Growth";
            return (
              <Reveal
                key={plan.n}
                delay={k * 0.08}
                className={`relative flex flex-col rounded-3xl p-8 ${
                  isGrowth
                    ? "bg-ink text-ink-foreground shadow-lift md:-translate-y-4"
                    : "border border-border bg-card text-ink"
                }`}
              >
                {isGrowth && (
                  <span className="absolute right-6 top-6 rounded-full bg-teal px-3 py-1 text-[11px] font-bold text-ink">
                    Most popular
                  </span>
                )}
                <div className="text-sm font-bold uppercase tracking-widest">{plan.n}</div>
                <div className="mt-4 flex flex-wrap items-baseline gap-1">
                  <span className="text-5xl font-extrabold tracking-tight">{priceFor(plan.n)}</span>
                  <span className="text-sm opacity-70">{perFor(plan.n)}</span>
                </div>
                <p
                  className={`mt-3 text-sm leading-relaxed ${isGrowth ? "opacity-75" : "text-muted-foreground"}`}
                >
                  {plan.d}
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {plan.f.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          isGrowth ? "bg-teal" : "bg-violet"
                        }`}
                      />
                      <span className={isGrowth ? "text-ink-foreground/85" : "text-ink"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/book-a-demo"
                  className={`mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full font-bold transition hover:-translate-y-0.5 ${
                    isGrowth
                      ? "bg-primary text-primary-foreground shadow-violet"
                      : "border border-border hover:border-violet"
                  }`}
                >
                  {plan.cta}
                  {isGrowth && <ArrowRight className="h-4 w-4" />}
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 text-center text-xs text-muted-foreground">
          Prices in USD. Annual billing is charged once per year and saves 20%. Taxes may apply.
        </Reveal>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <SectionHead
          eyebrow="Compare plans"
          title={
            <>
              Everything each plan <span className="text-violet">includes</span>
            </>
          }
          lead="The flow is the same on every plan — the difference is capacity, proctoring and support."
        />

        <Reveal className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-border bg-surface/70 text-left">
                  <th scope="col" className="px-6 py-4 font-bold text-ink">
                    Features
                  </th>
                  {PLANS.map((plan) => (
                    <th
                      key={plan.n}
                      scope="col"
                      className="px-6 py-4 text-center font-bold text-ink"
                    >
                      {plan.n}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {COMPARE.map((row) => (
                  <tr key={row.label} className="transition hover:bg-surface/50">
                    <th scope="row" className="px-6 py-3.5 text-left font-semibold text-ink">
                      {row.label}
                    </th>
                    {row.values.map((value, k) => (
                      <td key={k} className="px-6 py-3.5 text-center text-muted-foreground">
                        {value === true ? (
                          <Check className="mx-auto h-4 w-4 text-teal" aria-label="Included" />
                        ) : value === false ? (
                          <Minus
                            className="mx-auto h-4 w-4 text-muted-foreground/40"
                            aria-label="Not included"
                          />
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PricingFaq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <span className="eyebrow">Pricing FAQ</span>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] text-ink md:text-5xl">
            Questions, <span className="text-violet">answered</span>
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
            Still unsure which plan fits? Bring your hiring volume to a demo and we'll map it for
            you.
          </p>
          <div className="mt-7">
            <Btn variant="ghost" href="/book-a-demo">
              Talk to us <ArrowRight className="h-4 w-4" />
            </Btn>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="divide-y divide-border border-y border-border">
          {PRICING_FAQ.map((item, k) => (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(open === k ? -1 : k)}
                aria-expanded={open === k}
                className="flex w-full items-center justify-between gap-4 py-6 text-left text-lg font-bold text-ink"
              >
                {item.q}
                {open === k ? (
                  <Minus className="h-5 w-5 shrink-0 text-violet" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 text-violet" />
                )}
              </button>
              {open === k && (
                <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              )}
            </div>
          ))}
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
            Start free on a real role.{" "}
            <span className="text-gradient">Upgrade when it pays off.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            No setup fees, no long contract, and a shortlist you can measure against.
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

export function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Comparison />
        <PricingFaq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
