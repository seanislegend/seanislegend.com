import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import Theme from '@/components/UI/Theme';

interface Props extends React.ComponentProps<'div'> {
    theme: ThemeType;
}

const DefaultLayout: React.FC<Props> = ({children, theme, ...props}) => (
    <Theme
        className="default-layout flex grow flex-col transition-colors duration-500! sm:min-h-full"
        theme={theme}
        {...props}
    >
        <SiteHeader />
        <main className="grow" data-testid="page-content" data-layout-main="default">
            {children}
        </main>
        <SiteFooter />
    </Theme>
);

export default DefaultLayout;
