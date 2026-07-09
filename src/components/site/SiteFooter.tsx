import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Linkedin, Instagram, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/carlos-logo-transparent.png.asset.json";

const WHATSAPP_URL =
  "https://wa.me/5543996085456?text=Ol%C3%A1+Dr.+Carlos%2C+gostaria+de+agendar+uma+consulta";

export function SiteFooter() {
  return (
    <footer style={{ background: "#0A0A0A", borderTop: "1px solid var(--gold)" }}>
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={logoAsset.url}
              alt="Carlos Eduardo Almeida Advocacia"
              className="h-16 w-auto max-w-[260px] object-contain"
            />
            <div className="mt-2 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
              Advocacia · OAB/RJ 256.624
            </div>
            <p className="mt-4 text-sm" style={{ color: "var(--text-secondary)" }}>
              Advocacia com ética, técnica e comprometimento em Jandaia do Sul/PR.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-sm uppercase tracking-widest" style={{ color: "var(--gold)" }}>
              Páginas
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li><Link to="/" className="hover:text-[var(--gold)]">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-[var(--gold)]">Sobre</Link></li>
              <li><Link to="/contato" className="hover:text-[var(--gold)]">Contato</Link></li>
            </ul>
            <h4 className="mb-4 mt-6 font-serif text-sm uppercase tracking-widest" style={{ color: "var(--gold)" }}>
              Áreas
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li><Link to="/direito-civil" className="hover:text-[var(--gold)]">Direito Civil</Link></li>
              <li><Link to="/processual-civil" className="hover:text-[var(--gold)]">Processual Civil</Link></li>
              <li><Link to="/direito-trabalhista" className="hover:text-[var(--gold)]">Trabalhista</Link></li>
              <li><Link to="/agronegocio" className="hover:text-[var(--gold)]">Agronegócio</Link></li>
              <li><Link to="/consultoria-empresarial" className="hover:text-[var(--gold)]">Consultoria Empresarial</Link></li>
              <li><Link to="/mediacao-arbitragem" className="hover:text-[var(--gold)]">Direito do Consumidor</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-sm uppercase tracking-widest" style={{ color: "var(--gold)" }}>
              Contato
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4" style={{ color: "var(--gold)" }} />
                <a href="tel:+5543996085456" className="hover:text-[var(--gold)]">(43) 9 9608-5456</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4" style={{ color: "var(--gold)" }} />
                <a href="mailto:contato@cealmeida.adv.br" className="hover:text-[var(--gold)]">
                  contato@cealmeida.adv.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4" style={{ color: "var(--gold)" }} />
                <span>Rua Dr. Clementino S. Puppi, nº 1305, Sala 8 — Jandaia do Sul/PR</span>
              </li>
              <li className="pt-2 text-xs">
                Seg. a Sex.: 08h às 18h
              </li>
            </ul>
          </div>

          <div>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-sm border transition-colors hover:text-[var(--gold)]"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-sm border transition-colors hover:text-[var(--gold)]"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_top"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-sm border transition-colors hover:text-[var(--gold)]"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-12 grid gap-4 border-t pt-6 text-xs md:grid-cols-3"
          style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
        >
          <div>© 2026 Carlos Eduardo Almeida Advocacia. Todos os direitos reservados.</div>
          <div className="md:text-center" />
          <div className="md:text-right">
            <Link to="/politica-de-privacidade" className="hover:text-[var(--gold)]">
              Política de Privacidade
            </Link>
          </div>
        </div>

        <p className="mt-6 text-[12px] leading-relaxed whitespace-pre-line" style={{ color: "#606060" }}>
          Carlos Eduardo Almeida Advocacia — OAB/RJ sob o nº 256.624. Este site tem caráter meramente informativo e não constitui oferta de serviços ou garantia de resultados.

          A publicidade advocatícia é regulada pelo Provimento nº 205/2021 do Conselho Federal da OAB. 
        </p>

        <p className="mt-4 text-[12px] italic" style={{ color: "#606060" }}>
          "Justiça e direito são o fundamento do teu trono; graça e verdade te precedem." Salmos 89:14
        </p>
      </div>
    </footer>
  );
}