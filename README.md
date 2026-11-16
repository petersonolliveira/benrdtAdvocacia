# Berndt & Effting Advocacia

Site institucional em Next.js App Router, TypeScript e Tailwind CSS. Design editorial com a logomarca original, vinho institucional `#541126`, Cormorant Garamond e Inter hospedadas localmente.

## Executar

Requer Node.js 22 ou superior e npm.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000. Para validar a versão estática:

```sh
npm run build
npm run typecheck
npm run start
```

O build gera `out/`. A aplicação pode ser publicada na Vercel ou em hospedagem estática com suporte a diretórios e `404.html`.

## Conteúdo e estrutura

- `src/app/page.tsx`: página institucional completa.
- `src/app/privacidade/page.tsx`: minuta de Política de Privacidade.
- `src/lib/site.ts`: informações do escritório, navegação, serviços, links e configuração de SEO.
- `src/components/`: cabeçalho acessível, rodapé, marca, WhatsApp e animação progressiva.
- `src/app/globals.css`: identidade visual e layouts responsivos.
- `public/images/`: originais preservados e versão WebP da fotografia, sem recorte.
- `vercel.json`: configuração de build e cabeçalhos de segurança.

Sem formulários, banco de dados, login, analytics, pixels ou cookies criados pela aplicação. WhatsApp, Instagram e Maps são links externos; nenhum conteúdo desses serviços é incorporado. A hospedagem e a proteção de prévias podem ter seus próprios registros e cookies.

## Publicação definitiva e SEO

O site é entregue como prévia, com `noindex, nofollow` e `robots.txt` bloqueando indexação. Isso **não é controle de acesso**. A Política de Privacidade permanece identificada como minuta; consulte `REVISAO-JURIDICA.md`.

Na Vercel, a URL da prévia é obtida de `VERCEL_URL` durante o build. Após revisão jurídica e definição do endereço definitivo:

1. Configure `NEXT_PUBLIC_SITE_URL` com a URL HTTPS definitiva, sem caminho adicional.
2. Atualize a política conforme as práticas confirmadas e remova seu aviso de minuta.
3. Defina `SITE_INDEXABLE=true` e ajuste os metadados da página de privacidade, se ela também puder ser indexada.
4. Faça novo deploy. Canonical, Open Graph, sitemap e robots serão gerados com a configuração atualizada.

Nunca coloque chaves, senhas ou tokens em variáveis com prefixo `NEXT_PUBLIC_`. Nenhuma credencial é necessária à aplicação.

## Verificação

Build e TypeScript foram validados; navegação e responsividade foram conferidas no navegador em 375, 390, 768, 1440 e 1920 px. O registro da entrega está em `VALIDACAO.md`.

Uma suíte Playwright também está incluída para verificações futuras. Instale o navegador, mantenha `npm run start` aberto e execute:

```sh
npx playwright install chromium
npm test
```

Para utilizar uma instalação existente do Chrome, forneça `CHROME_PATH`. A suíte automatizada é uma ferramenta adicional; o registro da entrega distingue os testes efetivamente executados.

## Fontes técnicas

- [Next.js — exportação estática](https://nextjs.org/docs/app/guides/static-exports)
- [Next.js — metadados](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Tailwind CSS — integração com Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)

Os arquivos de marca e fotografia foram fornecidos pelo cliente. Sua publicação e reutilização seguem a autorização do respectivo titular.
