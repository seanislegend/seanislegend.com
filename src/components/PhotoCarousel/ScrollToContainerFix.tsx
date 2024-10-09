'use client';

import {useEffect, useRef} from 'react';

const ScrollToContainerFix: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        containerRef.current?.scrollIntoView();
    }, [containerRef]);

    return <div ref={containerRef} />;
};

export default ScrollToContainerFix;
