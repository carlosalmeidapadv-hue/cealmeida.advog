import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Scale,
  Sprout,
  Building2,
  FileText,
  Briefcase,
  Handshake,
  UserCheck,
  Map,
  Clock,
  BookOpen,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Accordion } from "@/components/site/Accordion";
import { CtaBanner } from "@/components/site/CtaBanner";
import drCarlosAsset from "@/assets/dr-carlos.png.asset.json";
import heroBgAsset from "@/assets/legal-hero-bg.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Advogado em Jandaia do Sul | Carlos Eduardo Almeida Advocacia | OAB/RJ 256.624",
      },
      {
        name: "description",
        content:
          "Advogado em Jandaia do Sul, Norte do Paraná. Dr. Carlos Eduardo Almeida (OAB/RJ 256.624) atua em Direito Trabalhista, Civil, Empresarial e Agronegócio. Consulta presencial e online. Agende pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "Advogado em Jandaia do Sul | Carlos Eduardo Almeida Advocacia | OAB/RJ 256.624",
      },
      {
        property: "og:description",
        content:
          "Advogado em Jandaia do Sul, Norte do Paraná. Dr. Carlos Eduardo Almeida (OAB/RJ 256.624) atua em Direito Trabalhista, Civil, Empresarial e Agronegócio. Consulta presencial e online. Agende pelo WhatsApp.",
      },
      { property: "og:image", content: heroBgAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBgAsset.url },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Attorney", "LegalService", "LocalBusiness"],
          name: "Carlos Eduardo Almeida Advocacia",
          image: "https://cealmeida.adv.br/dr-carlos.png",
          url: "https://cealmeida.adv.br",
          telephone: "+5543996085456",
          email: "contato@cealmeida.adv.br",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Dr. Clementino S. Puppi, nº 1305, Sala 8",
            addressLocality: "Jandaia do Sul",
            addressRegion: "PR",
            postalCode: "86900-000",
            addressCountry: "BR",
          },
          areaServed: ["Jandaia do Sul", "Apucarana", "Mandaguari", "Marialva", "Vale do Ivaí"],
          openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            opens: "08:00", closes: "18:00",
          }],
          founder: {
            "@type": "Person",
            name: "Carlos Eduardo Almeida",
            jobTitle: "Advogado",
            identifier: "OAB/RJ 256.624",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Como funciona a primeira consulta?", acceptedAnswer: { "@type": "Answer", text: "A primeira conversa é um atendimento inicial onde você expõe sua situação e o Dr. Carlos avalia as possibilidades jurídicas disponíveis." } },
            { "@type": "Question", name: "Quais regiões são atendidas?", acceptedAnswer: { "@type": "Answer", text: "O escritório atende presencialmente em Jandaia do Sul/PR e cidades do Vale do Ivaí, além de atendimento online." } },
            { "@type": "Question", name: "Quanto tempo leva um processo?", acceptedAnswer: { "@type": "Answer", text: "O prazo varia conforme o tipo de ação, a comarca e a complexidade do caso; uma estimativa é fornecida na consulta inicial." } },
            { "@type": "Question", name: "Como são cobrados os honorários?", acceptedAnswer: { "@type": "Answer", text: "Os honorários seguem a Tabela de Honorários da OAB e as particularidades de cada caso, apresentados com transparência antes de qualquer compromisso." } },
            { "@type": "Question", name: "Posso acompanhar o andamento do meu processo?", acceptedAnswer: { "@type": "Answer", text: "Sim. O escritório mantém comunicação ativa, informando cada movimentação relevante." } },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const AREAS = [
  {
    icon: Scale,
    title: "Direito Civil",
    text:
      "Divórcio, inventário, cobrança de dívidas, indenizações e revisão de contratos. Proteção do seu patrimônio e dos seus direitos.",
    to: "/direito-civil",
  },
  {
    icon: FileText,
    title: "Direito Processual Civil",
    text:
      "Representação estratégica em ações cíveis, recursos, execuções e defesa em processos judiciais.",
    to: "/processual-civil",
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    text:
      "Demissão sem justa causa, horas extras, rescisão, assédio moral e defesa de empresas em ações trabalhistas.",
    to: "/direito-trabalhista",
  },
  {
    icon: Sprout,
    title: "Direito do Agronegócio",
    text:
      "Contratos rurais, arrendamento, financiamentos, regularização de terras e proteção jurídica para o produtor rural.",
    to: "/agronegocio",
  },
  {
    icon: Building2,
    title: "Consultoria Empresarial",
    text:
      "Prevenção de conflitos, contratos empresariais, análise de riscos e orientação jurídica para negócios de todos os portes.",
    to: "/consultoria-empresarial",
  },
  {
    icon: Handshake,
    title: "Direito do Consumidor",
    text:
      "Produto com defeito, cobrança indevida, negativação indevida, direito de arrependimento e práticas abusivas de bancos, lojas e prestadores.",
    to: "/mediacao-arbitragem",
  },
] as const;

const DIFFERENTIALS = [
  { icon: UserCheck, title: "Atendimento direto com o advogado", text: "Do primeiro contato à audiência, quem conduz o caso é o Dr. Carlos — sem transferência para estagiários ou terceiros." },
  { icon: Map, title: "Atuação regional no Vale do Ivaí", text: "Escritório físico em Jandaia do Sul/PR, com atendimento nas comarcas de Jandaia do Sul, Apucarana, Mandaguari e Marialva." },
  { icon: BookOpen, title: "Três pós-graduações complementares", text: "Formação específica em Direito Civil e Processual Civil, Direito Trabalhista e Direito do Agronegócio, alinhada às demandas da região." },
  { icon: Clock, title: "Retorno em até 24 horas úteis", text: "Compromisso de retorno rápido a mensagens de WhatsApp e e-mail nos dias úteis, com acompanhamento das movimentações do processo." },
];

const FAQ = [
  {
    q: "Quais documentos preciso levar para a primeira consulta?",
    a: "Isso varia conforme o caso, mas em geral são solicitados documentos pessoais e qualquer material relacionado ao assunto (contratos, notificações, comprovantes). Na marcação do atendimento, você recebe uma orientação específica sobre o que trazer.",
  },
  {
    q: "É possível fazer todo o atendimento online?",
    a: "Sim. Grande parte do atendimento pode ser feita por videochamada ou telefone, com o mesmo cuidado e sigilo de um atendimento presencial, ideal para quem não está na região de Jandaia do Sul.",
  },
  {
    q: "O escritório atende casos de urgência?",
    a: "Sim. Situações que exigem prazos curtos ou medidas urgentes são priorizadas assim que identificadas, e o contato inicial pode ser feito diretamente pelo WhatsApp.",
  },
  {
    q: "Minhas informações e meu caso ficam em sigilo?",
    a: "Sim. Todo atendimento é protegido pelo sigilo profissional da advocacia, e nenhuma informação sobre seu caso é compartilhada sem sua autorização.",
  },
  {
    q: "Existe algum custo para a primeira conversa?",
    a: "As condições da consulta inicial são informadas já no primeiro contato, sem surpresas. Qualquer valor de honorários só é definido após entender o seu caso.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex min-h-screen items-center"
        style={{
          backgroundImage:
            `linear-gradient(180deg, rgba(15,15,15,0.78) 0%, rgba(15,15,15,0.70) 40%, rgba(15,15,15,0.88) 100%), url('${heroBgAsset.url}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-x relative py-24 text-center">
          <div className="mx-auto max-w-4xl fade-in">
            <div className="eyebrow h-6"></div>
            <h1 className="mt-6 font-serif text-4xl leading-[1.1] md:text-6xl lg:text-7xl">
              Seu problema tem<br />
              <span style={{ color: "var(--gold)" }}>solução jurídica.</span>
            </h1>
            <p
              className="mx-auto mt-6 max-w-2xl text-base md:text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              Assessoria jurídica especializada em Jandaia do Sul e região Norte do Paraná.
              Atendimento presencial e online, com compromisso real com os seus direitos.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contato" className="btn-gold">Agendar Consulta</Link>
              <a href="#areas" className="btn-outline-gold">Conheça as Áreas de Atuação</a>
            </div>
            <div
              className="mx-auto mt-12 flex max-w-2xl flex-col items-center justify-center gap-4 divide-y sm:flex-row sm:divide-x sm:divide-y-0"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <div className="flex items-center gap-2 px-4 py-2 text-sm">
                <Scale className="h-5 w-5" style={{ color: "var(--gold)" }} />
                <span>Direito Civil e Trabalhista</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 text-sm" style={{ borderColor: "var(--border-subtle)" }}>
                <Sprout className="h-5 w-5" style={{ color: "var(--gold)" }} />
                <span>Direito do Agronegócio</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 text-sm" style={{ borderColor: "var(--border-subtle)" }}>
                <Building2 className="h-5 w-5" style={{ color: "var(--gold)" }} />
                <span>Consultoria Empresarial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="section-pad">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div
              className="aspect-[4/5] w-full rounded-sm border-2"
              style={{
                borderColor: "var(--gold)",
                backgroundImage:
                  `url('${drCarlosAsset.url}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 30px 60px -30px rgba(201,168,76,0.35)",
              }}
              aria-label="Foto profissional do Dr. Carlos Eduardo Almeida"
            />
          </div>
          <div>
            <div className="eyebrow">QUEM ESTÁ DO SEU LADO</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Dr. Carlos Eduardo Almeida</h2>
            <p className="mt-6 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Advogado inscrito na OAB/RJ sob o nº 256.624, com pós-graduações em Direito Civil e
              Processual Civil, Direito Trabalhista e Direito do Agronegócio. Dr. Carlos Eduardo
              Almeida atua em Jandaia do Sul/PR e cidades do Vale do Ivaí, na defesa técnica de
              pessoas físicas, trabalhadores, produtores rurais e pequenas empresas.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              O atendimento é conduzido pessoalmente pelo advogado!
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: GraduationCap, num: "3", label: "Pós-Graduações" },
                { icon: Scale, num: "OAB/RJ 256.624", label: "Inscrição" },
                { icon: MapPin, num: "Jandaia do Sul/PR", label: "Atendimento" },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="rounded-sm border p-4 text-center"
                    style={{ borderColor: "var(--border-subtle)", background: "#1A1A1A" }}
                  >
                    <Icon className="mx-auto h-5 w-5" style={{ color: "var(--gold)" }} />
                    <div className="mt-2 font-serif text-sm md:text-base" style={{ color: "var(--text-primary)" }}>
                      {s.num}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{s.label}</div>
                  </div>
                );
              })}
            </div>

            <Link to="/sobre" className="btn-outline-gold mt-8">
              Saiba mais sobre o Dr. Carlos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="section-pad" style={{ background: "#1A1A1A" }}>
        <div className="container-x">
          <div className="text-center">
            <div className="eyebrow">COMO POSSO AJUDAR</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Áreas de Atuação</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px]" style={{ color: "var(--text-secondary)" }}>
              Escolha a área que corresponde à sua situação e descubra como posso defender seus
              interesses.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((a) => {
              const Icon = a.icon;
              return (
                <Link
                  key={a.title}
                  to={a.to}
                  className="group rounded-sm border p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: "var(--border-subtle)",
                    background: "#0F0F0F",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 20px 40px -20px rgba(201,168,76,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-sm"
                    style={{ background: "rgba(201,168,76,0.1)", color: "var(--gold)" }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {a.text}
                  </p>
                  <div
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: "var(--gold)" }}
                  >
                    Saiba mais <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contato" className="btn-outline-gold">Ver todas as áreas</Link>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="section-pad">
        <div className="container-x">
          <div className="text-center">
            <div className="eyebrow">DIFERENCIAIS</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">O que torna nosso atendimento diferente</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {DIFFERENTIALS.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="flex gap-5 rounded-sm border p-7"
                  style={{ borderColor: "var(--border-subtle)", background: "#1A1A1A" }}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm"
                    style={{ background: "rgba(201,168,76,0.12)", color: "var(--gold)" }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {d.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />


      {/* FAQ */}
      <section className="section-pad" style={{ background: "#1A1A1A" }}>
        <div className="container-x max-w-3xl">
          <div className="text-center">
            <div className="eyebrow">DÚVIDAS COMUNS</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Perguntas Frequentes</h2>
          </div>
          <div className="mt-10">
            <Accordion items={FAQ} />
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section-pad" style={{ background: "#1A1A1A" }}>
        <div className="container-x">
          <div className="text-center">
            <div className="eyebrow">DEPOIMENTOS</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Como somos avaliados no Google</h2>
            <a
              href="https://www.google.com/maps/place/Carlos+Eduardo+Almeida+Advocacia"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm hover:underline"
              style={{ color: "var(--gold)" }}
            >
              5,0 ★ — 50 avaliações no Google
            </a>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Nadine Fancelli", text: "Advogado de extrema confiança! Muito dedicado em resolver o caso, super indico!" },
              { name: "Priscilla Santos", text: "Além de ser um ótimo advogado, é uma pessoa incrível. Sempre atencioso, educado e disposto a ajudar. Explica tudo de forma clara e simples. Recomendo!" },
              { name: "Maria Eduarda Milian", text: "Excelente advogado! Muito profissional, atencioso e transparente. Explicou tudo com clareza, muito competente e dedicado." },
              { name: "Eduardo Vidal", text: "Excelente profissional! Muito competente, atencioso e ágil. Soube explicar todas as etapas do processo de forma clara." },
              { name: "Thais Guimarães", text: "Excelente profissional, a sua competência é notada logo no primeiro contato, Carlos Eduardo é muito tranquilo, educado, organizado e paciente em esclarecer dúvidas. Indico a todos que precisarem do seu serviço." },
            ].map((t, i) => (
              <div
                key={i}
                className="rounded-sm border p-7"
                style={{ borderColor: "var(--border-subtle)", background: "#0F0F0F" }}
              >
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  “{t.text}”
                </p>
                <div className="mt-5 font-semibold" style={{ color: "var(--text-primary)" }}>
                  {t.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO RÁPIDO */}
      <section className="section-pad">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl">Pronto para dar o próximo passo?</h2>
            <p className="mt-4 text-[15px]" style={{ color: "var(--text-secondary)" }}>
              Fale com o Dr. Carlos e receba orientação clara sobre o seu caso. Atendimento em
              Jandaia do Sul/PR e região.
            </p>
            <Link to="/contato" className="btn-gold mt-6">Entrar em Contato</Link>
          </div>
          <div className="space-y-4">
            {[
              { icon: Phone, label: "(43) 9 9608-5456", href: "tel:+5543996085456" },
              { icon: Mail, label: "contato@cealmeida.adv.br", href: "mailto:contato@cealmeida.adv.br" },
              { icon: MapPin, label: "Rua Dr. Clementino S. Puppi, nº 1305, Sala 8 — Jandaia do Sul/PR" },
            ].map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <div
                  className="flex items-start gap-4 rounded-sm border p-5"
                  style={{ borderColor: "var(--border-subtle)", background: "#1A1A1A" }}
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm"
                    style={{ background: "rgba(201,168,76,0.12)", color: "var(--gold)" }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span style={{ color: "var(--text-primary)" }}>{c.label}</span>
                </div>
              );
              return c.href ? (
                <a key={i} href={c.href} className="block">{inner}</a>
              ) : (
                <div key={i}>{inner}</div>
              );
            })}
            <a
              href="https://wa.me/5543996085456?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica."
              target="_top"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-sm px-5 py-4 font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "#25D366" }}
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
