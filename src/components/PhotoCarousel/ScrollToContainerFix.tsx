'use client';

import {useEffect} from 'react';

const ScrollToContainerFix: React.FC = () => {
    useEffect(() => {
        const scrollToPhoto = () => {
            const photoElement = document.getElementById('photo');
            if (photoElement) {
                photoElement.scrollIntoView();
            }
        };
        const timeoutId = setTimeout(scrollToPhoto, 200);
        return () => clearTimeout(timeoutId);
    }, []);

    return null;
};

export default ScrollToContainerFix;
