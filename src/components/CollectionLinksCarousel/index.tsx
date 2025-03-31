import {fetchCollectionNavigation} from '@/utils/contentful';
import Carousel from './Carousel';

const CollectionLinks: React.FC = async () => {
    const collections = await fetchCollectionNavigation();

    if (!collections) return null;

    const links = collections
        .map(collection => ({
            label: collection.pageTitle ?? collection.title,
            url: collection.url
        }))
        .sort(() => Math.random() - 0.5)
        .slice(0, 20);

    if (!links.length) return null;

    return <Carousel links={links} />;
};

export default CollectionLinks;
