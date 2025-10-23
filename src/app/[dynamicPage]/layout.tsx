import {notFound} from 'next/navigation';
import CollectionLinksCarouselWrapper from '@/components/CollectionLinksCarousel';
import CollectionLinksCarousel from '@/components/CollectionLinksCarousel/Carousel';
import DefaultLayout from '@/components/Layouts/Default';
import photoCollectionHeaders from '@/components/PhotoCollection/Headers';
import {fetchAllPhotosForTag} from '@/utils/contentful';
import {resolvePageData} from '@/utils/pageResolver';

interface Props {
    params: Promise<{dynamicPage: string; photo?: string}>;
}

const CollectionPageSharedLayout: React.FC<React.PropsWithChildren<Props>> = async ({
    children,
    params
}) => {
    const allParams = await params;
    const pageData = await resolvePageData(allParams.dynamicPage);

    if (pageData.type === 'not-found') {
        return notFound();
    } else if (pageData.type === 'editorial') {
        // handle page layouts in the editorial page component
        return children;
    }

    const collection = pageData.collection;
    let allTagCollectionLinks: {href: string; label: string}[] = [];
    let ctas = [];

    if (collection.isTagPage) {
        // if this is a tag page we'll need to get the tag from the collections list
        // rather than rely on the collection slug which will be modified for seo
        const tag = pageData.tag;

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

<<<<<<< HEAD
    const CustomHeader = photoCollectionHeaders[collection.customHeader];
    const PageHeader = CustomHeader || photoCollectionHeaders.default;
    const theme = collection.customTheme ?? 'light';

    return (
        <DefaultLayout data-layout-type={collection.layoutType} theme={theme}>
            <PageHeader ctas={ctas} collection={collection}>
=======
    const theme = collection.customTheme ?? 'light';

    return (
        <DefaultLayout theme={theme}>
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
>>>>>>> 53c00e7 (feat: Add new custom themes for collections)
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
