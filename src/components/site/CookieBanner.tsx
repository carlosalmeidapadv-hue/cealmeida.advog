import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("cea-cookies-accepted")) setVisible(true);
    } catch {}
  }, []);

  if (!visible) return null;

  const accept = () => {
    try { localStorage.setItem("cea-cookies-accepted", "1"); } catch {}
    setVisible(false);
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t"
      style={{ background: "#0A0A0A", borderColor: "var(--gold)" }}
    >
      <div className="container-x flex flex-col items-start justify-between gap-3 py-4 md:flex-row md:items-center">
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
          <Link to="/politica-de-privacidade" className="underline" style={{ color: "var(--gold)" }}>
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex gap-2">
          <Link to="/politica-de-privacidade" className="btn-outline-gold text-xs">Ver Política</Link>
          <button onClick={accept} className="btn-gold text-xs">Aceitar</button>
        </div>
      </div>
    </div>
  );
}