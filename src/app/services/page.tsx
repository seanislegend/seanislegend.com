import type {Metadata} from 'next';
import Button from '@/components/Button';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import Container from '@/components/UI/Container';
import {Heading2} from '@/components/UI/Headings';
import TitleTextGrid from '@/components/UI/TitleTextGrid';
import config from '@/utils/config';
import {fetchEditorialPage} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';
import ContentSections from '@/app/services/ContentSection';

const ServicesPage = async () => {
    const page = await fetchEditorialPage('services');

    const sections = page.contentSectionsCollection.items.map((section: ContentSection) => ({
        ...section,
        id: `${section.id}-photography`
    }));

    return (
        <DefaultLayout theme="light">
            <PageHeader
                description={page.content}
                title={page.pageTitle}
                pageTitle={page.pageTitle}
            />
            <Container className="space-y-16 lg:space-y-24">
                <ContentSections sections={sections} />
                <TitleTextGrid
                    heading={<Heading2>Need photography for your brewery, pub, or event?</Heading2>}
                    className="border-accent border-t pt-8"
                >
                    <div className="max-w-2xl space-y-6 text-[15px] leading-normal tracking-[.0185rem] text-pretty md:text-base 2xl:max-w-5xl 2xl:text-[17px]">
                        <p>
                            Tell me what you are making, where it is happening, and what the images
                            need to do. A short brief is enough to start; I will come back with
                            availability, next steps, and a clear route to a quote.
                        </p>
                        <Button href="/contact?service=Photography hire">Discuss a shoot</Button>
                    </div>
                </TitleTextGrid>
            </Container>
        </DefaultLayout>
    );
};

export const generateMetadata = async (): Promise<Metadata | null> => {
    const page = await fetchEditorialPage('services');
    return {...config.seo, ...getEditorialSeo(page)};
};

export default ServicesPage;
