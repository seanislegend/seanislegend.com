'use client';

import {InstagramIcon, TwitterIcon} from '@/components/Icon';
import useAnalytics from '@/hooks/useAnalytics';

const LINKS = [
    {label: 'Instagram', url: 'https://www.instagram.com/seanislegend/'},
    {label: 'Twitter', url: 'https://twitter.com/seanislegend'}
];
const ICONS: {[key: string]: any} = {
    instagram: InstagramIcon,
    twitter: TwitterIcon
};

const SiteMenuSocialLinks: React.FC = () => {
    const {trackEvent} = useAnalytics();

    const handleSocialLinkClick = (site: string) => {
        trackEvent('Social link clicked', {site});
    };

    return (
        <div className="flex items-center space-x-4 md:justify-center">
            {LINKS.map(link => {
                const Icon = ICONS[link.label.toLowerCase()];

                return (
                    <a
                        key={link.url}
                        aria-label={link.label}
                        href={link.url}
                        className="font-serif text-xl tracking-tight text-black duration-200 ease-out hover:opacity-60 focus:outline-dotted focus:outline-2 focus:outline-offset-2 focus:outline-black dark:text-white dark:focus:outline-white md:text-xl lg:text-2xl"
                        rel="noreferrer"
                        onClick={() => handleSocialLinkClick(link.label)}
                        target="_blank"
                    >
                        <Icon className="h-5 w-5 text-current" />
                    </a>
                );
            })}
        </div>
    );
};

export default SiteMenuSocialLinks;
