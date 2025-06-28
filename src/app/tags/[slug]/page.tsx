import {notFound} from 'next/navigation';
import CollectionLinksCarousel from '@/components/CollectionLinksCarousel/Carousel';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import {ContentSection} from '@/components/PhotoCollection/Blocks';
import PhotoMasonry from '@/components/PhotoCollection/Masonry';
import AllTagsList from '@/components/SiteMenu/AllTagsList';
import Container from '@/components/UI/Container';
import {Heading2} from '@/components/UI/Headings';
import TextLink from '@/components/UI/TextLink';
import config from '@/utils/config';
import {fetchAllPhotosForTag, fetchAllTags} from '@/utils/contentful';
import {getTagSeo} from '@/utils/helpers';

interface Props {
    params: Promise<{slug: string}>;
}

const TagDetailPage = async ({params}: Props) => {
    const allParams = await params;
    const allTags = await fetchAllTags();
    const {collections, contentSection, photos, tag} = await fetchAllPhotosForTag(allParams.slug);

    if (!photos?.length || !tag) {
        notFound();
    }

    const collectionLinks = collections.map((c: any) => ({
        href: `/${c.slug}`,
        label: c.pageTitle ?? c.title
    }));

    return (
        <DefaultLayout theme="light">
            <PageHeader
                description={tag.description}
                pageTitle={`${tag.name} photos`}
                title={`All photos tagged with "${tag.name}"`}
            >
                {collections.length > 0 && <CollectionLinksCarousel links={collectionLinks} />}
            </PageHeader>
            <PhotoMasonry items={photos} />
            <Container className="my-10 space-y-10 lg:my-20">
                {contentSection && <ContentSection {...contentSection} />}
                {allTags?.length > 0 && (
                    <div>
                        <Heading2>More tags</Heading2>
                        <AllTagsList items={allTags} />
                    </div>
                )}
            </Container>
        </DefaultLayout>
    );
};

export const generateStaticParams = async () => {
    const allTags = await fetchAllTags();
    if (!allTags) return [];

    const slugs = allTags.map((t: Tag) => ({slug: t.slug}));

    return slugs;
};

export const generateMetadata = async ({params}: Props) => {
    const allParams = await params;
    const tags = await fetchAllTags();
    if (!tags) return null;

    const tag = tags.find((t: Tag) => t.slug === allParams.slug);
    if (!tag) return null;

    return {...config.seo, ...getTagSeo(tag)};
};

export default TagDetailPage;
