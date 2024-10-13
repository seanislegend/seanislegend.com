'use client';

import {MENU_ITEMS} from '../';
import SiteHeaderLink, {linkClasses} from '../Link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {usePathname} from 'next/navigation';
import Collection from '@/components/SiteMenu/DynamicMenu/Collection';
import SiteMenuMobile from '@/components/SiteMenu/Mobile';

interface Props {
    links: Link[];
}

const SiteHeaderDynamicMenuNavigation: React.FC<Props> = ({links}) => {
    const pathname = usePathname();
    const hasAnyNewOrUpdatedCollections = links.some(
        link => link.badge === 'New' || link.badge === 'Updated'
    );

    return (
        <>
            <NavigationMenu.Root delayDuration={0} key={pathname}>
                <NavigationMenu.List className="row hidden items-center gap-1 lg:flex">
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className={`${linkClasses} peer relative z-30`}>
                            <span className="inline-flex items-center gap-1.5">
                                Collections
                                {hasAnyNewOrUpdatedCollections && (
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--text)]" />
                                )}
                            </span>
                            <NavigationMenu.Content className="absolute left-0 top-0 w-screen pt-8 data-[motion^=to-]:delay-200 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out">
                                <div className="mt-5 w-full p-4 sm:p-8">
                                    <div className="grid grid-cols-6 gap-4">
                                        {links.map(link => (
                                            <Collection key={link.url} link={link} />
                                        ))}
                                    </div>
                                </div>
                            </NavigationMenu.Content>
                        </NavigationMenu.Trigger>
                        <div className="fixed left-0 top-[4.75rem] hidden h-screen w-screen bg-[var(--overlay-bg)] duration-500 animate-in fade-in peer-data-[state=open]:block peer-data-[state=open]:duration-200" />
                    </NavigationMenu.Item>
                    {MENU_ITEMS.map(item => (
                        <NavigationMenu.Item key={item.href} asChild>
                            <SiteHeaderLink href={item.href}>{item.label}</SiteHeaderLink>
                        </NavigationMenu.Item>
                    ))}
                    <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-20 flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                        <div className="relative top-[-5px] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-[var(--secondary-button-bg-hover)]" />
                    </NavigationMenu.Indicator>
                </NavigationMenu.List>
                <div className="fixed left-0 top-0 flex w-screen" style={{perspective: '1000px'}}>
                    <NavigationMenu.Viewport className="relative left-0 z-20 h-[var(--radix-navigation-menu-viewport-height)] w-screen transform-cpu overflow-hidden border-b-2 border-[var(--accent)] bg-[var(--bg)] duration-700 data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-4 data-[state=open]:slide-in-from-top-8" />
                </div>
            </NavigationMenu.Root>
            <SiteMenuMobile links={links} />
        </>
    );
};

export default SiteHeaderDynamicMenuNavigation;
