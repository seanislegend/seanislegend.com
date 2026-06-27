import type {Metadata} from 'next';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import config from '@/utils/config';
import {fetchEditorialPage} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const PrivacyPage = async () => {
    const page = await fetchEditorialPage('privacy');

    return (
        <DefaultLayout theme="dark">
            <PageHeader description={page.content} title={page.pageTitle} />
        </DefaultLayout>
    );
};

export const generateMetadata = async (): Promise<Metadata | null> => {
    const page = await fetchEditorialPage('privacy');
    return {...config.seo, ...getEditorialSeo(page)};
};

export default PrivacyPage;
