import Logo from '@/components/Logo';
import SiteHeaderMenu from '@/components/SiteMenu';
import SocialLinks from '@/components/SiteMenu/SocialLinks';

const SiteFooter: React.FC = () => (
    <footer className="mx-4 mt-8 flex flex-col items-center gap-4 border-t-2 border-[var(--accent)] py-4 sm:flex-row sm:justify-between md:mx-8">
        <div className="flex items-center gap-4">
            <Logo size="sm" />
            <SocialLinks />
        </div>
        <SiteHeaderMenu />
    </footer>
);

export default SiteFooter;
