/* ==========================================================================
   Embed helpers — privacy-friendly video URLs.
   --------------------------------------------------------------------------
   Content files keep normal youtube.com/embed links (easy to copy-paste);
   at render time we serve them via youtube-nocookie.com, which doesn't set
   tracking cookies until the visitor actually presses play (LGPD/GDPR-kind).
   ========================================================================== */

export const toPrivacyEmbed = (url: string): string =>
  url
    .replace('www.youtube.com/embed/', 'www.youtube-nocookie.com/embed/')
    .replace('youtube.com/embed/', 'www.youtube-nocookie.com/embed/')
    .replace('www.www.', 'www.');
