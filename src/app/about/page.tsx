import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import config from '@/utils/config';
import {fetchEditorialPage} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';

const AboutPage = async () => {
    const page = await fetchEditorialPage('about');

    return (
        <>
            <PageHeader title={page.pageTitle} description={page.content} />
            <Image
                alt=""
                className="mt-4 max-w-full sm:max-w-[260px]"
                height={page.photo.height}
                placeholder="empty"
                priority={false}
                quality={90}
                src={page.photo.url}
                width={page.photo.width}
            />
        </>
    );
};

export const generateMetadata = async () => {
    const page = await fetchEditorialPage('about');
    return {...config.seo, ...getEditorialSeo(page)};
};

export const revalidate = 60;

export default AboutPage;
