/* ==========================================================================
   PROJECTS  —  the "TV channels" section (curatorship, productions, workshops)
   --------------------------------------------------------------------------
   The descriptive paragraphs for this section live in ui.ts (cine_desc,
   work_ia_context, etc.) because they're tied to the layout. The values that
   change most often — video links, support credits, and the production
   "monitors" — live here so you can edit them without touching the design.
   ========================================================================== */

import { ProductionMonitor } from "./types";

/** CHANNEL 01 — Cinebeijoca film club. */
export const cinebeijoca = {
  /** YouTube embed played when "Watch Video" is clicked. */
  vignetteUrl: "https://www.youtube.com/embed/7f_hCKZjDCw?autoplay=1",
  support: "UnB / Finatec / CineBrasília",
};

/** CHANNEL 02 — UCB productions. Each entry is one monitor on the wall.
 *  Add a monitor by copying a block; the grid lays them out automatically. */
export const ucbProductions: ProductionMonitor[] = [
  {
    title: "VOZES DIVERSAS",
    role: {
      pt: "Operação de Câmera (Ep 4-7) & Edição (Ep 4)",
      en: "Camera Op (Ep 4-7) & Editor (Ep 4)",
    },
    credits: "Dir/Prod: Raphael Cardoso",
    image: "/assets/VOZESDIVERSAS.png",
    videoUrl: "https://www.youtube.com/embed/LPkdNakMabE?autoplay=1",
  },
  {
    title: "POP AO CUBO",
    role: { pt: "Apoio Operacional (Ep 1)", en: "Operational Support (Ep 1)" },
    credits: "Dir/Prod: Ciro Marcondes • Apoio: FAP-DF",
    image: "/assets/POPAOCUBO.png",
    videoUrl: "https://www.youtube.com/embed/VlFEnf7tSdY?autoplay=1",
  },
  {
    title: "LAB METAVERSE",
    role: { pt: "Edição & Apoio Operacional", en: "Editing & Op Support" },
    credits: "Dir/Prod: Florence Druvet • Apoio: FAP-DF/CNPQ",
    image: "/assets/LABMETAVERSO.png",
    videoUrl: "https://www.youtube.com/embed/DQQfVYXoznY?autoplay=1",
  },
];

/** Producer line shown under the UCB monitor wall. */
export const ucbProducer = "UNIVERSIDADE CATÓLICA DE BRASÍLIA";

/** CHANNEL 03 — workshops. Production credit line for each card. */
export const workshops = {
  aiEthicsProduction: "CAJUÍ COLLAB / OLFATO / MATRIZ",
  culturaProduction: "INSTITUTO AJA BRASIL",
};

/** CHANNEL 04 — "Cinema Feito, Cinema Falado" workshop. */
export const oficina = {
  poster: "/assets/OFICINA-CINEMA-FEITO_poster.jpg",
  support: "LPG - São Vicente de Minas - DF",
};
