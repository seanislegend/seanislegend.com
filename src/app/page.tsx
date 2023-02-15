import {notFound} from 'next/navigation';
import PhotoCollection from '@/components/PhotoCollection';
import config from '@/utils/config';
import {fetchCollection} from '@/utils/contentful';
import {getCollectionSeo} from '@/utils/helpers';
import {getGeneratedCollectionOgUrl} from '@/utils/og';

const HomePage = async () => {
    const collection = await fetchCollection('home');
    if (!collection) notFound();

    return <PhotoCollection {...collection} key={collection.slug} />;
};

export const generateMetadata = async () => {
    try {
        const collection = await fetchCollection('home');
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
    } catch (error) {
        console.log(error);
    }
};

export const revalidate = 60;

export default HomePage;
