'use client';

import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';
import {CrossIcon, MenuIcon} from '@/components/Icon';
import {LINKS} from '@/components/SiteFooter';
import SocialLinks from '@/components/SiteMenu/SocialLinks';
import Container from '@/components/UI/Container';
import UnderlineLink from '@/components/UnderlineLink';
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
                className="relative z-30 size-6 translate-y-[-2px] lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
            >
                <ToggleButtonIcon className="h-auto w-6 text-sean-black dark:text-sean-beige-50" />
            </button>
            <div
                className="absolute left-0 top-10 z-[30] w-full lg:hidden"
                style={{
                    height: isMenuOpen ? '100vh' : '0',
                    opacity: isMenuOpen ? 1 : 0.8,
                    overflow: isMenuOpen ? 'visible' : 'hidden'
                }}
            >
                <div className="bg-sean-beige-50 py-8 lg:hidden dark:bg-sean-black">
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
                                {LINKS.map(link => (
                                    <UnderlineLink
                                        href={link.url}
                                        key={link.url}
                                        className="text-lg"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </UnderlineLink>
                                ))}
                                <div className="pt-4">
                                    <SocialLinks />
                                </div>
                            </nav>
                        </div>
                    </Container>
                </div>
                <div className="h-44 bg-gradient-to-b from-sean-beige-50 dark:from-sean-black" />
            </div>
            <div
                className="fixed left-0 right-0 top-0 z-[20] h-0 bg-sean-beige-50 lg:hidden dark:bg-sean-black"
                style={{height: isMenuOpen ? '100vh' : '0', opacity: isMenuOpen ? 0.8 : 0}}
            />
        </>
    );
};

export default SiteMenuMobile;
