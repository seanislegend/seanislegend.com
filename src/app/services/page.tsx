import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import Container from '@/components/UI/Container';
import {Heading2} from '@/components/UI/Headings';
import TextLink from '@/components/UI/TextLink';
import TitleTextGrid from '@/components/UI/TitleTextGrid';
import config from '@/utils/config';
import {fetchEditorialPage} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';

const ServicesPage = async () => {
    const page = await fetchEditorialPage('services');

    return (
        <DefaultLayout theme="light">
            <PageHeader description={page.content} title={page.pageTitle} />
            <Container className="space-y-8 [&:has(.grid-item:hover)_.grid-item:not(:hover)]:opacity-50">
                {page.contentSectionsCollection.items.map((section: ContentSection) => (
                    <TitleTextGrid
                        key={section.title}
                        heading={<Heading2>{section.title}</Heading2>}
                    >
                        {section.content}
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
