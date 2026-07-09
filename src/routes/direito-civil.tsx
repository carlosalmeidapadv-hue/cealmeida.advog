import { createFileRoute } from "@tanstack/react-router";
import heroBgAsset from "@/assets/legal-hero-bg.jpg.asset.json";
import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";

export const Route = createFileRoute("/direito-civil")({
  head: () => ({
    meta: [
      { title: "Advogado de Direito Civil em Jandaia do Sul/PR | Dr. Carlos Eduardo Almeida" },
      {
        name: "description",
        content:
          "Divórcio, inventário, indenizações e contratos em Jandaia do Sul/PR. Advogado de Direito Civil com atendimento personalizado. OAB/RJ 256.624. Consulte agora.",
      },
      { property: "og:title", content: "Advogado de Direito Civil em Jandaia do Sul/PR" },
      { property: "og:description", content: "Divórcio, inventário, indenizações e contratos no Vale do Ivaí/PR." },
      { property: "og:image", content: heroBgAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBgAsset.url },
      { property: "og:url", content: "/direito-civil" },
    ],
    links: [{ rel: "canonical", href: "/direito-civil" }],
  }),
  component: () => (
    <AreaPageTemplate
      areaLabel="Direito Civil"
      title="Advogado de Direito Civil em Jandaia do Sul"
      intro="O Direito Civil regula as relações entre pessoas e empresas na vida cotidiana: família, patrimônio, contratos e responsabilidade civil. O escritório atua na defesa dos direitos do cliente com estratégia, técnica e comunicação clara em cada etapa."
      situations={[
        "Divórcio, guarda de filhos e pensão alimentícia",
        "Inventário e partilha de bens",
        "Cobrança de dívidas e execução de títulos",
        "Indenizações por danos morais e materiais",
        "Elaboração e revisão de contratos",
        "Questões envolvendo consumidor e imóveis",
      ]}
      faq={[
        { q: "Quanto custa entrar com uma ação cível?", a: "As custas variam conforme o valor da causa e o tipo de ação. Na consulta inicial, o Dr. Carlos apresenta uma estimativa de custas e honorários com base na tabela da OAB." },
        { q: "Preciso ir ao fórum a cada audiência?", a: "Nem sempre. Em muitos atos processuais o cliente é representado pelo advogado; nas audiências obrigatórias, você recebe orientação prévia sobre o que esperar." },
        { q: "É possível resolver sem processo?", a: "Sim. Sempre que possível, buscamos acordo ou mediação antes de propor a ação, o que costuma ser mais rápido e menos desgastante." },
      ]}
      waMessage="Olá Dr. Carlos, gostaria de falar sobre Direito Civil."
    />
  ),
});