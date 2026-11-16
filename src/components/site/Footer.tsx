import { Link } from "@tanstack/react-router";
import { Link2, Mail, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo_HR.png";

const COLUMNS: { h: string; l: [string, string][] }[] = [
  {
    h: "Product",
    l: [
      ["Platform", "/platform"],
      ["How it works", "/how-it-works"],
      ["Integrations", "/#integrations"],
      ["Pricing", "/pricing"],
    ],
  },
  {
    h: "Company",
    l: [
      ["Customer results", "/#results"],
      ["FAQ", "/faq"],
      ["Book a demo", "/book-a-demo"],
    ],
  },
  {
    h: "Connect",
    l: [
      ["YouTube", "https://youtube.com/@CandidHR.AIOfficial"],
      ["info@candidhr.ai", "mailto:info@candidhr.ai"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2 text-xl font-extrabold text-ink">
            <img src={logo} alt="" className="h-8 w-auto" />
            CandidHR<span className="text-violet">.ai</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            AI recruitment software that sources, screens, assesses and interviews candidates before
            your first round.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-ink">
            <ShieldCheck className="h-4 w-4 text-teal" /> SOC 2 Type II certified
          </div>
        </div>
        {COLUMNS.map((c) => (
          <div key={c.h}>
            <div className="text-xs font-bold uppercase tracking-widest text-ink">{c.h}</div>
            <ul className="mt-4 space-y-3 text-sm">
              {c.l.map(([t, h]) => (
                <li key={t}>
                  <a
                    href={h}
                    className="flex items-center gap-2 text-muted-foreground transition hover:text-violet"
                    {...(h.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                  >
                    {h.startsWith("mailto") ? (
                      <Mail className="h-4 w-4" />
                    ) : h.startsWith("http") ? (
                      <Link2 className="h-4 w-4" />
                    ) : null}
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3 px-6 py-6 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Diacto Labs Private Limited. All rights reserved.
          </span>
          <span>Made for hiring teams with more applicants than time.</span>
        </div>
      </div>
    </footer>
  );
}
