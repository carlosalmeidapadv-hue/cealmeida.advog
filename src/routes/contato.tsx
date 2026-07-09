import { createFileRoute, Link } from "@tanstack/react-router";
import heroBgAsset from "@/assets/legal-hero-bg.jpg.asset.json";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Agende sua Consulta | Carlos Eduardo Almeida Advocacia — Jandaia do Sul/PR" },
      {
        name: "description",
        content:
          "Entre em contato com o Dr. Carlos Eduardo Almeida. Atendimento em Jandaia do Sul/PR e região. WhatsApp (43) 9 9608-5456. OAB/RJ 256.624.",
      },
      { property: "og:title", content: "Contato — Carlos Eduardo Almeida Advocacia" },
      { property: "og:description", content: "Agende uma conversa com o Dr. Carlos Eduardo Almeida." },
      { property: "og:image", content: heroBgAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBgAsset.url },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

const WHATSAPP_URL =
  "https://wa.me/5543996085456?text=Ol%C3%A1+Dr.+Carlos%2C+gostaria+de+agendar+uma+consulta";

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function ContatoPage() {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const tel = String(data.get("phone") ?? "");
    const area = String(data.get("area") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `Contato pelo site — ${name} (${area})`;
    const body =
      `Nome: ${name}\nE-mail: ${email}\nTelefone/WhatsApp: ${tel}\nÁrea: ${area}\n\nMensagem:\n${message}`;
    window.location.href = `mailto:carlosalmeidap.adv@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        title="Fale com o Dr. Carlos Eduardo Almeida"
        eyebrow="ENTRE EM CONTATO"
        crumbs={[{ label: "Home", to: "/" }, { label: "Contato" }]}
      />

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Fale com o Dr. Carlos</h2>
            <p className="mt-4 text-[15px]" style={{ color: "var(--text-secondary)" }}>
              Preencha o formulário ou escolha o canal de sua preferência. Respondemos em até 24
              horas úteis.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_top"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-sm border p-5 transition-colors"
                style={{ borderColor: "var(--border-subtle)", background: "#1A1A1A" }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm" style={{ background: "#25D366" }}>
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold" style={{ color: "var(--text-primary)" }}>WhatsApp — (43) 9 9608-5456</div>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Clique para iniciar a conversa</div>
                </div>
              </a>
              <a
                href="tel:+5543996085456"
                className="flex items-start gap-4 rounded-sm border p-5"
                style={{ borderColor: "var(--border-subtle)", background: "#1A1A1A" }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm" style={{ background: "rgba(201,168,76,0.12)", color: "var(--gold)" }}>
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold" style={{ color: "var(--text-primary)" }}>Telefone</div>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>(43) 9 9608-5456</div>
                </div>
              </a>
              <a
                href="mailto:contato@cealmeida.adv.br"
                className="flex items-start gap-4 rounded-sm border p-5"
                style={{ borderColor: "var(--border-subtle)", background: "#1A1A1A" }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm" style={{ background: "rgba(201,168,76,0.12)", color: "var(--gold)" }}>
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold" style={{ color: "var(--text-primary)" }}>E-mail</div>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>contato@cealmeida.adv.br</div>
                </div>
              </a>
              <div
                className="flex items-start gap-4 rounded-sm border p-5"
                style={{ borderColor: "var(--border-subtle)", background: "#1A1A1A" }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm" style={{ background: "rgba(201,168,76,0.12)", color: "var(--gold)" }}>
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold" style={{ color: "var(--text-primary)" }}>Endereço</div>
                  <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Rua Dr. Clementino S. Puppi, nº 1305, Sala 8 — Jandaia do Sul/PR
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-sm border" style={{ borderColor: "var(--border-subtle)" }}>
              <iframe
                title="Mapa do escritório"
                src="https://www.google.com/maps?q=Rua+Dr.+Clementino+S.+Puppi,+1305+Jandaia+do+Sul+PR&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
              />
            </div>
          </div>

          {/* Form */}
          <div
            className="rounded-sm border p-6 md:p-8"
            style={{ borderColor: "var(--border-subtle)", background: "#1A1A1A" }}
          >
            <h3 className="font-serif text-2xl">Envie uma mensagem</h3>

            {sent ? (
              <div className="mt-8 flex flex-col items-center rounded-sm border p-8 text-center" style={{ borderColor: "var(--gold)" }}>
                <CheckCircle2 className="h-10 w-10" style={{ color: "var(--gold)" }} />
                <p className="mt-4 font-serif text-lg">
                  Mensagem enviada! O Dr. Carlos entrará em contato em até 24 horas úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <FormField label="Nome completo">
                  <input required type="text" name="name" className="input" placeholder="Seu nome" />
                </FormField>
                <FormField label="Telefone / WhatsApp">
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(maskPhone(e.target.value))}
                    className="input"
                    placeholder="(43) 9 9999-9999"
                  />
                </FormField>
                <FormField label="E-mail">
                  <input required type="email" name="email" className="input" placeholder="voce@email.com" />
                </FormField>
                <FormField label="Área de interesse">
                  <select required name="area" className="input" defaultValue="">
                    <option value="" disabled>Selecione uma área</option>
                    <option>Direito Civil</option>
                    <option>Direito Trabalhista</option>
                    <option>Direito do Agronegócio</option>
                    <option>Direito Processual Civil</option>
                    <option>Consultoria Empresarial</option>
                    <option>Mediação e Arbitragem</option>
                    <option>Outro</option>
                  </select>
                </FormField>
                <FormField label="Descreva sua situação">
                  <textarea required name="message" rows={5} className="input" style={{ minHeight: 120 }} placeholder="Conte-nos brevemente sobre seu caso" />
                </FormField>
                <label className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <input required type="checkbox" className="mt-1 h-4 w-4" style={{ accentColor: "var(--gold)" }} />
                  <span>
                    Li e concordo com a{" "}
                    <Link to="/politica-de-privacidade" className="underline" style={{ color: "var(--gold)" }}>
                      Política de Privacidade
                    </Link>
                    .
                  </span>
                </label>
                <button type="submit" className="btn-gold w-full">Enviar mensagem</button>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Suas informações são sigilosas e protegidas pela LGPD.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: #0F0F0F;
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          padding: 0.75rem 0.9rem;
          border-radius: 0.25rem;
          font-size: 15px;
          transition: border-color 0.2s;
        }
        .input:focus { outline: none; border-color: var(--gold); }
        .input::placeholder { color: #666; }
      `}</style>
    </>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
        {label}
      </span>
      {children}
    </label>
  );
}