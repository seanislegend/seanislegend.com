'use client';

import {useCallback, useEffect, useRef} from 'react';

const useAdapativeTheme = (blocks: string[]) => {
    const observerRef = useRef<IntersectionObserver | null>(null);
    const visibleSectionsRef = useRef<Set<string>>(new Set());
    const sectionIntersectionMapRef = useRef<Map<HTMLElement, string>>(new Map());
    const sectionVisibilityRef = useRef<Map<string, number>>(new Map());

    const createObserver = useCallback(() => {
        const firstPageTheme = document.querySelector('[data-theme]');
        if (!firstPageTheme) return;

        return new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const theme = sectionIntersectionMapRef.current.get(
                        entry.target as HTMLElement
                    );
                    if (!theme) return;

                    if (entry.isIntersecting) {
                        visibleSectionsRef.current.add(theme);
                        sectionVisibilityRef.current.set(theme, entry.intersectionRatio);
                    } else {
                        visibleSectionsRef.current.delete(theme);
                        sectionVisibilityRef.current.delete(theme);
                    }
                });

                if (visibleSectionsRef.current.size > 0) {
                    // find the theme with the highest intersection ratio
                    let bestTheme = '';
                    let bestRatio = 0;

                    for (const theme of Array.from(visibleSectionsRef.current)) {
                        const ratio = sectionVisibilityRef.current.get(theme) || 0;
                        if (ratio > bestRatio) {
                            bestRatio = ratio;
                            bestTheme = theme;
                        }
                    }

                    // fallback to first theme if no ratios are available
                    if (!bestTheme) {
                        bestTheme = Array.from(visibleSectionsRef.current)[0];
                    }

                    const currentTheme = firstPageTheme.getAttribute('data-theme');
                    if (currentTheme !== bestTheme) {
                        firstPageTheme.setAttribute('data-theme', bestTheme);
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

                const theme = blocks[index];
                sectionIntersectionMapRef.current.set(element, theme);
                observerRef.current.observe(element);
            }
        },
        [blocks, createObserver]
    );

    useEffect(() => {
        const observer = observerRef.current;
        const visibleSections = visibleSectionsRef.current;
        const sectionIntersectionMap = sectionIntersectionMapRef.current;
        const sectionVisibility = sectionVisibilityRef.current;

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
