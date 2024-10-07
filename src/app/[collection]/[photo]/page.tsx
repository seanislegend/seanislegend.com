import {draftMode} from 'next/headers';
import {redirect} from 'next/navigation';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import PhotoCarousel from '@/components/PhotoCarousel';
import config from '@/utils/config';
import {fetchAllCollections, fetchCollection} from '@/utils/contentful';
import {getPhotoSeo} from '@/utils/helpers';

interface Props {
    params: Promise<{collection: string; photo: string}>;
}

export const getCollectionAndPhoto = async (
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

    return (
        <DefaultLayout theme="light">
            <PageHeader
                backUrl={`/${collection.slug}`}
                title={collection.pageTitle || collection.title}
            />
            <div className="mx-auto max-w-[75rem]">
                <PhotoCarousel photo={allParams.photo} collection={collection} />
            </div>
            <div className="md:hidden">
                <PageHeader
                    backUrl={`/${collection.slug}`}
                    ctaLabel={collection.ctaLabel}
                    ctaUrl={collection.ctaUrl}
                    description={collection.description}
                    hasBottomPadding={false}
                />
            </div>
        </DefaultLayout>
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
    const allParams = await params;
    const {collection, photo} = await getCollectionAndPhoto(allParams.collection, allParams.photo);
    if (!collection || !photo) return null;

    return {...config.seo, ...getPhotoSeo(collection, photo)};
};

export const revalidate = 60;

export default PhotoPage;
