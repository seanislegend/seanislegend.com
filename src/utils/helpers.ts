import config from '@/utils/config';
import removeMarkdown from 'remove-markdown';

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
    const images = collection?.photosCollection?.items?.[0]?.openGraphImage
        ? [
              {
                  alt: '',
                  height: 630,
                  url: getTransformedContentfulImageUrl(
                      collection.photosCollection.items[0].openGraphImage.url || ''
                  ),
                  width: 1200
              }
          ]
        : [];
    const title = `${collection.pageTitle || collection.title} | ${capitalize(
        collection.category
    )} ${config.seo.title.suffix}`;

    return {
        canonical: `${config.seo.canonical}/${collection.slug}`,
        description,
        openGraph: {description, images},
        title,
        twitter: {
            card: 'summary_large_image',
            description,
            images: images.map(i => i.url),
            title
        }
    };
};

export const getPhotoSeo = (collection: PhotoCollection, photo: Photo) => {
    const description = removeMarkdown(photo?.description || collection?.description || '');
    const images = [
        {
            alt: '',
            height: 630,
            url: getTransformedContentfulImageUrl(photo?.openGraphImage?.url || ''),
            width: 1200
        }
    ];
    const title = `${photo.title}, from "${collection.title}" | ${capitalize(
        collection.category
    )} ${config.seo.title.suffix}`;

    return {
        canonical: `${config.seo.canonical}/${collection.slug}/${photo.slug}`,
        description,
        openGraph: {description, images},
        title,
        twitter: {
            card: 'summary_large_image',
            description,
            images: images.map(i => i.url),
            title
        }
    };
};

export const getEditorialSeo = (page: Editorial) => {
    const description = removeMarkdown(`${page?.content?.substring(0, 160)}...`);
    const images = page?.openGraphImage ? [page.openGraphImage] : [];

    return {
        canonical: `${config.seo.canonical}/${page.slug}`,
        description,
        openGraph: {description, images},
        title: page.title,
        twitter: {description, images: images.map(i => i.url)}
    };
};
