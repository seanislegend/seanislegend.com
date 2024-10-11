'use client';

import {useCallback, useEffect, useState} from 'react';

const useScrollStatus = (threshold: number = 50) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const bufferZone = 10;

    const handleScroll = useCallback(() => {
        if (!threshold) return;
        setIsScrolled(prevState => {
            const shouldBeScrolled = window.scrollY > threshold;

            if (shouldBeScrolled !== prevState) {
                if (shouldBeScrolled && window.scrollY > threshold + bufferZone) {
                    return true;
                } else if (!shouldBeScrolled && window.scrollY < threshold - bufferZone) {
                    return false;
                }
            }

            return prevState;
        });
    }, [threshold]);

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return {isScrolled};
};

export default useScrollStatus;
