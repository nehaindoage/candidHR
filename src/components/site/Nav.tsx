import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo_HR.png";
import { SignInDialog } from "@/components/site/SignInDialog";

const LINKS = [
  { label: "Platform", to: "/platform" as const },
  { label: "How it works", to: "/how-it-works" as const },
  { label: "Results", to: "/" as const, hash: "results" },
  { label: "Integrations", to: "/" as const, hash: "integrations" },
  { label: "Pricing", to: "/pricing" as const },
  { label: "FAQ", to: "/faq" as const },
];

export function Nav() {
  const [signInOpen, setSignInOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-ink"
        >
          <img src={logo} alt="" className="h-8 w-auto" />
          <span className="hidden sm:inline">
            CandidHR<span className="text-violet">.ai</span>
          </span>
        </Link>
        <nav className="hidden gap-8 text-[14.5px] font-semibold text-ink md:flex">
          {LINKS.map((l) =>
            l.hash ? (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                className="transition-colors hover:text-violet"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.label}
                to={l.to}
                className="transition-colors hover:text-violet"
                activeProps={{ className: "text-violet" }}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setSignInOpen(true)}
            className="inline-flex h-10 items-center rounded-full border border-border bg-card px-3.5 text-[13px] font-bold text-ink transition hover:border-violet focus:outline-none focus-visible:ring-2 focus-visible:ring-violet sm:px-5 sm:text-sm"
          >
            Sign in
          </button>
          <Link
            to="/book-a-demo"
            className="inline-flex h-10 items-center rounded-full bg-ink px-4 text-[13px] font-bold text-ink-foreground transition hover:bg-ink/90 sm:px-5 sm:text-sm"
          >
            Book a demo
          </Link>
        </div>
      </div>

      <SignInDialog open={signInOpen} onOpenChange={setSignInOpen} />
    </header>
  );
}
