import {notFound} from 'next/navigation';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import PhotoMasonry from '@/components/PhotoCollection/Masonry';
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
                ctaLabel="View all tags"
                ctaUrl="/tags"
                description={tag.description}
                pageTitle={`${tag.name} photos`}
                title={`All photos tagged with "${tag.name}"`}
            />

            <PhotoMasonry items={photos} />
            {allTags?.length > 0 && (
                <Container className="my-10 lg:my-20">
                    <Heading2>More tags</Heading2>
                    <ul className="mt-4 flex flex-row flex-wrap gap-x-4 gap-y-2">
                        {allTags
                            .filter((t: Tag) => t.slug !== tag.slug)
                            .map((t: Tag) => (
                                <li key={t.slug}>
                                    <TextLink href={`/tags/${t.slug}`}>{t.name}</TextLink>
                                </li>
                            ))}
                    </ul>
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
