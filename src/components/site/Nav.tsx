import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo_HR.png";

const LINKS = [
  { label: "Platform", to: "/platform" as const },
  { label: "How it works", to: "/" as const, hash: "how-it-works" },
  { label: "Results", to: "/" as const, hash: "results" },
  { label: "Integrations", to: "/" as const, hash: "integrations" },
  { label: "FAQ", to: "/" as const, hash: "faq" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-ink"
        >
          <img src={logo} alt="" className="h-8 w-auto" />
          CandidHR<span className="text-violet">.ai</span>
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
        <Link
          to="/book-a-demo"
          className="inline-flex h-10 items-center rounded-full bg-ink px-5 text-sm font-bold text-ink-foreground"
        >
          Book a demo
        </Link>
      </div>
    </header>
  );
}
