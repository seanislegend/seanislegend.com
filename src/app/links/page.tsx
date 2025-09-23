import type {Metadata} from 'next';
import DefaultLayout from '@/components/Layouts/Default';
import LinksList from '@/components/LinksList';
import PageHeader from '@/components/PageHeader';
import config from '@/utils/config';
import {fetchLinksPage} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';

const LinksPage = async () => {
    const page = await fetchLinksPage();

    return (
        <DefaultLayout theme="dark">
            <PageHeader title="Links" />
            <LinksList links={page.linksCollection?.items?.reverse()} />
            <div className="h-10 lg:h-20" />
        </DefaultLayout>
    );
};

export const generateMetadata = async (): Promise<Metadata | null> => {
    return {...config.seo, ...getEditorialSeo({slug: 'links', title: 'Links'})};
};

export default LinksPage;
