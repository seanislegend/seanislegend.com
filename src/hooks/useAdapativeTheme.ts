'use client';

import {useCallback, useEffect, useEffectEvent, useRef} from 'react';
import {useSetAtom} from 'jotai';
import {activeThemeAtom} from '@/utils/store';

const useAdapativeTheme = (blocks: {id?: string; theme: string}[]) => {
    const setActiveTheme = useSetAtom(activeThemeAtom);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const visibleSectionsRef = useRef<Set<string>>(new Set());
    const sectionIntersectionMapRef = useRef<Map<HTMLElement, {id?: string; theme: string}>>(
        new Map()
    );
    const sectionVisibilityRef = useRef<Map<string, number>>(new Map());
    const originalThemeRef = useRef<string>('');

    const handleIntersections = useEffectEvent((entries: IntersectionObserverEntry[]) => {
        const firstPageTheme = document.querySelector('[data-theme]');
        if (!firstPageTheme) return;

        // store the original theme if not already stored
        if (!originalThemeRef.current) {
            originalThemeRef.current = firstPageTheme.getAttribute('data-theme') || 'light';
        }

        entries.forEach(entry => {
            const block = sectionIntersectionMapRef.current.get(entry.target as HTMLElement);
            if (!block) return;

            if (entry.isIntersecting) {
                visibleSectionsRef.current.add(block.theme);
                sectionVisibilityRef.current.set(block.theme, entry.intersectionRatio);
            } else {
                visibleSectionsRef.current.delete(block.theme);
                sectionVisibilityRef.current.delete(block.theme);
            }
        });

        if (visibleSectionsRef.current.size > 0) {
            let bestTheme = '';
            let bestRatio = 0;
            let bestBlock: {id?: string; theme: string} | null = null;

            for (const theme of visibleSectionsRef.current) {
                const ratio = sectionVisibilityRef.current.get(theme) || 0;
                if (ratio > bestRatio) {
                    bestRatio = ratio;
                    bestTheme = theme;
                    for (const [, block] of sectionIntersectionMapRef.current) {
                        if (block.theme === theme) {
                            bestBlock = block;
                            break;
                        }
                    }
                }
            }

            if (!bestTheme) {
                bestTheme = Array.from(visibleSectionsRef.current)[0];
                for (const [, block] of sectionIntersectionMapRef.current) {
                    if (block.theme === bestTheme) {
                        bestBlock = block;
                        break;
                    }
                }
            }

            const currentTheme = firstPageTheme.getAttribute('data-theme');
            if (currentTheme !== bestTheme && bestBlock) {
                firstPageTheme.setAttribute('data-theme', bestTheme);
                setActiveTheme({id: bestBlock.id || bestTheme, theme: bestTheme});
            }
        } else {
            // no visible sections - fallback to original theme
            const currentTheme = firstPageTheme.getAttribute('data-theme');
            if (currentTheme !== originalThemeRef.current) {
                firstPageTheme.setAttribute('data-theme', originalThemeRef.current);
                setActiveTheme({id: originalThemeRef.current, theme: originalThemeRef.current});
            }
        }
    });

    const sectionRef = useCallback(
        (index: number) => (element: HTMLDivElement | null) => {
            if (element) {
                if (!observerRef.current) {
                    observerRef.current = new IntersectionObserver(handleIntersections, {
                        rootMargin: '-10% 0px -10% 0px',
                        threshold: [0, 0.1, 0.5, 0.9, 1.0]
                    });
                }

                const block = blocks[index];
                sectionIntersectionMapRef.current.set(element, block);
                observerRef.current.observe(element);
            }
        },
        [blocks, handleIntersections]
    );

    const setDefaultTheme = useCallback(() => {
        if (sectionIntersectionMapRef.current.size > 0) {
            const firstBlock = sectionIntersectionMapRef.current.values().next().value;
            if (firstBlock) {
                setActiveTheme({id: firstBlock.id || firstBlock.theme, theme: firstBlock.theme});
            }
        }
    }, [setActiveTheme]);

    useEffect(() => {
        const observer = observerRef.current;
        const visibleSections = visibleSectionsRef.current;
        const sectionIntersectionMap = sectionIntersectionMapRef.current;
        const sectionVisibility = sectionVisibilityRef.current;

        setDefaultTheme();

        return () => {
            observer?.disconnect();
            visibleSections.clear();
            sectionIntersectionMap.clear();
            sectionVisibility.clear();
            originalThemeRef.current = '';
        };
    }, [setDefaultTheme]);

    return sectionRef;
};

export default useAdapativeTheme;
