import {revalidatePath} from 'next/cache';
import {NextRequest} from 'next/server';
import {fetchContent} from '@/utils/contentful';

const LOCALE = process.env.CONTENTFUL_LOCALE ?? '';

const revalidate = (path: string) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(`Revalidating: ${path}`);
    }
    revalidatePath(path);
};

const revalidatePathForType = async (body: any) => {
    const type = body?.sys?.contentType?.sys?.id ?? body?.sys?.type;
    if (!type) return;

    if (type === 'collection' || type === 'editorial') {
        const slug = body?.fields?.slug?.[LOCALE];
        if (slug) {
            revalidate(`/${slug}`);
        }
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
            revalidate(`/${editorial.slug}`);
        });
    } else if (type === 'photogrid') {
        // revalidate editorial pages and content sections that contain this photogrid
        const {data} = await fetchContent(`query {
            photogrid(id: "${body.sys.id}") {
                linkedFrom {
                    editorialCollection {
                        items {
                            slug
                        }
                    }
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
        if (!data?.photogrid) return;

        // revalidate editorial pages that directly contain this photogrid
        data.photogrid.linkedFrom.editorialCollection.items.forEach((editorial: any) => {
            revalidate(`/${editorial.slug}`);
        });
        // revalidate editorial pages that contain content sections with this photogrid
        data.photogrid.linkedFrom.contentSectionCollection.items.forEach((contentSection: any) => {
            contentSection.linkedFrom.editorialCollection.items.forEach((editorial: any) => {
                revalidate(`/${editorial.slug}`);
            });
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
            revalidate(`/${tag.slug}-photography`);
        });
        data.photo.linkedFrom.collectionCollection.items.forEach((collection: any) => {
            revalidate(`/${collection.slug}`);
        });
        data.photo.linkedFrom.editorialCollection.items.forEach((editorial: any) => {
            revalidate(`/${editorial.slug}`);
        });
        // if used in a photo grid, revalidate the services page as this is the
        // only use case for this
        if (data.photo.linkedFrom.photoGridPhotoCollection.items.length > 0) {
            revalidate(`/services`);
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
            revalidate(`/${page.slug}`);
        });
        data.asset.linkedFrom.photoCollection.items.forEach((photo: any) => {
            // for each photo we need to revalidate the collection it belongs to
            photo.linkedFrom.collectionCollection.items.forEach((collection: any) => {
                revalidate(`/${collection.slug}`);
                // home page does not nest photos in a collection
                if (collection.slug !== 'home') {
                    revalidate(`/${collection.slug}/${photo.slug}`);
                }
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
    await revalidatePathForType(body);

    return Response.json({success: true});
};
