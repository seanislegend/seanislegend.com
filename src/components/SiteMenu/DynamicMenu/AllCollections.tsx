import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Button from '@/components/Button';
import TextLink from '@/components/UI/TextLink';

interface Props {
    links: Link[];
}

const SiteHeaderAllCollections: React.FC<Props> = ({links}) => (
    <>
        <h3 className="mb-4 font-serif text-2xl">Other collections</h3>
        <ul className="mb-4 list-outside space-y-1.5">
            {links.map(link => (
                <li key={link.url} className="flex">
                    <NavigationMenu.Item asChild>
                        <TextLink className="group flex-grow hover:no-underline" href={link.url}>
                            <span className="translate-y-[2px] pr-2 leading-none text-[var(--dimmed-text)] transition duration-100 group-hover:text-[var(--link-text)] group-data-[active=true]:text-[var(--link-text)]">
                                &mdash;
                            </span>
                            <span className="group-data-[active=true]:underline">{link.title}</span>
                        </TextLink>
                    </NavigationMenu.Item>
                </li>
            ))}
        </ul>
        <NavigationMenu.Item asChild>
            <Button href="/collections">View all collections</Button>
        </NavigationMenu.Item>
    </>
);

export default SiteHeaderAllCollections;
