'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {CrossIcon, MenuIcon} from '@/components/Icon';
import Logo from '@/components/Logo';
import useAnalytics from '@/hooks/useAnalytics';
import {isMenuOpenAtom} from '@/utils/store';
import {useAtom} from 'jotai';

const SiteHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);
    const {trackEvent} = useAnalytics();
    const pathname = usePathname();

    const toggleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);

        if (!isMenuOpen) {
            trackEvent('Mobile menu opened', {pathname});
        }
    };

    return (
        <header className="top-0 flex h-8 bg-white pt-4 dark:bg-black md:sticky md:z-50 md:h-10">
            <div className="absolute top-0 z-50 hidden h-10 w-full bg-white transition duration-200 ease-out dark:bg-black md:block" />
            <div className="absolute top-6 z-50 hidden h-10 w-full bg-gradient-to-b from-white via-white to-transparent transition duration-200 ease-out dark:from-black md:block" />
            <div className="flex w-full items-center justify-between">
                <Link
                    aria-label="Home"
                    className="group relative z-50 outline-none"
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <Logo
                        className="h-auto w-[100px] text-current text-black transition duration-200 ease-in-out group-hover:opacity-40 dark:text-white"
                        hasStrapline={false}
                    />
                </Link>
                <button
                    className="relative z-50 h-6 w-6 translate-y-[-2px] md:hidden"
                    onClick={toggleMenuClick}
                    type="button"
                >
                    {isMenuOpen ? (
                        <CrossIcon className="h-auto w-6 text-black dark:text-white" />
                    ) : (
                        <MenuIcon className="h-auto w-6 text-black dark:text-white" />
                    )}
                </button>
            </div>
        </header>
    );
};

export default SiteHeader;
