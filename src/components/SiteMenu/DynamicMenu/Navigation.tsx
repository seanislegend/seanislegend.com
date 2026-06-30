'use client';

import {useLayoutEffect, useState} from 'react';
import {HEADER_MENU_ITEMS} from '../';
import SiteHeaderLink, {ghostLinkClasses, linkClasses} from '../Link';
import {NavigationMenu} from '@base-ui/react/navigation-menu';
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

const WORK_TYPES: {key: NonNullable<Link['workType']>; label: string}[] = [
    {key: 'commercial', label: 'Commercial'},
    {key: 'personal', label: 'Personal'}
];

const SiteHeaderDynamicMenuNavigation: React.FC<Props> = ({links, tags}) => {
    const pathname = usePathname();
    const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);

    useLayoutEffect(() => {
        const $portal = document.querySelector<HTMLElement>('[data-layout-main="default"]');
        if ($portal) setPortalContainer($portal);
    }, []);

    return (
        <>
            <NavigationMenu.Root closeDelay={300} data-testid="main-navigation" key={pathname}>
                <NavigationMenu.List className="relative z-30 hidden flex-row items-center gap-1 xl:flex">
                    {WORK_TYPES.map(({key, label}) => {
                        const workTypeLinks = links.filter(link => link.workType === key);
                        if (!workTypeLinks.length) return null;

                        return (
                            <NavigationMenu.Item key={key}>
                                <NavigationMenu.Trigger
                                    className={`${linkClasses} ${ghostLinkClasses} group`}
                                >
                                    <span className="inline-flex items-center gap-1.5">
                                        <span className="text-theme-text">{label}</span>
                                        <CaretDownIcon className="h-3 w-3 fill-current transition-transform duration-300 ease-in-out group-data-popup-open:rotate-180" />
                                    </span>
                                </NavigationMenu.Trigger>
                                <NavigationMenu.Content className="data-ending-style:data-activation-direction=left:translate-x-[50%] data-ending-style:data-activation-direction=right:translate-x-[-50%] data-starting-style:data-activation-direction=left:translate-x-[-50%] data-starting-style:data-activation-direction=right:translate-x-[50%] animate-menu-card-in h-full w-screen list-none px-4 pt-3 pb-7 transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] data-ending-style:opacity-0 xl:px-8">
                                    <div
                                        className="grid grid-cols-[repeat(auto-fill,minmax(12.5rem,1fr))] gap-2.5"
                                        data-testid={`${key}-collections-grid`}
                                    >
                                        {workTypeLinks.map(link => (
                                            <NavigationMenu.Item key={link.url}>
                                                <Collection link={link} />
                                            </NavigationMenu.Item>
                                        ))}
                                    </div>
                                    <div className="border-accent mt-7 flex items-start justify-between gap-8 border-t pt-5">
                                        <div className="hidden min-w-0 xl:block">
                                            <p className="text-dimmed-text text-sm">
                                                Browse by category
                                            </p>
                                            <AllTagsList items={tags} />
                                        </div>
                                        <Button className="mr-[2px] shrink-0" href={`/${key}`}>
                                            View all {label.toLowerCase()}
                                        </Button>
                                    </div>
                                </NavigationMenu.Content>
                            </NavigationMenu.Item>
                        );
                    })}
                    {HEADER_MENU_ITEMS.map(item => (
                        <NavigationMenu.Item
                            key={item.href}
                            render={() => (
                                <SiteHeaderLink href={item.href} theme={item.theme}>
                                    {item.label}
                                </SiteHeaderLink>
                            )}
                        />
                    ))}
                </NavigationMenu.List>
                {portalContainer && (
                    <NavigationMenu.Portal container={portalContainer}>
                        <NavigationMenu.Backdrop className="bg-overlay-bg fixed top-0 left-0 z-40 h-screen w-screen transition-opacity duration-300 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0" />
                        <NavigationMenu.Positioner
                            className="left-0! z-50"
                            collisionAvoidance={{side: 'none'}}
                            positionMethod="fixed"
                            style={
                                {
                                    '--duration': '0.26s',
                                    '--easing': 'cubic-bezier(0.22, 1, 0.36, 1)'
                                } as React.CSSProperties
                            }
                        >
                            <NavigationMenu.Popup className="data-ending-style:easing-[ease] relative z-50 mt-1 h-[var(--popup-height)] w-[var(--popup-width)] origin-[var(--transform-origin)] transition-[opacity,transform,width,height,translate,scale] duration-[var(--duration)] ease-[var(--easing)] data-ending-style:-translate-y-1 data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:-translate-y-1 data-starting-style:scale-[0.97] data-starting-style:opacity-0">
                                <NavigationMenu.Viewport className="bg-theme-bg h-full w-full overflow-hidden pt-1" />
                            </NavigationMenu.Popup>
                        </NavigationMenu.Positioner>
                    </NavigationMenu.Portal>
                )}
            </NavigationMenu.Root>
            <SiteMenuMobile key={`mobile-${pathname}`} links={links} />
        </>
    );
};

export default SiteHeaderDynamicMenuNavigation;
