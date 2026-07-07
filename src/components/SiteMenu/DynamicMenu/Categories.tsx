import {NavigationMenu} from '@base-ui/react/navigation-menu';
import {CaretDownIcon} from '@/components/Icon/CaretDown';
import {ghostLinkClasses, linkClasses} from '@/components/SiteMenu/Link';
import TextLink from '@/components/UI/TextLink';

interface Props {
    tags: Tag[];
}

const DynamicMenuCategories: React.FC<Props> = ({tags}) => {
    if (!tags.length) return null;

    return (
        <NavigationMenu.Item>
            <NavigationMenu.Trigger className={`${linkClasses} ${ghostLinkClasses} group`}>
                <span className="inline-flex items-center gap-1.5">
                    <span className="text-theme-text">Categories</span>
                    <CaretDownIcon className="h-3 w-3 fill-current transition-transform duration-300 ease-in-out group-data-popup-open:rotate-180" />
                </span>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="data-ending-style:data-activation-direction=left:translate-x-[50%] data-ending-style:data-activation-direction=right:translate-x-[-50%] data-starting-style:data-activation-direction=left:translate-x-[-50%] data-starting-style:data-activation-direction=right:translate-x-[50%] animate-menu-card-in h-full w-[250px] list-none px-4 pt-3 pb-7 transition-[opacity,transform,translate] duration-(--duration) ease-(--easing) data-ending-style:opacity-0">
                <ul className="grid grid-cols-1 gap-y-2.5" data-testid="categories-grid">
                    {tags.map(tag => (
                        <li key={tag.slug} className="flex">
                            <NavigationMenu.Item
                                render={() => (
                                    <TextLink
                                        className="group grow no-underline! hover:underline! active:underline!"
                                        href={`/${tag.slug}-photography`}
                                    >
                                        {tag.name} photography
                                    </TextLink>
                                )}
                            />
                        </li>
                    ))}
                </ul>
            </NavigationMenu.Content>
        </NavigationMenu.Item>
    );
};

export default DynamicMenuCategories;
