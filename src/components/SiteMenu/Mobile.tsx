'use client';

import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';
import {CrossIcon, MenuIcon} from '@/components/Icon';
import {MENU_ITEMS} from '@/components/SiteMenu';
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
                className="relative z-30 size-6 lg:hidden print:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
            >
                <ToggleButtonIcon className="text-theme-text h-auto w-6" />
            </button>
            <div
                className="top-site-header absolute left-0 z-30 w-full lg:hidden print:hidden"
                style={{
                    height: isMenuOpen ? '100vh' : '0',
                    opacity: isMenuOpen ? 1 : 0.8,
                    overflow: isMenuOpen ? 'visible' : 'hidden'
                }}
            >
                <div
                    key={isMenuOpen ? 'collections-open' : 'collections-closed'}
                    className="bg-theme-bg animate-in fade-in slide-in-from-bottom-1.5 py-4 duration-300 lg:hidden"
                >
                    <Container asChild>
                        <div className="flex space-x-10">
                            <nav className="grow -translate-x-2 space-y-1.5 sm:columns-2">
                                {links?.map(link => (
                                    <span className="block" key={link.url}>
                                        <SiteMenuLink href={link.url} {...link}>
                                            <span className="flex flex-row items-center gap-2">
                                                <span className="truncate leading-none">
                                                    {link.title}
                                                </span>
                                                {link.badge && <Badge>{link.badge}</Badge>}
                                            </span>
                                        </SiteMenuLink>
                                    </span>
                                ))}
                                <SiteMenuLink href="/collections">All collections</SiteMenuLink>
                            </nav>
                            <nav className="flex min-w-[100px] flex-col items-end space-y-2 lg:hidden">
                                {MENU_ITEMS.map(link => (
                                    <SiteMenuLink
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </SiteMenuLink>
                                ))}
                                <div className="pt-4">
                                    <SocialLinks />
                                </div>
                            </nav>
                        </div>
                    </Container>
                </div>
            </div>
            <div
                className="bg-overlay-bg top-site-header fixed right-0 left-0 z-20 h-0 lg:hidden"
                style={{height: isMenuOpen ? '100vh' : '0', opacity: isMenuOpen ? 0.8 : 0}}
            />
        </>
    );
};

export default SiteMenuMobile;
