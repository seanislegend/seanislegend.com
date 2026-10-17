import type {Metadata} from 'next';
import {draftMode} from 'next/headers';
import {notFound} from 'next/navigation';
import PhotosCollectionAdminTools from '@/components/PhotoCollection/AdminTools';
import config from '@/utils/config';
import {fetchCollection} from '@/utils/contentful';
import {
    getBlogPostingJsonLd,
    getBreadcrumbJsonLd,
    getCollectionSeo,
    getPhotoAlbumJsonLd,
    jsonLdScriptProps
} from '@/utils/helpers';
import ContextWrapper from './ContextWrapper';
import Layout from './Layout';
import Navigation from './Navigation';
import PageHeader from './PageHeader';
import Sections from './Sections';

const GreenHopPage = async () => {
    const draftModeConfig = await draftMode();
    const collection = await fetchCollection('green-hop-beer', draftModeConfig.isEnabled);

    if (!collection) {
        notFound();
    }

    const photoAlbumJsonLd = getPhotoAlbumJsonLd(collection);
    const blogPostingJsonLd = getBlogPostingJsonLd(collection);
    const breadcrumbJsonLd = getBreadcrumbJsonLd([
        {name: collection.pageTitle || collection.title, path: '/green-hop-beer'}
    ]);
    return (
        <Layout>
            <script {...jsonLdScriptProps(photoAlbumJsonLd)} />
            <script {...jsonLdScriptProps(blogPostingJsonLd)} />
            <script {...jsonLdScriptProps(breadcrumbJsonLd)} />
            <ContextWrapper collection={collection}>
                <PageHeader />
                <Navigation />
                <Sections />
            </ContextWrapper>
            {process.env.NEXT_PUBLIC_ADMIN_TOOLS === '1' && (
                <PhotosCollectionAdminTools collection={collection} />
            )}
        </Layout>
    );
};

export const generateMetadata = async (): Promise<Metadata | null> => {
    const draftModeConfig = await draftMode();
    const collection = await fetchCollection('green-hop-beer', draftModeConfig.isEnabled);
    if (!collection) return null;

    const collectionSeo = getCollectionSeo(collection);
    const meta = {...config.seo, ...collectionSeo};
    return meta;
};

export default GreenHopPage;
