'use client';

import {useCallback, useEffect, useRef} from 'react';

interface Props {
    sections?: string[];
}

const useThemeIntersection = (sections: string[]) => {
    const observerRef = useRef<IntersectionObserver | null>(null);
    const visibleSectionsRef = useRef<Set<string>>(new Set());
    const sectionIntersectionMapRef = useRef<Map<HTMLElement, string>>(new Map());

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
                    } else {
                        visibleSectionsRef.current.delete(theme);
                    }
                });

                if (visibleSectionsRef.current.size > 0) {
                    const firstTheme = Array.from(visibleSectionsRef.current)[0];
                    firstPageTheme.setAttribute('data-theme', firstTheme);
                }
            },
            {rootMargin: '-10% 0px -10% 0px', threshold: 0.1}
        );
    }, []);

    const sectionRef = useCallback(
        (index: number) => (element: HTMLDivElement | null) => {
            if (element) {
                if (!observerRef.current) {
                    observerRef.current = createObserver() || null;
                    if (!observerRef.current) return;
                }

                const theme = sections[index];
                sectionIntersectionMapRef.current.set(element, theme);
                observerRef.current.observe(element);
            }
        },
        [sections, createObserver]
    );

    useEffect(() => {
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return sectionRef;
};

const AdaptiveTheme: React.FC<Props> = ({sections = []}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useThemeIntersection(sections);

    return (
        <div ref={containerRef}>
            {sections?.map((theme, index) => (
                <div
                    key={theme}
                    ref={sectionRef(index)}
                    className="bg-theme-bg text-theme-text transition-colors duration-500"
                    data-activetheme={theme}
                >
                    <div className="mx-auto max-w-[90rem] gap-4 px-4 py-8 md:px-8">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="aspect-video rounded bg-black" />
                            <div className="aspect-video rounded bg-black" />
                            <div className="aspect-video rounded bg-black" />
                            <div className="aspect-video rounded bg-black" />
                            <div className="aspect-video rounded bg-black" />
                            <div className="aspect-video rounded bg-black" />
                            <div className="aspect-video rounded bg-black" />
                            <div className="aspect-video rounded bg-black" />
                            <div className="aspect-video rounded bg-black" />
                            <div className="aspect-video rounded bg-black" />
                            <div className="aspect-video rounded bg-black" />
                            <div className="aspect-video rounded bg-black" />
                            <div className="aspect-video rounded bg-black" />
                            <div className="aspect-video rounded bg-black" />
                            <div className="aspect-video rounded bg-black" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdaptiveTheme;
