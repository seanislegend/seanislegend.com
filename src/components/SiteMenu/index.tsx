import SiteMenuLink from '@/components/SiteMenu/Link';
import {fetchCollectionNavigation} from '@/utils/contentful';

const SiteMenu: React.FC = async () => {
    const links = await fetchCollectionNavigation();

    return (
        <nav className="mb-16 space-y-0.5 py-8 sm:space-y-0 md:sticky md:top-16 md:py-0">
            {links?.map(link => (
                <SiteMenuLink key={link.url} {...link} />
            ))}
            <SiteMenuLink title="All collections" url="/collections" />
        </nav>
    );
};

export default SiteMenu;
