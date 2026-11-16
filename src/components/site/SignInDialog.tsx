import { useRef, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import logo from "@/assets/logo_HR.png";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const SUBDOMAIN_PATTERN = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;

export function SignInDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [subdomain, setSubdomain] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setSubdomain("");
      setError("");
    }
    onOpenChange(next);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const workspace = subdomain.trim().toLowerCase();
    if (!SUBDOMAIN_PATTERN.test(workspace)) {
      setError("Enter a valid subdomain — letters, numbers or hyphens, e.g. acme.");
      return;
    }
    setError("");
    window.location.assign(`https://${workspace}.candidhr.ai`);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          inputRef.current?.focus();
        }}
        className="w-[calc(100vw-2rem)] max-w-[440px] gap-0 rounded-[28px] border-ink-foreground/10 bg-ink p-0 text-ink-foreground shadow-lift sm:rounded-[28px] [&>button:last-child]:hidden"
      >
        <DialogClose
          aria-label="Close sign in dialog"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-ink-foreground/50 transition hover:bg-ink-foreground/10 hover:text-ink-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-violet"
        >
          <X className="h-4 w-4" />
        </DialogClose>

        <div className="px-6 pb-7 pt-10 sm:px-10 sm:pb-9 sm:pt-12">
          <div className="flex items-center justify-center gap-2">
            <img src={logo} alt="" className="h-8 w-auto" />
            <span className="text-xl font-extrabold tracking-tight">
              CandidHR<span className="text-violet">.ai</span>
            </span>
          </div>

          <DialogTitle className="mt-8 text-center text-[26px] font-extrabold leading-tight tracking-tight sm:text-[30px]">
            Sign in to your workspace
          </DialogTitle>
          <DialogDescription className="mt-3 text-center text-sm text-ink-foreground/55">
            Enter your organization's subdomain to continue
          </DialogDescription>

          <form onSubmit={handleSubmit} noValidate className="mt-8">
            <label
              htmlFor="workspace-subdomain"
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-foreground/45"
            >
              Subdomain
            </label>
            <div
              className={`mt-2.5 flex h-14 items-stretch overflow-hidden rounded-2xl border bg-ink-foreground/[0.05] transition focus-within:ring-4 ${
                error
                  ? "border-rose-400/60 focus-within:ring-rose-400/15"
                  : "border-ink-foreground/10 focus-within:border-violet/70 focus-within:ring-violet/15"
              }`}
            >
              <input
                ref={inputRef}
                id="workspace-subdomain"
                name="subdomain"
                type="text"
                inputMode="url"
                autoComplete="organization"
                autoCapitalize="none"
                spellCheck={false}
                placeholder="yourcompany"
                value={subdomain}
                onChange={(event) => {
                  setSubdomain(event.target.value);
                  if (error) setError("");
                }}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "workspace-subdomain-error" : undefined}
                className="min-w-0 flex-1 bg-transparent px-4 text-[15px] text-ink-foreground outline-none placeholder:text-ink-foreground/30"
              />
              <span className="flex items-center border-l border-ink-foreground/10 px-4 text-[15px] text-ink-foreground/45">
                .candidhr.ai
              </span>
            </div>
            {error && (
              <p id="workspace-subdomain-error" className="mt-2 text-xs text-rose-300">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 h-12 w-full rounded-full bg-primary text-[15px] font-bold text-primary-foreground transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Continue
            </button>

            <DialogClose
              type="button"
              className="mx-auto mt-4 block text-sm font-semibold text-ink-foreground/55 transition hover:text-ink-foreground"
            >
              Cancel
            </DialogClose>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
