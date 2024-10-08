import SiteHeaderLink from './Link';

export const MENU_ITEMS = [
    {href: '/notes', label: 'Notes'},
    {href: '/about', label: 'About'},
    {href: '/contact', label: 'Contact'},
    {href: '/links', label: 'Links'}
];

const SiteHeaderMenu: React.FC = () => (
    <nav className="row hidden items-center gap-1 lg:flex">
        <SiteHeaderLink href="/collections">Collections</SiteHeaderLink>
        {MENU_ITEMS.map(item => (
            <SiteHeaderLink key={item.href} href={item.href}>
                {item.label}
            </SiteHeaderLink>
        ))}
    </nav>
);

export default SiteHeaderMenu;
