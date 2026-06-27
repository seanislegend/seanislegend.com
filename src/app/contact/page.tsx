import type {Metadata} from 'next';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import Container from '@/components/UI/Container';
import config from '@/utils/config';
import {fetchEditorialPage} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';
import ContactForm from './Form';

const ContactPage = async () => {
    const page = await fetchEditorialPage('contact');

    return (
        <DefaultLayout theme="dark">
            <PageHeader title={page.pageTitle} description={page.content}>
                <ContactForm />
            </PageHeader>
        </DefaultLayout>
    );
};

export const generateMetadata = async (): Promise<Metadata | null> => {
    const page = await fetchEditorialPage('contact');
    return {...config.seo, ...getEditorialSeo(page)};
};

export default ContactPage;
