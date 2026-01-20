import type {Metadata} from 'next';
import {Link} from 'next-view-transitions';
import {notFound} from 'next/navigation';
import Button from '@/components/Button';
import DefaultLayout from '@/components/Layouts/Default';
import Markdown from '@/components/Markdown';
import PageHeader from '@/components/PageHeader';
import PhotoThumbnail from '@/components/PhotoCollection/Thumbnail';
import ThumbnailImage from '@/components/PhotoCollection/ThumbnailImage';
import Container from '@/components/UI/Container';
import {Heading4} from '@/components/UI/Headings';
import SwipeableContainer from '@/components/UI/SwipeableContainer';
import TitleTextGrid from '@/components/UI/TitleTextGrid';
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

    const featuredPhotos = exhibition.photosCollection.items.filter(
        (p: ExhibitionPhoto) => p.isFeatured
    );

    return (
        <DefaultLayout theme="dark">
            <PageHeader
                description={exhibition.description}
                pageTitle={exhibition.pageTitle}
                subtitle="Exhibitions"
                title={exhibition.title}
            />
            <Container className="-mt-16">
                <TitleTextGrid>
                    {(exhibition.startDate ||
                        exhibition.endDate ||
                        exhibition.address ||
                        exhibition.collaborator) && (
                        <div className="mt-6 space-y-4">
                            {exhibition.startDate && exhibition.endDate && (
                                <div>
                                    <Heading4>Dates</Heading4>
                                    <Markdown>
                                        {`${new Date(exhibition.startDate).toLocaleDateString(
                                            'en-GB',
                                            {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            }
                                        )} - ${new Date(exhibition.endDate).toLocaleDateString(
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
                </TitleTextGrid>
                {featuredPhotos.length > 0 && (
                    <div className="flex flex-row gap-4">
                        {featuredPhotos.map(photo => (
                            <ThumbnailImage key={photo.slug} {...photo.photo?.thumbnail} />
                        ))}
                    </div>
                )}
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
