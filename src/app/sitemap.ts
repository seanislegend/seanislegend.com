import {type MetadataRoute} from 'next';
import {cacheLife, cacheTag} from 'next/cache';
import {MENU_ITEMS} from '@/components/SiteMenu';
import {
    fetchAllEditorialPages,
    fetchAllExhibitions,
    fetchAllTags,
    fetchCollectionsForSitemap
} from '@/utils/contentful';

const getLastModifiedDate = (date?: string) => {
    if (!date || !process.env.SITEMAP_LAST_MODIFIED_MINIMUM) return new Date();

    const minimum = new Date(process.env.SITEMAP_LAST_MODIFIED_MINIMUM);
    const lastModified = new Date(date);

    return lastModified.getTime() > minimum.getTime() ? lastModified : minimum;
};

const getCollectionSeo = async (): Promise<MetadataRoute.Sitemap> => {
    'use cache';
    cacheTag('contentful', 'collections', 'editorials', 'tags');
    cacheLife('days');

    const staticPaths: MetadataRoute.Sitemap = [
        {
            url: `${process.env.NEXT_PUBLIC_URL}/commercial`,
            priority: 1
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/personal`,
            priority: 1
        },
        {
            url: `${process.env.NEXT_PUBLIC_URL}/categories`,
            priority: 1
        }
    ];

    // /exhibitions redirects to the latest exhibition, so list the exhibitions themselves
    const linksItems = MENU_ITEMS.filter(
        item => !item.href.includes('http') && item.href !== '/exhibitions'
    ).map(item => ({
        url: `${process.env.NEXT_PUBLIC_URL}${item.href}`,
        priority: 1
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

        return [...acc, collectionItem];
    }, [] as any[]);

    const tags = await fetchAllTags();
    const tagItems = tags.map((tag: any) => ({
        url: `${process.env.NEXT_PUBLIC_URL}/${tag.slug}-photography`,
        priority: 0.8,
        lastModified: getLastModifiedDate(tag?.sys?.publishedAt).toISOString()
    }));

    const editorialPages = await fetchAllEditorialPages();
    const editorialItems =
        editorialPages?.map((editorial: any) => ({
            url: `${process.env.NEXT_PUBLIC_URL}/${editorial.slug}`,
            priority: 1,
            lastModified: getLastModifiedDate(editorial?.sys?.publishedAt).toISOString()
        })) || [];

    const exhibitions = await fetchAllExhibitions();
    const exhibitionItems = exhibitions.map(exhibition => ({
        url: `${process.env.NEXT_PUBLIC_URL}/exhibitions/${exhibition.slug}`,
        priority: 0.8
    }));

    const allItems = [
        ...linksItems,
        ...staticPaths,
        ...collectionItems,
        ...tagItems,
        ...editorialItems,
        ...exhibitionItems
    ].filter(Boolean);

    // tag pages can share a slug with a collection, e.g. /beer-photography
    return [...new Map(allItems.map(item => [item.url, item])).values()];
};

export default getCollectionSeo;
