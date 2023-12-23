import removeMarkdown from 'remove-markdown';
import config from '@/utils/config';

export const capitalize = (string: string = '') => {
    if (typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getExternalUrl = (url: string = '') => {
    return `${url}?utm_source=seanislegend.com&utm_medium=referral`;
};

export const getTransformedContentfulImageUrl = (url: string = '') => {
    return url.replace('https://images.ctfassets.net', 'https://seanislegend.com/images/photos');
};

export const getCollectionSeo = (collection: PhotoCollection) => {
    if (!collection) return {};

    const description = removeMarkdown(collection?.description || '');
    const title = `${collection.pageTitle || collection.title} | ${capitalize(
        collection.category
    )}`;

    return {
        canonical: `${config.seo.canonical}/${collection.slug}`,
        description,
        openGraph: {description},
        title,
        twitter: {card: 'summary_large_image', description, title}
    };
};

export const getPhotoSeo = (collection: PhotoCollection, photo: Photo) => {
    const description = removeMarkdown(photo?.description || collection?.description || '');
    const title = `${photo.title}, from "${collection.title}" | ${capitalize(collection.category)}`;

    return {
        canonical: `${config.seo.canonical}/${collection.slug}/${photo.slug}`,
        description,
        openGraph: {description},
        title,
        twitter: {card: 'summary_large_image', description, title}
    };
};

export const getEditorialSeo = (page: Editorial) => {
    const description = removeMarkdown(`${page?.content?.substring(0, 160)}...`);

    return {
        canonical: `${config.seo.canonical}/${page.slug}`,
        description,
        openGraph: {description},
        title: page.title,
        twitter: {description}
    };
};
