import EditorialLinkList, {type EditorialLinkItem} from '@/components/EditorialLinkList';
import {fetchCategories} from '@/utils/contentful';

interface Props {
    title: string;
}

const CategoriesList = async ({title}: Props) => {
    const categories = await fetchCategories();

    const items: EditorialLinkItem[] = categories.map(category => ({
        description: category.description,
        href: `/${category.slug}`,
        key: category.slug,
        previewPhoto: category.previewPhoto,
        title: category.title
    }));

    return <EditorialLinkList title={title} items={items} />;
};

export default CategoriesList;
