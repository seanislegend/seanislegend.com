'use client';

import {useLayoutEffect, useRef, useState} from 'react';
import {MENU_ITEMS} from '../';
import SiteHeaderLink, {linkClasses} from '../Link';
import {NavigationMenu} from '@base-ui-components/react/navigation-menu';
import {usePathname} from 'next/navigation';
import Button from '@/components/Button';
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
    const portal = useRef<HTMLElement>(null);
    const [isPortalReady, setIsPortalReady] = useState(false);

    useLayoutEffect(() => {
        if (!portal.current) {
            const $portal = document.querySelector<HTMLElement>('[data-layout-main="default"]');
            if ($portal) {
                portal.current = $portal;
                setIsPortalReady(true);
            }
        }
    }, []);

    return (
        <>
            <NavigationMenu.Root closeDelay={300} data-testid="main-navigation" key={pathname}>
                <NavigationMenu.List className="relative z-30 hidden flex-row items-center gap-1 lg:flex">
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className={`${linkClasses} group`}>
                            <span className="inline-flex items-center gap-1.5">
<<<<<<< HEAD
<<<<<<< HEAD
                                <span className="text-theme-text">Collections</span>
                                <CaretDownIcon className="h-3 w-3 fill-current transition-transform duration-300 ease-in-out group-data-popup-open:rotate-180" />
=======
                                <span>Collections</span>
                                <CaretDownIcon className="h-3 w-3 fill-current transition-transform duration-200 ease-in-out group-data-popup-open:rotate-180" />
>>>>>>> da5321b (chore: Tailwind lint)
=======
                                <span className="text-theme-text">Collections</span>
                                <CaretDownIcon className="h-3 w-3 fill-current transition-transform duration-300 ease-in-out group-data-popup-open:rotate-180" />
>>>>>>> fb8221c (feat: Use consistent transitions and timings)
                            </span>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="h-full w-screen px-4 transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] data-ending-style:opacity-0 data-ending-style:data-activation-direction=left:translate-x-[50%] data-ending-style:data-activation-direction=right:translate-x-[-50%] data-starting-style:opacity-0 data-starting-style:data-activation-direction=left:translate-x-[-50%] data-starting-style:data-activation-direction=right:translate-x-[50%] lg:px-8">
                            <div className="grid grid-cols-6 gap-2" data-testid="collections-grid">
                                {links.map(link => (
                                    <Collection key={link.url} link={link} />
                                ))}
                            </div>
                            <div className="my-4 flex items-center justify-between sm:flex-row">
                                <span className="hidden lg:block">
                                    <AllTagsList items={tags} />
                                </span>
                                <span>
                                    <Button className="mr-[2px]" href="/collections">
                                        View all collections
                                    </Button>
                                </span>
                            </div>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    {MENU_ITEMS.map(item => (
                        <NavigationMenu.Item
                            key={item.href}
                            render={() => (
                                <SiteHeaderLink href={item.href}>{item.label}</SiteHeaderLink>
                            )}
                        />
                    ))}
                </NavigationMenu.List>
                {isPortalReady && (
                    <NavigationMenu.Portal container={portal.current}>
<<<<<<< HEAD
<<<<<<< HEAD
                        <NavigationMenu.Backdrop className="bg-overlay-bg fixed top-0 left-0 z-40 hidden h-screen w-screen duration-500 data-open:block data-open:duration-300" />
=======
                        <NavigationMenu.Backdrop className="bg-overlay-bg fixed top-0 left-0 z-40 hidden h-screen w-screen duration-500 data-open:block data-open:duration-200" />
>>>>>>> da5321b (chore: Tailwind lint)
=======
                        <NavigationMenu.Backdrop className="bg-overlay-bg fixed top-0 left-0 z-40 hidden h-screen w-screen duration-500 data-open:block data-open:duration-300" />
>>>>>>> fb8221c (feat: Use consistent transitions and timings)
                        <NavigationMenu.Positioner
                            className="left-0! z-50"
                            collisionAvoidance={{side: 'none'}}
                            positionMethod="fixed"
                            style={{
                                ['--duration' as string]: '0.35s',
                                ['--easing' as string]: 'cubic-bezier(0.22, 1, 0.36, 1)'
                            }}
                        >
                            <NavigationMenu.Popup className="data-ending-style:easing-[ease] relative z-50 mt-1 h-[var(--popup-height)] w-[var(--popup-width)] origin-[var(--transform-origin)] transition-[opacity,transform,width,height,translate] duration-[var(--duration)] ease-[var(--easing)] data-ending-style:-translate-y-2 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:-translate-y-2 data-starting-style:opacity-0">
                                <NavigationMenu.Viewport className="bg-theme-bg h-full w-full overflow-hidden pt-1" />
                            </NavigationMenu.Popup>
                        </NavigationMenu.Positioner>
                    </NavigationMenu.Portal>
                )}
            </NavigationMenu.Root>
            <SiteMenuMobile links={links} />
        </>
    );
};

export default SiteHeaderDynamicMenuNavigation;
