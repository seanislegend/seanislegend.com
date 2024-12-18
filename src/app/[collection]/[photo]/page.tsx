import {draftMode} from 'next/headers';
import {redirect} from 'next/navigation';
import PhotoCarousel from '@/components/PhotoCarousel';
import config from '@/utils/config';
import {fetchAllCollections, fetchCollection} from '@/utils/contentful';
import {getPhotoSeo} from '@/utils/helpers';

interface Props {
    params: Promise<{collection: string; photo: string}>;
}

const getCollectionAndPhoto = async (
    collectionSlug: string,
    photoSlug: string,
    preview: boolean = false
) => {
    const collection = await fetchCollection(collectionSlug, preview);
    const photo = collection?.photosCollection.items.find(p => p.slug === photoSlug);

    return {collection, photo};
};

const PhotoPage = async ({params}: Props) => {
    const allParams = await params;
    const draftModeConfig = await draftMode();
    const {collection} = await getCollectionAndPhoto(
        allParams.collection,
        allParams.photo,
        draftModeConfig.isEnabled
    );
    if (!collection) redirect('/');

    return <PhotoCarousel photo={allParams.photo} collection={collection} />;
};

export const generateStaticParams = async () => {
    const allCollections = await fetchAllCollections();
    if (!allCollections) return [];

    return allCollections
        .map(collection => {
            return collection.photosCollection.items.map(photo => ({
                collection: collection.slug,
                photo: photo.slug
            }));
        })
        .flatMap(photo => photo);
};

export const generateMetadata = async ({params}: Props) => {
    const allParams = await params;
    const {collection, photo} = await getCollectionAndPhoto(allParams.collection, allParams.photo);
    if (!collection || !photo) return null;

    return {...config.seo, ...getPhotoSeo(collection, photo)};
};

export const revalidate = 60;

export default PhotoPage;
