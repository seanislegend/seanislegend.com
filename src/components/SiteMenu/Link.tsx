import Link, {type LinkProps} from 'next/link';

interface Props extends LinkProps {
    href: string;
}

export const linkClasses =
    'rounded px-2.5 py-1 font-medium relative z-30 inline-block transition duration-200 data-[state=open]:bg-sean-beige-100 ease-in-out hover:bg-sean-beige-100';

const SiteHeaderLink: React.FC<React.PropsWithChildren<Props>> = ({children, href, ...props}) => (
    <Link className={linkClasses} href={href} {...props}>
        {children}
    </Link>
);

export default SiteHeaderLink;
