/* ==========================================================================
   DATA ADAPTER  (you usually don't edit this file)
   --------------------------------------------------------------------------
   Your content lives in ./content/*  — films.ts, projects.ts, site.ts, ui.ts,
   zines.ts. This file just resolves that bilingual content into the flat,
   single-language shape the components render. Because every film now keeps
   ALL fields (filling empty ones with ''/[]/false), this adapter turns those
   empties back into "absent" so the UI doesn't render blank awards, empty
   players, empty spec badges, etc. To change content, edit ./content.
   ========================================================================== */

import { Language, FilmData, TechSpecs, ExternalLinks } from './types';
import { films } from './content/films';
import { Localized, FilmEntry } from './content/types';
import { translations } from './content/ui';
import { zineImages } from './content/zines';
import { PROFILE_PIC, SOCIAL_LINKS, DOC_LINKS, CONTACT_EMAIL } from './content/site';

// Re-export the bits components already import from here.
export { translations, zineImages, PROFILE_PIC, SOCIAL_LINKS, DOC_LINKS, CONTACT_EMAIL };

/** Resolve a { pt, en } value down to the active language. */
export const localize = (value: Localized, lang: Language): string => value[lang];

/** A bilingual value counts as "filled" if either language has text. */
const filled = (l: Localized): boolean => l.pt.trim() !== '' || l.en.trim() !== '';

/** Keep only non-empty spec fields; undefined if all are blank. */
const cleanSpecs = (s: FilmEntry['specs']): TechSpecs | undefined => {
  const out: TechSpecs = {};
  if (s.runtime.trim()) out.runtime = s.runtime;
  if (s.aspectRatio.trim()) out.aspectRatio = s.aspectRatio;
  if (s.format.trim()) out.format = s.format;
  if (s.color.trim()) out.color = s.color;
  return Object.keys(out).length ? out : undefined;
};

/** Keep only non-empty links; undefined if all are blank. */
const cleanLinks = (l: FilmEntry['links']): ExternalLinks | undefined => {
  const out: ExternalLinks = {};
  if (l.imdb.trim()) out.imdb = l.imdb;
  if (l.letterboxd.trim()) out.letterboxd = l.letterboxd;
  if (l.pressKit.trim()) out.pressKit = l.pressKit;
  return Object.keys(out).length ? out : undefined;
};

/** Build the single-language film list the components consume. */
export const filmsData = (lang: Language): FilmData[] =>
  films.map((f) => ({
    id: f.slug,
    title: f.title[lang],
    type: f.kind[lang],
    year: f.year === 'pre-production' ? translations[lang].status_pre : String(f.year),
    role: f.role[lang],
    categories: f.categories,
    desc: f.synopsis[lang],
    img: f.cover,
    stills: f.stills.length ? f.stills : undefined,
    videoEmbed: f.videoEmbed.trim() ? f.videoEmbed : undefined,
    highlights: f.highlights
      .filter((h) => filled(h.label))
      .map((h) => ({ type: h.type, label: h.label[lang] })),
    isStudentProject: f.isStudentProject,
    directorStatement: filled(f.directorStatement) ? f.directorStatement[lang] : undefined,
    production: filled(f.production) ? f.production[lang] : undefined,
    specs: cleanSpecs(f.specs),
    credits: f.credits.length ? f.credits.map((c) => ({ role: c.role[lang], name: c.name })) : undefined,
    festivals: f.festivals.length ? f.festivals : undefined,
    links: cleanLinks(f.links),
  }));
