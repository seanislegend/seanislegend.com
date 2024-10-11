'use server';

import {fetchCollectionNavigation} from '@/utils/contentful';
import DynamicMenuNavigation from './Navigation';

const SiteMenuDynamic: React.FC = async () => {
    const links = await fetchCollectionNavigation();
    if (!links) return null;

    const linksWithAllCollectionsLink = [
        ...links,
        {title: 'View all collections', url: '/collections'}
    ];

    return <DynamicMenuNavigation links={linksWithAllCollectionsLink} />;
};

export default SiteMenuDynamic;
