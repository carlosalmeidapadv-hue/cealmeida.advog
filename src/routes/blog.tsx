import { createFileRoute, Link } from "@tanstack/react-router";
import heroBgAsset from "@/assets/legal-hero-bg.jpg.asset.json";
import { Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog Jurídico | Carlos Eduardo Almeida Advocacia — Jandaia do Sul/PR" },
      { name: "description", content: "Artigos e conteúdos sobre Direito Civil, Trabalhista e Agronegócio. Em breve, novos artigos do Dr. Carlos Eduardo Almeida." },
      { property: "og:title", content: "Blog Jurídico | Carlos Eduardo Almeida Advocacia" },
      { property: "og:description", content: "Conteúdo jurídico acessível para pessoas e empresas do Vale do Ivaí/PR." },
      { property: "og:image", content: heroBgAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBgAsset.url },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog Jurídico"
        eyebrow="CONTEÚDO"
        crumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />
      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div
              className="flex flex-col items-center rounded-sm border py-20 text-center"
              style={{ borderColor: "var(--border-subtle)", background: "#1A1A1A" }}
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: "rgba(201,168,76,0.12)", color: "var(--gold)" }}
              >
                <Clock className="h-7 w-7" />
              </div>
              <h2 className="mt-6 font-serif text-3xl">Em breve novos artigos</h2>
              <p className="mt-3 max-w-md text-sm" style={{ color: "var(--text-secondary)" }}>
                Estamos preparando conteúdos jurídicos para você. Volte em breve!
              </p>
              <Link to="/contato" className="btn-outline-gold mt-6">
                Falar com o Dr. Carlos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <aside className="space-y-6">
            <div
              className="rounded-sm border p-6"
              style={{ borderColor: "var(--border-subtle)", background: "#1A1A1A" }}
            >
              <div className="eyebrow">Categorias</div>
              <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li>Direito Civil</li>
                <li>Direito Trabalhista</li>
                <li>Agronegócio</li>
                <li>Consultoria Empresarial</li>
                <li>Mediação e Arbitragem</li>
              </ul>
            </div>
            <div
              className="rounded-sm border p-6"
              style={{ borderColor: "var(--border-subtle)", background: "#1A1A1A" }}
            >
              <div className="eyebrow">Artigos recentes</div>
              <p className="mt-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                Nenhum artigo publicado ainda.
              </p>
            </div>
            <div
              className="rounded-sm border p-6"
              style={{ borderColor: "var(--gold)", background: "#0F0F0F" }}
            >
              <div className="eyebrow">Precisa de ajuda?</div>
              <p className="mt-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                Agende uma conversa com o Dr. Carlos e receba orientação sobre seu caso.
              </p>
              <Link to="/contato" className="btn-gold mt-4 w-full text-sm">Entrar em contato</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}