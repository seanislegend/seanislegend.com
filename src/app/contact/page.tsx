import {Suspense} from 'react';
import type {Metadata} from 'next';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import Container from '@/components/UI/Container';
import config from '@/utils/config';
import {fetchEditorialPage} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';
import ContactForm from './Form';

interface Props {
    searchParams: Promise<{
        service?: string | string[];
    }>;
}

const getInitialService = (service: string | string[] | undefined) => {
    const value = Array.isArray(service) ? service[0] : service;
    return value?.trim().slice(0, 120) || '';
};

const ContactFormFromSearchParams = async ({searchParams}: Props) => {
    const initialService = getInitialService((await searchParams).service);

    return <ContactForm initialService={initialService} />;
};

const ContactPage = async ({searchParams}: Props) => {
    const page = await fetchEditorialPage('contact');

    return (
        <DefaultLayout theme="dark">
            <PageHeader title={page.pageTitle} description={page.content}>
                <Suspense fallback={<ContactForm />}>
                    <ContactFormFromSearchParams searchParams={searchParams} />
                </Suspense>
            </PageHeader>
        </DefaultLayout>
    );
};

export const generateMetadata = async (): Promise<Metadata | null> => {
    const page = await fetchEditorialPage('contact');
    return {...config.seo, ...getEditorialSeo(page)};
};

export default ContactPage;
