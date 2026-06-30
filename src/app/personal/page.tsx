import type {Metadata} from 'next';
import CollectionsList from '@/components/CollectionsList';
import config from '@/utils/config';
import {getEditorialSeo} from '@/utils/helpers';

const PersonalPage = () => <CollectionsList title="Personal" workType="personal" />;

export const generateMetadata = async (): Promise<Metadata | null> => {
    return {
        ...config.seo,
        ...getEditorialSeo({slug: 'personal', title: 'Personal photography'})
    };
};

export default PersonalPage;
