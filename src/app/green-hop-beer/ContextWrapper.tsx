'use client';

import {createContext, useRef} from 'react';

interface Props {
    collection: PhotoCollection;
}

interface Refs {
    brew: React.RefObject<HTMLDivElement | null>;
    celebrate: React.RefObject<HTMLDivElement | null>;
    container: React.RefObject<HTMLDivElement | null>;
    harvest: React.RefObject<HTMLDivElement | null>;
}

interface Context {
    collection: PhotoCollection;
    navItems: GreenHopNavigationItem[];
    refs: Refs;
}

export const GreenHopContext = createContext<Context>({} as Context);

const GreenHopContextWrapper: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    collection
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const harvestRef = useRef<HTMLDivElement>(null);
    const brewRef = useRef<HTMLDivElement>(null);
    const celebrateRef = useRef<HTMLDivElement>(null);

    const refs: Refs = {
        brew: brewRef,
        celebrate: celebrateRef,
        container: containerRef,
        harvest: harvestRef
    };

    const navItems: GreenHopNavigationItem[] = [
        {id: 'harvest', label: 'Harvest', targetRef: harvestRef, theme: 'olive-green'},
        {id: 'brew', label: 'Brew', targetRef: brewRef, theme: 'blue-grey'},
        {id: 'celebrate', label: 'Celebrate', targetRef: celebrateRef, theme: 'amber-red'}
    ];

    return (
        <GreenHopContext.Provider value={{collection, navItems, refs}}>
            {children}
        </GreenHopContext.Provider>
    );
};

export default GreenHopContextWrapper;
