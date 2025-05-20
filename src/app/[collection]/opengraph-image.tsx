import {layouts} from '@/components/PhotoCollection/layouts';
import {fetchCollection} from '@/utils/contentful';
import {getOgImage} from '@/utils/og';

interface Props {
    params: Promise<{collection: string}>;
}

const getFirstFourLandscapePhotos = (photos: Photo[]) => {
    const landscapePhotos = photos.filter(photo => photo.fullSize.width > photo.fullSize.height);
    return landscapePhotos.slice(0, 4).map(photo => photo.fullSize.url);
};

const handler = async ({params}: Props) => {
    const allParams = await params;
    const collection = await fetchCollection(allParams.collection);
    if (!collection) return;

    const photos = collection.photosCollection.items;
    if (!photos) return;

    const layout = layouts?.[collection.slug];
    if (!layout) {
        const photoGroup = getFirstFourLandscapePhotos(photos);
        return getOgImage(photoGroup);
    }

    const allPhotos = Object.values(layout)
        .flatMap(layout => layout.photos)
        .filter(photoIndex => photoIndex !== undefined)
        .map(photoIndex => photos[photoIndex]);
    const landscapePhotos = getFirstFourLandscapePhotos(allPhotos);
    return getOgImage(landscapePhotos);
};

export const runtime = 'edge';
export default handler;
