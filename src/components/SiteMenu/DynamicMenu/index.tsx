'use server';

import {fetchAllTags, fetchCollectionNavigation} from '@/utils/contentful';
import DynamicMenuNavigation from './Navigation';

const SiteMenuDynamic: React.FC = async () => {
    const links = await fetchCollectionNavigation();
    const tags = await fetchAllTags();
    if (!links || !tags) return null;

    return <DynamicMenuNavigation links={links} tags={tags} />;
};

export default SiteMenuDynamic;
