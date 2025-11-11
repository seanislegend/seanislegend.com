import type {Metadata} from 'next';
import {draftMode} from 'next/headers';
import {notFound} from 'next/navigation';
import PhotosCollectionAdminTools from '@/components/PhotoCollection/AdminTools';
import config from '@/utils/config';
import {fetchCollection} from '@/utils/contentful';
import {getCollectionSeo} from '@/utils/helpers';
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

    return (
        <Layout>
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
