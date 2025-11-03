import type {Metadata} from 'next';
<<<<<<< HEAD
import {draftMode} from 'next/headers';
import {notFound} from 'next/navigation';
=======
import {notFound} from 'next/navigation';
import DefaultLayout from '@/components/Layouts/Default';
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)
import PhotosCollectionAdminTools from '@/components/PhotoCollection/AdminTools';
import config from '@/utils/config';
import {fetchCollection} from '@/utils/contentful';
import {getCollectionSeo} from '@/utils/helpers';
<<<<<<< HEAD
import ContextWrapper from './ContextWrapper';
import Layout from './Layout';
import Navigation from './Navigation';
=======
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)
import PageHeader from './PageHeader';
import Sections from './Sections';

const GreenHopPage = async () => {
<<<<<<< HEAD
    const draftModeConfig = await draftMode();
    const collection = await fetchCollection('green-hop-beer', draftModeConfig.isEnabled);
=======
    const collection = await fetchCollection('green-hop-beer', true);
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)

    if (!collection) {
        notFound();
    }

    return (
<<<<<<< HEAD
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
=======
        <DefaultLayout data-layout-type="editorial" theme="sky-blue">
            <PageHeader collection={collection} />
            <Sections collection={collection} />
            {process.env.NEXT_PUBLIC_ADMIN_TOOLS === '1' && (
                <PhotosCollectionAdminTools collection={collection} />
            )}
        </DefaultLayout>
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)
    );
};

export const generateMetadata = async (): Promise<Metadata | null> => {
<<<<<<< HEAD
    const draftModeConfig = await draftMode();
    const collection = await fetchCollection('green-hop-beer', draftModeConfig.isEnabled);
=======
    const collection = await fetchCollection('green-hop-beer');
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)
    if (!collection) return null;

    const collectionSeo = getCollectionSeo(collection);
    const meta = {...config.seo, ...collectionSeo};
    return meta;
};

export default GreenHopPage;
