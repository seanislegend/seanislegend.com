import {type MetadataRoute} from 'next';
import {MENU_ITEMS} from '@/components/SiteMenu';
import {fetchAllTags, fetchCollectionsForSitemap} from '@/utils/contentful';

const getLastModifiedDate = (date?: string) => {
    if (!date || !process.env.SITEMAP_LAST_MODIFIED_MINIMUM) return new Date();

    const minimum = new Date(process.env.SITEMAP_LAST_MODIFIED_MINIMUM);
    const lastModified = new Date(date);

    return lastModified.getTime() > minimum.getTime() ? lastModified : minimum;
};

const getCollectionSeo = async (): Promise<MetadataRoute.Sitemap> => {
    const linksItems = MENU_ITEMS.map(item => ({
        url: `${process.env.NEXT_PUBLIC_URL}${item.href}`,
        priority: 1,
        lastModified: getLastModifiedDate().toISOString()
    }));

    const allCollections = await fetchCollectionsForSitemap();
    const filteredCollections = allCollections?.filter(
        (collection: any) => collection.photosCollection.items.length > 0
    );
    if (!filteredCollections) return [];

    const collectionItems = filteredCollections.reduce((acc: any[], collection: any) => {
        const collectionItem = {
            url: `${process.env.NEXT_PUBLIC_URL}/${
                collection.slug === 'home' ? '' : collection.slug
            }`,
            priority: collection.slug === 'home' || collection.isFeatured ? 1 : 0.8,
            lastModified: getLastModifiedDate(collection?.sys?.publishedAt).toISOString(),
            changeFrequency:
                collection.publishedAt === collection.firstPublishedAt ? 'monthly' : 'weekly'
        };
        const filteredPhotoItems = collection.photosCollection?.items?.filter((i: any) => i);

        if (collection.slug === 'home' || !filteredPhotoItems.length) {
            return [...acc, collectionItem];
        }

        return [...acc, collectionItem];
    }, [] as any[]);

    const tags = await fetchAllTags();
    const tagItems = tags.map((tag: any) => ({
        url: `${process.env.NEXT_PUBLIC_URL}/tags/${tag.slug}`,
        priority: 0.8,
        lastModified: getLastModifiedDate(tag?.sys?.publishedAt).toISOString()
    }));

    return [...linksItems, ...collectionItems, ...tagItems].filter(Boolean);
};

export default getCollectionSeo;
