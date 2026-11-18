# BROKUP — Landing page estática

Site estático, sem WordPress, Lovable, dependências de build ou bibliotecas externas. Arquivos prontos para hospedagem HTTPS comum.

## Publicar
1. Extraia todo o conteúdo desta pasta para a raiz pública de **brokup.com.br** (geralmente `public_html`), preservando `assets/`.
2. Certifique-se de que o domínio use HTTPS e que `https://brokup.com.br/` abra `index.html`.
3. Teste todos os CTAs do WhatsApp em celular e computador.
4. Revise os termos comerciais da assinatura antes de captar pagamentos: implantação, domínio, hospedagem, duração, limites de revisão, cancelamento e portabilidade.
5. Cadastre o domínio no Google Search Console e envie `https://brokup.com.br/sitemap.xml`.

## Personalizar
- Telefone WhatsApp em `script.js`, constante `WHATSAPP` (atualmente `5511999118644`). Há links de fallback no HTML.
- Preço, escopo e textos no `index.html`.
- Paleta CSS em `styles.css`, variáveis `:root`.
- Logos originais recebidos do cliente em `assets/logo-positivo.svg` e `assets/logo-negativo.svg`.
- Mockup de corretora no hero é **fictício**, puramente ilustrativo, produzido com HTML e CSS.

## SEO e medição
- Metatags, canonical, Open Graph/Twitter, schema.org Service/Offer, sitemap e robots incluídos.
- Sem analytics de terceiros por padrão; para medição real é necessário configurar GA4/GTM respeitando requisitos de privacidade e consentimento aplicáveis. Clique em WhatsApp envia `event: whatsapp_click` ao `dataLayer` e `cta_location` para o GTM, quando integrado.
- Sem imagens fotográficas e sem fontes remotas. Ativos SVG e PNG no próprio domínio.
- Atualize preço e informações estruturadas juntos em caso de mudança comercial.
- NÃO há checkout nem onboarding implementados nesta versão; o contato se inicia via WhatsApp.
- Inclua página de privacidade e dados legais da Digital Breakfast quando estiverem definidos. Não foram inventados CNPJ, e-mail nem política.

## Testes sugeridos antes do lançamento
- Mobile Android / iPhone / desktop; Lighthouse mobile; keyboard navigation e VoiceOver.
- Verificar compartilhamento do link pelo WhatsApp (OG), indexação Search Console e disparo de `whatsapp_click` no GTM após configuração.

## Visualização local
Abra `index.html` diretamente no navegador com a pasta `assets` e os arquivos `styles.css` e `script.js` no mesmo diretório. Os caminhos internos são relativos, para funcionar em prévia local e hospedagem. Não mova apenas o HTML para fora da pasta.
