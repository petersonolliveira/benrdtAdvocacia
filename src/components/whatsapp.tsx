import type { SVGProps } from "react";
import { site } from "@/lib/site";

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M20.6 11.7a8.6 8.6 0 0 1-12.8 7.5L3 20.5l1.3-4.7a8.6 8.6 0 1 1 16.3-4.1Z" />
      <path d="M8 7.6c-.3 0-.6.2-.8.6-.8 1.3.3 3.7 2.3 5.5 2.1 1.8 4.4 2.3 5.4 1.2.3-.3.5-.8.4-1.1l-2.1-1c-.2-.1-.4 0-.6.2l-.6.7c-1.4-.5-2.5-1.5-3.1-2.8l.6-.7c.2-.2.2-.4.1-.6L8.8 7.7l-.8-.1Z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  return (
    <a className="floating-whatsapp" href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Conversar com o escritório pelo WhatsApp (abre em nova aba)">
      <WhatsAppIcon width={27} height={27} />
      <span className="floating-tooltip" aria-hidden="true">Fale com nossa equipe</span>
    </a>
  );
}
