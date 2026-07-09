import { createFileRoute, Link } from "@tanstack/react-router";
import heroBgAsset from "@/assets/legal-hero-bg.jpg.asset.json";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { GraduationCap, Scale, ShieldCheck, BookOpen, Award, MapPin } from "lucide-react";
import drCarlosAsset from "@/assets/dr-carlos.png.asset.json";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o Dr. Carlos Eduardo Almeida | Advogado OAB/RJ 256.624 | Jandaia do Sul" },
      {
        name: "description",
        content:
          "Conheça o Dr. Carlos Eduardo Almeida, advogado em Jandaia do Sul/PR com pós-graduação em Direito Civil, Trabalhista e Agronegócio. OAB/RJ 256.624.",
      },
      { property: "og:title", content: "Sobre o Dr. Carlos Eduardo Almeida" },
      { property: "og:description", content: "Advogado em Jandaia do Sul/PR — Direito Civil, Trabalhista e Agronegócio." },
      { property: "og:image", content: heroBgAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBgAsset.url },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

const TIMELINE = [
  { icon: GraduationCap, title: "Graduação em Direito", text: "Formação em [Instituição a preencher]." },
  { icon: BookOpen, title: "Pós-graduação em Direito Civil e Processual Civil", text: "Aprofundamento em litígios cíveis e processo." },
  { icon: BookOpen, title: "Pós-graduação em Direito Trabalhista", text: "Atuação estratégica em ações trabalhistas." },
  { icon: BookOpen, title: "Pós-graduação em Direito do Agronegócio", text: "Consultoria e contencioso para o produtor rural." },
  { icon: Award, title: "Atuação em Jandaia do Sul/PR", text: "Escritório com foco na região do Vale do Ivaí." },
];

const VALUES = [
  { icon: Scale, title: "Ética", text: "Conduta responsável, transparente e alinhada aos princípios da advocacia." },
  { icon: ShieldCheck, title: "Técnica", text: "Estudo constante, estratégia jurídica e cuidado com cada detalhe processual." },
  { icon: MapPin, title: "Comprometimento", text: "Dedicação integral à causa do cliente, do primeiro contato à resolução." },
];

function SobrePage() {
  return (
    <>
      <PageHero
        title="Dr. Carlos Eduardo Almeida — Advogado em Jandaia do Sul/PR"
        eyebrow="SOBRE O ADVOGADO"
        crumbs={[{ label: "Home", to: "/" }, { label: "Sobre" }]}
      />

      <section className="section-pad">
        <div className="container-x grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div
              className="aspect-[4/5] w-full rounded-sm border-2"
              style={{
                borderColor: "var(--gold)",
                backgroundImage:
                  `url('${drCarlosAsset.url}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-label="Foto profissional do Dr. Carlos Eduardo Almeida"
            />
          </div>
          <div className="lg:col-span-3">
            <h2 className="font-serif text-4xl">Dr. Carlos Eduardo Almeida</h2>
            <div className="mt-2 text-sm font-semibold" style={{ color: "var(--gold)" }}>
              OAB/RJ 256.624
            </div>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Bacharel em Direito, com três pós-graduações complementares — Direito Civil e
              Processual Civil, Direito Trabalhista e Direito do Agronegócio —, o Dr. Carlos
              dedica sua atuação à defesa técnica de pessoas físicas, trabalhadores, produtores
              rurais e pequenas empresas do Norte do Paraná.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              O escritório atua em Jandaia do Sul/PR e comarcas vizinhas do Vale do Ivaí —
              Apucarana, Mandaguari e Marialva —, com filosofia de trabalho pautada em
              comunicação clara, atenção individualizada e conduta ética.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Cada caso é conduzido pessoalmente pelo Dr. Carlos, do primeiro contato à conclusão
              do processo, sem transferência a terceiros.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#1A1A1A" }}>
        <div className="container-x max-w-4xl">
          <div className="eyebrow">FORMAÇÃO E TRAJETÓRIA</div>
          <h2 className="mt-3 font-serif text-4xl">Marcos acadêmicos e profissionais</h2>
          <div className="mt-10 space-y-6">
            {TIMELINE.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-full border-2"
                      style={{ borderColor: "var(--gold)", color: "var(--gold)", background: "#0F0F0F" }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    {i < TIMELINE.length - 1 && (
                      <div className="w-px flex-1" style={{ background: "var(--border-subtle)" }} />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-serif text-xl">{t.title}</h3>
                    <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>{t.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="text-center">
            <div className="eyebrow">VALORES</div>
            <h2 className="mt-3 font-serif text-4xl">Princípios que guiam o atendimento</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-sm border p-7 text-center"
                  style={{ borderColor: "var(--border-subtle)", background: "#1A1A1A" }}
                >
                  <div
                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-sm"
                    style={{ background: "rgba(201,168,76,0.12)", color: "var(--gold)" }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl">{v.title}</h3>
                  <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Agende uma conversa sem compromisso"
        text="Explique sua situação e receba uma avaliação inicial do Dr. Carlos."
      />
    </>
  );
}