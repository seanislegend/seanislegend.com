import {cache} from 'react';
import 'server-only';

const fetchContent = cache(async (query: string, preview: boolean = false) => {
    try {
        const data = await fetch(
            `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${
                        preview
                            ? process.env.CONTENTFUL_PREVIEW_API_KEY
                            : process.env.CONTENTFUL_DELIVERY_API_KEY
                    }`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({query})
            }
        );
        const response = await data.json();

        return response;
    } catch (error) {
        console.log(error);
        throw new Error('Could not fetch data from Contentful!');
    }
});

const sortPhotos = (collection: PhotoCollection) => {
    const order = collection.photoSort || 'asc';

    return order === 'asc'
        ? collection.photosCollection.items
        : collection.photosCollection.items.reverse();
};

const addLinkedFromCollection = (items: any[]) => {
    const formattedCollection = items
        .filter(photo => !!photo)
        .map(photo => {
            // If there is only one linked collection then this photo is not
            // featured on the home or category collection pages.
            if (photo?.linkedFrom?.collectionCollection?.items?.length > 1) {
                const categoryPages = ['home', 'street', 'travel', 'beer'];
                const filteredCollection = photo.linkedFrom.collectionCollection.items.find(
                    (item: any) => !categoryPages.includes(item?.slug)
                );

                // In the case that the photo is featured on the home page only, it will
                // not return a filtered collection
                if (filteredCollection) {
                    return {
                        ...photo,
                        collection: filteredCollection?.slug
                    };
                }
            }

            return photo;
        });

    return formattedCollection;
};

const getFormattedCollection = (collection: any) => {
    // Sort photos by the order defined by the collection
    const sortedPhotos = sortPhotos(collection);

    // We want photos to link to their intended parent collection if
    // that collection is home or a category page.
    const formattedPhotos = addLinkedFromCollection(sortedPhotos);

    return formattedPhotos;
};

export const fetchEditorialPage = async (slug: string) => {
    const query = `query {
        editorialCollection(where: {slug: "${slug}"}, limit: 1) {
            items {
                title
                slug
                metaTitle
                metaDescription
                pageTitle
                content
                ctaLabel
                ctaUrl
                openGraphImage: photo {
                    url(transform: {width: 1000})
                }
                photo {
                    height
                    url(transform: {format: WEBP, width: 1000})
                    width
                }
                photoNote
                contentSectionsCollection(limit: 10) {
                    items {
                        id  
                        content
                        ctaLabel
                        ctaUrl
                        secondaryCtaLabel
                        secondaryCtaUrl
                        theme
                        title
                        photoGrid {
                            photosCollection {
                                items {
                                    label
                                    photo {
                                        linkedFrom {
                                            collectionCollection(limit: 3) {
                                                items {
                                                    title
                                                    slug
                                                }
                                            }
                                        }
                                        photo {
                                            height
                                            url(transform: {width: 600})
                                            width
                                        }
                                        slug
                                    }
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    }`;
    const response: any = await fetchContent(query);

    return response.data?.editorialCollection?.items?.[0] || null;
};

export const fetchLinksPage = async () => {
    const query = `query {
        linksPageCollection(limit: 1, order: [sys_publishedAt_DESC]) {
            items {
                text
                title
                linksCollection {
                    items {
                        ...on Link {
                            type: __typename
                            openGraphImage: photo {
                                url(transform: {width: 1000})
                            }
                            thumbnail: photo {
                                height
                                width
                                url(transform: {format: WEBP, width: 800})
                            }
                            text
                            title
                            url
                            sys {
                                publishedAt
                            }   
                        }
                    }
                }
            }
        }
    }`;
    const response: any = await fetchContent(query);

    return response.data?.linksPageCollection?.items?.[0] || null;
};

const isWithinDateRange = (date: string | undefined, range: number) => {
    if (!date) return false;

    const dateToCheck = new Date(date);
    const currentDate = new Date();
    const rangeMonthsAgo = new Date(currentDate);
    rangeMonthsAgo.setMonth(currentDate.getMonth() - range);

    return dateToCheck >= rangeMonthsAgo && dateToCheck <= currentDate;
};

