'use client';

import {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {animate, motion, useMotionValue} from 'motion/react';

interface Props {
    activeElementId?: string;
    children: React.ReactNode;
    className?: string;
}

const isTouchDevice = () =>
    typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const SwipeableContainer: React.FC<Props> = ({activeElementId, children, className = ''}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const hasDraggedRef = useRef(false);
    const draggedLinkRef = useRef<HTMLAnchorElement | null>(null);
    const hasInitializedRef = useRef(false);

    const [constraints, setConstraints] = useState({left: 0, right: 0});
    const [touch] = useState(isTouchDevice);

    const x = useMotionValue(0);

    const updateConstraints = useCallback(() => {
        const container = containerRef.current;
        const content = contentRef.current;

        if (!container || !content) return;

        const maxScroll = Math.max(0, content.scrollWidth - container.clientWidth);

        setConstraints({
            left: -maxScroll,
            right: 0
        });

        if (!hasInitializedRef.current && maxScroll > 0) {
            let targetX = -maxScroll / 2;

            if (activeElementId) {
                const activeElement = content.querySelector(`#${activeElementId}`) as HTMLElement;
                if (activeElement) {
                    const elementRect = activeElement.getBoundingClientRect();
                    const contentRect = content.getBoundingClientRect();
                    const elementCenter =
                        elementRect.left - contentRect.left + elementRect.width / 2;
                    const containerCenter = container.clientWidth / 2;
                    targetX = -(elementCenter - containerCenter);
                    targetX = Math.max(-maxScroll, Math.min(0, targetX));
                }
            }

            animate(x, targetX, {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
            });
            hasInitializedRef.current = true;
        } else {
            const currentX = x.get();
            if (currentX < -maxScroll) {
                x.set(-maxScroll);
            }
        }
    }, [x, activeElementId]);

    useEffect(() => {
        hasInitializedRef.current = false;
    }, [children]);

    useLayoutEffect(() => {
        if (touch) return;

        updateConstraints();

        const resizeObserver = new ResizeObserver(updateConstraints);

        if (containerRef.current) resizeObserver.observe(containerRef.current);
        if (contentRef.current) resizeObserver.observe(contentRef.current);

        window.addEventListener('resize', updateConstraints);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', updateConstraints);
        };
    }, [children, touch, updateConstraints]);

    useEffect(() => {
        if (touch || !contentRef.current) return;

        const content = contentRef.current;

        const handleDragStart = (event: DragEvent) => {
            const target = event.target as HTMLElement;
            const link = target.closest('a') as HTMLAnchorElement;
            if (link) {
                event.preventDefault();
                event.stopPropagation();
            }
        };

        const handleClick = (event: MouseEvent) => {
            if (hasDraggedRef.current && draggedLinkRef.current) {
                const target = event.target as HTMLElement;
                if (target.closest('a') === draggedLinkRef.current) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
            hasDraggedRef.current = false;
            draggedLinkRef.current = null;
        };

        content.addEventListener('dragstart', handleDragStart, true);
        content.addEventListener('click', handleClick, true);

        return () => {
            content.removeEventListener('dragstart', handleDragStart, true);
            content.removeEventListener('click', handleClick, true);
        };
    }, [touch]);

    if (touch) {
        return (
            <div
                ref={containerRef}
                className={`w-full overflow-x-auto overscroll-x-contain scroll-smooth px-4 md:px-8 ${className}`}
                style={{WebkitOverflowScrolling: 'touch'}}
            >
                <div ref={contentRef} className="flex flex-nowrap">
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className={`max-w-[100vw] touch-none overflow-hidden px-4 md:px-8 ${className}`}
        >
            <motion.div
                ref={contentRef}
                className="flex cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={constraints}
                dragDirectionLock
                dragMomentum
                onDragStart={(event, info) => {
                    const target = event.target as HTMLElement;
                    const link = target.closest('a') as HTMLAnchorElement;
                    if (link) {
                        draggedLinkRef.current = link;
                        hasDraggedRef.current = false;
                    }
                }}
                onDrag={(event, info) => {
                    if (Math.abs(info.delta.x) > 5) {
                        hasDraggedRef.current = true;
                    }
                }}
                onDragEnd={() => {
                    setTimeout(() => {
                        hasDraggedRef.current = false;
                        draggedLinkRef.current = null;
                    }, 100);
                }}
                style={{x}}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default SwipeableContainer;
