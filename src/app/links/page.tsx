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
            <PageHeader title="Links">
                <LinksList links={page.linksCollection?.items} />
            </PageHeader>
        </DefaultLayout>
    );
};

export const generateMetadata = async () => {
    return {...config.seo, ...getEditorialSeo({slug: 'links', title: 'Links'})};
};

export const revalidate = 60;

export default LinksPage;
