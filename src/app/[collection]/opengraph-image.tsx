import {fetchCollection} from '@/utils/contentful';
import {getOgImage} from '@/utils/og';

const handler = async ({params}: {params: {collection: string}}) => {
    const collection = await fetchCollection(params.collection);
    if (!collection) return;

    const photo = collection.photosCollection.items?.[0]?.fullSize;
    if (!photo) return;

    return getOgImage(photo.url, collection.pageTitle || collection.title);
};

export const runtime = 'edge';
export default handler;
