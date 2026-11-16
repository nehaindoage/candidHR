import { useMemo, useState } from "react";
import { ArrowRight, Minus, Plus, Search, X } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Btn, Reveal } from "@/components/landing/Landing";

const FAQ_DATA = [
  {
    cat: "Getting started",
    items: [
      {
        q: "How do we get started?",
        a: "Bring a live job description and you'll see ranked matches in about 60 seconds. Connecting your ATS is optional at first, and the Free plan covers one active role with no setup fee.",
      },
      {
        q: "Do we need to replace our ATS?",
        a: "No. CandidHR.ai syncs two-way with 153 ATS platforms, so shortlists, statuses and notes land where your team already works.",
      },
      {
        q: "How long does implementation take?",
        a: "Free and Growth teams are live in minutes with standard ATS sync. Enterprise setups — white label, custom fields and SSO — typically take one to two weeks.",
      },
      {
        q: "Can we try it before paying?",
        a: "Yes. The Free plan includes AI screening and automated video interviews on one active job for as long as you need to prove the value.",
      },
    ],
  },
  {
    cat: "Screening & AI",
    items: [
      {
        q: "How does AI screening decide the ranking?",
        a: "It reads the job description and your criteria, then scores skills, experience and application signals. Recruiters can adjust the weights and override any ranking.",
      },
      {
        q: "Can we see why a candidate ranked where they did?",
        a: "Yes. Every candidate shows the matched skills and experience behind their score, along with the gaps — and the reasoning is kept in an audit trail.",
      },
      {
        q: "How do you handle bias in screening?",
        a: "You calibrate the rubric before launch, proxy signals are hidden, and fairness is monitored across the pipeline. No candidate is rejected without human review.",
      },
      {
        q: "What does the AI process?",
        a: "Resumes in common formats (PDF and DOCX), application answers, assessment results and interview responses — all scored against the same role criteria.",
      },
    ],
  },
  {
    cat: "Interviews & assessments",
    items: [
      {
        q: "Are video interviews live or recorded?",
        a: "They're automated and on-demand: candidates record structured answers whenever suits them, and your team reviews the shortlist instead of scheduling every first call.",
      },
      {
        q: "What assessments are available?",
        a: "Aptitude, technical and coding assessments, with proctoring available on Growth and Enterprise plans and custom assessments for enterprise teams.",
      },
      {
        q: "How do you prevent cheating?",
        a: "Proctoring, tab and face checks, randomized question order and code similarity checks work together, with flags surfaced to your reviewers.",
      },
      {
        q: "Can candidates request accommodations?",
        a: "Yes. You can extend time, switch formats, and allow pause and resume on a per-candidate basis, and our support team can help set it up.",
      },
    ],
  },
  {
    cat: "Integrations",
    items: [
      {
        q: "Which ATS platforms do you support?",
        a: "153 platforms, including Greenhouse, Lever, Workday, SAP SuccessFactors and Zoho Recruit. If yours isn't listed, we can build a sync on Enterprise.",
      },
      {
        q: "Do you post jobs to job boards?",
        a: "Yes — 1,000+ general and niche boards on Growth and Enterprise, with performance tracked per source so you can spend where the hires come from.",
      },
      {
        q: "Is there an API and webhooks?",
        a: "A REST API and webhooks are included on Growth for standard sync and custom triggers, with custom endpoints and higher limits on Enterprise.",
      },
      {
        q: "Can we import existing candidates?",
        a: "Bulk CSV import and talent-pool sync are supported, with automatic de-duplication against candidates already in your pipeline.",
      },
    ],
  },
  {
    cat: "Security & compliance",
    items: [
      {
        q: "Is candidate data secure?",
        a: "CandidHR.ai is SOC 2 Type II certified, with encryption in transit and at rest, role-based access and full audit logs.",
      },
      {
        q: "Where is data stored?",
        a: "Enterprise customers can choose regional hosting in the US, EU or APAC, with data-residency commitments written into the contract.",
      },
      {
        q: "Who can see candidate data?",
        a: "Access is scoped by role, job and team. Admins control permissions and can export or delete data according to your policy.",
      },
      {
        q: "How long do you retain data?",
        a: "Retention windows are configurable, deletion can be automated, and we support data-subject requests within your required timelines.",
      },
    ],
  },
  {
    cat: "Pricing & plans",
    items: [
      {
        q: "What counts as an active job?",
        a: "A role is active while it's accepting applications or running assessments. Once it's filled or closed, the seat is released for your next opening.",
      },
      {
        q: "Can we change plans later?",
        a: "Upgrade at any time, or downgrade at the end of a billing period. Annual billing saves 20% compared with monthly.",
      },
      {
        q: "Do you charge per candidate?",
        a: "No. Standard plans don't bill per candidate — screening is unlimited on Growth and Enterprise, so a big applicant pool doesn't blow up the invoice.",
      },
      {
        q: "Do you offer annual or enterprise contracts?",
        a: "Yes. Annual billing is available on every paid plan, and Enterprise adds custom terms, a security review and a dedicated account manager.",
      },
    ],
  },
];

