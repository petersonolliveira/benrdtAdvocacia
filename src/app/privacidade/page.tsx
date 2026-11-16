import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Informações sobre privacidade, navegação no site e contato com Berndt & Effting Advocacia.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <main id="conteudo" className="legal-page container">
      <Link href="/" className="text-link">
        Voltar ao início
      </Link>
      <p className="section-label">Privacidade</p>
      <h1>Política de Privacidade</h1>
      <p className="legal-notice">
        Minuta para revisão jurídica antes da publicação definitiva.
      </p>

      <article className="legal-copy">
        <h2>Sobre este aviso</h2>
        <p>
          Esta política descreve o tratamento de dados relacionado ao site
          institucional Berndt &amp; Effting Advocacia e aos contatos iniciados
          pelos seus visitantes. O escritório está localizado na Rua Prefeito
          Aristides Largura, 68, Bairro América, Joinville, SC.
        </p>

        <h2>Navegação no site</h2>
        <p>
          O site não oferece formulários, cadastro, área de acesso ou newsletter.
          Seu código não utiliza cookies, ferramentas de análise de audiência ou
          pixels publicitários. Fontes e imagens são disponibilizadas pelo próprio
          site, sem carregamento de bibliotecas de fontes ou conteúdos incorporados
          de redes sociais e mapas.
        </p>

        <h2>Hospedagem e registros técnicos</h2>
        <p>
          O site utiliza a infraestrutura de hospedagem da Vercel. Para entregar as
          páginas e proteger o serviço, essa infraestrutura pode processar dados
          técnicos, como endereço IP, informações do navegador, data e horário de
          acesso e endereço da página solicitada. Esses registros são distintos
          das informações que você decide enviar ao escritório.
        </p>

        <h2>Contato pelo WhatsApp</h2>
        <p>
          Os links de contato abrem o WhatsApp, um serviço externo. Se você enviar
          uma mensagem, o escritório poderá receber seu número de telefone, nome
          exibido e as informações que decidir compartilhar. Esses dados são
          utilizados para responder ao contato e avaliar sua solicitação. O envio
          de uma mensagem não representa contratação automática de serviços.
        </p>

        <h2>Links para serviços externos</h2>
        <p>
          WhatsApp, Instagram e Google Maps possuem regras próprias de privacidade.
          O site oferece links para esses serviços, sem incorporar seus conteúdos.
          Ao acessá-los, o tratamento realizado por essas plataformas segue suas
          próprias condições. A ausência de ferramentas de rastreamento no site
          não se estende aos serviços externos que você escolher acessar.
        </p>

        <h2>Conservação das informações</h2>
        <p>
          As informações recebidas pelo escritório são mantidas enquanto
          necessárias às finalidades do atendimento, consideradas as obrigações
          legais e as hipóteses de conservação permitidas. Os critérios aplicáveis
          podem variar conforme o conteúdo e a natureza da solicitação. Registros
          técnicos da hospedagem seguem as condições aplicáveis à infraestrutura
          utilizada.
        </p>

        <h2>Seus direitos</h2>
        <p>
          Conforme as condições previstas na Lei Geral de Proteção de Dados
          Pessoais (LGPD), você pode solicitar:
        </p>
        <ul>
          <li>Confirmação de tratamento e acesso aos seus dados.</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
          <li>
            Anonimização, bloqueio ou eliminação de dados desnecessários,
            excessivos ou tratados em desconformidade com a lei.
          </li>
          <li>Portabilidade, conforme a regulamentação aplicável.</li>
          <li>Informações sobre o compartilhamento de seus dados.</li>
          <li>
            Quando houver tratamento por consentimento, informações sobre a
            possibilidade de não fornecê-lo e suas consequências, revogação do
            consentimento e eliminação dos dados, ressalvadas as hipóteses legais
            de conservação.
          </li>
        </ul>
        <p>
          Você também pode apresentar oposição ao tratamento nas hipóteses legais
          e peticionar à Autoridade Nacional de Proteção de Dados (ANPD).
        </p>

        <h2>Canal de privacidade</h2>
        <p>
          Para esclarecer dúvidas ou exercer seus direitos, entre em contato pelo
          WhatsApp{" "}
          <a
            href="https://wa.me/5547992031370"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitações de privacidade pelo WhatsApp (47) 99203-1370, abre em nova aba"
          >
            (47) 99203-1370
          </a>
          . Poderão ser solicitadas informações necessárias para confirmar sua
          identidade e proteger seus dados.
        </p>

        <h2>Atualizações</h2>
        <p>
          Esta política poderá ser atualizada quando houver mudanças nos recursos
          do site ou nas práticas de tratamento de dados.
        </p>
      </article>
    </main>
  );
}
