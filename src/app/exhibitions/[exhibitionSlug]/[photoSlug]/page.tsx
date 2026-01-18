import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Button from '@/components/Button';
import DefaultLayout from '@/components/Layouts/Default';
import Markdown from '@/components/Markdown';
import PageHeader from '@/components/PageHeader';
import PageHeaderButtonList from '@/components/PageHeader/ButtonList';
import CarouselImage from '@/components/PhotoCarousel/Image';
import ThumbnailImage from '@/components/PhotoCollection/ThumbnailImage';
import Container from '@/components/UI/Container';
import {Heading2, Heading4} from '@/components/UI/Headings';
import config from '@/utils/config';
import {fetchExhibition} from '@/utils/contentful';

interface Props {
    params: Promise<{exhibitionSlug: string; photoSlug: string}>;
}

const ExhibitionPage: React.FC<Props> = async ({params}) => {
    const allParams = await params;
    const exhibition = await fetchExhibition(allParams.exhibitionSlug);

    if (!exhibition) {
        notFound();
    }

    const photo = exhibition.photosCollection?.items.find(
        (p: ExhibitionPhoto) => p.slug === allParams.photoSlug
    );

    if (!photo) {
        notFound();
    }

    return (
        <DefaultLayout theme="light">
            <PageHeader
                description={photo.description}
                pageTitle={exhibition.pageTitle}
                subtitle="Exhibitions"
            >
                <div className="mt-2 space-y-4">
                    {(photo.location || photo.date) && (
                        <p className="text-sm text-gray-500">
                            {`${photo.location}${photo.date ? `. ${photo.date}.` : ''}`}
                        </p>
                    )}
                    <PageHeaderButtonList
                        ctas={[
                            {label: 'Request a print', url: '/contact'},
                            {label: 'View exhibition', url: `/exhibitions/${exhibition.slug}`}
                        ]}
                    />
                </div>
            </PageHeader>
            <Container>
                <CarouselImage
                    {...photo}
                    base64={photo.photo?.base64}
                    fullSize={photo.photo?.fullSize}
                    isActive={true}
                    title={photo.title}
                />
            </Container>
            <PageHeader description={exhibition.description}></PageHeader>
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
