import {redirect} from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import PhotoCollection from '@/components/PhotoCollection';
import config from '@/utils/config';
import {fetchAllCollections, fetchCollection} from '@/utils/contentful';
import {getCollectionSeo} from '@/utils/helpers';
import {getGeneratedCollectionOgUrl} from '@/utils/og';

interface Props {
    params: {collection: string};
}

const CollectionPage = async ({params}: Props) => {
    const collection = await fetchCollection(params.collection);
    if (!collection) redirect('/');

    return (
        <>
            <PageHeader
                {...collection}
                description={collection?.showDescription ? collection.description : null}
            />
            <PhotoCollection {...collection} key={collection.slug} />
        </>
    );
};

export const generateStaticParams = async () => {
    const allCollections = await fetchAllCollections();
    if (!allCollections) return [];

    return allCollections.map(collection => ({collection: collection.slug}));
};

export const generateMetadata = async ({params}: Props) => {
    const collection = await fetchCollection(params.collection);
    if (!collection) return null;

    const collectionSeo = getCollectionSeo(collection);

    if (collectionSeo.openGraph) {
        const images = [
            {alt: '', height: 630, width: 1200, url: getGeneratedCollectionOgUrl(collection)}
        ];
        collectionSeo.openGraph.images = images;
        collectionSeo.twitter.images = images.map(i => i.url);
    }

    return {...config.seo, ...collectionSeo};
};

export const revalidate = 60;

export default CollectionPage;
