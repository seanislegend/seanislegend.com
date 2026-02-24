'use client';

import {useState} from 'react';
import {RemoveScroll} from 'react-remove-scroll';
import {CrossIcon} from '@/components/Icon/Cross';
import {MenuIcon} from '@/components/Icon/Menu';
import {MENU_ITEMS} from '@/components/SiteMenu';
import SocialLinks from '@/components/SiteMenu/SocialLinks';
import Badge from '@/components/UI/Badge';
import Container from '@/components/UI/Container';
import SiteMenuLink from './Link';

interface Props {
    links: Link[];
}

const SiteMenuMobile: React.FC<Props> = ({links}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const ToggleButtonIcon = isMenuOpen ? CrossIcon : MenuIcon;

    return (
        <>
            <button
                className="relative z-30 size-6 focus:ring-2 focus:outline-none xl:hidden print:hidden"
                data-testid="mobile-menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
            >
                <ToggleButtonIcon className="text-theme-text h-auto w-6" />
            </button>
            {isMenuOpen && (
                <RemoveScroll
                    className="top-site-header absolute left-0 z-30 w-full xl:hidden print:hidden"
                    data-testid="mobile-menu"
                    style={{
                        height: isMenuOpen ? '100vh' : '0',
                        opacity: isMenuOpen ? 1 : 0.8
                    }}
                >
                    <div
                        key={isMenuOpen ? 'collections-open' : 'collections-closed'}
                        className="bg-theme-bg animate-in fade-in slide-in-from-bottom-1.5 h-[calc(100vh-var(--site-header-height))] overflow-y-auto duration-300 xl:hidden"
                    >
                        <Container>
                            <div className="flex h-full flex-col space-y-4 py-4">
                                <nav
                                    className="-ml-2 flex flex-col space-y-2"
                                    data-testid="mobile-menu-collections-navigation"
                                >
                                    {MENU_ITEMS.map(link => (
                                        <SiteMenuLink
                                            className="text-lg!"
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.label}
                                        </SiteMenuLink>
                                    ))}
                                    <SiteMenuLink
                                        className="text-lg!"
                                        href="/collections"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Collections
                                    </SiteMenuLink>
                                    {links?.map(link => (
                                        <SiteMenuLink
                                            className="ml-6 space-y-2"
                                            key={link.url}
                                            href={link.url}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span className="flex items-center gap-2">
                                                <span>{link.title}</span>
                                                {link.badge && <Badge>{link.badge} </Badge>}
                                            </span>
                                            <small className="text-dimmed-text block leading-tight normal-case">
                                                {link.pageTitle}
                                            </small>
                                        </SiteMenuLink>
                                    ))}
                                    <SiteMenuLink
                                        aria-hidden="true"
                                        className="mt-2 mb-8 ml-6 text-sm"
                                        href="/collections"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        View all collections
                                    </SiteMenuLink>
                                </nav>
                                <div
                                    className="pt-8 xl:hidden"
                                    style={{
                                        paddingBottom: `calc(6rem + env(safe-area-inset-bottom, 0px))`
                                    }}
                                >
                                    <SocialLinks />
                                </div>
                            </div>
                        </Container>
                    </div>
                </RemoveScroll>
            )}
            <div
                className="bg-overlay-bg top-site-header fixed right-0 left-0 z-20 h-0 xl:hidden"
                style={{height: isMenuOpen ? '100vh' : '0', opacity: isMenuOpen ? 0.8 : 0}}
            />
        </>
    );
};

export default SiteMenuMobile;
