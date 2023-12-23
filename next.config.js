/** @type {import('next').NextConfig} */
// https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
    {key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload'},
    {key: 'X-Content-Type-Options', value: 'nosniff'},
    {key: 'X-Frame-Options', value: 'DENY'},
    {key: 'X-XSS-Protection', value: '1; mode=block'},
    {
        key: 'Content-Security-Policy',
        value: "default-src 'self'; img-src 'self' data: https://images.ctfassets.net; script-src 'self'  'unsafe-eval' 'unsafe-inline' https://cdn.splitbee.io; style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self' https://hive.splitbee.io https://vitals.vercel-insights.com;"
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
            {source: '/jw-lees-unrated', destination: '/jw-lees', permanent: true},
            {source: '/adnams-signifier', destination: '/adnams', permanent: true}
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
    reactStrictMode: true,
    swcMinify: true
};
