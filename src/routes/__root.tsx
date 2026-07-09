import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { CookieBanner } from "@/components/site/CookieBanner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Carlos Eduardo Almeida Advocacia" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Carlos Eduardo Almeida Advocacia" },
      { name: "twitter:card", content: "summary" },
      { title: "Advogado em Jandaia do Sul | Carlos Eduardo Almeida Advocacia | OAB/RJ 256.624" },
      { property: "og:title", content: "Advogado em Jandaia do Sul | Carlos Eduardo Almeida Advocacia | OAB/RJ 256.624" },
      { name: "twitter:title", content: "Advogado em Jandaia do Sul | Carlos Eduardo Almeida Advocacia | OAB/RJ 256.624" },
      { name: "description", content: "Advogado em Jandaia do Sul, Norte do Paraná. Dr. Carlos Eduardo Almeida (OAB/RJ 256.624) atua em Direito Trabalhista, Civil, Empresarial e Agronegócio. Consulta presencial e online. Agende pelo WhatsApp." },
      { property: "og:description", content: "Advogado em Jandaia do Sul, Norte do Paraná. Dr. Carlos Eduardo Almeida (OAB/RJ 256.624) atua em Direito Trabalhista, Civil, Empresarial e Agronegócio. Consulta presencial e online. Agende pelo WhatsApp." },
      { name: "twitter:description", content: "Advogado em Jandaia do Sul, Norte do Paraná. Dr. Carlos Eduardo Almeida (OAB/RJ 256.624) atua em Direito Trabalhista, Civil, Empresarial e Agronegócio. Consulta presencial e online. Agende pelo WhatsApp." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/XlklgESnd4QQCEKu3Y6D3Myd5QB2/social-images/social-1783613820612-LOGO_CARLOS_EDUARDO_ALMEIDA_(8).webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/XlklgESnd4QQCEKu3Y6D3Myd5QB2/social-images/social-1783613820612-LOGO_CARLOS_EDUARDO_ALMEIDA_(8).webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Carlos Eduardo Almeida Advocacia",
          description:
            "Escritório de advocacia em Jandaia do Sul especializado em Direito Trabalhista, Civil, Empresarial e Agronegócio. OAB/RJ 256.624.",
          url: "https://cealmeida.adv.br",
          telephone: "+5543996085456",
          email: "contato@cealmeida.adv.br",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Dr. Clementino S. Puppi, nº 1305, Sala 8",
            addressLocality: "Jandaia do Sul",
            addressRegion: "PR",
            postalCode: "86900-000",
            addressCountry: "BR",
          },
          areaServed: [
            "Jandaia do Sul",
            "Arapongas",
            "Apucarana",
            "Mandaguari",
            "Maringá",
            "Londrina",
            "São João do Ivaí",
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
          ],
          founder: {
            "@type": "Person",
            name: "Carlos Eduardo Almeida",
            jobTitle: "Advogado",
            description: "Advogado inscrito na OAB/RJ sob o número 256.624",
          },
          sameAs: [
            "https://www.instagram.com/carlosalmeidap.adv",
            "https://wa.me/5543996085456",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        <CookieBanner />
      </div>
    </QueryClientProvider>
  );
}
