import {draftMode} from 'next/headers';
import {notFound} from 'next/navigation';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import PhotoCollection from '@/components/PhotoCollection';
import config from '@/utils/config';
import {fetchAllCollections, fetchCollection} from '@/utils/contentful';
import {getCollectionSeo} from '@/utils/helpers';

interface Props {
    params: Promise<{collection: string}>;
}

const CollectionPage = async ({params}: Props) => {
    const allParams = await params;
    const draftModeConfig = await draftMode();
    const collection = await fetchCollection(allParams.collection, draftModeConfig.isEnabled);

    if (!collection) return notFound();

    return (
        <DefaultLayout theme="light">
            <PageHeader
                {...collection}
                description={collection?.showDescription ? collection.description : null}
            />
            <PhotoCollection
                {...collection}
                linksTo={collection.slug === 'home' ? 'collection' : 'photo'}
                key={collection.slug}
            />
        </DefaultLayout>
    );
};

export const generateStaticParams = async () => {
    const allCollections = await fetchAllCollections();
    if (!allCollections) return [];

    return allCollections.map(collection => ({collection: collection.slug}));
};

export const generateMetadata = async ({params}: Props) => {
    const allParams = await params;
    const collection = await fetchCollection(allParams.collection);
    if (!collection) return null;

    const collectionSeo = getCollectionSeo(collection);
    return {...config.seo, ...collectionSeo};
};

export const revalidate = 60;

export default CollectionPage;
