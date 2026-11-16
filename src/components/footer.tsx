import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/brand";
import { navigation, practiceAreas, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand footer />
            <p>Assessoria e Consultoria Jurídica</p>
            <div className="footer-professionals">
              <p>Dr. Ralf Berndt <span>OAB/SC 48.051</span></p>
              <p>Dra. Mariana Effting Vanderlinde Furquim <span>OAB/SC 42.080</span></p>
            </div>
          </div>
          <nav aria-label="Navegação do rodapé">
            <h2>Explore</h2>
            {navigation.map(item => <a href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <nav aria-label="Áreas de atuação no rodapé">
            <h2>Áreas de atuação</h2>
            {practiceAreas.map(area => <a href={`/#${area.id}`} key={area.id}>{area.title}</a>)}
          </nav>
          <div className="footer-contact">
            <h2>Contato</h2>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">{site.phone}</a>
            <a href={site.whatsappSecondary} target="_blank" rel="noopener noreferrer">{site.phoneSecondary}</a>
            <address>Rua Prefeito Aristides Largura, 68<br />Bairro América · Joinville — SC</address>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="footer-instagram">Instagram <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Berndt & Effting Advocacia. Todos os direitos reservados.</p>
          <Link href="/privacidade/">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
