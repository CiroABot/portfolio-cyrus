
import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { PROFILE_PIC } from '../data';

const SEO: React.FC = () => {
  const { lang } = useLanguage();

  const data = {
    pt: {
      title: "Ciro Araujo | Realizador Audiovisual & Crítico",
      description: "Portfólio de Ciro Araujo. Direção cinematográfica, fotografia, roteiro e crítica de cinema. Baseado em Brasília. Obras: Ouço Uma Cidade, Três Por Um.",
      keywords: "Ciro Araujo, Cinema, Diretor, Brasília, Crítica, Filme, Audiovisual, UnB, Curta-metragem, Cineclube, Cinebeijoca",
      siteName: "Ciro Araujo Portfólio"
    },
    en: {
      title: "Ciro Araujo | Filmmaker & Film Critic",
      description: "Portfolio of Ciro Araujo. Film directing, cinematography, screenwriting, and film criticism. Based in Brasília, Brazil. Works: I Hear A City, Three For One.",
      keywords: "Ciro Araujo, Filmmaker, Director, Brasilia, Film Critic, Cinema, Movies, Short Film, Screenwriter, Cinematography",
      siteName: "Ciro Araujo Portfolio"
    }
  };

  const current = data[lang];
  const url = "https://ciroaraujo.com";
  const image = PROFILE_PIC; 

  useEffect(() => {
    // 1. Update Title
    document.title = current.title;

    // 2. Helper function to update or create meta tags
    const updateMeta = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        // Set attributes for creation (e.g., name="description")
        // We parse the selector simply for this use case
        if (selector.includes('name=')) {
            element.setAttribute('name', selector.split('"')[1]);
        } else if (selector.includes('property=')) {
            element.setAttribute('property', selector.split('"')[1]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // 3. Update Standard Meta
    updateMeta('meta[name="description"]', 'content', current.description);
    updateMeta('meta[name="keywords"]', 'content', current.keywords);
    updateMeta('meta[name="author"]', 'content', "Ciro Araujo");

    // 4. Update Open Graph
    updateMeta('meta[property="og:url"]', 'content', url);
    updateMeta('meta[property="og:site_name"]', 'content', current.siteName);
    updateMeta('meta[property="og:title"]', 'content', current.title);
    updateMeta('meta[property="og:description"]', 'content', current.description);
    updateMeta('meta[property="og:image"]', 'content', image);
    updateMeta('meta[property="og:locale"]', 'content', lang === 'pt' ? 'pt_BR' : 'en_US');

    // 5. Update Twitter
    updateMeta('meta[name="twitter:title"]', 'content', current.title);
    updateMeta('meta[name="twitter:description"]', 'content', current.description);
    updateMeta('meta[name="twitter:image"]', 'content', image);

  }, [lang, current, url, image]);

  return null; // This component doesn't render visual elements
};

export default SEO;
