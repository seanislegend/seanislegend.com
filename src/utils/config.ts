const config = {
    seo: {
        title: {
            default: 'photography by seanislegend',
            template: '%s | photography by seanislegend'
        },
        description:
            'I am a photographer based in London, UK. I specialise in capturing the beauty of everyday people and events, as well as documenting my travel experiences and the stories behind good beers.',
        canonical: 'https://seanislegend.com',
        openGraph: {
            description:
                'I am a photographer based in London, UK. I specialise in capturing the beauty of everyday people and events, as well as documenting my travel experiences and the stories behind good beers.',
            images: [
                {alt: '', height: 630, url: 'https://seanislegend.com/images/og.jpg', width: 1200}
            ],
            locale: 'en_GB',
            site_name: 'seanislegend Photography',
            type: 'website',
            url: 'https://seanislegend.com'
        },
        twitter: {
            card: 'summary_large_image',
            creator: '@seanislegend',
            description:
                'I am a photographer based in London, UK. I specialise in capturing the beauty of everyday people and events, as well as documenting my travel experiences and the stories behind good beers.',
            image: 'https://seanislegend.com/images/og.jpg',
            site: '@seanislegend',
            title: 'Photography by seanislegend'
        },
        icons: {
            shortcut: '/images/favicon-32x32.png'
        }
    }
};

export default config;