const getBadgeForCollection = (item: PhotoCollection) => {
    const isNew = isWithinDateRange(item?.sys?.firstPublishedAt, 4);
    const isUpdated = isWithinDateRange(item?.sys?.publishedAt, 1);
    let badge = null;

    if (isNew) {
        badge = 'New';
    } else if (isUpdated) {
        // badge = 'Updated';
    }

    return badge;
};

export const fetchCollectionNavigation = async (): Promise<Link[]> => {
    const query = `query {
        collectionNavigationCollection(limit: 1, order: [sys_publishedAt_DESC]) {
            items {
                collectionsCollection {
                    items {
                        title
                        slug
                        pageTitle
                        category
                        sys {
                            publishedAt
                            firstPublishedAt
                        }
                        photosCollection(where:{isFeatured:true}, limit:1) {
                            items {
                                base64
                                thumbnail: photo {
                                    height
                                    width
                                    url(transform: {format: WEBP, width: 800})
                                }
                            }
                        }
                    }
                }
            }
        }
    }`;
    const response: any = await fetchContent(query);
    const items =
        response?.data?.collectionNavigationCollection?.items?.[0]?.collectionsCollection?.items
            ?.filter((item: PhotoCollection) => !!item?.slug)
            ?.map((item: PhotoCollection) => {
                const photo = item?.photosCollection?.items?.[0];
                const badge = getBadgeForCollection(item);

                return {
                    badge,
                    isFeatured: !!photo,
                    photo,
                    published: item?.sys?.publishedAt,
                    pageTitle: item?.pageTitle ?? item?.title,
                    title: item.title,
                    url: `/${item.slug}`
                };
            });

    return items || [];
};

export const fetchAllCollections = async (
    preview: boolean = false
): Promise<PhotoCollection[] | null> => {
    // NB: We will need to batch fetch collections.
    // Because of the nesting involved with this query, Contentful errors because of
    // the max complexity allowed. Once we exceed this limit we will need to write the
    // batch multiple requests.
    const query = `query {
        collectionCollection(
            limit: 35,
            order: [date_DESC],
            preview: ${preview ? 'true' : 'false'},
            where: {category_not: ""}
        ) {
            items {
                title
                slug
                pageTitle
                category
                ctaLabel
                ctaUrl
                isFeatured
                showDescription
                description
                photoSort
                sys {
                    publishedAt
                    firstPublishedAt
                }
                photosCollection(limit: 50, where: {isFeatured: true}) {
                    items {
                        linkedFrom {
                            collectionCollection(limit: 3) {
                                items {
                                    title
                                    slug
                                }
                            }
                        }
                        title
                        slug
                        location
                        url
                        thumbnail: photo {
                            height
                            width
                            url(transform: {format: WEBP, width: 800})
                        }
                        base64
                    }
                }
                sys {
                    published: firstPublishedAt
                }
            }
        }
    }`;
    const response: any = await fetchContent(query, preview);

    if (response.data?.collectionCollection?.items) {
        const formattedCollections = response.data.collectionCollection.items.map(
            (collection: any) => {
                const collectionPhotos = getFormattedCollection(collection);
                const badge = getBadgeForCollection(collection);

                return {
                    ...collection,
                    badge,
                    photosCollection: {
                        items: collectionPhotos
                    }
                };
            }
        );

        return formattedCollections;
    }

    return null;
};

