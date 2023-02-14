import {redirect} from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import PhotoCarousel from '@/components/PhotoCarousel';
import config from '@/utils/config';
import {fetchAllCollections, fetchCollection} from '@/utils/contentful';
import {getPhotoSeo} from '@/utils/helpers';

interface Props {
    params: {collection: string; photo: string};
}

const getCollectionAndPhoto = async (collectionSlug: string, photoSlug: string) => {
    const collection = await fetchCollection(collectionSlug);
    const photo = collection?.photosCollection.items.find(p => p.slug === photoSlug);

    return {collection, photo};
};

const PhotoPage = async ({params}: Props) => {
    const {collection} = await getCollectionAndPhoto(params.collection, params.photo);
    if (!collection) redirect('/');

    return (
        <>
            <div className="md:hidden">
                <PageHeader backUrl={`/${collection.slug}`} title={collection.title} />
            </div>
            <PhotoCarousel photo={params.photo} collection={collection} />
        </>
    );
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
    const {collection, photo} = await getCollectionAndPhoto(params.collection, params.photo);
    if (!collection || !photo) return null;

    return {...config.seo, ...getPhotoSeo(collection, photo)};
};

export const revalidate = 60;

export default PhotoPage;
