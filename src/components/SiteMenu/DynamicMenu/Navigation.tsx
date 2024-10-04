'use client';

import {MENU_ITEMS} from '../';
import SiteHeaderLink, {linkClasses} from '../Link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {usePathname} from 'next/navigation';
import SiteMenuMobile from '@/components/SiteMenu/Mobile';
import Container from '@/components/UI/Container';
import AllCollections from './AllCollections';
import FeaturedCollections from './FeaturedCollections';

interface Props {
    featuredLinks: Link[];
    otherLinks: Link[];
}

const SiteHeaderDynamicMenuNavigation: React.FC<Props> = ({featuredLinks, otherLinks}) => {
    const pathname = usePathname();

    return (
        <>
            <NavigationMenu.Root delayDuration={0} key={pathname}>
                <NavigationMenu.List className="row hidden items-center gap-1 lg:flex">
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className={`${linkClasses} peer relative z-30`}>
                            Collections
                            <NavigationMenu.Content className="absolute left-0 top-0 w-screen pt-12 data-[motion^=to-]:delay-200 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out">
                                <Container asChild>
                                    <div className="mt-5 grid w-full grid-cols-12 gap-12 p-8">
                                        {featuredLinks.length > 0 && (
                                            <div className="col-span-9">
                                                <FeaturedCollections links={featuredLinks} />
                                            </div>
                                        )}
                                        <div className="col-span-3 w-full">
                                            <AllCollections links={otherLinks} />
                                        </div>
                                    </div>
                                </Container>
                            </NavigationMenu.Content>
                        </NavigationMenu.Trigger>
                        <div className="fixed left-0 top-[4.75rem] hidden h-screen w-screen bg-sean-black/80 duration-500 animate-in fade-in peer-data-[state=open]:block peer-data-[state=open]:duration-200" />
                    </NavigationMenu.Item>
                    {MENU_ITEMS.map(item => (
                        <NavigationMenu.Item key={item.href} asChild>
                            <SiteHeaderLink href={item.href}>{item.label}</SiteHeaderLink>
                        </NavigationMenu.Item>
                    ))}
                    <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-20 flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                        <div className="relative top-[-5px] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-sean-beige-100" />
                    </NavigationMenu.Indicator>
                </NavigationMenu.List>
                <div className="fixed left-0 top-0 flex w-screen" style={{perspective: '1000px'}}>
                    <NavigationMenu.Viewport className="data-[state=closed]:duration-[400ms] relative left-0 z-20 h-[var(--radix-navigation-menu-viewport-height)] w-screen transform-cpu overflow-hidden border-b-2 border-sean-beige-100 bg-sean-beige-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-4 data-[state=open]:slide-in-from-top-8" />
                </div>
            </NavigationMenu.Root>
            <SiteMenuMobile links={[...featuredLinks, ...otherLinks]} />
        </>
    );
};

export default SiteHeaderDynamicMenuNavigation;