export const fetchCollection = async (
    slug: string,
    preview: boolean = false
): Promise<PhotoCollection | null> => {
    // This call is used by both page ISR where we know the content slug and
    // in revalidation calls, where we only know the entry ID.
    const query = `query {
        collectionCollection(
            limit: 1,
            preview: ${preview ? 'true' : 'false'},
            where: {OR: [{slug: "${slug}"}, {sys: {id: "${slug}"}}]}
        ) {
            items {
                title
                slug
                metaTitle
                metaDescription
                category
                ctaLabel
                ctaUrl
                description
                isFeatured
                showDescription
                pageTitle
                photoSort
                photosCollection(limit: 120) {
                    items {
                        linkedFrom {
                            collectionCollection(limit: 5) {
                                items {
                                    title
                                    slug
                                }
                            }
                        }
                        title
                        slug
                        description
                        location
                        date
                        url
                        urlLabel
                        instagramUrl
                        instagramLabel
                        fullSize: photo {
                            height
                            width
                            url(transform: {format: WEBP, width: 1800})
                        }
                        openGraphImage: photo {
                            url(transform: {width: 1000})
                        }
                        thumbnail: photo {
                            height
                            width
                            url(transform: {format: WEBP, width: 1600})
                        }
                        base64
                        sys {
                            id
                        }
                    }
                }
                relatedCollectionsCollection(limit: 4) {
                    items {
                        title
                        slug
                        pageTitle
                        photosCollection(limit: 1, where: {isFeatured: true}) {
                            items {
                                base64
                                thumbnail: photo {
                                    height  
                                    url(transform: {format: WEBP, width: 800})
                                    width
                                }
                            }
                        }
                        sys {
                            publishedAt
                            firstPublishedAt
                        }
                    }
                }
                contentSectionsCollection {
                    items {
                        content
                        ctaLabel
                        ctaUrl
                        secondaryCtaLabel
                        secondaryCtaUrl
                        theme
                        title 
                    }
                }
                tagsCollection {
                    items {
                        name
                        slug
                    }
                }
            }
        }
    }`;
    const response: any = await fetchContent(query, preview);

    if (response?.data?.collectionCollection?.items?.length > 0) {
        const collection = response.data.collectionCollection.items[0];
        const collectionPhotos = getFormattedCollection(collection);

        return {
            ...collection,
            relatedCollectionsCollection: {
                items:
                    collection.relatedCollectionsCollection?.items?.map((item: any) => ({
                        ...item,
                        badge: getBadgeForCollection(item)
                    })) ?? []
            },
            photosCollection: {
                items: collectionPhotos
            }
        };
    }

    return null;
};

export const fetchCollectionsForSitemap = async () => {
    const query = `query {
        collectionCollection(where: {category_not: ""}, limit: 35) {
            items {
                title
                slug
                isFeatured
                photosCollection(limit: 50) {
                    items {
                        title
                        slug
                        url
                        thumbnail: photo {
                            url(transform: {format: WEBP, width: 800})
                        }
                        sys {
                            publishedAt
                            firstPublishedAt
                        }
                    }
                }
                sys {
                    publishedAt
                    firstPublishedAt
                }
            }
        }
    }`;
    const response: any = await fetchContent(query);

    return response.data?.collectionCollection?.items;
};

export const fetchAllTags = async () => {
    const query = `query {
        tagCollection(limit: 100, order: [name_ASC]) {
            items {
                description
                name
                slug
            }
        }
    }`;
    const response: any = await fetchContent(query);
    return response.data?.tagCollection?.items;
};

export const fetchAllPhotosForTag = async (tag: string) => {
    const query = `query {
        tagCollection(where: {slug: "${tag}"}, limit: 1) {
            items {
                description
                name
                slug
            }
        }
        collectionCollection(where: {tags: {slug_contains: "${tag}"}}) {
            items {
                pageTitle
                slug
                title
            }
        }
        photoCollection(where: {tags: {slug_contains: "${tag}"}}, limit: 100, order: [rank_ASC, date_DESC]) {
            items {
                title
                slug
                url
                base64
                thumbnail: photo {
                    height  
                    url(transform: {format: WEBP, width: 800})
                    width
                }
                linkedFrom {
                    collectionCollection {
                        items {
                            slug
                        }
                    }
                }
                sys {
                    id
                }
            }
        }
        contentSectionCollection(where: {id_contains: "services-introduction"}) {
            items {
                content
                ctaLabel
                ctaUrl
                secondaryCtaLabel
                secondaryCtaUrl
                theme
                title
            }
        }
    }`;
    const response: any = await fetchContent(query);
    const tagData = response.data?.tagCollection?.items?.[0];

    if (!tagData) {
        return {
            collections: [],
            contentSection: null,
            photos: [],
            tag: null
        };
    }

    const photosWithCollection = response.data.photoCollection.items.map((photo: any) => ({
        ...photo,
        collection: photo.linkedFrom?.collectionCollection?.items?.[0]?.slug
    }));

    return {
        collections: response.data.collectionCollection.items,
        contentSection: response.data.contentSectionCollection.items?.[0],
        photos: photosWithCollection,
        tag: tagData
    };
};
