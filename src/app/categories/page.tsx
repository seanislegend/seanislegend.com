import type {Metadata} from 'next';
import CategoriesList from '@/components/CategoriesList';
import config from '@/utils/config';
import {getEditorialSeo} from '@/utils/helpers';

const CategoriesPage = () => <CategoriesList title="Categories" />;

export const generateMetadata = async (): Promise<Metadata | null> => {
    return {
        ...config.seo,
        ...getEditorialSeo({slug: 'categories', title: 'Photography categories'})
    };
};

export default CategoriesPage;
