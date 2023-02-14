import dotenv from 'dotenv';
import fs from 'fs';
import fetch from 'node-fetch';

dotenv.config();

const fetchAllCollections = async (): Promise<any> => {
    try {
        const query = `query {
            collectionCollection(where: {category_not: ""}, limit: 35) {
                items {
                    title
                    slug
                    photosCollection(limit: 50) {
                        items {
                            title
                            slug
                            url
                            thumbnail: photo {
                                url(transform: {format: WEBP, width: 800})
                            }
                        }
                    }
                }
            }
        }`;
        const data = await fetch(
            `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({query})
            }
        );
        const response = await data.json();

        return response.data.collectionCollection.items;
    } catch (error) {
        console.log(error);
        throw new Error('Could not fetch data from Contentful!');
    }
};

const saveSitemap = async (data: any) => {
    const pages = data
        .reduce((acc: any, collection: any) => {
            return [
                ...acc,
                `<url>
                    <loc>${process.env.NEXT_PUBLIC_URL}${collection.slug}</loc>
                </url>`,
                collection.photosCollection?.items
                    ?.filter((i: any) => i)
                    ?.map((photo: any) => {
                        // Replace the image URL with our proxy URL as defined in the
                        // next.config file.
                        const thumbnail = photo.thumbnail.url
                            .replace(
                                'https://images.ctfassets.net/',
                                `${process.env.NEXT_PUBLIC_URL}/images/photos/`
                            )
                            .replace('&', '&amp;');

                        return `<url>
                            <loc>${process.env.NEXT_PUBLIC_URL}/${collection.slug}/${
                            photo.slug
                        }</loc>
                            <image:image>
                                <image:loc>${thumbnail}</image:loc>
                                <image:title>${
                                    photo?.title?.replace('&', '&amp;') || ''
                                }</image:title>
                            </image:image>
                        </url>`;
                    })
            ];
        }, [])
        .flatMap((page: any) => page);
    const content = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
        ${pages.join('')}
    </urlset>`;

    fs.writeFileSync('public/sitemap.xml', content);
};

(async () => {
    if (process.env.VERCEL_ENV !== 'production') return;

    try {
        const allCollections = await fetchAllCollections();
        if (!allCollections) return;

        const filteredCollections = allCollections.filter(
            (collection: any) => collection.photosCollection.items.length > 0
        );
        await saveSitemap(filteredCollections);
    } catch (error) {
        console.log(error);
    }
})();
