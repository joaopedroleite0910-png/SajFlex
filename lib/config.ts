export const COMPANY_NAME = "SAJ FLEX REPRESENTAÇÕES";
export const COMPANY_TAGLINE = "Representação comercial com marcas que transformam lares.";
export const WHATSAPP_URL = "https://wa.me/5575988238080";
export const WHATSAPP_DISPLAY = "+55 (75) 98823-8080";
export const PHONE_DISPLAY = "+55 (75) 98823-8080";
export const EMAIL = "Sajflex@hotmail.com";
export const REGION = "Bahia — Brasil";

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Contato", href: "/contato" },
];

export const BRANDS = [
  {
    slug: "reconflex",
    name: "RECONFLEX",
    category: "Colchões & Descanso",
    catalogUrl: "/catalogos/reconflex-2026.pdf",
    siteUrl: "https://www.reconflex.com.br/",
    image: "/brands/reconflex.png",
  },
  {
    slug: "tcil",
    name: "TCIL",
    category: "Móveis",
    catalogUrl: "/catalogos/tcil-2026.pdf",
    siteUrl: "https://www.tcil.com.br/",
    image: "/brands/tcil.png",
  },
  {
    slug: "edn-moveis",
    name: "EDN MÓVEIS",
    category: "Móveis",
    catalogUrl: null,
    catalogs: [
      { label: "Catálogo Bem Estar", url: "/catalogos/edn-bemestar.pdf" },
      { label: "Catálogo Fluir", url: "/catalogos/edn-fluir.pdf" },
    ],
    siteUrl: "https://edn.com.br/",
    image: "/brands/edn-moveis.svg",
  },
  {
    slug: "agratto",
    name: "AGRATTO",
    category: "Climatização",
    catalogUrl: "/catalogos/agratto-2025.pdf",
    siteUrl: "https://www.agratto.com.br/",
    image: "/brands/agratto.png",
  },
  {
    slug: "ventisol",
    name: "VENTISOL",
    category: "Ventilação & Climatização",
    catalogUrl: "/catalogos/ventisol.pdf",
    siteUrl: "https://www.ventisol.com.br/",
    image: "/brands/ventisol.png",
  },
];
