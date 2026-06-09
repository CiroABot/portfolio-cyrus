import type { MetadataRoute } from 'next';
import { SITE_URL } from '../content/site';
import { films } from '../content/films';

const langs = ['pt', 'en'] as const;

function alternates(path: string) {
  return {
    languages: {
      'pt-BR': `${SITE_URL}/pt${path}`,
      'en-US': `${SITE_URL}/en${path}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Home, per locale
  for (const lang of langs) {
    entries.push({
      url: `${SITE_URL}/${lang}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: alternates(''),
    });
  }

  // Each film page, per locale
  for (const film of films) {
    for (const lang of langs) {
      entries.push({
        url: `${SITE_URL}/${lang}/films/${film.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: alternates(`/films/${film.slug}`),
      });
    }
  }

  return entries;
}
