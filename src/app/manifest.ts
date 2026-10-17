import {type MetadataRoute} from 'next';

const manifest = (): MetadataRoute.Manifest => ({
    name: 'Photography by Sean McEmerson',
    short_name: 'seanislegend',
    start_url: '/',
    display: 'browser',
    background_color: '#faf7ef',
    theme_color: '#faf7ef',
    icons: [
        {src: '/images/icon-192.png', sizes: '192x192', type: 'image/png'},
        {
            src: '/images/icon-512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
        }
    ]
});

export default manifest;
