/** @type {import('next').NextConfig} */
// https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
    {key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload'},
    {key: 'X-Content-Type-Options', value: 'nosniff'},
    {key: 'X-Frame-Options', value: 'DENY'},
    {key: 'X-XSS-Protection', value: '1; mode=block'},
    {
        key: 'Content-Security-Policy',
        value: "default-src 'self'; img-src 'self' data: https://images.ctfassets.net; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self' https://vitals.vercel-insights.com; frame-ancestors https://app.contentful.com"
    }
];

module.exports = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders
            }
        ];
    },
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/images/photos/:path*',
                    destination: 'https://images.ctfassets.net/:path*'
                },
                {source: '/', destination: '/home'}
            ]
        };
    },
    async redirects() {
        return [
            {source: '/about-town', destination: '/london-street-photography', permanent: true},
            {source: '/adnams-signifier', destination: '/adnams', permanent: true},
            {source: '/adnams', destination: '/adnams-brewery-southwold', permanent: true},
            {
                source: '/fish-and-chips/:slug*',
                destination: '/london-street-photography/fish-and-chips',
                permanent: true
            },
            {source: '/gbh-b-roll', destination: '/good-beer-hunting-b-roll', permanent: true},
            {
                source: '/hukins-hops',
                destination: '/hukins-hops-annual-hop-harvest',
                permanent: true
            },
            {source: '/iceland', destination: '/iceland-on-film', permanent: true},
            {source: '/india', destination: '/travelling-across-india', permanent: true},
            {source: '/jw-lees-unrated', destination: '/jw-lees', permanent: true},
            {source: '/jw-lees', destination: '/jw-lees-harvest-ale', permanent: true},
            {source: '/tynt-meadow', destination: '/tynt-meadow-trappist-ale', permanent: true},
            {
                source: '/uppers-and-downers',
                destination: '/uppers-and-downers-coffee-and-beer-festival',
                permanent: true
            }
        ];
    },
    images: {
        formats: ['image/webp'],
        minimumCacheTTL: 31536000, // 1 year
        remotePatterns: [
            {protocol: 'https', hostname: 'images.ctfassets.net'},
            {protocol: 'https', hostname: 'downloads.ctfassets.net'}
        ]
    },
    reactStrictMode: true
};
