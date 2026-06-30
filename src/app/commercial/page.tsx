import type {Metadata} from 'next';
import CollectionsList from '@/components/CollectionsList';
import config from '@/utils/config';
import {getEditorialSeo} from '@/utils/helpers';

const CommercialPage = () => <CollectionsList title="Commercial" workType="commercial" />;

export const generateMetadata = async (): Promise<Metadata | null> => {
    return {
        ...config.seo,
        ...getEditorialSeo({slug: 'commercial', title: 'Commercial photography'})
    };
};

export default CommercialPage;
