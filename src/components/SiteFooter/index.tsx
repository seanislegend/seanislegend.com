import Logo from '@/components/Logo';
import SiteHeaderMenu from '@/components/SiteMenu';
import SocialLinks from '@/components/SiteMenu/SocialLinks';

const SiteFooter: React.FC = () => (
    <footer
        className="border-accent mx-auto mt-8 flex w-full max-w-440 flex-col items-center gap-4 border-t-2 px-4 py-4 sm:flex-row sm:justify-between md:px-8 print:border-none"
        data-testid="site-footer"
    >
        <div className="flex items-center gap-4 print:hidden!">
            <Logo className="text-sm" />
            <SocialLinks />
        </div>
        <SiteHeaderMenu />
    </footer>
);

export default SiteFooter;
