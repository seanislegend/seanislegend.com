import {draftMode} from 'next/headers';
import {fetchCollection, fetchEditorialPage} from '@/utils/contentful';

export const resolvePageData = async (slug: string): Promise<PageData> => {
    const draftModeConfig = await draftMode();

    // first try to fetch as a collection. this is used by photo collections
    // and tag pages.
    const collection = await fetchCollection(slug, draftModeConfig.isEnabled);
    if (collection) {
        return {
            collection,
            tag: collection?.tagsCollection?.items?.[0],
            type: 'collection'
        };
    }

    // if not a collection, try to fetch as an editorial page
    const editorial = await fetchEditorialPage(slug);
    if (editorial && editorial.isGenericPage) {
        return {
            editorial,
            type: 'editorial'
        };
    }

    return {type: 'not-found'};
};
