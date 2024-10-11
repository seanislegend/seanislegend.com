import Logo from '@/components/Logo';
import SiteHeaderMenu from '@/components/SiteMenu';
import SocialLinks from '@/components/SiteMenu/SocialLinks';

const SiteFooter: React.FC = () => (
    <footer className="mt-8 flex flex-col items-center gap-4 border-t-2 border-[var(--accent)] px-4 py-4 sm:flex-row sm:justify-between md:px-8 print:border-none">
        <div className="flex items-center gap-4 print:!hidden">
            <Logo />
            <SocialLinks />
        </div>
        <SiteHeaderMenu />
    </footer>
);

export default SiteFooter;
