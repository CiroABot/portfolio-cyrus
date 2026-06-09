import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { filmsData, translations } from '../../../../data';
import { films } from '../../../../content/films';
import { Language, FilmData } from '../../../../types';
import { SITE_URL, PROFILE_PIC } from '../../../../content/site';
import ScrollUnlock from '../../../../components/ScrollUnlock';
import { toPrivacyEmbed } from '../../../../lib/embed';

/* dynamicParams stays ON so an unknown slug reaches this page, which then
   calls notFound() → renders the styled [lang]/not-found.tsx (not the bare 404). */

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of ['pt', 'en']) {
    for (const film of films) params.push({ lang, slug: film.slug });
  }
  return params;
}

function getFilm(lang: Language, slug: string): FilmData | undefined {
  return filmsData(lang).find((f) => f.id === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const language = (lang === 'en' ? 'en' : 'pt') as Language;
  const film = getFilm(language, slug);
  if (!film) return {};

  const cover = film.img.startsWith('http') ? film.img : `${SITE_URL}${film.img || PROFILE_PIC}`;
  const title = `${film.title} — Ciro Araujo`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: film.desc,
    alternates: {
      canonical: `/${language}/films/${slug}`,
      languages: {
        'pt-BR': `/pt/films/${slug}`,
        'en-US': `/en/films/${slug}`,
        'x-default': `/pt/films/${slug}`,
      },
    },
    openGraph: {
      type: 'video.other',
      url: `${SITE_URL}/${language}/films/${slug}`,
      title,
      description: film.desc,
      locale: language === 'pt' ? 'pt_BR' : 'en_US',
      images: [{ url: cover }],
    },
    twitter: { card: 'summary_large_image', title, description: film.desc, images: [cover] },
  };
}

export default async function FilmPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const language = (lang === 'en' ? 'en' : 'pt') as Language;
  const film = getFilm(language, slug);
  if (!film) notFound();

  const t = translations[language];
  const back = language === 'pt' ? '← Voltar ao portfólio' : '← Back to portfolio';
  const stills = (film.stills || []).filter((s) => s !== film.img);

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-black font-body">
      <ScrollUnlock />
      {/* Top bar */}
      <div className="border-b-3 border-black bg-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
          <Link href={`/${language}`} className="font-mono font-bold text-sm uppercase tracking-widest hover:text-rose transition-colors">
            {back}
          </Link>
          <span className="font-title italic font-bold text-lg">Ciro Araujo</span>
        </div>
      </div>

      <article className="max-w-[1100px] mx-auto px-5 md:px-8 py-10 md:py-16">
        {/* Header */}
        <header className="mb-8">
          <h1 className="font-title font-bold text-4xl md:text-6xl leading-[0.95] uppercase vhs-text mb-4">{film.title}</h1>
          <div className="flex flex-wrap items-center gap-2 font-bold text-navy tracking-widest uppercase text-xs md:text-sm">
            <span className="bg-black text-white px-2 py-1">{film.year}</span>
            <span className="border-2 border-black px-2 py-1">{film.type}</span>
            <span className="bg-rose text-black border-2 border-black px-2 py-1">{film.role}</span>
          </div>
        </header>

        {/* Media */}
        <div className="border-3 border-black shadow-pop bg-black mb-10 overflow-hidden">
          {film.videoEmbed ? (
            <div className="relative w-full aspect-video">
              <iframe
                src={toPrivacyEmbed(film.videoEmbed.replace('autoplay=1', 'autoplay=0'))}
                title={film.title}
                className="absolute inset-0 w-full h-full border-none"
                allow="fullscreen"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ) : (
            <div className="relative w-full aspect-video">
              <Image src={film.img} alt={film.title} fill sizes="(max-width: 1100px) 100vw, 1100px" className="object-cover" priority />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
          {/* Left: text */}
          <div>
            <p className="text-lg md:text-xl leading-relaxed text-justify font-medium mb-8">{film.desc}</p>

            {film.directorStatement && (
              <div className="mb-8 border-l-4 border-rose pl-5 py-1">
                <h2 className="font-bold text-sm uppercase text-rose mb-2">{t.modal_director_note}</h2>
                <p className="font-title italic text-lg md:text-xl leading-snug text-navy">&ldquo;{film.directorStatement}&rdquo;</p>
              </div>
            )}

            {film.festivals && film.festivals.length > 0 && (
              <div className="mb-8 bg-white border-2 border-black p-4 shadow-pop-sm">
                <h2 className="font-bold uppercase border-b-2 border-black mb-3 pb-1">{t.modal_festivals}</h2>
                <ul className="space-y-2 text-sm font-semibold">
                  {film.festivals.map((fest, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose text-lg leading-none">★</span>
                      <span className="leading-tight">{fest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stills */}
            {stills.length > 0 && (
              <div className="mb-8">
                <h2 className="font-bold uppercase text-navy mb-3">{t.modal_stills}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {stills.map((still, i) => (
                    <div key={i} className="relative aspect-video border-2 border-black overflow-hidden">
                      <Image src={still} alt={`${film.title} — still ${i + 1}`} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* External links */}
            {film.links && (film.links.imdb || film.links.letterboxd || film.links.pressKit) && (
              <div className="flex flex-wrap gap-4 pt-4 border-t-3 border-black">
                {film.links.imdb && (
                  <a href={film.links.imdb} target="_blank" rel="noreferrer" className="font-title font-bold italic text-xl underline decoration-2 decoration-rose hover:text-rose">IMDb</a>
                )}
                {film.links.letterboxd && (
                  <a href={film.links.letterboxd} target="_blank" rel="noreferrer" className="font-title font-bold italic text-xl underline decoration-2 decoration-teal hover:text-teal">Letterboxd</a>
                )}
                {film.links.pressKit && (
                  <a href={film.links.pressKit} target="_blank" rel="noreferrer" className="font-title font-bold italic text-xl underline decoration-2 decoration-navy hover:text-navy">Press Kit (PDF)</a>
                )}
              </div>
            )}
          </div>

          {/* Right: specs / crew / production */}
          <aside className="flex flex-col gap-6">
            {film.specs && (
              <div className="bg-white border-2 border-black p-4 shadow-pop-sm">
                <div className="flex flex-wrap gap-2">
                  {Object.values(film.specs).filter(Boolean).map((value, i) => (
                    <span key={i} className="border-2 border-black px-2 py-1 bg-white text-xs font-mono uppercase shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">{value as string}</span>
                  ))}
                </div>
              </div>
            )}

            {film.credits && film.credits.length > 0 && (
              <div>
                <h2 className="font-bold uppercase text-navy mb-3">{t.modal_crew}</h2>
                <div className="font-mono text-xs uppercase border-t-2 border-dashed border-black">
                  {film.credits.map((credit, i) => (
                    <div key={i} className="flex justify-between gap-3 py-2 border-b-2 border-dashed border-black/30">
                      <span className="text-gray-600">{credit.role}</span>
                      <span className="font-bold text-right">{credit.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {film.production && (
              <div className="border-2 border-black bg-white p-3">
                <h2 className="font-bold uppercase text-navy mb-1 text-xs">{t.modal_production}</h2>
                <p className="font-bold text-sm uppercase">{film.production}</p>
              </div>
            )}
          </aside>
        </div>
      </article>
    </main>
  );
}
