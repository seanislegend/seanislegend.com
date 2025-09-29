import type {Metadata} from 'next';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import Container from '@/components/UI/Container';
import config from '@/utils/config';
import {fetchEditorialPage} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';
import ContentSections from '@/app/services/ContentSection';

const ServicesPage = async () => {
    const page = await fetchEditorialPage('services');

    return (
        <DefaultLayout theme="light">
            <PageHeader description={page.content} title={page.pageTitle} />
            <Container className="space-y-16 lg:space-y-24">
                <ContentSections sections={page.contentSectionsCollection.items} />
            </Container>
        </DefaultLayout>
    );
};

export const generateMetadata = async (): Promise<Metadata | null> => {
    const page = await fetchEditorialPage('services');
    return {...config.seo, ...getEditorialSeo(page)};
};

export default ServicesPage;
