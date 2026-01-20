import Photos from '../photos';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Button from '@/components/Button';
import Markdown from '@/components/Markdown';
import CarouselImage from '@/components/PhotoCarousel/Image';
import Container from '@/components/UI/Container';
import config from '@/utils/config';
import {fetchExhibition} from '@/utils/contentful';
import ExhibitionHeader from '@/app/exhibitions/a-beers-place-the-kings-arms/header';

interface Props {
    params: Promise<{exhibitionSlug: string; photoSlug: string}>;
}

const ExhibitionPage: React.FC<Props> = async ({params}) => {
    const allParams = await params;
    const exhibitionSlug = 'a-beers-place-the-kings-arms';
    const exhibition = await fetchExhibition(exhibitionSlug);

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
        <>
            <div className="mb-8 px-4 md:mx-auto md:max-w-220">
                <Markdown>{photo.description}</Markdown>
            </div>
            <Container className="mb-20 max-w-300!">
                <CarouselImage
                    {...photo}
                    base64={photo.photo?.base64}
                    fullSize={photo.photo?.fullSize}
                    isActive={true}
                    title={photo.title}
                />
                {exhibition.detailsUrl && (
                    <Button className="mt-4" href={exhibition.detailsUrl} theme="secondary">
                        {exhibition.detailsUrlLabel || 'More details'}
                    </Button>
                )}
            </Container>
            <Photos exhibition={exhibition} activePhotoId={photo.slug} />
            <ExhibitionHeader exhibition={exhibition} />
        </>
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
