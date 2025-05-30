'use client';

import {useEffect, useState} from 'react';
import FocusLock from 'react-focus-lock';
// import {RemoveScroll} from 'react-remove-scroll';
import {usePathname} from 'next/navigation';
import {CrossIcon, MenuIcon} from '@/components/Icon';
import {MENU_ITEMS} from '@/components/SiteMenu';
import DynamicMenuCollection from '@/components/SiteMenu/DynamicMenu/Collection';
import SocialLinks from '@/components/SiteMenu/SocialLinks';
import Badge from '@/components/UI/Badge';
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
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
            >
                <ToggleButtonIcon className="text-theme-text h-auto w-6" />
            </button>
            {isMenuOpen && (
                // <RemoveScroll
                <div
                    className="top-site-header absolute left-0 z-30 w-full lg:hidden print:hidden"
                    style={{
                        height: isMenuOpen ? '100vh' : '0',
                        opacity: isMenuOpen ? 1 : 0.8
                    }}
                >
                    <FocusLock
                        key={isMenuOpen ? 'collections-open' : 'collections-closed'}
                        className="bg-theme-bg animate-in fade-in slide-in-from-bottom-1.5 h-[calc(100vh-var(--site-header-height))] duration-300 lg:hidden"
                    >
                        <Container asChild>
                            <div className="flex h-full flex-col space-y-10 overflow-x-hidden overflow-y-auto py-4">
                                <nav className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4">
                                    {links?.map(link => (
                                        <DynamicMenuCollection
                                            key={link.url}
                                            hasNavigationWrapper={false}
                                            link={link}
                                        />
                                    ))}
                                </nav>
                                <nav className="-mx-2 flex min-w-[100px] flex-row items-center justify-between pb-8 lg:hidden">
                                    <span>
                                        {MENU_ITEMS.map(link => (
                                            <SiteMenuLink
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {link.label}
                                            </SiteMenuLink>
                                        ))}
                                    </span>
                                    <SocialLinks />
                                </nav>
                            </div>
                        </Container>
                    </FocusLock>
                </div>
                // </RemoveScroll>
            )}
            <div
                className="bg-overlay-bg top-site-header fixed right-0 left-0 z-20 h-0 lg:hidden"
                style={{height: isMenuOpen ? '100vh' : '0', opacity: isMenuOpen ? 0.8 : 0}}
            />
        </>
    );
};

export default SiteMenuMobile;
