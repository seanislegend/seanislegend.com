import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Button from '@/components/Button';
import TextLink from '@/components/UI/TextLink';

interface Props {
    links: Link[];
}

const SiteHeaderAllCollections: React.FC<Props> = ({links}) => (
    <>
        <h3 className="mb-4 text-xl font-medium uppercase">Other collections</h3>
        <ul className="mb-4 list-outside space-y-1.5">
            {links.map(link => (
                <li key={link.url} className="flex">
                    <NavigationMenu.Item asChild>
                        <TextLink className="group flex-grow hover:no-underline" href={link.url}>
                            <span className="inline-block transition-transform duration-500 ease-in-out group-hover:translate-x-1 group-hover:duration-100 group-data-[active=true]:underline">
                                {link.title}
                            </span>
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
