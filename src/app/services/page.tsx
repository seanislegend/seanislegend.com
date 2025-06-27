import DefaultLayout from '@/components/Layouts/Default';
import Markdown from '@/components/Markdown';
import PageHeader from '@/components/PageHeader';
import Container from '@/components/UI/Container';
import {Heading2} from '@/components/UI/Headings';
import TextLink from '@/components/UI/TextLink';
import TitleTextGrid from '@/components/UI/TitleTextGrid';
import config from '@/utils/config';
import {fetchEditorialPage} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';
import PhotosGrid from '@/app/services/PhotosGrid';

const ServicesPage = async () => {
    const page = await fetchEditorialPage('services');

    return (
        <DefaultLayout theme="light">
            <PageHeader description={page.content} title={page.pageTitle} />
            <Container className="space-y-16 lg:space-y-24">
                {page.contentSectionsCollection.items.map((section: ContentSection) => (
                    <div key={section.title}>
                        {section.photoGrid?.photosCollection?.items && (
                            <PhotosGrid photos={section.photoGrid.photosCollection.items} />
                        )}
                        <TitleTextGrid
                            className="mt-8"
                            heading={<Heading2>{section.title}</Heading2>}
                        >
                            <Markdown className="max-w-2xl text-pretty 2xl:max-w-5xl">
                                {section.content}
                            </Markdown>
                            <p className="mt-4">
                                <TextLink
                                    href={`${section?.ctaUrl ?? '/contact'}?service=${section.title}`}
                                >
                                    {section?.ctaLabel ?? 'Enquire'}
                                    <span className="sr-only">
                                        about {section?.title?.toLowerCase()}
                                    </span>
                                </TextLink>
                            </p>
                        </TitleTextGrid>
                    </div>
                ))}
            </Container>
        </DefaultLayout>
    );
};

export const generateMetadata = async () => {
    const page = await fetchEditorialPage('services');
    return {...config.seo, ...getEditorialSeo(page)};
};

export default ServicesPage;
