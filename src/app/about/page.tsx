import type {Metadata} from 'next';
import Image from 'next/image';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';
import PublishedWorkLogos from '@/components/PublishedWorkLogos';
import config, {SITE_LINKS} from '@/utils/config';
import {fetchEditorialPage} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';

const getPersonJsonLd = (imageUrl?: string) => {
    const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        description: config.seo.description,
        name: 'Sean McEmerson',
        sameAs: SITE_LINKS.map(link => link.url),
        url: 'https://www.seanislegend.com'
    };
    if (imageUrl) schema.image = imageUrl;
    return schema;
};

const AboutPage = async () => {
    const page = await fetchEditorialPage('about');
    const personJsonLd = getPersonJsonLd(page.photo?.url);

    return (
        <DefaultLayout theme="dark">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(personJsonLd)}}
            />
            <PageHeader
                description={page.content}
                title={page.pageTitle}
                titleAside={
                    <div className="mt-8 mb-4 grid grid-cols-12 gap-4">
                        <div className="hidden sm:col-span-6 md:block" />
                        <div className="col-span-8 flex justify-end sm:col-span-6">
                            {page.photo && (
                                <Image
                                    alt="Portrait photo of Sean McEmerson"
                                    className="max-w-full overflow-hidden rounded-xs sm:max-w-[260px] lg:mt-10"
                                    data-testid="portrait-photo"
                                    height={page.photo.height}
                                    placeholder="empty"
                                    priority={false}
                                    quality={80}
                                    src={page.photo.url}
                                    width={page.photo.width}
                                />
                            )}
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

export const generateMetadata = async (): Promise<Metadata | null> => {
    const page = await fetchEditorialPage('about');
    return {...config.seo, ...getEditorialSeo(page)};
};

export default AboutPage;
