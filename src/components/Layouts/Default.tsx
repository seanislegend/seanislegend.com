import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import Theme from '@/components/UI/Theme';

interface Props {
    theme: ThemeType;
}

const DefaultLayout: React.FC<React.PropsWithChildren<Props>> = ({children, theme}) => (
    <Theme className="flex grow flex-col sm:min-h-full" theme={theme}>
        <SiteHeader />
        <main className="grow">{children}</main>
        <SiteFooter />
    </Theme>
);

export default DefaultLayout;
