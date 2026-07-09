import { createFileRoute, Link } from "@tanstack/react-router";
import heroBgAsset from "@/assets/legal-hero-bg.jpg.asset.json";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Carlos Eduardo Almeida Advocacia" },
      { name: "description", content: "Política de Privacidade e tratamento de dados conforme a LGPD — Carlos Eduardo Almeida Advocacia." },
      { property: "og:title", content: "Política de Privacidade" },
      { property: "og:description", content: "Como tratamos seus dados pessoais em conformidade com a LGPD." },
      { property: "og:image", content: heroBgAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBgAsset.url },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: PoliticaPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10">
      <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {children}
      </div>
    </div>
  );
}

function PoliticaPage() {
  return (
    <>
      <PageHero
        title="Política de Privacidade"
        eyebrow="LGPD"
        crumbs={[{ label: "Home", to: "/" }, { label: "Política de Privacidade" }]}
      />
      <section className="section-pad">
        <div className="container-x max-w-3xl">
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Esta Política de Privacidade descreve como o escritório Carlos Eduardo Almeida
            Advocacia coleta, utiliza e protege dados pessoais fornecidos por meio deste site,
            em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
          </p>

          <Section title="Dados coletados">
            <p>
              Coletamos os dados que você fornece voluntariamente no formulário de contato: nome,
              telefone, e-mail, área de interesse e a descrição da sua situação. Também podem ser
              registrados dados técnicos de navegação, como endereço IP e cookies.
            </p>
          </Section>

          <Section title="Finalidade">
            <p>
              Os dados são utilizados exclusivamente para responder ao seu contato, prestar
              esclarecimentos e, quando aplicável, formalizar a contratação de serviços jurídicos.
            </p>
          </Section>

          <Section title="Compartilhamento">
            <p>
              Não comercializamos e não compartilhamos dados pessoais com terceiros para fins de
              marketing. Eventuais compartilhamentos ocorrem apenas quando necessário à prestação
              do serviço ou por obrigação legal.
            </p>
          </Section>

          <Section title="Direitos do titular">
            <p>
              Você pode, a qualquer momento, solicitar acesso, correção, portabilidade, anonimização
              ou eliminação dos seus dados, além de revogar o consentimento previamente concedido.
            </p>
          </Section>

          <Section title="Contato do responsável">
            <p>
              Responsável: Dr. Carlos Eduardo Almeida — OAB/RJ 256.624.
              <br />
              E-mail para solicitações LGPD:{" "}
              <a href="mailto:contato@cealmeida.adv.br" style={{ color: "var(--gold)" }}>
                contato@cealmeida.adv.br
              </a>
              .
            </p>
          </Section>

          <Section title="Vigência">
            <p>Esta Política entra em vigor em 1º de janeiro de 2026 e pode ser atualizada a qualquer momento.</p>
          </Section>

          <div className="mt-12">
            <Link to="/" className="btn-outline-gold">Voltar para a Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}