import {type MetadataRoute} from 'next';
import {fetchCollectionsForSitemap} from '@/utils/contentful';

const getCollectionSeo = async (): Promise<MetadataRoute.Sitemap> => {
    // if (process.env.VERCEL_ENV !== 'production') return [];

    const allCollections = await fetchCollectionsForSitemap();
    if (!allCollections?.length) return [];

    const filteredCollections = allCollections.filter(
        (collection: any) => collection.photosCollection.items.length > 0
    );
    if (!filteredCollections?.length) return [];

    const items = filteredCollections.reduce((acc: any[], collection: any) => {
        const collectionItem = {
            url: `${process.env.NEXT_PUBLIC_URL}/${
                collection.slug === 'home' ? '' : collection.slug
            }`,
            priority: collection.slug === 'home' || collection.isFeatured ? 1 : 0.8,
            lastModified: new Date(collection.sys.publishedAt).toISOString(),
            changeFrequency:
                collection.publishedAt === collection.firstPublishedAt ? 'never' : 'weekly'
        };
        const filteredPhotoItems = collection.photosCollection?.items?.filter((i: any) => i);

        if (collection.slug === 'home' || !filteredPhotoItems.length) {
            return [...acc, collectionItem];
        }

        const photoItems =
            filteredPhotoItems.map((photo: any) => ({
                url: `${process.env.NEXT_PUBLIC_URL}/${collection.slug}/${photo.slug}`,
                priority: collection.slug === 'home' || collection.isFeatured ? 1 : 0.8,
                lastModified: new Date(photo.sys.publishedAt).toISOString(),
                changeFrequency: photo.publishedAt === photo.firstPublishedAt ? 'never' : 'weekly'
            })) || [];

        return [...acc, collectionItem, ...photoItems];
    }, [] as any[]);

    return items;
};

export default getCollectionSeo;
