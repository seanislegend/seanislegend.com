export const SITE_LINKS = [
    {label: 'Instagram', url: 'https://www.instagram.com/seanislegend/'},
    {label: 'X', url: 'https://x.com/seanislegend'},
    {label: 'Threads', url: 'https://www.threads.net/@seanislegend'},
    {label: 'Bluesky', url: 'https://bsky.app/profile/seanislegend.com'}
];

export const SHOP_URL = 'https://seanislegendprints.square.site';

export const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sean McEmerson Photography',
    description:
        'London-based photographer specialising in beer, brewery, editorial and event photography.',
    url: 'https://www.seanislegend.com',
    areaServed: ['London', 'South of England', 'England', 'Scotland'],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Photography Services',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Beer & Brewery Photography',
                    description:
                        'Documentary photography of the brewing process, staff, venues, and branding.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Pub & Bar Photography',
                    description: 'Candid location shoots of taprooms, bars and pubs.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Event Photography',
                    description: 'Honest, in-the-moment coverage of public or private beer events.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Editorial Photography',
                    description: 'Visual storytelling for print or online editorial coverage.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Long-Form Documentary Projects',
                    description: 'Extended photographic essays focused on time-based storytelling.'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Portraits & People',
                    description:
                        'On-location editorial portraits of brewers, pub owners, and industry professionals.'
                }
            }
        ]
    },
    sameAs: SITE_LINKS.map(link => link.url)
};

const config = {
    titleTemplate: 'photography by Sean McEmerson',
    seo: {
        title: 'Beer, street, travel photography by Sean McEmerson',
        description:
            'I am a London-based photographer specialising in capturing the stories of UK beer, breweries and the people behind them. My photography also focuses on the beauty of people, everyday life and my travel experiences.',
        alternates: {
            canonical: 'https://www.seanislegend.com'
        },
        openGraph: {
            images: [
                {
                    alt: '',
                    height: 630,
                    url: 'https://www.seanislegend.com/images/og.jpg',
                    width: 1200
                }
            ],
            locale: 'en_GB',
            siteName: 'Photography by @seanislegend',
            type: 'website',
            url: 'https://www.seanislegend.com'
        },
        twitter: {
            card: 'summary_large_image',
            creator: '@seanislegend',
            image: 'https://www.seanislegend.com/images/og.jpg',
            site: '@seanislegend',
            title: 'Beer, street, travel photography by @seanislegend'
        },
        icons: {
            shortcut: '/images/favicon-32x32.png'
        }
    }
};

export default config;
