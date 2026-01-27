import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import config from '@/utils/config';
import {fetchAllCollections, fetchAllEditorialPages, fetchAllTags} from '@/utils/contentful';
import {getCollectionSeo, getEditorialSeo} from '@/utils/helpers';
import {resolvePageData} from '@/utils/pageResolver';
import CollectionPage from './collection-page';
import EditorialPage from './editorial-page';
import TagPage from './tag-page';

interface Props {
    params: Promise<{dynamicPage: string}>;
}

const DynamicPage: React.FC<Props> = async ({params}) => {
    const allParams = await params;
    const pageData = await resolvePageData(allParams.dynamicPage);
    console.log(pageData.collection.photosCollection.items[45]);
    if (pageData.type === 'not-found') {
        notFound();
    } else if (pageData.type === 'collection') {
        if (pageData.collection.isTagPage) {
            // the tag itself differs from the collection slug. we can get the tag via
            // the collection's tags list
            const tag = pageData.tag;
            if (!tag) {
                notFound();
            }

            return <TagPage tagSlug={tag.slug} />;
        }

        return <CollectionPage collection={pageData.collection} />;
    } else if (pageData.type === 'editorial') {
        return <EditorialPage editorial={pageData.editorial} />;
    }

    // fallback - should not reach here
    notFound();
};

export const generateStaticParams = async () => {
    const allTags = await fetchAllTags();
    const allCollections = await fetchAllCollections();
    const allEditorialPages = await fetchAllEditorialPages();
    const allParams: Record<string, string>[] = [];

    if (allCollections) {
        allCollections.forEach(collection => {
            allParams.push({dynamicPage: collection.slug});
        });
    }
    if (allTags) {
        allTags.forEach(tag => {
            allParams.push({dynamicPage: `${tag.slug}-photography`});
        });
    }
    if (allEditorialPages) {
        allEditorialPages.forEach(editorial => {
            allParams.push({dynamicPage: editorial.slug});
        });
    }

    return allParams;
};

export const generateMetadata = async ({params}: Props): Promise<Metadata | null> => {
    const allParams = await params;
    const pageData = await resolvePageData(allParams.dynamicPage);

    if (pageData.type === 'collection') {
        const collectionSeo = getCollectionSeo(pageData.collection);
        const meta = {...config.seo, ...collectionSeo};
        return meta;
    } else if (pageData.type === 'editorial') {
        const editorialSeo = getEditorialSeo(pageData.editorial);
        const meta = {...config.seo, ...editorialSeo};
        return meta;
    }

    return null;
};

export default DynamicPage;
