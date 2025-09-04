'use server';

import {draftMode} from 'next/headers';
import {fetchAllTags, fetchCollectionNavigation} from '@/utils/contentful';
import DynamicMenuNavigation from './Navigation';

const SiteMenuDynamic: React.FC = async () => {
    const draftModeConfig = await draftMode();
    const links = await fetchCollectionNavigation(draftModeConfig.isEnabled);
    const tags = await fetchAllTags();
    if (!links || !tags) return null;

    return <DynamicMenuNavigation links={links} tags={tags} />;
};

export default SiteMenuDynamic;
