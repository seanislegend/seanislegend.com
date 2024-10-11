import {fetchCollection} from '@/utils/contentful';
import {getOgImage} from '@/utils/og';

interface Props {
    params: Promise<{collection: string}>;
}

const handler = async ({params}: Props) => {
    const allParams = await params;
    const collection = await fetchCollection(allParams.collection);
    if (!collection) return;

    const photos = collection.photosCollection.items.filter((photo, index) => {
        return photo.fullSize.width > photo.fullSize.height && index < 4;
    });
    if (!photos) return;

    return getOgImage(photos.map(photo => photo.fullSize.url));
};

export const runtime = 'edge';
export default handler;
