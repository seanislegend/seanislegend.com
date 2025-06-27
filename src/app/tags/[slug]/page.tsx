import {notFound} from 'next/navigation';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import PhotoMasonry from '@/components/PhotoCollection/Masonry';
import config from '@/utils/config';
import {fetchAllPhotosForTag, fetchAllTags} from '@/utils/contentful';
import {getTagSeo} from '@/utils/helpers';

interface Props {
    params: Promise<{slug: string}>;
}

const TagDetailPage = async ({params}: Props) => {
    const allParams = await params;
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
