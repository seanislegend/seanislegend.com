'use client';

import {use} from 'react';
import clsx from 'clsx';
import {useAtomValue} from 'jotai';
import {useInView} from 'motion/react';
import {activeThemeAtom} from '@/utils/store';
import {GreenHopContext} from './ContextWrapper';
import Button from './NavigationButton';

const GreenHopNavigation: React.FC = () => {
    const {navItems} = use(GreenHopContext);
    const activeTheme = useAtomValue(activeThemeAtom);

    return (
        <nav
            className={clsx(
                'xl:h-site-header-scrolled top-site-header-scrolled bg-theme-bg/95 sticky right-0 z-50 p-1 transition-opacity duration-300 ease-in-out xl:fixed xl:top-2 xl:mr-2 xl:bg-transparent xl:p-0',
                {'opacity-0': !activeTheme?.theme || activeTheme.theme === 'sky-blue'}
            )}
            data-slot="tab-navigation"
        >
            <ul className="flex w-full flex-row items-center gap-x-2 xl:justify-end">
                {navItems.map(item => (
                    <li key={item.id} className="w-full rounded xl:w-auto">
                        <Button {...item} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default GreenHopNavigation;
