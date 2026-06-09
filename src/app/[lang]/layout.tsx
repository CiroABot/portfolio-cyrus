import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Averia_Serif_Libre, Be_Vietnam_Pro } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { SEO, SITE_URL, PROFILE_PIC } from '../../content/site';
import { Language } from '../../types';
import '../globals.css';

/* Fonts are self-hosted & optimized by Next (no render-blocking <link>). */
const title = Averia_Serif_Libre({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-title',
  display: 'swap',
});

const body = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== 'pt' && lang !== 'en') return {};
  const seo = SEO[lang as Language];

  return {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: 'Ciro Araujo' }],
    icons: { icon: '/icon.svg' },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'pt-BR': '/pt',
        'en-US': '/en',
        'x-default': '/pt',
      },
    },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}/${lang}`,
      siteName: seo.siteName,
      title: seo.title,
      description: seo.description,
      locale: lang === 'pt' ? 'pt_BR' : 'en_US',
      images: [{ url: PROFILE_PIC }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [PROFILE_PIC],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== 'pt' && lang !== 'en') notFound();

  return (
    <html lang={lang === 'pt' ? 'pt-BR' : 'en'}>
      <body className={`${title.variable} ${body.variable} font-body`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
