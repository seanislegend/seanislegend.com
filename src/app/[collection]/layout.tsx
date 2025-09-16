import {Suspense} from 'react';
import {draftMode} from 'next/headers';
import {notFound} from 'next/navigation';
import CollectionLinksCarouselWrapper from '@/components/CollectionLinksCarousel';
import CollectionLinksCarousel from '@/components/CollectionLinksCarousel/Carousel';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import BackToCollectionButton from '@/components/PageHeader/BackToCollectionButton';
import AllTagsList from '@/components/SiteMenu/AllTagsList';
import {fetchAllPhotosForTag, fetchCollection} from '@/utils/contentful';

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

    let allTagCollectionLinks: {href: string; label: string}[] = [];
    let ctas = [];

    if (collection.isTagPage) {
        // if this is a tag page we'll need to get the tag from the collections list
        // rather than rely on the collection slug which will be modified for seo
        const tag = collection?.tagsCollection?.items[0];

        if (tag) {
            const {collections} = await fetchAllPhotosForTag(tag.slug);

            if (collections) {
                allTagCollectionLinks = collections.map((c: any) => ({
                    href: `/${c.slug}`,
                    label: c.pageTitle ?? c.title
                }));
            }
        }
    } else if (collection.slug !== 'home') {
        ctas.push({label: 'Get in touch', url: '/contact'});

        if (collection.ctaLabel && collection.ctaUrl) {
            ctas.push({label: collection.ctaLabel, url: collection.ctaUrl});
        }
    }

    return (
        <DefaultLayout theme="light">
            <PageHeader
                {...collection}
                backUrl={`/${collection.slug}`}
                ctas={ctas.filter(Boolean) as {label: string; url: string}[]}
                description={collection?.showDescription ? collection.description : null}
                titleAside={
                    <div className="hidden grow flex-col justify-end md:flex" key={collection.slug}>
                        <Suspense>
                            <BackToCollectionButton />
                        </Suspense>
                    </div>
                }
            >
                {collection.slug === 'home' && <CollectionLinksCarouselWrapper />}
                {allTagCollectionLinks.length > 0 && (
                    <CollectionLinksCarousel links={allTagCollectionLinks} />
                )}
            </PageHeader>
            {children}
        </DefaultLayout>
    );
};

export default CollectionPageSharedLayout;
