import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoAsset from "@/assets/carlos-logo-transparent.png.asset.json";

const AREAS = [
  { to: "/direito-civil", label: "Direito Civil" },
  { to: "/processual-civil", label: "Direito Processual Civil" },
  { to: "/direito-trabalhista", label: "Direito Trabalhista" },
  { to: "/agronegocio", label: "Direito do Agronegócio" },
  { to: "/consultoria-empresarial", label: "Consultoria Empresarial" },
  { to: "/mediacao-arbitragem", label: "Direito do Consumidor" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        background: scrolled ? "#0F0F0F" : "rgba(15,15,15,0.55)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(201,168,76,0.35)",
      }}
    >
      <div className="container-x flex items-center justify-between py-3">
        <Link to="/" className="flex min-w-0 items-center">
          <img
            src={logoAsset.url}
            alt="Carlos Eduardo Almeida Advocacia"
            className="h-10 w-auto max-w-[210px] object-contain sm:h-12 sm:max-w-[260px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link to="/" className="text-sm hover:text-[var(--gold)] transition-colors">Início</Link>
          <Link to="/sobre" className="text-sm hover:text-[var(--gold)] transition-colors">Sobre</Link>
          <div
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm hover:text-[var(--gold)] transition-colors">
              Áreas de Atuação <ChevronDown className="h-4 w-4" />
            </button>
            {areasOpen && (
              <div
                className="absolute right-0 top-full min-w-[260px] rounded-sm border p-2"
                style={{ background: "#0F0F0F", borderColor: "var(--border-subtle)" }}
              >
                {AREAS.map((a) => (
                  <Link
                    key={a.to}
                    to={a.to}
                    className="block rounded-sm px-3 py-2 text-sm hover:bg-[#1A1A1A] hover:text-[var(--gold)]"
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/contato" className="text-sm hover:text-[var(--gold)] transition-colors">Contato</Link>
        </nav>

        <div className="hidden lg:block">
          <Link to="/contato" className="btn-gold text-sm">Agendar Consulta</Link>
        </div>

        <button
          className="lg:hidden text-[var(--text-primary)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden" style={{ background: "#0F0F0F", borderTop: "1px solid var(--border-subtle)" }}>
          <div className="container-x flex flex-col gap-1 py-4">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 text-sm">Início</Link>
            <Link to="/sobre" onClick={() => setOpen(false)} className="py-2 text-sm">Sobre</Link>
            <div className="pt-2 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
              Áreas de Atuação
            </div>
            {AREAS.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                onClick={() => setOpen(false)}
                className="py-2 pl-3 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {a.label}
              </Link>
            ))}
            <Link to="/contato" onClick={() => setOpen(false)} className="py-2 text-sm">Contato</Link>
            <Link to="/contato" onClick={() => setOpen(false)} className="btn-gold mt-3 text-sm">
              Agendar Consulta
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}