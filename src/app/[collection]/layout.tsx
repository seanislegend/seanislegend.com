import {Suspense} from 'react';
import {draftMode} from 'next/headers';
import {notFound} from 'next/navigation';
import CollectionLinksCarousel from '@/components/CollectionLinksCarousel';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import BackToCollectionButton from '@/components/PageHeader/BackToCollectionButton';
import {fetchCollection} from '@/utils/contentful';

interface Props {
    params: Promise<{collection: string; photo?: string}>;
}

const CollectionPageSharedLayout: React.FC<React.PropsWithChildren<Props>> = async ({
    children,
    params
}) => {
    const allParams = await params;
    const draftModeConfig = await draftMode();
    const collection = await fetchCollection(allParams.collection, draftModeConfig.isEnabled);

    if (!collection) return notFound();

    return (
        <DefaultLayout theme="light">
            <PageHeader
                {...collection}
                backUrl={`/${collection.slug}`}
                description={collection?.showDescription ? collection.description : null}
                titleAside={
                    <div className="hidden grow flex-col justify-end md:flex">
                        <Suspense>
                            <BackToCollectionButton />
                        </Suspense>
                    </div>
                }
            >
                {collection.slug === 'home' && <CollectionLinksCarousel />}
            </PageHeader>
            {children}
        </DefaultLayout>
    );
};

export default CollectionPageSharedLayout;
