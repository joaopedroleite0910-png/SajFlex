# Site Catálogo — Representação Comercial

Site institucional + catálogo de marcas em Next.js 14.

## Pré-requisitos

- Node.js 18+ instalado: https://nodejs.org/

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

## Build (exportação estática)

```bash
npm run build
```

Os arquivos ficam em `/out` — prontos para hospedar em qualquer CDN/hosting estático.

## Personalizar

### Nome da empresa e contato
Edite **`/lib/config.ts`** — única fonte de verdade para:
- Nome da empresa
- Número de WhatsApp
- E-mail, telefone, região

### Logos e imagens das marcas
Adicione imagens em `/public/brands/`:
- `reconflex.jpg`
- `tcil.jpg`
- `edn-moveis.jpg`
- `agratto.jpg`
- `ventisol.jpg`

Proporção recomendada: **4:3** (ex: 800×600px)

### Links de catálogos
Em `/lib/config.ts`, no array `BRANDS`, troque `catalogUrl: "#"` pela URL real (PDF, site da marca, etc.).

## Estrutura

```
/app
  layout.tsx        → Header + Footer compartilhados
  page.tsx          → Início
  /catalogo/page.tsx
  /contato/page.tsx
/components
  Header.tsx
  Footer.tsx
  BrandCard.tsx
  ContactForm.tsx
  MarqueeBrands.tsx
  FadeInSection.tsx
/lib
  config.ts         → Dados da empresa (edite aqui)
/public
  /brands/          → Coloque as fotos das marcas aqui
```
