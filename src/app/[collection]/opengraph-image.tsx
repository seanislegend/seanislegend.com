import {layouts} from '@/components/PhotoCollection/layouts';
import {fetchCollection} from '@/utils/contentful';
import {getOgImage} from '@/utils/og';

interface Props {
    params: Promise<{collection: string}>;
}

const handler = async ({params}: Props) => {
    const allParams = await params;
    const collection = await fetchCollection(allParams.collection);
    if (!collection) return;

    const photos = collection.photosCollection.items;
    if (!photos) return;

    const layout = layouts?.[collection.slug];
    if (!layout) {
        return getOgImage(photos.slice(0, 4).map(photo => photo.fullSize.url));
    }

    const allPhotos = Object.values(layout)
        .flatMap(layout => layout.photos)
        .slice(0, 4);
    const layoutPhotos = allPhotos.map(photo => photos[photo]);

    return getOgImage(layoutPhotos.map(photo => photo.fullSize.url));
};

export const runtime = 'edge';
export default handler;
