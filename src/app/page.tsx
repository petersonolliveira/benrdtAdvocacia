import type { Metadata } from "next";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, FileSearch, MessageSquareText, Scale, Plus, MapPin, Camera } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp";
import { Reveal } from "@/components/reveal";
import { practiceAreas, site, siteUrl } from "@/lib/site";

export const metadata: Metadata = { alternates: { canonical: siteUrl } };

const approach = [
  { number: "01", icon: FileSearch, title: "Análise jurídica", text: "Avaliação de documentos, contratos e circunstâncias relevantes para a compreensão de cada demanda." },
  { number: "02", icon: MessageSquareText, title: "Assessoria e consultoria", text: "Orientação jurídica para esclarecer direitos, obrigações e possibilidades de encaminhamento." },
  { number: "03", icon: Scale, title: "Atuação administrativa e judicial", text: "Acompanhamento de requerimentos, procedimentos e processos, conforme as particularidades de cada situação." },
];

export default function Home() {
  return (
    <main id="conteudo">
      <section id="inicio" className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="section-label"><span /> Berndt & Effting Advocacia</p>
          <h1 id="hero-title">Assessoria jurídica<br className="desktop-break" /> com seriedade,<br className="desktop-break" /> <em>atenção e<br className="desktop-break" /> compromisso.</em></h1>
          <p className="hero-description">Atuação em Direito Civil, Previdenciário e Trabalhista, oferecendo orientação jurídica, assessoria e representação em demandas administrativas e judiciais.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Entre em contato <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a className="text-link" href="#escritorio">Conheça o escritório <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="hero-location"><span className="location-line" /><span>Joinville, Santa Catarina</span></div>
        </div>
        <figure className="hero-figure">
          <div className="photo-frame">
            <picture>
              <source srcSet="/images/advogados-joinville.webp" type="image/webp" />
              <img src="/images/advogados-joinville.jpeg" alt="Dr. Ralf Berndt e Dra. Mariana Effting Vanderlinde Furquim analisando informações em um tablet." width="1154" height="1600" fetchPriority="high" loading="eager" />
            </picture>
          </div>
          <figcaption><span>Seriedade em cada detalhe.</span><span className="figure-index">BERNDT & EFFTING</span></figcaption>
        </figure>
      </section>

      <div className="intro-line container"><span>Assessoria e Consultoria Jurídica</span><a href="#escritorio" aria-label="Explorar o escritório"><ArrowDown size={18} aria-hidden="true" /></a><span>Direito com atenção às pessoas.</span></div>

      <section id="escritorio" className="about-section section-space" aria-labelledby="about-title">
        <Reveal className="container editorial-grid">
          <div>
            <p className="section-label"><span /> Sobre nós</p>
            <h2 id="about-title">Compromisso com<br /> cada <em>questão jurídica.</em></h2>
            <p className="section-aside">Escuta, análise e orientação.<br />Em cada etapa, atenção ao que importa.</p>
          </div>
          <div className="about-text">
            <p className="lead-paragraph">A Berndt & Effting Advocacia é um escritório sediado em Joinville, Santa Catarina, com atuação em assessoria, consultoria jurídica e representação em processos administrativos e judiciais.</p>
            <p>O trabalho compreende a análise de documentos, a orientação sobre direitos e obrigações, a elaboração de contratos e o acompanhamento de demandas jurídicas, tanto na prevenção quanto na resolução de conflitos.</p>
            <p>Nossa atuação abrange questões imobiliárias, contratuais, familiares, sucessórias, previdenciárias e trabalhistas.</p>
            <a href="#areas" className="text-link">Conheça nossas áreas de atuação <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </Reveal>
      </section>

      <section id="areas" className="areas-section section-space" aria-labelledby="areas-title">
        <div className="container">
          <Reveal className="section-heading-row">
            <div><p className="section-label"><span /> Áreas de atuação</p><h2 id="areas-title">Atuação jurídica em diferentes<br className="desktop-break" />{" "}<em>momentos da sua vida.</em></h2></div>
            <p className="section-description">Assessoria e representação jurídica em questões pessoais, familiares, patrimoniais e previdenciárias.</p>
          </Reveal>
          <div className="practice-list">
            {practiceAreas.map((area, index) => (
              <Reveal key={area.id}>
                <details id={area.id} className="practice-area" open={index === 0}>
                  <summary>
                    <span className="practice-number">{area.number}</span>
                    <span className="practice-summary"><h3>{area.title}</h3><span>{area.description}</span></span>
                    <span className="practice-toggle"><Plus size={22} aria-hidden="true" /></span>
                  </summary>
                  <div className="practice-body">
                    <ul>{area.services.map(service => <li key={service}><Check size={14} aria-hidden="true" /><span>{service}</span></li>)}</ul>
                    <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link">Entre em contato <ArrowUpRight size={16} aria-hidden="true" /></a>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section section-space" aria-labelledby="approach-title">
        <div className="container">
          <Reveal className="approach-heading"><p className="section-label"><span /> Nossa atuação</p><h2 id="approach-title">Orientação jurídica com<br /><em>atenção aos detalhes.</em></h2></Reveal>
          <div className="approach-grid">
            {approach.map(item => <Reveal className="approach-item" key={item.number}>
              <div className="approach-top"><item.icon size={30} strokeWidth={1.2} aria-hidden="true" /><span>{item.number}</span></div>
              <h3>{item.title}</h3><p>{item.text}</p>
            </Reveal>)}
          </div>
        </div>
      </section>

      <section id="profissionais" className="professionals-section section-space" aria-labelledby="professionals-title">
        <Reveal className="container editorial-grid">
          <div><p className="section-label"><span /> Nossos profissionais</p><h2 id="professionals-title">Conheça os profissionais<br /><em>do escritório.</em></h2><p className="section-aside">O cuidado com cada questão começa<br />com quem acompanha você.</p></div>
          <div className="professionals-list">
            <article className="professional"><span className="professional-index">01 / ADVOGADO</span><h3>Dr. Ralf Berndt</h3><p>OAB/SC 48.051</p></article>
            <article className="professional"><span className="professional-index">02 / ADVOGADA</span><h3>Dra. Mariana Effting<br />Vanderlinde Furquim</h3><p>OAB/SC 42.080</p></article>
          </div>
        </Reveal>
      </section>

      <section id="contato" className="contact-section section-space" aria-labelledby="contact-title">
        <Reveal className="container contact-grid">
          <div className="contact-intro"><p className="section-label"><span /> Entre em contato</p><h2 id="contact-title">Estamos à disposição<br />para <em>ouvir você.</em></h2><p>Entre em contato com nossa equipe para obter informações sobre os serviços jurídicos prestados pelo escritório.</p><a className="button button-primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon width={21} height={21} /> Conversar pelo WhatsApp <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className="contact-details">
            <div className="contact-detail"><WhatsAppIcon width={22} height={22} /><div><h3>Fale com nossa equipe</h3><a className="phone-link" href={site.whatsapp} target="_blank" rel="noopener noreferrer">{site.phone}<ArrowUpRight size={17} aria-hidden="true" /></a><a className="phone-link" href={site.whatsappSecondary} target="_blank" rel="noopener noreferrer">{site.phoneSecondary}<ArrowUpRight size={17} aria-hidden="true" /></a></div></div>
            <div className="contact-detail"><MapPin size={22} strokeWidth={1.4} aria-hidden="true" /><div><h3>Nosso endereço</h3><address>Rua Prefeito Aristides Largura, 68<br />Bairro América<br />Joinville — SC</address><a href={site.maps} target="_blank" rel="noopener noreferrer" className="text-link">Ver no Google Maps <ArrowUpRight size={15} aria-hidden="true" /></a></div></div>
            <div className="contact-detail"><Camera size={21} strokeWidth={1.4} aria-hidden="true" /><div><h3>Acompanhe o escritório</h3><a className="instagram-link" href={site.instagram} target="_blank" rel="noopener noreferrer">@berndtefftingadvocacia <ArrowUpRight size={16} aria-hidden="true" /></a></div></div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
