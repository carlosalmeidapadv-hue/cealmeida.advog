import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y" style={{ borderColor: "var(--border-subtle)" }}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderColor: "var(--border-subtle)" }} className="border-b">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-serif text-lg md:text-xl" style={{ color: "var(--text-primary)" }}>
                {it.q}
              </span>
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border"
                style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
              >
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pr-12 text-[15px]" style={{ color: "var(--text-secondary)" }}>
                {it.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}