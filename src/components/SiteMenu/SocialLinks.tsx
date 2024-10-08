import {InstagramIcon, TwitterIcon} from '@/components/Icon';

const LINKS = [
    {label: 'Instagram', url: 'https://www.instagram.com/seanislegend/'},
    {label: 'Twitter', url: 'https://twitter.com/seanislegend'}
];
const ICONS: {[key: string]: any} = {
    instagram: InstagramIcon,
    twitter: TwitterIcon
};

const SiteMenuSocialLinks: React.FC = () => (
    <div className="flex items-center gap-2 md:justify-center">
        {LINKS.map(link => {
            const Icon = ICONS[link.label.toLowerCase()];

            return (
                <a
                    key={link.url}
                    aria-label={link.label}
                    href={link.url}
                    className="bg-[var(--secondary-button-bg)] p-1.5 text-xl tracking-tight text-[var(--secondary-button-text)] duration-200 ease-out hover:bg-[var(--secondary-button-bg-hover)] focus:outline-dotted focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent)] md:text-xl lg:text-2xl dark:text-[var(--dark-secondary-button-text)] dark:focus:outline-[var(--dark-accent)]"
                    rel="noreferrer"
                    target="_blank"
                >
                    <Icon className="size-4 text-current" />
                </a>
            );
        })}
    </div>
);

export default SiteMenuSocialLinks;
