'use server';

import {fetchCollectionNavigation} from '@/utils/contentful';
import DynamicMenuNavigation from './Navigation';

const SiteMenuDynamic: React.FC = async () => {
    const links = await fetchCollectionNavigation();

    if (!links) return null;

    const featuredLinks = links.filter(link => link.isFeatured);
    const otherLinks = links.filter(link => !link.isFeatured);

    return <DynamicMenuNavigation featuredLinks={featuredLinks} otherLinks={otherLinks} />;
};

export default SiteMenuDynamic;
