import {SHOP_URL} from '@/utils/config';
import SiteHeaderLink from './Link';

export const MENU_ITEMS = [
    {href: '/exhibitions', label: 'Exhibitions'},
    {href: '/about', label: 'About'},
    {href: '/services', label: 'Services'},
    {href: '/contact', label: 'Contact'},
    {href: SHOP_URL, label: 'Shop', theme: 'primary'}
];

export const HEADER_MENU_ITEMS = MENU_ITEMS.filter(item => item.href !== '/exhibitions');

interface Props {
    items?: typeof MENU_ITEMS;
}

const SiteHeaderMenu: React.FC<Props> = ({items = HEADER_MENU_ITEMS}) => (
    <nav
        className="row -mr-2 hidden items-center gap-1 xl:flex"
        data-testid="main-navigation-static"
    >
        <SiteHeaderLink href="/commercial">Commercial</SiteHeaderLink>
        <SiteHeaderLink href="/personal">Personal</SiteHeaderLink>
        {items.map(item => (
            <SiteHeaderLink key={item.href} href={item.href} theme={item.theme}>
                {item.label}
            </SiteHeaderLink>
        ))}
    </nav>
);

export default SiteHeaderMenu;
