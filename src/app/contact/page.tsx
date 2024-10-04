import PageHeader from '@/components/PageHeader';
import Container from '@/components/UI/Container';
import config from '@/utils/config';
import {fetchEditorialPage} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';

const ContactPage = async () => {
    const page = await fetchEditorialPage('contact');

    return (
        <Container>
            <PageHeader title={page.pageTitle} description={page.content} />
        </Container>
    );
};

export const generateMetadata = async () => {
    const page = await fetchEditorialPage('contact');
    return {...config.seo, ...getEditorialSeo(page)};
};

export const revalidate = 60;

export default ContactPage;
