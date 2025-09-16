import type {Metadata} from 'next';
import {draftMode} from 'next/headers';
import {notFound} from 'next/navigation';
import config from '@/utils/config';
import {fetchAllCollections, fetchAllTags, fetchCollection} from '@/utils/contentful';
import {getCollectionSeo, getTagSeo} from '@/utils/helpers';
import CollectionPage from './collection-page';
import TagPage from './tag-page';

interface Props {
    params: Promise<{collection: string}>;
}

const CollectionOrTagPage = async ({params}: Props) => {
    const allParams = await params;
    const draftModeConfig = await draftMode();
    const collection = await fetchCollection(allParams.collection, draftModeConfig.isEnabled);

    if (!collection) {
        notFound();
    }

    if (collection.isTagPage) {
        // the tag itself differs from the collection slug. we can get the tag via
        // the collection's tags list
        const tag = collection?.tagsCollection?.items[0];
        if (!tag) {
            notFound();
        }

        return <TagPage tagSlug={tag.slug} />;
    }

    return <CollectionPage collection={collection} />;
};

export const generateStaticParams = async () => {
    const allTags = await fetchAllTags();
    const allCollections = await fetchAllCollections();
    const allParams: Record<string, string>[] = [];

    if (allCollections) {
        allCollections.forEach(collection => {
            allParams.push({collection: collection.slug});
        });
    }
    if (allTags) {
        allTags.forEach(tag => {
            allParams.push({collection: tag.slug});
        });
    }

    return allParams;
};

export const generateMetadata = async ({params}: Props): Promise<Metadata | null> => {
    const allParams = await params;
    const collection = await fetchCollection(allParams.collection);
    if (!collection) return null;

    if (collection.isTagPage) {
        const tag = collection?.tagsCollection?.items[0];
        if (!tag) return null;

        return getTagSeo(tag);
    }

    const collectionSeo = getCollectionSeo(collection);
    const meta = {...config.seo, ...collectionSeo};
    return meta;
};

export default CollectionOrTagPage;
