import { createFileRoute } from "@tanstack/react-router";
import heroBgAsset from "@/assets/legal-hero-bg.jpg.asset.json";
import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";

export const Route = createFileRoute("/direito-trabalhista")({
  head: () => ({
    meta: [
      { title: "Advogado Trabalhista em Jandaia do Sul/PR | Defesa de Trabalhadores e Empresas" },
      {
        name: "description",
        content:
          "Demissão, horas extras, assédio moral e ações trabalhistas em Jandaia do Sul/PR. Dr. Carlos Eduardo Almeida — OAB/RJ 256.624. Fale agora.",
      },
      { property: "og:title", content: "Advogado Trabalhista em Jandaia do Sul/PR" },
      { property: "og:description", content: "Defesa de trabalhadores e empresas na Justiça do Trabalho." },
      { property: "og:image", content: heroBgAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBgAsset.url },
      { property: "og:url", content: "/direito-trabalhista" },
    ],
    links: [{ rel: "canonical", href: "/direito-trabalhista" }],
  }),
  component: () => (
    <AreaPageTemplate
      areaLabel="Direito Trabalhista"
      title="Advogado Trabalhista em Jandaia do Sul"
      intro="O Direito Trabalhista protege a relação entre empregado e empregador. O escritório atua tanto na defesa de trabalhadores que buscam o reconhecimento de direitos quanto de empresas que precisam se defender em ações trabalhistas."
      situations={[
        "Demissão sem justa causa e verbas rescisórias",
        "Horas extras, adicional noturno e insalubridade",
        "Assédio moral e sexual no ambiente de trabalho",
        "Reconhecimento de vínculo empregatício",
        "Defesa de empresas em reclamações trabalhistas",
        "Acordos e negociações antes da ação",
      ]}
      faq={[
        { q: "Tenho até quando para entrar com a ação?", a: "O prazo é de até 2 anos após o fim do contrato, cobrindo direitos dos últimos 5 anos trabalhados. É importante buscar orientação assim que possível." },
        { q: "Preciso comparecer à audiência?", a: "Sim. A presença do reclamante nas audiências trabalhistas costuma ser obrigatória. Você será orientado sobre como se preparar." },
        { q: "Empresa também pode ser cliente?", a: "Sim. O escritório atua na defesa de pequenas e médias empresas em ações trabalhistas e na prevenção de conflitos." },
      ]}
      waMessage="Olá Dr. Carlos, gostaria de falar sobre Direito Trabalhista."
    />
  ),
});