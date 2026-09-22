/* ==========================================================================
   AUTHORING TYPES  —  the shape of your editable content
   --------------------------------------------------------------------------
   Everything you edit lives in this folder (films.ts, projects.ts, site.ts,
   ui.ts, zines.ts). These types describe how to fill those files in and give
   you autocomplete + error-checking in your editor as you type.

   The golden rule: any text shown to visitors is bilingual, written as
   { pt: "Português", en: "English" }. Write both languages side by side.

   For FILMS, EVERY field below is REQUIRED — so every film looks identical
   and you never have to guess which lines to add. When something doesn't
   apply, leave it EMPTY instead of deleting it:
     • text         → { pt: '', en: '' }
     • single text  → ''
     • list         → []
     • yes/no       → false
   ========================================================================== */

import { FilmCategory, HighlightType } from '../types';

/** A piece of text in both languages. Always fill in BOTH (or both empty). */
export type Localized = { pt: string; en: string };

/* -------------------------------------------------------------------------- */
/*  FILMS                                                                      */
/* -------------------------------------------------------------------------- */

export interface FilmCredit {
  role: Localized;   // e.g. { pt: "Direção", en: "Director" }
  name: string;      // a name is the same in both languages
}

export interface FilmSpecs {
  runtime: string;      // "23 min"   (leave '' if unknown)
  aspectRatio: string;  // "1.66:1"   (leave '' if unknown)
  format: string;       // "16mm" / "DCP 2K"
  color: string;        // "Cor / Color" / "P&B"
}

export interface FilmLinks {
  imdb: string;         // full url, or ''
  letterboxd: string;   // full url, or ''
  pressKit: string;     // full url, or ''
  instagram: string;    // film / production company Instagram url, or ''
}

export interface Highlight {
  /** The laurel's kicker:
      'national-premiere'      → ESTREIA NACIONAL / BRAZILIAN PREMIERE
      'international-premiere' → ESTREIA INTERNACIONAL / INTERNATIONAL PREMIERE
      'premiere'               → ESTREIA / PREMIERE (generic)
      'award'                  → PRÊMIO / AWARD
      'selection'              → SELEÇÃO / SELECTION
      A film can have several laurels (e.g. a national AND an international premiere). */
  type: HighlightType;
  /** SHORT label inside the laurel (~35 characters max, or it gets cut),
      e.g. { pt: '29ª Mostra de Tiradentes', en: '29th Tiradentes Film Festival' }. */
  label: Localized;
}

/** One festival where the film screened. Only `name` is required. */
export interface FestivalEntry {
  /** Festival name, kept as written, e.g. "29ª Mostra de Tiradentes". */
  name: string;
  /** true = the film premiered here. Shown as ESTREIA NACIONAL or
      ESTREIA INTERNACIONAL depending on the list it's in. */
  premiere?: boolean;
  /** A prize won here, e.g. { pt: 'Melhor Fotografia', en: 'Best Cinematography' }. */
  award?: Localized;
  /** Section / showcase / extra info, e.g. { pt: 'Mostra Competitiva', en: 'Competitive Section' }. */
  note?: Localized;
}

/** Festivals split in two lists: in Brazil (national) and abroad (international). */
export interface FilmFestivals {
  national: FestivalEntry[];
  international: FestivalEntry[];
}

export interface FilmEntry {
  // ——— IDENTIFICATION ———
  /** URL-friendly id, unique. Lowercase, words separated by hyphens. */
  slug: string;
  title: Localized;
  /** Genre + length line, e.g. { pt: "Ficção • Curta-metragem", en: "Fiction • Short Film" } */
  kind: Localized;
  /** A release year like 2025, OR the literal string 'pre-production'. */
  year: number | 'pre-production';
  /** Your role(s) shown as badges, comma-separated, e.g. "Direção, Roteiro". */
  role: Localized;
  /** Which filter buckets this film belongs to. Drives the portfolio filtering.
      A film can be in several at once, e.g. ['photo', 'edit'] or ['dir', 'prod'].
      Options: 'dir' (direção) | 'photo' (fotografia) | 'edit' (pós-produção:
      montagem/cor/vfx) | 'script' (roteiro) | 'assist' (assistência) |
      'prod' (produção/distribuição). */
  categories: FilmCategory[];

  // ——— TEXT ———
  synopsis: Localized;
  /** Director's note (optional — leave { pt: '', en: '' } if none). */
  directorStatement: Localized;
  /** Production / support line (optional). */
  production: Localized;

  // ——— IMAGES (files go in /public/assets, referenced as "/assets/FILE") ———
  cover: string;
  /** Extra stills (modal + card hover). Leave [] if none. */
  stills: string[];

  // ——— TECHNICAL SHEET ———
  specs: FilmSpecs;
  /** Crew list. Leave [] if none. */
  credits: FilmCredit[];
  /** Festivals, split into Brazil (national) and abroad (international).
      Leave { national: [], international: [] } if none. Premieres are listed
      first automatically. */
  festivals: FilmFestivals;

  // ——— MEDIA & EXTRAS ———
  /** YouTube/Vimeo EMBED url (the /embed/ form). Leave '' for no video. */
  videoEmbed: string;
  /** Award / premiere / selection badges shown on the film. Leave [] for none.
      e.g. [{ type: 'premiere', label: { pt: '29ª Mostra de Tiradentes', en: '...' } }] */
  highlights: Highlight[];
  /** Shows a "Student Film" stamp when true. */
  isStudentProject: boolean;
  links: FilmLinks;
}

/* -------------------------------------------------------------------------- */
/*  PROJECTS  (the "TV channels" section)                                      */
/* -------------------------------------------------------------------------- */

/** A single monitor inside the "UCB Productions" wall of screens. */
export interface ProductionMonitor {
  title: string;          // shown as-is (proper name)
  role: Localized;
  credits: string;        // shown as-is
  image: string;          // "/assets/FILE"
  videoUrl: string;       // YouTube embed url played in the lightbox
}
