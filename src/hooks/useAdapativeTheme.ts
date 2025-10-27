'use client';

import {useCallback, useEffect, useRef} from 'react';
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

    const createObserver = useCallback(() => {
        const firstPageTheme = document.querySelector('[data-theme]');
        if (!firstPageTheme) return;

        return new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const block = sectionIntersectionMapRef.current.get(
                        entry.target as HTMLElement
                    );
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
                    // find the theme with the highest intersection ratio
                    let bestTheme = '';
                    let bestRatio = 0;
                    let bestBlock: {id?: string; theme: string} | null = null;

                    for (const theme of Array.from(visibleSectionsRef.current)) {
                        const ratio = sectionVisibilityRef.current.get(theme) || 0;
                        if (ratio > bestRatio) {
                            console.log('bestTheme1', theme);
                            bestRatio = ratio;
                            bestTheme = theme;
                            // find the block object for this theme
                            for (const [element, block] of Array.from(
                                sectionIntersectionMapRef.current
                            )) {
                                if (block.theme === theme) {
                                    console.log('bestThemeeee', block);
                                    bestBlock = block;
                                    break;
                                }
                            }
                        }
                    }

                    // fallback to first theme if no ratios are available
                    if (!bestTheme) {
                        bestTheme = Array.from(visibleSectionsRef.current)[0];
                        console.log('bestTheme', bestTheme);
                        // find the block object for the fallback theme
                        for (const [element, block] of Array.from(
                            sectionIntersectionMapRef.current
                        )) {
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
                }
            },
            {rootMargin: '-10% 0px -10% 0px', threshold: [0, 0.1, 0.5, 0.9, 1.0]}
        );
    }, []);

    const sectionRef = useCallback(
        (index: number) => (element: HTMLDivElement | null) => {
            if (element) {
                if (!observerRef.current) {
                    observerRef.current = createObserver() || null;
                    if (!observerRef.current) return;
                }

                const block = blocks[index];
                sectionIntersectionMapRef.current.set(element, block);
                observerRef.current.observe(element);
            }
        },
        [blocks, createObserver]
    );

    const setDefaultTheme = useCallback(() => {
        if (sectionIntersectionMapRef.current.size > 0) {
            const firstBlock = sectionIntersectionMapRef.current.values().next().value;
            if (firstBlock) {
                setActiveTheme({id: firstBlock.id || firstBlock.theme, theme: firstBlock.theme});
            }
        }
    }, []);

    useEffect(() => {
        const observer = observerRef.current;
        const visibleSections = visibleSectionsRef.current;
        const sectionIntersectionMap = sectionIntersectionMapRef.current;
        const sectionVisibility = sectionVisibilityRef.current;

        setDefaultTheme();

        return () => {
            if (observer) {
                observer.disconnect();
            }
            visibleSections.clear();
            sectionIntersectionMap.clear();
            sectionVisibility.clear();
        };
    }, []);

    return sectionRef;
};

export default useAdapativeTheme;
