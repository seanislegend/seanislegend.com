'use server';

import {layouts} from '@/components/PhotoCollection/layouts';
import {fetchCollection} from '@/utils/contentful';
import {getOgImage} from '@/utils/og';

const getFirstFourLandscapePhotos = (photos: Photo[]) => {
    const landscapePhotos = photos.filter(photo => photo.fullSize.width > photo.fullSize.height);
    return landscapePhotos.slice(0, 4).map(photo => photo.fullSize.url);
};

export const getCollectionOpengraphImage = async (slug: string, isDraft: boolean) => {
    const collection = await fetchCollection(slug, isDraft);
<<<<<<< HEAD
<<<<<<< HEAD
    if (!collection) {
        return Response.json({error: 'Error rendering image'}, {status: 404});
    }
=======
    if (!collection) return;
>>>>>>> 3f0d2ab (feat: Update opengraph images)
=======
    if (!collection) {
        return Response.json({error: 'Error rendering image'}, {status: 404});
    }
>>>>>>> 7936980 (feat: Add 404 response for missing collection/photos)

    const metaPhotos = collection.metaPhotosCollection.items;
    if (metaPhotos.length > 0) {
        return getOgImage(metaPhotos.map(p => p.photo.url));
    }

    const photos = collection.photosCollection.items;
<<<<<<< HEAD
<<<<<<< HEAD
    if (!photos) {
        return Response.json({error: 'Error rendering image'}, {status: 404});
    }
=======
    if (!photos) return;
>>>>>>> 3f0d2ab (feat: Update opengraph images)
=======
    if (!photos) {
        return Response.json({error: 'Error rendering image'}, {status: 404});
    }
>>>>>>> 7936980 (feat: Add 404 response for missing collection/photos)

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