const ALL = "All questions";

function Hero({ query, onQuery }: { query: string; onQuery: (value: string) => void }) {
  return (
    <section className="relative overflow-hidden bg-surface pb-16 pt-16 md:pb-20 md:pt-20">
      <div className="aurora">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>
      <div className="grid-fade" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="eyebrow">Help center</span>
          <h1 className="mt-4 text-[34px] font-extrabold leading-[1.08] text-ink sm:text-5xl sm:leading-[1.05] md:text-[56px]">
            Everything you wanted <span className="text-gradient">to ask.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Answers on screening, interviews, integrations, security and plans. If something is
            missing, a real person will pick it up.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-8 max-w-xl">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => onQuery(event.target.value)}
              placeholder="Search FAQs — ATS, pricing, proctoring"
              aria-label="Search frequently asked questions"
              className="h-14 w-full rounded-full border border-border bg-card pl-14 pr-14 text-[15px] text-ink shadow-soft outline-none transition placeholder:text-muted-foreground/70 focus:border-violet focus:ring-4 focus:ring-violet/15"
            />
            {query && (
              <button
                type="button"
                onClick={() => onQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-muted-foreground transition hover:bg-surface hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqList() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(ALL);
  const [open, setOpen] = useState<string | null>(null);

  const trimmed = query.trim().toLowerCase();

  const groups = useMemo(
    () =>
      FAQ_DATA.filter((group) => active === ALL || group.cat === active)
        .map((group) => ({
          ...group,
          items: group.items.filter(
            (item) =>
              !trimmed ||
              item.q.toLowerCase().includes(trimmed) ||
              item.a.toLowerCase().includes(trimmed),
          ),
        }))
        .filter((group) => group.items.length > 0),
    [active, trimmed],
  );

  const total = groups.reduce((sum, group) => sum + group.items.length, 0);

  const filters = [ALL, ...FAQ_DATA.map((group) => group.cat)];

  return (
    <>
      <Hero query={query} onQuery={setQuery} />

      <section className="overflow-x-clip py-14 md:py-20">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 px-6 lg:grid-cols-[260px_1fr] lg:gap-10">
          <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <div className="pb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Browse by topic
            </div>
            <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {filters.map((filter) => {
                const isActive = active === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActive(filter)}
                    aria-pressed={isActive}
                    className={`flex items-center justify-between gap-2.5 whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-semibold transition sm:px-4 sm:py-2.5 sm:text-sm lg:w-full lg:rounded-xl lg:px-4 ${
                      isActive
                        ? "bg-ink text-ink-foreground"
                        : "border border-border bg-card text-ink hover:border-violet"
                    }`}
                  >
                    {filter}
                    <span
                      className={`hidden text-xs lg:inline ${
                        isActive ? "text-ink-foreground/60" : "text-muted-foreground"
                      }`}
                    >
                      {filter === ALL
                        ? FAQ_DATA.reduce((sum, group) => sum + group.items.length, 0)
                        : (FAQ_DATA.find((group) => group.cat === filter)?.items.length ?? 0)}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-muted-foreground" aria-live="polite">
                {total} {total === 1 ? "answer" : "answers"}
                {trimmed && (
                  <>
                    {" "}
                    for <span className="text-ink">“{query.trim()}”</span>
                  </>
                )}
              </p>
              {(trimmed || active !== ALL) && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setActive(ALL);
                  }}
                  className="text-sm font-bold text-violet transition hover:text-ink"
                >
                  Reset filters
                </button>
              )}
            </div>

            {groups.length === 0 ? (
              <div className="mt-6 rounded-2xl border border-dashed border-border bg-card p-8 text-center sm:rounded-3xl sm:p-12">
                <p className="text-lg font-bold text-ink">No answers for that search</p>
                <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
                  Try a broader term like “ATS”, “pricing” or “proctoring” — or ask us directly.
                </p>
                <div className="mt-6">
                  <Btn variant="ghost" href="/book-a-demo">
                    Ask us <ArrowRight className="h-4 w-4" />
                  </Btn>
                </div>
              </div>
            ) : (
              <div className="mt-6 space-y-8 md:space-y-10">
                {groups.map((group) => (
                  <Reveal key={group.cat}>
                    <h2 className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal">
                      {group.cat}
                    </h2>
                    <div className="mt-3 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-soft sm:rounded-3xl">
                      {group.items.map((item) => {
                        const id = `${group.cat}-${item.q}`;
                        const isOpen = open === id;
                        return (
                          <div key={id}>
                            <button
                              type="button"
                              onClick={() => setOpen(isOpen ? null : id)}
                              aria-expanded={isOpen}
                              aria-controls={`${id}-answer`}
                              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left sm:px-6 sm:py-5"
                            >
                              <span className="min-w-0 break-words text-[15px] font-bold leading-snug text-ink">
                                {item.q}
                              </span>
                              <span
                                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition ${
                                  isOpen
                                    ? "border-violet bg-violet text-primary-foreground"
                                    : "border-border text-violet"
                                }`}
                              >
                                {isOpen ? (
                                  <Minus className="h-4 w-4" />
                                ) : (
                                  <Plus className="h-4 w-4" />
                                )}
                              </span>
                            </button>
                            {isOpen && (
                              <p
                                id={`${id}-answer`}
                                className="break-words px-5 pb-5 pr-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6 sm:pr-16"
                              >
                                {item.a}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Support() {
  return (
    <section className="px-4 pb-16 sm:px-6 md:pb-24">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[24px] bg-ink px-6 py-12 sm:rounded-[32px] sm:px-8 sm:py-16 md:px-14">
        <div className="aurora">
          <div className="blob b1" />
          <div className="blob b2" />
        </div>
        <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.22em] text-teal">
              <span className="h-px w-7 bg-teal" /> Still stuck
            </span>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight text-ink-foreground sm:text-3xl md:text-4xl">
              Didn't find your answer?
            </h2>
            <p className="mt-3 max-w-lg text-sm text-ink-foreground/60 sm:text-base">
              Tell us what you're trying to do and we'll walk you through it on a short call — no
              scripted demo required.
            </p>
          </div>
          <div className="flex flex-col gap-3 [&>a]:w-full [&>a]:justify-center sm:flex-row sm:flex-wrap sm:[&>a]:w-auto md:justify-end">
            <Btn>
              Talk to us <ArrowRight className="h-4 w-4" />
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

export function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <FaqList />
        <Support />
      </main>
      <Footer />
    </div>
  );
}
