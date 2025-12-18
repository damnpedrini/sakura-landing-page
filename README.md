# Landing Page Universal — Estilo Litorâneo

Landing page moderna, clean e responsiva, com estética litorânea suave. Funciona para qualquer tipo de cliente/negócio.

## Seções e navegação
- Header com logo à esquerda, menu (Home, Serviços, Portfólio, Contato) e CTA “Quero minha Landing Page”.
- Hero com headline persuasiva, subheadline, CTA central e fundo com ondas.
- Serviços: cartões de serviços genéricos (Design/UX, Dev, Performance, SEO/Analytics).
- Benefícios: lista de bullets curtos e persuasivos.
- Diferenciais: lista com pontos fortes e mockup ilustrativo.
- Portfólio: cards de exemplo (substitua pelas suas imagens reais).
- Prova Social: depoimento de cliente e dica de antes/depois.
- CTA Final: formulário curto (Nome, E-mail, Telefone, Mensagem opcional).
- Footer: contato, redes sociais e direitos autorais.

## Rodando localmente
Abra `index.html` ou sirva com HTTP server para melhor experiência:

```bash
cd "sakura-landing page"
python3 -m http.server 5173
# acesse http://localhost:5173
```

## Customização rápida
- Paleta litorânea: ajuste variáveis em `assets/css/styles.css` (`--sea`, `--sky`, `--lagoon`, `--sand`, `--ink`).
- Logo/Marca: troque o texto/mark em `index.html` (classe `.brand-text` e `.brand-mark`).
- Portfólio: substitua os placeholders `.portfolio-thumb` por imagens reais.
- Redes sociais: ajuste links no Footer.

## Formulário
O formulário é um placeholder (mostra alerta no envio). Integre com:
- Formspree (sem backend): https://formspree.io/
- Sheet.best, Getform, Beeceptor, ou backend próprio.

## Extras
- Tipografia: Inter + Plus Jakarta Sans via Google Fonts.
- Ícones: Bootstrap Icons CDN.
- Hover/Focus: efeitos sutis e acessíveis nos botões/links.
