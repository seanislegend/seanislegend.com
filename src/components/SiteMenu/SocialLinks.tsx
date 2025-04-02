import {BlueskyIcon, InstagramIcon, ThreadsIcon, XIcon} from '@/components/Icon';

const LINKS = [
    {label: 'Instagram', url: 'https://www.instagram.com/seanislegend/'},
    {label: 'X', url: 'https://x.com/seanislegend'},
    {label: 'Threads', url: 'https://www.threads.net/@seanislegend'},
    {label: 'Bluesky', url: 'https://bsky.app/profile/seanislegend.com'}
];
const ICONS: {[key: string]: any} = {
    instagram: InstagramIcon,
    threads: ThreadsIcon,
    x: XIcon,
    bluesky: BlueskyIcon
};

const SiteMenuSocialLinks: React.FC = () => (
    <div className="flex items-center gap-1 md:justify-center">
        {LINKS.map(link => {
            const Icon = ICONS[link.label.toLowerCase()];

            return (
                <a
                    key={link.url}
                    aria-label={link.label}
                    href={link.url}
                    className="text-secondary-button-text hover:bg-secondary-button-bg-hover focus:outline-accent overflow-hidden rounded-xs p-1.5 text-xl tracking-tight duration-200 ease-out focus:outline-2 focus:outline-offset-2 focus:outline-dotted md:text-xl lg:text-2xl"
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
