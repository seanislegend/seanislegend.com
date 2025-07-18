'use client';

import {MENU_ITEMS} from '../';
import SiteHeaderLink, {linkClasses} from '../Link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {Link} from 'next-view-transitions';
import {usePathname} from 'next/navigation';
import Button from '@/components/Button';
import {RightArrowIcon} from '@/components/Icon';
import {CaretDownIcon} from '@/components/Icon/CaretDown';
import AllTagsList from '@/components/SiteMenu/AllTagsList';
import Collection from '@/components/SiteMenu/DynamicMenu/Collection';
import SiteMenuMobile from '@/components/SiteMenu/Mobile';

interface Props {
    links: Link[];
    tags: Tag[];
}

const SiteHeaderDynamicMenuNavigation: React.FC<Props> = ({links, tags}) => {
    const pathname = usePathname();

    return (
        <>
            <NavigationMenu.Root data-testid="main-navigation" delayDuration={0} key={pathname}>
                <NavigationMenu.List className="-mr-2 hidden flex-row items-center gap-1 lg:flex">
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger
                            className={`${linkClasses} group peer relative z-30`}
                        >
                            <span className="inline-flex items-center gap-1.5">
                                <span>Collections</span>
                                <CaretDownIcon className="h-3 w-3 fill-current transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
                            </span>
                            <NavigationMenu.Content className="data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out absolute -top-4 left-0 w-screen pt-8 data-[motion^=to-]:delay-200">
                                <div className="mt-5 w-full p-4 sm:p-8">
                                    <div
                                        className="grid grid-cols-6 gap-2"
                                        data-testid="collections-grid"
                                    >
                                        {links.map(link => (
                                            <Collection key={link.url} link={link} />
                                        ))}
                                    </div>
                                </div>

                                <div className="-mt-4 mr-2 flex items-center justify-between px-4 pb-4 sm:flex-row md:px-8">
                                    <span className="hidden lg:block">
                                        <AllTagsList items={tags} />
                                    </span>
                                    <span>
                                        <Button href="/collections">View all collections</Button>
                                    </span>
                                </div>
                            </NavigationMenu.Content>
                        </NavigationMenu.Trigger>
                        <div className="animate-in fade-in bg-overlay-bg fixed top-[4.75rem] left-0 hidden h-screen w-screen duration-500 peer-data-[state=open]:block peer-data-[state=open]:duration-200" />
                    </NavigationMenu.Item>
                    {MENU_ITEMS.map(item => (
                        <NavigationMenu.Item key={item.href} asChild>
                            <SiteHeaderLink href={item.href}>{item.label}</SiteHeaderLink>
                        </NavigationMenu.Item>
                    ))}
                    <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-20 flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                        <div className="bg-secondary-button-bg-hover relative top-[-5px] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px]" />
                    </NavigationMenu.Indicator>
                </NavigationMenu.List>
                <div className="fixed top-0 left-0 flex w-screen" style={{perspective: '1000px'}}>
                    <NavigationMenu.Viewport className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-4 data-[state=open]:slide-in-from-top-8 border-accent bg-theme-bg relative left-0 z-20 h-[var(--radix-navigation-menu-viewport-height)] w-screen transform-cpu overflow-hidden border-b-2 duration-700 data-[state=closed]:duration-300" />
                </div>
            </NavigationMenu.Root>
            <SiteMenuMobile links={links} />
        </>
    );
};

export default SiteHeaderDynamicMenuNavigation;
