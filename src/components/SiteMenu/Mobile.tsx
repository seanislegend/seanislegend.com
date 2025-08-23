'use client';

import {useEffect, useState} from 'react';
import FocusLock from 'react-focus-lock';
import {RemoveScroll} from 'react-remove-scroll';
import {Link} from 'next-view-transitions';
import {usePathname} from 'next/navigation';
import Button from '@/components/Button';
import {CrossIcon, MenuIcon} from '@/components/Icon';
import {MENU_ITEMS} from '@/components/SiteMenu';
import DynamicMenuCollection from '@/components/SiteMenu/DynamicMenu/Collection';
import SocialLinks from '@/components/SiteMenu/SocialLinks';
import Container from '@/components/UI/Container';
import SiteMenuLink from './Link';

interface Props {
    links: Link[];
}

const SiteMenuMobile: React.FC<Props> = ({links}) => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const ToggleButtonIcon = isMenuOpen ? CrossIcon : MenuIcon;

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <button
                className="relative z-30 size-6 focus:ring-2 focus:outline-none lg:hidden print:hidden"
                data-testid="mobile-menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
            >
                <ToggleButtonIcon className="text-theme-text h-auto w-6" />
            </button>
            {isMenuOpen && (
                <RemoveScroll
                    className="top-site-header absolute left-0 z-30 w-full lg:hidden print:hidden"
                    data-testid="mobile-menu"
                    style={{
                        height: isMenuOpen ? '100vh' : '0',
                        opacity: isMenuOpen ? 1 : 0.8
                    }}
                >
                    <FocusLock
                        key={isMenuOpen ? 'collections-open' : 'collections-closed'}
                        className="bg-theme-bg animate-in fade-in slide-in-from-bottom-1.5 h-[calc(100vh-var(--site-header-height))] overflow-y-auto duration-300 lg:hidden"
                    >
                        <Container>
                            <div className="flex h-full flex-col space-y-4 py-4">
                                <nav
                                    className="-mr-2 flex justify-end sm:-mr-3"
                                    data-testid="mobile-menu-main-navigation"
                                >
                                    {MENU_ITEMS.map(link => (
                                        <SiteMenuLink
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.label}
                                        </SiteMenuLink>
                                    ))}
                                </nav>
                                <nav
                                    className="-mx-2 grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4"
                                    data-testid="mobile-menu-collections-navigation"
                                >
                                    {links?.map(link => (
                                        <DynamicMenuCollection
                                            key={link.url}
                                            hasNavigationWrapper={false}
                                            link={link}
                                        />
                                    ))}
                                    <span className="min-w-[200px]">
                                        <Button className="mt-2 ml-2" href="/collections">
                                            View all collections
                                        </Button>
                                    </span>
                                </nav>
                                <div
                                    className="pt-8 lg:hidden"
                                    style={{
                                        paddingBottom: `calc(6rem + env(safe-area-inset-bottom, 0px))`
                                    }}
                                >
                                    <SocialLinks />
                                </div>
                            </div>
                        </Container>
                    </FocusLock>
                </RemoveScroll>
            )}
            <div
                className="bg-overlay-bg top-site-header fixed right-0 left-0 z-20 h-0 lg:hidden"
                style={{height: isMenuOpen ? '100vh' : '0', opacity: isMenuOpen ? 0.8 : 0}}
            />
        </>
    );
};

export default SiteMenuMobile;
