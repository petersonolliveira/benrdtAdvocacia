# Registro de validação — 16/11/2026

## Executado

- `npm run build`: compilação e exportação estática concluídas, incluindo início, privacidade, 404, robots e sitemap.
- `npm run typecheck`: sem erros.
- Prévia estática: resposta HTTP 200.
- Revisão independente do código: sem falhas funcionais importantes identificadas.
- Conferência no Chrome nas larguras 375, 390, 768, 1440 e 1920 px: sem rolagem horizontal; menu responsivo nos tamanhos menores.
- Foto original exibida integralmente na proporção 1154 × 1600, com WebP derivado sem recorte.
- Navegação mobile: abertura, fechamento com Escape, retorno de foco ao botão e fechamento após selecionar Contato.
- Âncoras internas: nenhum destino ausente.
- Área de Família e Sucessões: abertura por Enter e serviços visíveis.
- Link do rodapé para Política de Privacidade: página correta, com título, conteúdo e aviso de minuta.
- Um H1 na página inicial; prévia com `noindex, nofollow`.
- Telefones, WhatsApp, Instagram, endereço, nomes e registros OAB conferidos com o briefing.

## Limites

- A suíte Playwright incluída em `tests/` não foi executada nesta sessão; a interação foi validada pelo controle de navegador disponível.
- Não foram enviados contatos pelo WhatsApp nem mensagens ao escritório.
- Não foi realizada auditoria externa de Core Web Vitals ou certificação integral de acessibilidade.
- A política e a publicidade profissional ainda exigem revisão jurídica pelos responsáveis. Consultar `REVISAO-JURIDICA.md`.
- `noindex` não torna o site privado e não substitui proteção de acesso da hospedagem.
