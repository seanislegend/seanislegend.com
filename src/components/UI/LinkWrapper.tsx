import {Link} from 'next-view-transitions';
import {getExternalUrl, isExternalUrl} from '@/utils/helpers';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    href: string;
}

const LinkWrapper: React.FC<Props> = ({children, href, ...props}) => {
    if (isExternalUrl(href)) {
        return (
            <a href={getExternalUrl(href)} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export default LinkWrapper;
