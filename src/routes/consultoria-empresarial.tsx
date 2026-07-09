import { createFileRoute } from "@tanstack/react-router";
import heroBgAsset from "@/assets/legal-hero-bg.jpg.asset.json";
import { AreaPageTemplate } from "@/components/site/AreaPageTemplate";

export const Route = createFileRoute("/consultoria-empresarial")({
  head: () => ({
    meta: [
      { title: "Consultoria Jurídica Empresarial em Jandaia do Sul/PR | Dr. Carlos Eduardo Almeida" },
      {
        name: "description",
        content:
          "Consultoria jurídica preventiva para empresas em Jandaia do Sul/PR: contratos, análise de riscos e orientação para negócios. OAB/RJ 256.624.",
      },
      { property: "og:title", content: "Consultoria Empresarial em Jandaia do Sul/PR" },
      { property: "og:description", content: "Orientação jurídica preventiva para pequenas e médias empresas." },
      { property: "og:image", content: heroBgAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBgAsset.url },
      { property: "og:url", content: "/consultoria-empresarial" },
    ],
    links: [{ rel: "canonical", href: "/consultoria-empresarial" }],
  }),
  component: () => (
    <AreaPageTemplate
      areaLabel="Consultoria Empresarial"
      title="Consultoria Jurídica para Empresas"
      intro="A consultoria jurídica empresarial busca prevenir conflitos e organizar as relações do negócio: contratos, sócios, fornecedores, colaboradores e clientes. Uma estrutura jurídica clara reduz riscos e permite crescer com segurança."
      situations={[
        "Elaboração e revisão de contratos comerciais",
        "Contratos com fornecedores, clientes e prestadores",
        "Análise de riscos e compliance básico",
        "Orientação em relações societárias",
        "Suporte jurídico contínuo para o dia a dia da empresa",
        "Prevenção de litígios trabalhistas e cíveis",
      ]}
      faq={[
        { q: "Consultoria substitui o contador?", a: "Não. São áreas complementares: o contador cuida do aspecto contábil e fiscal, o advogado cuida das relações jurídicas e dos contratos." },
        { q: "Preciso pagar por hora ou tenho contrato fixo?", a: "Ambos os modelos são possíveis. O formato é definido conforme a rotina da empresa e o volume de demandas." },
        { q: "Serve para pequenas empresas?", a: "Sim. Justamente as pequenas empresas se beneficiam da consultoria preventiva, que evita perdas e conflitos antes que aconteçam." },
      ]}
      waMessage="Olá Dr. Carlos, gostaria de falar sobre Consultoria Empresarial."
    />
  ),
});