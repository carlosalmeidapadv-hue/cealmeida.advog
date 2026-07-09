import { createFileRoute } from "@tanstack/react-router";
import heroBgAsset from "@/assets/legal-hero-bg.jpg.asset.json";
import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";

export const Route = createFileRoute("/processual-civil")({
  head: () => ({
    meta: [
      { title: "Advogado de Processual Civil em Jandaia do Sul/PR | Ações e Recursos" },
      {
        name: "description",
        content:
          "Representação em ações cíveis, recursos, execuções e defesa em processos judiciais. Dr. Carlos Eduardo Almeida — OAB/RJ 256.624.",
      },
      { property: "og:title", content: "Advogado de Direito Processual Civil em Jandaia do Sul/PR" },
      { property: "og:description", content: "Atuação estratégica em ações cíveis, recursos e execuções." },
      { property: "og:image", content: heroBgAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBgAsset.url },
      { property: "og:url", content: "/processual-civil" },
    ],
    links: [{ rel: "canonical", href: "/processual-civil" }],
  }),
  component: () => (
    <AreaPageTemplate
      areaLabel="Direito Processual Civil"
      title="Advogado de Direito Processual Civil em Jandaia do Sul"
      intro="O Direito Processual Civil é o campo que regula o andamento das ações judiciais. Aqui, a estratégia técnica faz diferença: prazos, provas, recursos e execuções exigem atenção contínua para proteger o direito do cliente."
      situations={[
        "Propositura de ações cíveis e de conhecimento",
        "Defesa em processos judiciais",
        "Recursos em segunda instância e tribunais superiores",
        "Execuções e cumprimento de sentença",
        "Tutelas de urgência (liminares)",
        "Acompanhamento processual e análise de riscos",
      ]}
      faq={[
        { q: "Quanto tempo dura um processo?", a: "Depende da comarca, do tipo de ação e do comportamento das partes. Na consulta inicial é feita uma estimativa realista com base no seu caso." },
        { q: "É possível recorrer de uma decisão?", a: "Sim, dentro do prazo legal e conforme a decisão. O Dr. Carlos avalia se o recurso tem cabimento e chance concreta de reforma." },
        { q: "O que é uma tutela de urgência?", a: "É uma decisão provisória que o juiz pode conceder rapidamente quando há risco de dano e evidência do direito." },
      ]}
      waMessage="Olá Dr. Carlos, gostaria de falar sobre Direito Processual Civil."
    />
  ),
});