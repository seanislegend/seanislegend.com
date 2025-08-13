import {NavigationMenu} from '@base-ui-components/react/navigation-menu';
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
                    <NavigationMenu.Item
                        render={() => (
                            <TextLink className="group grow hover:no-underline" href={link.url}>
                                <span className="inline-block transition-transform duration-500 ease-in-out group-hover:translate-x-1 group-hover:duration-100 group-data-[active=true]:underline">
                                    {link.title}
                                </span>
                            </TextLink>
                        )}
                    />
                </li>
            ))}
        </ul>
        <NavigationMenu.Item render={() => <Button href="/collections">View all</Button>} />
    </>
);

export default SiteHeaderAllCollections;
