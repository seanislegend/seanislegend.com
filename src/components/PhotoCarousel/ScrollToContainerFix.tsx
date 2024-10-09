'use client';

import {useEffect, useRef} from 'react';

const ScrollToContainerFix: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollToPhoto = () => {
            if (containerRef.current) {
                containerRef.current.scrollIntoView();
            }
        };
        const timeoutId = setTimeout(scrollToPhoto, 100);
        return () => clearTimeout(timeoutId);
    }, []);

    return <div ref={containerRef} />;
};

export default ScrollToContainerFix;
