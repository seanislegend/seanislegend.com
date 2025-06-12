'use server';

import {fetchCollectionNavigation} from '@/utils/contentful';
import DynamicMenuNavigation from './Navigation';

const SiteMenuDynamic: React.FC = async () => {
    const links = await fetchCollectionNavigation();
    if (!links) return null;

    return <DynamicMenuNavigation links={links} />;
};

export default SiteMenuDynamic;
