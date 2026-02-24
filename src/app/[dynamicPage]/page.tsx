import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import config from '@/utils/config';
import {fetchAllCollections, fetchAllEditorialPages, fetchAllTags} from '@/utils/contentful';
import {getCollectionSeo, getEditorialSeo, getPhotoAlbumJsonLd} from '@/utils/helpers';
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

        const photoAlbumJsonLd = getPhotoAlbumJsonLd(pageData.collection);
        return (
            <>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(photoAlbumJsonLd)}}
                />
                <CollectionPage collection={pageData.collection} />
            </>
        );
    } else if (pageData.type === 'editorial') {
        const tags = await fetchAllTags();
        return <EditorialPage editorial={pageData.editorial} tags={tags ?? []} />;
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
        return {
            ...config.seo,
            ...collectionSeo,
            openGraph: {...config.seo.openGraph, ...collectionSeo.openGraph}
        };
    } else if (pageData.type === 'editorial') {
        const editorialSeo = getEditorialSeo(pageData.editorial);
        return {
            ...config.seo,
            ...editorialSeo,
            openGraph: {...config.seo.openGraph, ...editorialSeo.openGraph}
        };
    }

    return null;
};

export default DynamicPage;
