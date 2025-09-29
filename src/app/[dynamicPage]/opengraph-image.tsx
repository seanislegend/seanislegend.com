import {layouts} from '@/components/PhotoCollection/layouts';
import {fetchCollection} from '@/utils/contentful';
import {getOgImage} from '@/utils/og';

interface Props {
    params: Promise<{dynamicPage: string}>;
}

const getFirstFourLandscapePhotos = (photos: Photo[]) => {
    const landscapePhotos = photos.filter(photo => photo.fullSize.width > photo.fullSize.height);
    return landscapePhotos.slice(0, 4).map(photo => photo.fullSize.url);
};

const handler = async ({params}: Props) => {
    const allParams = await params;
    const collection = await fetchCollection(allParams.dynamicPage);
    if (!collection) return;

    const metaPhotos = collection.metaPhotosCollection.items;
    if (metaPhotos.length > 0) {
        return getOgImage(metaPhotos.map(p => p.photo.url));
    }

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
