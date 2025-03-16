import {draftMode} from 'next/headers';
import {notFound} from 'next/navigation';
import PhotoCollection from '@/components/PhotoCollection';
import PhotoCollectionAdminTools from '@/components/PhotoCollection/AdminTools';
import RelatedCollections from '@/components/PhotoCollection/RelatedCollections';
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
        <>
            <PhotoCollection
                {...collection}
                linksTo={collection.slug === 'home' ? 'collection' : 'photo'}
            />
            {collection?.relatedCollectionsCollection &&
                collection?.relatedCollectionsCollection?.items?.length > 0 && (
                    <RelatedCollections items={collection.relatedCollectionsCollection.items} />
                )}
            {process.env.NEXT_PUBLIC_ADMIN_TOOLS === '1' && (
                <PhotoCollectionAdminTools collection={collection} />
            )}
        </>
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

export default CollectionPage;
