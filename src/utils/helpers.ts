import removeMarkdown from 'remove-markdown';
import config from '@/utils/config';

export const getExternalUrl = (url: string = '') => {
    return `${url}?utm_source=seanislegend.com&utm_medium=referral`;
};

export const getCollectionSeo = (collection: PhotoCollection) => {
    if (!collection) return {};

    const description = removeMarkdown(collection?.description || '');
    const title = collection.pageTitle || collection.title;

    return {
        alternates: {
            canonical: `${config.seo.alternates.canonical}${
                collection.slug === 'home' ? '' : `/${collection.slug}`
            }`
        },
        description,
        openGraph: {description},
        title,
        twitter: {card: 'summary_large_image', description, title}
    };
};

export const getPhotoSeo = (collection: PhotoCollection, photo: Photo) => {
    const description = removeMarkdown(photo?.description || collection?.description || '');
    const title = `${photo.title} | ${collection.title}`;

    return {
        alternates: {
            canonical: `${config.seo.alternates.canonical}/${collection.slug}/${photo.slug}`
        },
        description,
        openGraph: {description},
        title,
        twitter: {card: 'summary_large_image', description, title}
    };
};

export const getEditorialSeo = (page: Editorial) => {
    const description = removeMarkdown(`${page?.content?.substring(0, 160)}...`);

    return {
        alternates: {
            canonical: `${config.seo.alternates.canonical}/${page.slug}`
        },
        description,
        openGraph: {description},
        title: page.pageTitle || page.title,
        twitter: {description}
    };
};

// A collection can be considered new if it's been published in the last 4 months.
export const isCollectionNew = (date: string | undefined) => {
    if (!date) return false;
    const now = new Date(date).getTime();
    const fourMonthsAgo = new Date().setMonth(new Date().getMonth() - 4);
    return now > fourMonthsAgo;
};
