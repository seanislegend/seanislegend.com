'use client';

<<<<<<< HEAD
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
=======
import {useState} from 'react';
import {AnimatePresence, useMotionValueEvent, useScroll} from 'motion/react';
import * as m from 'motion/react-m';
import Button from './NavigationButton';

interface Props {
    containerRef: React.RefObject<HTMLDivElement | null>;
    items: GreenHopNavigationItem[];
}

const GreenHopNavigation: React.FC<Props> = ({containerRef, items}) => {
    const [isVisible, setIsVisible] = useState(false);
    const {scrollYProgress} = useScroll({target: containerRef, offset: ['start end', 'end end']});

    useMotionValueEvent(scrollYProgress, 'change', () => {
        const newIsVisible = scrollYProgress.get() > 0;
        if (newIsVisible !== isVisible) {
            setIsVisible(newIsVisible);
        }
    });

    return (
        <AnimatePresence>
            {isVisible && (
                <m.div
                    className="xl:h-site-header-scrolled top-site-header-scrolled bg-theme-bg/95 sticky right-0 z-50 p-1 xl:fixed xl:top-2 xl:mr-2 xl:bg-transparent xl:p-0"
                    data-slot="tab-navigation"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                >
                    <ul className="flex w-full flex-row items-center gap-x-2 xl:justify-end">
                        {items.map(item => (
                            <li
                                key={item.id}
                                className="bg-accent relative w-full overflow-hidden rounded xl:w-auto"
                            >
                                <Button {...item} />
                            </li>
                        ))}
                    </ul>
                </m.div>
            )}
        </AnimatePresence>
>>>>>>> 26c10d7 (feat: Redesign navigation)
    );
};

export default GreenHopNavigation;
