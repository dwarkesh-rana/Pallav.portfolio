// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Asset caching headers for static files
    async headers() {
        return [
            {
                source: '/:all*(svg|jpg|png|webp|ico|json|txt)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
    // Image optimization (no external images currently)
    images: {
        // domains: [], // add remote domains if needed
    },
};

module.exports = nextConfig;
