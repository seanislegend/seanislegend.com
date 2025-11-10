import {draftMode} from 'next/headers';
<<<<<<< HEAD
<<<<<<< HEAD
import {getCollectionOpengraphImage} from '@/utils/collection-opengraph-image';
=======
import {layouts} from '@/components/PhotoCollection/layouts';
import {fetchCollection} from '@/utils/contentful';
import {getOgImage} from '@/utils/og';
>>>>>>> 4ff8ed6 (feat: Support draft mode in OG routes)
=======
import {getCollectionOpengraphImage} from '@/utils/collection-opengraph-image';
>>>>>>> 3f0d2ab (feat: Update opengraph images)

interface Props {
    params: Promise<{dynamicPage: string}>;
}

<<<<<<< HEAD
<<<<<<< HEAD
const handler = async ({params}: Props) => {
    const allParams = await params;
    const draftModeConfig = await draftMode();
<<<<<<< HEAD
    return getCollectionOpengraphImage(allParams.dynamicPage, draftModeConfig.isEnabled);
=======
    const collection = await fetchCollection(allParams.dynamicPage, draftModeConfig.isEnabled);
    if (!collection) return;

    console.log(collection);

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
>>>>>>> 4ff8ed6 (feat: Support draft mode in OG routes)
=======
export const handler = async ({params}: Props) => {
=======
const handler = async ({params}: Props) => {
>>>>>>> 7936980 (feat: Add 404 response for missing collection/photos)
    const allParams = await params;
    const draftModeConfig = await draftMode();
    return getCollectionOpengraphImage(allParams.dynamicPage, draftModeConfig.isEnabled);
>>>>>>> 3f0d2ab (feat: Update opengraph images)
};

export const contentType = 'image/jpg';

export default handler;
