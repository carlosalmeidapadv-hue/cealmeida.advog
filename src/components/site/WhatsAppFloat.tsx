const WHATSAPP_URL =
  "https://wa.me/5543996085456?text=Ol%C3%A1+Dr.+Carlos%2C+gostaria+de+agendar+uma+consulta";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_top"
      rel="noopener noreferrer"
      aria-label="Falar com o Dr. Carlos no WhatsApp"
      className="wa-float group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full md:h-16 md:w-16"
      style={{ background: "var(--gold)" }}
    >
      <span
        className="flex h-11 w-11 items-center justify-center rounded-full md:h-12 md:w-12"
        style={{ background: "#25D366" }}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.85 11.85 0 0 0 5.7 1.45h.01c6.56 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.4-8.45zm-8.46 18.24h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.87 9.87 0 0 1-1.51-5.21c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.85-9.85 9.85zm5.4-7.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9 9 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35z"/>
        </svg>
      </span>
    </a>
  );
}