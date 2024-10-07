import Image from 'next/image';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import Container from '@/components/UI/Container';
import config from '@/utils/config';
import {fetchEditorialPage} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';

const AboutPage = async () => {
    const page = await fetchEditorialPage('about');

    return (
        <DefaultLayout theme="dark">
            <Container>
                <PageHeader description={page.content} title={page.pageTitle}>
                    <Image
                        alt=""
                        className="max-w-full border-2 border-[var(--photo-border)] sm:max-w-[260px] lg:mt-10"
                        height={page.photo.height}
                        placeholder="empty"
                        priority={false}
                        quality={90}
                        src={page.photo.url}
                        width={page.photo.width}
                    />
                </PageHeader>
            </Container>
        </DefaultLayout>
    );
};

export const generateMetadata = async () => {
    const page = await fetchEditorialPage('about');
    return {...config.seo, ...getEditorialSeo(page)};
};

export const revalidate = 60;

export default AboutPage;
