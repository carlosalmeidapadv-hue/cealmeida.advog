import { createFileRoute } from "@tanstack/react-router";
import heroBgAsset from "@/assets/legal-hero-bg.jpg.asset.json";
import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";

export const Route = createFileRoute("/agronegocio")({
  head: () => ({
    meta: [
      { title: "Advogado do Agronegócio no Paraná | Direito Rural | Dr. Carlos Eduardo Almeida" },
      {
        name: "description",
        content:
          "Contratos rurais, arrendamento e regularização de terras no norte do Paraná. Advogado do Agronegócio — OAB/RJ 256.624. Atendimento em Jandaia do Sul.",
      },
      { property: "og:title", content: "Advogado do Agronegócio em Jandaia do Sul/PR" },
      { property: "og:description", content: "Direito rural, contratos e proteção jurídica para o produtor." },
      { property: "og:image", content: heroBgAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBgAsset.url },
      { property: "og:url", content: "/agronegocio" },
    ],
    links: [{ rel: "canonical", href: "/agronegocio" }],
  }),
  component: () => (
    <AreaPageTemplate
      areaLabel="Direito do Agronegócio"
      title="Advogado do Agronegócio em Jandaia do Sul/PR"
      intro="O Direito do Agronegócio envolve contratos rurais, financiamentos, sucessão familiar no campo, questões ambientais e a segurança jurídica da atividade produtiva. O escritório atua na proteção do patrimônio e da atividade do produtor rural."
      situations={[
        "Contratos de arrendamento e parceria rural",
        "Cédulas de crédito rural e renegociações",
        "Regularização fundiária e georreferenciamento",
        "Sucessão e planejamento patrimonial rural",
        "Questões ambientais e uso do solo",
        "Contratos de compra e venda de safra",
      ]}
      faq={[
        { q: "O escritório atende fazendas fora de Jandaia do Sul?", a: "Sim, com atendimento em toda a região do Vale do Ivaí e norte do Paraná, presencial ou remoto." },
        { q: "Vale a pena revisar meus contratos rurais?", a: "Sim. A revisão prévia evita perdas econômicas, cláusulas abusivas e conflitos futuros com terceiros ou bancos." },
        { q: "Posso planejar a sucessão da minha propriedade rural em vida?", a: "Sim, e é altamente recomendável. Um bom planejamento reduz custos, evita disputas familiares e organiza a atividade produtiva." },
      ]}
      waMessage="Olá Dr. Carlos, gostaria de falar sobre Direito do Agronegócio."
    />
  ),
});