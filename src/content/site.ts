/* ==========================================================================
   SITE CONFIG  —  profile photo, links, contact, SEO
   --------------------------------------------------------------------------
   The few global things that aren't films or projects. Edit freely.
   ========================================================================== */

/** Profile photo. File lives in /public/assets. */
export const PROFILE_PIC = "/assets/profile_photo.jpg";

/** Contact email (used in the footer + structured data). */
export const CONTACT_EMAIL = "ciroperes.araujo@gmail.com";

/** Canonical site URL (used for SEO / social previews). */
export const SITE_URL = "https://ciroaraujo.com";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/ciroabot/",
  letterboxd: "https://letterboxd.com/ciroaraujo/",
  linkedin: "https://www.linkedin.com/in/ciroperesaraujo/",
  substack: "https://substack.com/@ciroaraujo",
};

/** External documents (Google Drive links). */
export const DOC_LINKS = {
  cv_pt:
    "https://drive.google.com/file/d/15eVxvgbT3m5cICl9xZC_nd7JOE_TsnfB/view?usp=sharing",
  cv_en:
    "https://drive.google.com/file/d/1T7-fINrdNNl8eUnqeAZ3K11ycHDaq5pw/view?usp=sharing",
  portfolio:
    "https://drive.google.com/file/d/1nZMsR8OQX6aFUYOpr_JWW9BiecYCVLU5/view?usp=sharing",
  drive:
    "https://drive.google.com/drive/folders/1VzuuHOclUs0NexZPrbhGWekPkx8OPnGH?usp=sharing",
};

/** Search-engine + social-preview text, per language. */
export const SEO = {
  pt: {
    title: "Ciro Araujo | Realizador Audiovisual & Crítico",
    description:
      "Portfólio de Ciro Araujo. Direção cinematográfica, fotografia, roteiro e crítica de cinema. Baseado em Brasília. Obras: Ouço Uma Cidade, Três Por Um.",
    keywords:
      "Ciro Araujo, Cinema, Diretor, Brasília, Crítica, Filme, Audiovisual, UnB, Curta-metragem, Cineclube, Cinebeijoca",
    siteName: "Ciro Araujo Portfólio",
  },
  en: {
    title: "Ciro Araujo | Filmmaker & Film Critic",
    description:
      "Portfolio of Ciro Araujo. Film directing, cinematography, screenwriting, and film criticism. Based in Brasília, Brazil. Works: I Hear A City, Three For One.",
    keywords:
      "Ciro Araujo, Filmmaker, Director, Brasilia, Film Critic, Cinema, Movies, Short Film, Screenwriter, Cinematography",
    siteName: "Ciro Araujo Portfolio",
  },
} as const;
