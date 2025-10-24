import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader/Header';
import Theme from '@/components/UI/Theme';

const GreenHopLayout: React.FC<React.PropsWithChildren> = ({children}) => (
    <Theme
        className="default-layout flex grow flex-col transition-colors duration-500! sm:min-h-full"
        data-layout-type="editorial"
        theme="sky-blue"
    >
        <SiteHeader />
        <main className="grow" data-testid="page-content" data-layout-main="default">
            {children}
        </main>
        <SiteFooter />
    </Theme>
);

export default GreenHopLayout;
