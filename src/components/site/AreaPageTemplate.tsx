import { Check } from "lucide-react";
import { PageHero } from "./PageHero";
import { CtaBanner } from "./CtaBanner";
import { Accordion } from "./Accordion";

export interface AreaPageProps {
  areaLabel: string;
  title: string;
  intro: string;
  situations: string[];
  steps?: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  waMessage: string;
}

const DEFAULT_STEPS = [
  { title: "Consulta", text: "Ouvimos sua situação com atenção e mapeamos o problema com clareza." },
  { title: "Estratégia", text: "Definimos o caminho jurídico mais adequado, com riscos e prazos realistas." },
  { title: "Execução", text: "Atuamos com técnica e comunicação transparente até a resolução do caso." },
];

export function AreaPageTemplate(props: AreaPageProps) {
  const steps = props.steps ?? DEFAULT_STEPS;
  const waUrl = `https://wa.me/5543996085456?text=${encodeURIComponent(props.waMessage)}`;
  return (
    <>
      <PageHero
        title={props.title}
        eyebrow="ÁREA DE ATUAÇÃO"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Áreas de Atuação" },
          { label: props.areaLabel },
        ]}
      />

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {props.intro}
            </p>
          </div>
          <aside
            className="rounded-sm border p-6"
            style={{ borderColor: "var(--border-subtle)", background: "#1A1A1A" }}
          >
            <div className="eyebrow">Atendimento</div>
            <p className="mt-3 text-sm" style={{ color: "var(--text-secondary)" }}>
              Jandaia do Sul/PR e Vale do Ivaí. Atendimento presencial e online.
            </p>
            <a href={waUrl} target="_top" rel="noopener noreferrer" className="btn-gold mt-5 w-full text-sm">
              Falar com o Dr. Carlos
            </a>
          </aside>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#1A1A1A" }}>
        <div className="container-x">
          <div className="eyebrow">Quando você pode precisar</div>
          <h2 className="mt-2 max-w-3xl font-serif text-3xl md:text-4xl">
            Situações em que este atendimento pode ajudar
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {props.situations.map((s, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-sm border p-4"
                style={{ borderColor: "var(--border-subtle)", background: "#0F0F0F" }}
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "var(--gold)", color: "#0F0F0F" }}
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-[15px]" style={{ color: "var(--text-primary)" }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="eyebrow">Como trabalhamos</div>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Método em três etapas</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={i}
                className="rounded-sm border p-6"
                style={{ borderColor: "var(--border-subtle)", background: "#1A1A1A" }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full font-serif text-lg"
                  style={{ background: "var(--gold)", color: "#0F0F0F" }}
                >
                  {i + 1}
                </div>
                <h3 className="mt-4 font-serif text-xl">{s.title}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#1A1A1A" }}>
        <div className="container-x max-w-3xl">
          <div className="eyebrow">Dúvidas frequentes</div>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Perguntas sobre {props.areaLabel}</h2>
          <div className="mt-8">
            <Accordion items={props.faq} />
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Precisa de orientação em ${props.areaLabel}?`}
        text="Converse com o Dr. Carlos e entenda como avançar no seu caso."
        whatsappUrl={waUrl}
      />
    </>
  );
}