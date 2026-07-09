import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  title,
  eyebrow,
  crumbs,
}: {
  title: string;
  eyebrow?: string;
  crumbs: { label: string; to?: string }[];
}) {
  return (
    <section
      className="relative pt-32 pb-16 md:pt-40 md:pb-20"
      style={{
        background:
          "linear-gradient(180deg, #0A0A0A 0%, #0F0F0F 60%, #0F0F0F 100%)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, var(--gold), transparent 50%), radial-gradient(circle at 80% 70%, var(--gold), transparent 45%)",
        }}
      />
      <div className="container-x relative">
        <nav className="flex items-center gap-1 text-xs" style={{ color: "var(--text-secondary)" }}>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1">
              {c.to ? (
                <Link to={c.to} className="hover:text-[var(--gold)]">
                  {c.label}
                </Link>
              ) : (
                <span style={{ color: "var(--gold)" }}>{c.label}</span>
              )}
              {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
            </span>
          ))}
        </nav>
        {eyebrow && <div className="eyebrow mt-6">{eyebrow}</div>}
        <h1 className="mt-3 max-w-3xl font-serif text-4xl md:text-5xl lg:text-6xl">{title}</h1>
      </div>
    </section>
  );
}