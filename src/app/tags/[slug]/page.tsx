import {notFound} from 'next/navigation';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
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
    const {tag, photos} = await fetchAllPhotosForTag(allParams.slug);

    if (!tag || !photos?.length) {
        notFound();
    }

    return (
        <DefaultLayout theme="light">
            <PageHeader
                ctas={[
                    {label: 'Get in touch', url: '/contact'},
                    {label: 'View services', url: '/services'}
                ]}
                description={`${tag.description}\n\nIf you have any questions or would like to discuss a project, please get in touch.`}
                pageTitle={`${tag.name} photos`}
                title={`All photos tagged with "${tag.name}"`}
            />
            <PhotoMasonry items={photos} />
            {allTags?.length > 0 && (
                <Container className="my-10 lg:my-20">
                    <Heading2>More tags</Heading2>
                    <AllTagsList items={allTags} />
                </Container>
            )}
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
