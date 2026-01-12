import type {Metadata} from 'next';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import Button from '@/components/Button';
import DefaultLayout from '@/components/Layouts/Default';
import Markdown from '@/components/Markdown';
import PageHeader from '@/components/PageHeader';
import ThumbnailImage from '@/components/PhotoCollection/ThumbnailImage';
import Condition from '@/components/UI/Condition';
import Container from '@/components/UI/Container';
import {Heading4} from '@/components/UI/Headings';
import TextLink from '@/components/UI/TextLink';
import config from '@/utils/config';
import {fetchExhibition} from '@/utils/contentful';

interface Props {
    params: Promise<{exhibitionSlug: string}>;
}

const ExhibitionPage: React.FC<Props> = async ({params}) => {
    const allParams = await params;
    const exhibition = await fetchExhibition(allParams.exhibitionSlug);

    if (!exhibition) {
        notFound();
    }

    console.log(exhibition);

    return (
        <DefaultLayout theme="light">
            <PageHeader
                description={exhibition.description}
                pageTitle={exhibition.pageTitle}
                subtitle="Exhibitions"
                title={exhibition.title}
            >
                {(exhibition.startDate ||
                    exhibition.endDate ||
                    exhibition.address ||
                    exhibition.collaborator) && (
                    <div className="mt-6 space-y-4">
                        {exhibition.startDate && exhibition.endDate && (
                            <div>
                                <Heading4>Dates</Heading4>
                                <Markdown>
                                    {`${new Date(exhibition.startDate).toLocaleDateString('en-GB', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })} - ${new Date(exhibition.endDate).toLocaleDateString(
                                        'en-GB',
                                        {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        }
                                    )}`}
                                </Markdown>
                            </div>
                        )}
                        {exhibition.address && (
                            <div>
                                <Heading4>Address</Heading4>
                                <Markdown>
                                    {exhibition.addressDirectionsUrl
                                        ? `[${exhibition.address}](${exhibition.addressDirectionsUrl})`
                                        : exhibition.address}
                                </Markdown>
                            </div>
                        )}
                        {exhibition.collaborator && (
                            <Markdown>{`In collaboration with ${exhibition.collaborator}`}</Markdown>
                        )}
                        {exhibition.detailsUrl && (
                            <p>
                                <Button href={exhibition.detailsUrl} theme="secondary">
                                    {exhibition.detailsUrlLabel || 'More details'}
                                </Button>
                            </p>
                        )}
                    </div>
                )}
            </PageHeader>
            <Container className="my-8">
                <div className="grid grid-cols-12 gap-4">
                    {exhibition.photosCollection?.items.map((photo: ExhibitionPhoto) => {
                        if (!photo.photo?.thumbnail) return null;
                        return (
                            <div
                                key={photo.slug}
                                className="col-span-6 md:col-span-4 lg:col-span-3"
                            >
                                <ThumbnailImage
                                    alt={photo.title}
                                    base64={photo.photo?.base64}
                                    loading="lazy"
                                    columnSize={4}
                                    {...photo.photo?.thumbnail}
                                />
                            </div>
                        );
                    })}
                </div>
            </Container>
        </DefaultLayout>
    );
};

export const generateMetadata = async ({params}: Props): Promise<Metadata | null> => {
    const allParams = await params;
    const exhibition = await fetchExhibition(allParams.exhibitionSlug);

    if (!exhibition) {
        return null;
    }

    const title = `${exhibition.title} | ${config.titleTemplate}`;
    const description = exhibition.description
        ? exhibition.description.substring(0, 160)
        : `Exhibition: ${exhibition.title}`;
    const openGraphImage =
        exhibition.openGraphImage?.url ??
        exhibition.photosCollection?.items[0]?.photo?.thumbnail?.url;

    return {
        alternates: {
            canonical: `${config.seo.alternates.canonical}/exhibitions/${exhibition.slug}`
        },
        description,
        openGraph: {description, images: [openGraphImage]},
        title,
        twitter: {card: 'summary_large_image', description, title}
    };
};

export default ExhibitionPage;
