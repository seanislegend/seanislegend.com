import {fetchCollectionNavigation} from '@/utils/contentful';
import Carousel from './Carousel';

const CollectionLinks: React.FC = async () => {
    const collections = await fetchCollectionNavigation();

    if (!collections) return null;

    const links = collections.map(collection => ({
        href: collection.url,
        label: collection.pageTitle ?? collection.title
    }));
    if (!links.length) return null;

    return <Carousel links={links} />;
};

export default CollectionLinks;
