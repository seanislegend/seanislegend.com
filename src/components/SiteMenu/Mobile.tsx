import MobileClient from './MobileClient';
import {fetchCollectionNavigation} from '@/utils/contentful';

// https://beta.nextjs.org/docs/data-fetching/fetching#asyncawait-in-server-components
// @ts-expect-error Server Component
const SiteMenuMobile: React.FC = async () => {
    const links = await fetchCollectionNavigation();

    return <MobileClient links={links} />;
};

export default SiteMenuMobile;
