import removeMarkdown from 'remove-markdown';
import config from '@/utils/config';

export const getExternalUrl = (url: string = '') => {
    return `${url}?utm_source=seanislegend.com&utm_medium=referral`;
};

export const getCollectionSeo = (collection: PhotoCollection) => {
    if (!collection) return {};

    let description = removeMarkdown(collection?.description || '');
    let title = collection.pageTitle || collection.title;

    if (collection.metaDescription) {
        description = collection.metaDescription;
    }
    if (collection.metaTitle) {
        title = collection.metaTitle;
    }

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
    let title = page.pageTitle || page.title;
    let description = removeMarkdown(`${page?.content?.substring(0, 160)}...`);

    if (page.metaDescription) {
        description = page.metaDescription;
    }
    if (page.metaTitle) {
        title = page.metaTitle;
    }

    return {
        alternates: {
            canonical: `${config.seo.alternates.canonical}/${page.slug}`
        },
        description,
        openGraph: {description},
        title,
        twitter: {description, title}
    };
};

// A collection can be considered new if it's been published in the last 4 months.
export const isCollectionNew = (date: string | undefined) => {
    if (!date) return false;
    const now = new Date(date).getTime();
    const fourMonthsAgo = new Date().setMonth(new Date().getMonth() - 4);
    return now > fourMonthsAgo;
};
