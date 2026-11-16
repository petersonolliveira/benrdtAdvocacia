import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <main id="conteudo" className="not-found container"><p className="section-label">Página não encontrada</p><h1>Vamos encontrar<br /><em>o caminho de volta.</em></h1><p>O endereço acessado não está disponível.</p><Link href="/" className="button button-primary"><ArrowLeft size={18} aria-hidden="true" /> Voltar ao início</Link></main>;
}
