import { Link } from "@tanstack/react-router";

export function CtaBanner({
  title = "Está enfrentando um problema jurídico?",
  text = "Entre em contato agora e descubra como posso ajudar. A primeira conversa é sem compromisso.",
  whatsappUrl,
}: {
  title?: string;
  text?: string;
  whatsappUrl?: string;
}) {
  const wa =
    whatsappUrl ||
    "https://wa.me/5543996085456?text=Ol%C3%A1+Dr.+Carlos%2C+gostaria+de+agendar+uma+consulta";
  return (
    <section className="section-pad" style={{ background: "var(--gold)", color: "#0F0F0F" }}>
      <div className="container-x flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 text-base md:text-lg">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contato" className="btn-dark">Agendar Consulta</Link>
          <a href={wa} target="_top" rel="noopener noreferrer" className="btn-outline-dark">
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}