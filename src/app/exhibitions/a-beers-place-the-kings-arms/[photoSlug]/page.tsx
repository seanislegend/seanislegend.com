import Photos from '../photos';
import clsx from 'clsx';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Button from '@/components/Button';
import Markdown from '@/components/Markdown';
import CarouselImage from '@/components/PhotoCarousel/Image';
import Container from '@/components/UI/Container';
import config from '@/utils/config';
import {fetchExhibition} from '@/utils/contentful';
import ExhibitionPhotoOrderSuccessMessage from '@/app/exhibitions/a-beers-place-the-kings-arms/[photoSlug]/order-success-message';
import {photoBorders} from '@/app/exhibitions/a-beers-place-the-kings-arms/borders';
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

    const photoIndex = exhibition.photosCollection?.items.findIndex(
        (p: ExhibitionPhoto) => p.slug === allParams.photoSlug
    );
    const photo = exhibition.photosCollection?.items[photoIndex];

    if (!photo) {
        notFound();
    }

    return (
        <>
            <div className="mb-8 px-4 md:mx-auto md:max-w-220">
                <ExhibitionPhotoOrderSuccessMessage />
                <Markdown>{`__Photo__: ${photo.description}`}</Markdown>
            </div>
            <Container className="mb-14 max-w-300! md:mb-20">
                <div className={clsx('border-6 md:border-10', photoBorders[photoIndex])}>
                    <div className="border-10 border-white md:border-10">
                        <CarouselImage
                            {...photo}
                            base64={photo.photo?.base64}
                            fullSize={photo.photo?.fullSize}
                            isActive={true}
                            title={photo.title}
                        />
                    </div>
                </div>
                <div className="mt-4 flex gap-2 sm:justify-between md:flex-row">
                    {photo.buyUrl && (
                        <Button href={photo.buyUrl} theme="secondary">
                            Order print
                        </Button>
                    )}
                    <Button href={`/exhibitions/${exhibition.slug}`} theme="black">
                        Back to exhibition
                    </Button>
                </div>
            </Container>
            <Photos exhibition={exhibition} activePhotoId={photo.slug} />
            <div className="px-4 md:mx-auto md:max-w-220">
                <ExhibitionHeader exhibition={exhibition} />
            </div>
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
