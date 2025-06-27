import removeMarkdown from 'remove-markdown';
import config from '@/utils/config';

export const getExternalUrl = (url: string = '') => {
    return `${url}?utm_source=seanislegend.com&utm_medium=referral`;
};

const titleWithCategoryPrefix = (title: string, category?: string) => {
    if (category) {
        return `${title} | ${category} ${config.titleTemplate}`;
    } else {
        return `${title} | ${config.titleTemplate}`;
    }
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

    title = titleWithCategoryPrefix(title, collection.category);

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
    let description = removeMarkdown(photo?.description || collection?.description || '');
    let title = `${photo.title} | ${collection.title}`;

    if (collection.metaDescription) {
        description = collection.metaDescription;
    }

    title = titleWithCategoryPrefix(title, collection.category);

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

    title = titleWithCategoryPrefix(title);

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

export const getTagSeo = (tag: Tag) => {
    return {
        description: tag.description || `Curated photos tagged with "${tag.slug}".`,
        title: `${tag.name} photos`
    };
};

// A collection can be considered new if it's been published in the last 4 months.
export const isCollectionNew = (date: string | undefined) => {
    if (!date) return false;
    const now = new Date(date).getTime();
    const fourMonthsAgo = new Date().setMonth(new Date().getMonth() - 4);
    return now > fourMonthsAgo;
};
