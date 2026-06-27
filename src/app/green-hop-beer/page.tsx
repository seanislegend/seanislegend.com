import type {Metadata} from 'next';
import {draftMode} from 'next/headers';
import {notFound} from 'next/navigation';
import PhotosCollectionAdminTools from '@/components/PhotoCollection/AdminTools';
import config from '@/utils/config';
import {fetchCollection} from '@/utils/contentful';
import {getBlogPostingJsonLd, getCollectionSeo, getPhotoAlbumJsonLd} from '@/utils/helpers';
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
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {'@type': 'ListItem', position: 1, name: 'Home', item: process.env.NEXT_PUBLIC_URL},
            {
                '@type': 'ListItem',
                position: 2,
                name: collection.pageTitle || collection.title,
                item: `${process.env.NEXT_PUBLIC_URL}/green-hop-beer`
            }
        ]
    };
    return (
        <Layout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(photoAlbumJsonLd)}}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(blogPostingJsonLd)}}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd)}}
            />
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
