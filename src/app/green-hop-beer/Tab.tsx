'use client';

import clsx from 'clsx';
import {useScroll} from 'framer-motion';
import {useAtomValue} from 'jotai';
import * as m from 'motion/react-m';
import Link from 'next/link';
import {activeThemeAtom} from '@/utils/store';

interface Props {
    id: string;
    index: number;
    label: string;
    targetRef: React.RefObject<HTMLDivElement | null>;
}

const GreenHopNavigationTab: React.FC<Props> = ({id, index, label, targetRef}) => {
    const activeTheme = useAtomValue(activeThemeAtom);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ['80px end', 'end end']
    });

    const isActive = id === activeTheme.id;

    return (
        <li className="relative grow overflow-hidden">
            <m.div
                className="absolute top-0 z-51 h-full w-full -translate-y-0.5 bg-white/10"
                style={{originX: 0, scaleX: scrollYProgress}}
            />
            <Link
                className={clsx(
                    'text-theme-text bg-accent/30 relative z-52 block py-1.5 text-center text-xs font-medium uppercase underline-offset-4 transition-colors duration-300 ease-in-out hover:underline focus:underline md:text-sm',
                    {underline: isActive, 'hover:bg-accent/80': !isActive}
                )}
                href={`#${id}`}
            >
                {index + 1}. {label}
            </Link>
        </li>
    );
};

export default GreenHopNavigationTab;
