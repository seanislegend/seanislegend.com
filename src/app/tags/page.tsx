import {notFound} from 'next/navigation';
import DefaultLayout from '@/components/Layouts/Default';
import LinksList from '@/components/LinksList';
import PageHeader from '@/components/PageHeader';
import {fetchAllTags} from '@/utils/contentful';

const TagListPage = async () => {
    const tags = await fetchAllTags();
    if (!tags) return notFound();

    const links = tags.map((tag: Tag) => ({
        text: tag.description,
        title: tag.name,
        url: `/tags/${tag.slug}`
    }));

    return (
        <DefaultLayout theme="light">
            <PageHeader pageTitle="All tags" title="All tags" />
            <LinksList links={links} />
            <div className="h-10 lg:h-20" />
        </DefaultLayout>
    );
};

export default TagListPage;
