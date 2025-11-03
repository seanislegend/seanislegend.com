'use client';

import clsx from 'clsx';
import {useScroll} from 'framer-motion';
import {useAtomValue} from 'jotai';
import * as m from 'motion/react-m';
import Link from 'next/link';
import {activeThemeAtom} from '@/utils/store';

interface Props {
    id: string;
    label: string;
    targetRef: React.RefObject<HTMLDivElement | null>;
}

const GreenHopNavigationButton: React.FC<Props> = ({id, label, targetRef}) => {
    const activeTheme = useAtomValue(activeThemeAtom);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ['80px end', 'end end']
    });

    const isActive = id === activeTheme.id;

    return (
        <>
            <m.div
                className="absolute top-0 left-0 z-51 h-full w-full rounded bg-white/10"
                style={{originX: 0, scaleX: scrollYProgress}}
            />
            <Link
                className={clsx(
                    'text-theme-text bg-accent/30 hover:bg-accent/80 relative z-52 block rounded px-8 py-4 text-center text-xs leading-0 font-medium uppercase decoration-white/50 underline-offset-4 transition-colors duration-300 ease-in-out hover:underline focus:underline md:text-[13px]',
                    {underline: isActive}
                )}
                href={`#${id}`}
            >
                {label}
            </Link>
        </>
    );
};

export default GreenHopNavigationButton;
