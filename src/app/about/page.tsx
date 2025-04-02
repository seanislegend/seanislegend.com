import Image from 'next/image';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import PublishedWorkLogos from '@/components/PublishedWorkLogos';
import Container from '@/components/UI/Container';
import config from '@/utils/config';
import {fetchEditorialPage} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';

const AboutPage = async () => {
    const page = await fetchEditorialPage('about');

    return (
        <DefaultLayout theme="dark">
            <PageHeader
                description={page.content}
                title={page.pageTitle}
                titleAside={
                    <div className="mt-8 grid grid-cols-12 gap-4">
                        <div className="col-span-6 hidden md:block" />
                        <div className="col-span-6 flex justify-end">
                            <Image
                                alt=""
                                className="max-w-full overflow-hidden rounded-xs sm:max-w-[260px] lg:mt-10"
                                height={page.photo.height}
                                placeholder="empty"
                                priority={false}
                                quality={90}
                                src={page.photo.url}
                                width={page.photo.width}
                            />
                        </div>
                    </div>
                }
            >
                <div className="h-12 lg:h-20" />
                <PublishedWorkLogos />
            </PageHeader>
        </DefaultLayout>
    );
};

export const generateMetadata = async () => {
    const page = await fetchEditorialPage('about');
    return {...config.seo, ...getEditorialSeo(page)};
};

export default AboutPage;
