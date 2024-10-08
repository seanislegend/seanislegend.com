'use client';

import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';
import {CrossIcon, MenuIcon} from '@/components/Icon';
import {MENU_ITEMS} from '@/components/SiteMenu';
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
                className="relative z-30 size-6 lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
            >
                <ToggleButtonIcon className="h-auto w-6 text-[var(--text)]" />
            </button>
            <div
                className="absolute left-0 top-[var(--site-header-height)] z-30 w-full lg:hidden"
                style={{
                    height: isMenuOpen ? '100vh' : '0',
                    opacity: isMenuOpen ? 1 : 0.8,
                    overflow: isMenuOpen ? 'visible' : 'hidden'
                }}
            >
                <div className="bg-[var(--bg)] py-4 lg:hidden">
                    <Container asChild>
                        <div className="flex space-x-10">
                            <nav
                                key={isMenuOpen ? 'collections-open' : 'collections-closed'}
                                className="flex-grow -translate-x-2 space-y-1 duration-500  animate-in fade-in sm:columns-2"
                            >
                                {links?.map(link => (
                                    <span className="block " key={link.url}>
                                        <SiteMenuLink href={link.url} {...link}>
                                            {link.title}
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
                className="fixed left-0 right-0 top-[var(--site-header-height)] z-[20] h-0 bg-[var(--overlay-bg)] lg:hidden"
                style={{height: isMenuOpen ? '100vh' : '0', opacity: isMenuOpen ? 0.8 : 0}}
            />
        </>
    );
};

export default SiteMenuMobile;
