import Logo from '@/components/Logo';
import SiteHeaderMenu from '@/components/SiteMenu';
import SocialLinks from '@/components/SiteMenu/SocialLinks';

const SiteFooter: React.FC = () => (
    <footer className="border-accent mx-auto mt-8 flex w-full max-w-[110rem] flex-col items-center gap-4 border-t-2 py-4 sm:flex-row sm:justify-between print:border-none">
        <div className="flex items-center gap-4 print:hidden!">
            <Logo className="text-sm" />
            <SocialLinks />
        </div>
        <SiteHeaderMenu />
    </footer>
);

export default SiteFooter;
