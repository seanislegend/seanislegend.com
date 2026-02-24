import removeMarkdown from 'remove-markdown';
import config, {SITE_LINKS} from '@/utils/config';

export const isExternalUrl = (url: string | undefined) => {
    return url?.toString().startsWith('http');
};

export const getExternalUrl = (url: string = '') => {
    if (!isExternalUrl(url)) return url;
    return `${url}?utm_source=seanislegend.com&utm_medium=referral`;
};

const CONTENTFUL_IMAGE_ORIGIN = 'https://images.ctfassets.net';
const REWRITE_IMAGE_PREFIX = `${process.env.NEXT_PUBLIC_URL}/images/photos`;

const toRewriteImageUrl = (url: string | undefined): string | undefined => {
    if (!url) return undefined;
    if (!url.startsWith(CONTENTFUL_IMAGE_ORIGIN)) return url;
    const path = url.slice(CONTENTFUL_IMAGE_ORIGIN.length);
    return `${REWRITE_IMAGE_PREFIX}${path}`;
};

const titleWithCategoryPrefix = (title: string, category?: string) => {
    if (category) {
        return `${title} | ${category} ${config.titleTemplate}`;
    } else {
        return `${title} | ${config.titleTemplate}`;
    }
};

const getCollectionCanonicalUrl = (collection: PhotoCollection) =>
    `${config.seo.alternates.canonical}${collection.slug === 'home' ? '' : `/${collection.slug}`}`;

export const getPhotoAlbumJsonLd = (collection: PhotoCollection): Record<string, unknown> => {
    const url = getCollectionCanonicalUrl(collection);
    const name = collection.pageTitle || collection.title;
    const description =
        collection.metaDescription ||
        (collection.description ? removeMarkdown(collection.description) : undefined);
    const photos = collection.photosCollection?.items ?? [];
    const firstPhoto = photos[0];
    const primaryImage = toRewriteImageUrl(
        firstPhoto?.hero?.url ||
            firstPhoto?.fullSize?.url ||
            collection.metaPhotosCollection?.items?.[0]?.photo?.url
    );
    const associatedMedia = photos.slice(0, 4).map((photo, index) => ({
        '@type': 'ImageObject',
        name: photo.title,
        position: index + 1,
        url: toRewriteImageUrl(photo.hero?.url || photo.fullSize?.url || photo.thumbnail?.url)
    }));

    const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        name,
        url
    };
    if (description) schema.abstract = description;
    if (associatedMedia.length) schema.associatedMedia = associatedMedia;
    if (collection.sys?.firstPublishedAt) schema.datePublished = collection.sys.firstPublishedAt;
    if (primaryImage) schema.primaryImageOfPage = {'@type': 'ImageObject', url: primaryImage};
    return schema;
};

export const getBlogPostingJsonLd = (collection: PhotoCollection): Record<string, unknown> => {
    const url = getCollectionCanonicalUrl(collection);
    const name = collection.pageTitle || collection.title;
    const description =
        collection.metaDescription ||
        (collection.description ? removeMarkdown(collection.description) : undefined);

    const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: name,
        url,
        author: {
            '@type': 'Person',
            name: 'Sean McEmerson',
            url: config.seo.alternates.canonical,
            sameAs: SITE_LINKS.map(link => link.url)
        }
    };

    if (description) schema.description = description;
    if (collection.sys?.firstPublishedAt) schema.datePublished = collection.sys.firstPublishedAt;
    if (collection.sys?.publishedAt) schema.dateModified = collection.sys.publishedAt;

    return schema;
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
        openGraph: {description, images: config.seo.openGraph.images[0].url},
        title,
        twitter: {description, title}
    };
};

export const getTagSeo = (tag: Tag) => {
    return getEditorialSeo({
        metaDescription: tag.description || `Photos tagged with "${tag.slug}".`,
        slug: `/${tag.slug}-photography`,
        title: `${tag.name} photos`
    });
};

// A collection can be considered new if it's been published in the last 4 months.
export const isCollectionNew = (date: string | undefined) => {
    if (!date) return false;
    const now = new Date(date).getTime();
    const fourMonthsAgo = new Date().setMonth(new Date().getMonth() - 4);
    return now > fourMonthsAgo;
};
