import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Container from '@/components/UI/Container';
import config from '@/utils/config';
import {fetchExhibition} from '@/utils/contentful';
import {getBreadcrumbJsonLd, jsonLdScriptProps} from '@/utils/helpers';
import ExhibitionHeader from './header';
import Photos from './photos';

const ExhibitionPage: React.FC = async () => {
    const exhibitionSlug = 'a-beers-place-the-kings-arms';
    const exhibition = await fetchExhibition(exhibitionSlug);

    if (!exhibition) {
        notFound();
    }

    const breadcrumbJsonLd = getBreadcrumbJsonLd([
        {name: exhibition.title, path: `/exhibitions/${exhibitionSlug}`}
    ]);

    return (
        <>
            <script {...jsonLdScriptProps(breadcrumbJsonLd)} />
            <Container className="mb-10 md:mb-20">
                <ExhibitionHeader exhibition={exhibition} />
            </Container>
            <Photos exhibition={exhibition} />
        </>
    );
};

export const generateMetadata = async (): Promise<Metadata | null> => {
    const exhibitionSlug = 'a-beers-place-the-kings-arms';
    const exhibition = await fetchExhibition(exhibitionSlug);

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
            canonical: `${config.seo.alternates.canonical}/exhibitions/${exhibitionSlug}`
        },
        description,
        openGraph: {description, images: [openGraphImage]},
        title,
        twitter: {card: 'summary_large_image', description, title}
    };
};

export default ExhibitionPage;
