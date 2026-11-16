export const site = {
  name: "Berndt & Effting Advocacia",
  title: "Berndt & Effting Advocacia | Advogados em Joinville - SC",
  description:
    "Assessoria, consultoria e representação jurídica em Joinville, SC. Atuação em Direito Civil, Previdenciário, Imobiliário, de Família e Trabalhista.",
  whatsapp: "https://wa.me/5547992031370",
  whatsappSecondary: "https://wa.me/5547992283718",
  phone: "(47) 99203-1370",
  phoneSecondary: "(47) 99228-3718",
  instagram: "https://www.instagram.com/berndtefftingadvocacia/",
  maps: "https://www.google.com/maps/search/?api=1&query=Rua%20Prefeito%20Aristides%20Largura%2C%2068%2C%20Am%C3%A9rica%2C%20Joinville%20-%20SC",
} as const;

export const navigation = [
  { href: "/#inicio", label: "Início" },
  { href: "/#escritorio", label: "O Escritório" },
  { href: "/#areas", label: "Áreas de Atuação" },
  { href: "/#profissionais", label: "Profissionais" },
  { href: "/#contato", label: "Contato" },
] as const;

export const practiceAreas = [
  {
    id: "previdenciario",
    number: "01",
    title: "Direito Previdenciário",
    description: "Orientação e acompanhamento em questões relacionadas à Previdência Social.",
    services: [
      "Aposentadorias e planejamento previdenciário.",
      "Benefícios por incapacidade.",
      "Auxílio-acidente.",
      "Pensão por morte e salário-maternidade.",
      "Revisão de benefícios.",
      "Requerimentos e recursos perante o INSS.",
      "Atuação judicial previdenciária.",
    ],
  },
  {
    id: "imobiliario",
    number: "02",
    title: "Direito Imobiliário e Contratual",
    description: "Assessoria nas relações contratuais e nas questões que envolvem o seu patrimônio.",
    services: [
      "Usucapião e regularização de imóveis.",
      "Elaboração, análise e revisão de contratos.",
      "Compra e venda de imóveis e distratos.",
      "Locações, despejos e cobrança de aluguéis.",
      "Execução de contratos e defesa em cobranças.",
      "Questões de posse, propriedade e vizinhança.",
    ],
  },
  {
    id: "familia",
    number: "03",
    title: "Direito de Família e Sucessões",
    description: "Atenção às relações familiares e às decisões que atravessam gerações.",
    services: [
      "Inventários e partilhas.",
      "Divórcio e dissolução de união estável.",
      "Pensão alimentícia.",
      "Guarda e convivência familiar.",
      "Curatela.",
      "Orientação patrimonial e sucessória.",
    ],
  },
  {
    id: "trabalhista",
    number: "04",
    title: "Direito Trabalhista",
    description: "Orientação e atuação jurídica em demandas relacionadas às relações de trabalho.",
    services: [
      "Análise das circunstâncias de cada demanda trabalhista, orientação sobre direitos e obrigações e acompanhamento jurídico, conforme as particularidades da situação.",
    ],
  },
] as const;

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const siteUrl = configuredUrl
  ? new URL(configuredUrl).origin
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

// A prévia permanece sem indexação até a revisão jurídica e a escolha da URL definitiva.
export const isIndexable = process.env.SITE_INDEXABLE === "true" && siteUrl.startsWith("https://");
