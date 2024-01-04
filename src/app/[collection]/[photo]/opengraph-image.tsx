import {fetchCollection} from '@/utils/contentful';
import {getOgImage} from '@/utils/og';

const handler = async ({params}: {params: {collection: string; photo: string}}) => {
    const collection = await fetchCollection(params.collection);
    if (!collection) return;

    const photo = collection.photosCollection.items?.find(i => i.slug === params.photo)?.fullSize;
    if (!photo) return;

    return getOgImage(photo.url, collection.pageTitle || collection.title);
};

export const runtime = 'edge';
export default handler;
