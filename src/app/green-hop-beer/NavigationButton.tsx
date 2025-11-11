'use client';

import {track} from '@vercel/analytics';
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
        <Link
            className={clsx(
                'text-theme-text bg-accent relative z-52 block overflow-hidden rounded px-8 py-4 text-center text-xs leading-0 font-medium uppercase underline-offset-4 transition duration-300 ease-in-out md:text-[13px]',
                {underline: isActive, 'hover:bg-accent/50': !isActive}
            )}
            href={`#${id}`}
            onClick={() => track('green-hop-beer-navigation-click', {label})}
        >
            <m.span
                className="bg-button-accent absolute top-0 left-0 z-51 h-full w-full"
                style={{originX: 0, scaleX: scrollYProgress}}
            />
            <span className="relative z-52">{label}</span>
        </Link>
    );
};

export default GreenHopNavigationButton;
