import type { ReactNode } from "react";
import { Reveal } from "@/components/landing/Landing";

export function SectionHead({
  eyebrow,
  title,
  lead,
  center,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] text-ink md:text-5xl">{title}</h2>
      {lead && <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">{lead}</p>}
    </Reveal>
  );
}
