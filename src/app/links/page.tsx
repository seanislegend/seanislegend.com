import LinksList from '@/components/LinksList';
import PageHeader from '@/components/PageHeader';
import Container from '@/components/UI/Container';
import config from '@/utils/config';
import {fetchLinksPage} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';

const LinksPage = async () => {
    const page = await fetchLinksPage();

    return (
        <>
            <PageHeader title="Links" />
            <Container>
                <LinksList links={page.linksCollection?.items} />
            </Container>
        </>
    );
};

export const generateMetadata = async () => {
    return {...config.seo, ...getEditorialSeo({slug: 'links', title: 'Links'})};
};

export const revalidate = 60;

export default LinksPage;
