import Logo from '@/components/Logo';
import {MENU_ITEMS} from '@/components/SiteMenu';
import SiteHeaderLink from '@/components/SiteMenu/Link';
import SocialLinks from '@/components/SiteMenu/SocialLinks';

const SiteFooter: React.FC = () => (
    <footer className="mx-4 mt-8 flex items-center justify-between gap-4 border-t-2 border-sean-beige-100 py-4 md:mx-8">
        <Logo size="sm" />
        <nav className="flex flex-row justify-end gap-0.5">
            {MENU_ITEMS.map(link => (
                <SiteHeaderLink href={link.href} key={link.href}>
                    {link.label}
                </SiteHeaderLink>
            ))}
            <span className="pr-4" />
            <SocialLinks />
        </nav>
    </footer>
);

export default SiteFooter;
