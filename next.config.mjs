/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The ported components use plain <img> + some unescaped quotes in JSX.
  // Don't let lint warnings block production builds (run `npm run lint` separately).
  eslint: { ignoreDuringBuilds: true },
  images: {
    // Local images live in /public/assets. Allow modern formats for the
    // optimization pass (next/image will serve AVIF/WebP automatically).
    formats: ['image/avif', 'image/webp'],
    // Quality tiers used across the site (thumbnails use lower tiers).
    qualities: [40, 50, 60, 75],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Don't let browsers guess content types (blocks MIME-sniffing attacks).
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // The site never needs to be embedded in an <iframe> elsewhere (clickjacking).
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Send only the origin as referrer to external sites (YouTube, Drive, socials).
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // This site uses none of these sensitive APIs — deny them outright.
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
