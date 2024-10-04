import Logo from '@/components/Logo';
import {MENU_ITEMS} from '@/components/SiteMenu';
import SiteHeaderLink from '@/components/SiteMenu/Link';
import SocialLinks from '@/components/SiteMenu/SocialLinks';

const SiteFooter: React.FC = () => (
    <footer className="mx-4 mt-8 flex flex-col items-center gap-4 border-t-2 border-sean-beige-100 py-4 sm:flex-row sm:justify-between md:mx-8">
        <div className="flex items-center gap-4">
            <Logo size="sm" />
            <SocialLinks />
        </div>
        <nav className="flex flex-row gap-0.5 sm:justify-end">
            {MENU_ITEMS.map(link => (
                <SiteHeaderLink href={link.href} key={link.href}>
                    {link.label}
                </SiteHeaderLink>
            ))}
        </nav>
    </footer>
);

export default SiteFooter;
