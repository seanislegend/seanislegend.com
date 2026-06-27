import {revalidateTag} from 'next/cache';
import {NextRequest} from 'next/server';
import {fetchContent} from '@/utils/contentful';

const LOCALE = process.env.CONTENTFUL_LOCALE ?? '';

// Cache tags mirror the `cacheTag()` calls in `@/utils/contentful`:
//   contentful            – global, busts every cached Contentful read
//   collections           – the collection list / navigation / sitemap
//   collection:<slug>     – a single collection page (and its photo detail pages)
//   editorials            – the editorial list
//   editorial:<slug>      – a single editorial page ('services' included)
//   tag:<slug>            – a single tag page
const revalidate = (tag: string) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(`Revalidating tag: ${tag}`);
    }
    // 'max' marks the tag stale and serves stale-while-revalidate on next visit
    revalidateTag(tag, 'max');
};

const revalidateForType = async (body: any) => {
    const type = body?.sys?.contentType?.sys?.id ?? body?.sys?.type;
    if (!type) return;

    if (type === 'collection') {
        const slug = body?.fields?.slug?.[LOCALE];
        if (slug) {
            revalidate(`collection:${slug}`);
        }
        // the collection list, navigation and sitemap all need refreshing too
        revalidate('collections');
    } else if (type === 'editorial') {
        const slug = body?.fields?.slug?.[LOCALE];
        if (slug) {
            revalidate(`editorial:${slug}`);
        }
        revalidate('editorials');
    } else if (type === 'contentSection') {
        // revalidate editorial pages that contain this content section
        const {data} = await fetchContent(`query {
            contentSection(id: "${body.sys.id}") {
                linkedFrom {
                    editorialCollection {
                        items {
                            slug
                        }
                    }
                }
            }
        }`);
        if (!data?.contentSection) return;

        data.contentSection.linkedFrom.editorialCollection.items.forEach((editorial: any) => {
            revalidate(`editorial:${editorial.slug}`);
        });
    } else if (type === 'photoGrid') {
        // revalidate editorial pages that contain this photoGrid
        const {data} = await fetchContent(`query {
            photoGrid(id: "${body.sys.id}") {
                linkedFrom {
                    contentSectionCollection {
                        items {
                            linkedFrom {
                                editorialCollection {
                                    items {
                                        slug
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }`);
        if (!data?.photoGrid) return;

        data.photoGrid.linkedFrom.contentSectionCollection.items.forEach((contentSection: any) => {
            contentSection.linkedFrom.editorialCollection.items.forEach((editorial: any) => {
                revalidate(`editorial:${editorial.slug}`);
            });
        });
    } else if (type === 'photoGridPhoto') {
        // revalidate editorial pages that contain this photoGridPhoto
        const {data} = await fetchContent(`query {
            photoGridPhoto(id: "${body.sys.id}") {
                linkedFrom {
                    photoGridCollection(limit: 5) {
                        items {
                            linkedFrom {
                                contentSectionCollection(limit: 5) {
                                    items {
                                        linkedFrom {
                                            editorialCollection(limit: 5) {
                                                items {
                                                    slug
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }`);
        if (!data?.photoGridPhoto) return;

        data.photoGridPhoto?.linkedFrom?.photoGridCollection?.items?.forEach((photoGrid: any) => {
            photoGrid?.linkedFrom?.contentSectionCollection?.items?.forEach(
                (contentSection: any) => {
                    contentSection?.linkedFrom?.editorialCollection?.items?.forEach(
                        (editorial: any) => {
                            revalidate(`editorial:${editorial.slug}`);
                        }
                    );
                }
            );
        });
    } else if (type === 'photo') {
        const {data} = await fetchContent(`query {
            photo(id: "${body.sys.id}") {
                tagsCollection {
                    items {
                        slug
                    }
                }
                linkedFrom {
                    collectionCollection {
                        items {
                            slug
                        }
                    }
                    photoGridPhotoCollection {
                        items {
                            _id
                        }
                    }
                    editorialCollection {
                        items {
                            slug
                        }
                    }
                }
            }
        }`);
        if (!data?.photo) return;

        data.photo.tagsCollection.items.forEach((tag: any) => {
            revalidate(`tag:${tag.slug}`);
        });
        data.photo.linkedFrom.collectionCollection.items.forEach((collection: any) => {
            // collection:<slug> covers both the collection page and its photo detail pages
            revalidate(`collection:${collection.slug}`);
        });
        // featured thumbnails appear in collection lists / navigation
        if (data.photo.linkedFrom.collectionCollection.items.length > 0) {
            revalidate('collections');
        }
        data.photo.linkedFrom.editorialCollection.items.forEach((editorial: any) => {
            revalidate(`editorial:${editorial.slug}`);
        });
        // if used in a photo grid, revalidate the services page as this is the
        // only use case for this
        if (data.photo.linkedFrom.photoGridPhotoCollection.items.length > 0) {
            revalidate('editorial:services');
        }
    } else if (type === 'Asset') {
        const {data} = await fetchContent(`query {
            asset(id:"${body.sys.id}"){
                linkedFrom{
                    photoCollection {
                        items {
                            slug
                            linkedFrom {
                                collectionCollection {
                                    items {
                                        slug
                                    }
                                }
                            }
                        }
                    }
                    editorialCollection {
                        items {
                            slug
                        }
                    }
                }
            }
        }`);
        if (!data?.asset) return;

        data.asset.linkedFrom.editorialCollection.items.forEach((page: any) => {
            revalidate(`editorial:${page.slug}`);
        });
        data.asset.linkedFrom.photoCollection.items.forEach((photo: any) => {
            // collection:<slug> covers the collection page and its photo detail pages
            photo.linkedFrom.collectionCollection.items.forEach((collection: any) => {
                revalidate(`collection:${collection.slug}`);
            });
        });
    }
};

export const POST = async (request: NextRequest) => {
    const secret = request.headers.get('X-SIL-Secret');

    if (!secret || secret !== process.env.REVALIDATE_SECRET) {
        return Response.json({message: 'Invalid secret', success: false});
    } else if (!request.body) {
        return Response.json({message: 'No body', success: false});
    }

    const body = await request.json();
    await revalidateForType(body);

    return Response.json({success: true});
};
