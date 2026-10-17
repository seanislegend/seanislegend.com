'use client';

import {useLayoutEffect, useRef} from 'react';

interface Props {
    activeElementId?: string;
    children: React.ReactNode;
    className?: string;
}

// native horizontal scroll, so touch, trackpad, shift+wheel and keyboard focus all work
const SwipeableContainer: React.FC<Props> = ({activeElementId, children, className = ''}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // start centred on the active element, or the middle of the content
    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const activeElement = activeElementId
            ? container.querySelector<HTMLElement>(`#${CSS.escape(activeElementId)}`)
            : null;
        let left = (container.scrollWidth - container.clientWidth) / 2;

        if (activeElement) {
            const elementRect = activeElement.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const elementCenter =
                elementRect.left -
                containerRect.left +
                container.scrollLeft +
                elementRect.width / 2;
            left = elementCenter - container.clientWidth / 2;
        }

        container.scrollTo({left});
    }, [activeElementId]);

    return (
        <div
            ref={containerRef}
            className={`max-w-[100vw] overflow-x-auto overscroll-x-contain px-4 md:px-8 ${className}`}
        >
            <div className="flex w-max">{children}</div>
        </div>
    );
};

export default SwipeableContainer;
