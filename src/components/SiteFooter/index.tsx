'use client';

import {Suspense} from 'react';
import Logo from '@/components/Logo';
import SiteHeaderMenu, {MENU_ITEMS} from '@/components/SiteMenu';
import SocialLinks from '@/components/SiteMenu/SocialLinks';

const CopyrightText = () => (
    <span className="text-sm">&copy; {new Date().getFullYear()} Sean McEmerson</span>
);

const SiteFooter: React.FC = () => (
    <footer
        className="border-accent mx-auto mt-8 flex w-full max-w-440 flex-col items-center gap-4 border-t-2 px-4 py-4 sm:flex-row sm:justify-between md:px-0 print:border-none"
        data-testid="site-footer"
    >
        <div className="flex w-full items-center justify-between gap-4 md:justify-start print:hidden!">
            <Suspense>
                <CopyrightText />
            </Suspense>
            <SocialLinks />
        </div>
        <SiteHeaderMenu items={MENU_ITEMS} />
    </footer>
);

export default SiteFooter;
