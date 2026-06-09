import App from '../../App';
import { filmsData } from '../../data';
import { Language } from '../../types';
import { SITE_URL, PROFILE_PIC, SOCIAL_LINKS, SEO } from '../../content/site';

export function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }];
}

/* JSON-LD is rendered on the SERVER, in the page's language, so search engines
   see it without running JavaScript. */
function buildJsonLd(lang: Language) {
  const films = filmsData(lang);
  const abs = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ciro Araujo',
    url: `${SITE_URL}/${lang}`,
    image: abs(PROFILE_PIC),
    jobTitle: lang === 'pt' ? 'Realizador Audiovisual' : 'Filmmaker',
    description: SEO[lang].description,
    sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.letterboxd, SOCIAL_LINKS.linkedin, SOCIAL_LINKS.substack],
  };

  const videos = films
    .filter((film) => film.videoEmbed)
    .map((film) => ({
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: film.title,
      description: film.desc,
      thumbnailUrl: [abs(film.img)],
      uploadDate: `${/^\d{4}$/.test(film.year) ? film.year : '2025'}-01-01`,
      duration: film.specs?.runtime
        ? `PT${film.specs.runtime.replace(' min', 'M').replace('min', 'M').replace(' ', '')}`
        : undefined,
      embedUrl: film.videoEmbed,
    }));

  return [person, ...videos];
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const language = (lang === 'en' ? 'en' : 'pt') as Language;
  const jsonLd = buildJsonLd(language);

  return (
    <>
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Escape "<" so content can never close the <script> tag early (XSS hardening).
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
        />
      ))}
      <App initialLang={language} />
    </>
  );
}
