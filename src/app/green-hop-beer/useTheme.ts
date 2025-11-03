<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 26c10d7 (feat: Redesign navigation)
'use client';

import {useCallback, useEffect, useMemo, useRef} from 'react';
=======
import {useEffect, useRef} from 'react';
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)
=======
import {useCallback, useEffect, useMemo, useRef} from 'react';
>>>>>>> 4dcae18 (feat: Add default theme change before scroll)
import {useMotionValueEvent, useScroll} from 'framer-motion';
import {useAtom} from 'jotai';
import {activeThemeAtom} from '@/utils/store';

interface Props {
    containerRef: React.RefObject<HTMLDivElement | null>;
    sections: {
        id: string;
        targetRef: React.RefObject<HTMLDivElement | null>;
        theme: string;
    }[];
}

const useTheme = (containerRef: Props['containerRef'], sections: Props['sections']) => {
    const [activeTheme, setActiveTheme] = useAtom(activeThemeAtom);
    const themeContainerRef = useRef<HTMLDivElement>(null);
    const containerScroll = useScroll({
        offset: ['start end', 'end end'],
        target: containerRef
<<<<<<< HEAD
<<<<<<< HEAD
    });
    const section0Progress = useScroll({
        offset: ['80px end', 'end end'],
        target: sections[0]?.targetRef
    });
    const section1Progress = useScroll({
        offset: ['80px end', 'end end'],
        target: sections[1]?.targetRef
    });
    const section2Progress = useScroll({
        offset: ['80px end', 'end end'],
        target: sections[2]?.targetRef
    });
    // add in the default theme which shows in the header
    const sectionsWithDefault = useMemo(
        () => [{id: 'default', theme: 'sky-blue'}, ...sections],
        [sections]
    );

    const updateTheme = useCallback(
        (themeId: string) => {
            if (themeId === activeTheme.theme) return;
            if (!themeContainerRef.current) return;

            const theme = sectionsWithDefault.find(section => section.theme === themeId);
            if (!theme) return;

            setActiveTheme(theme);
            themeContainerRef.current.setAttribute('data-theme', theme.theme);
        },
        [activeTheme.theme, sectionsWithDefault, setActiveTheme]
    );

    const handleScroll = useCallback(() => {
        if (!themeContainerRef.current) return;

        // check sections in reverse order to find the current section being viewed
        // as user scrolls, earlier sections complete (progress = 1) and later sections become active
        const progresses = [
            section0Progress.scrollYProgress.get(),
            section1Progress.scrollYProgress.get(),
            section2Progress.scrollYProgress.get()
        ];

        // if all progresses are effectively 0, scroll tracking may not have started,
        // but doesn't mean we're at the top, so we need to check current container scroll and then find
        // the closest section. we also have a small threshold to account for debounced scroll events
        if (progresses.every(p => p < 0.05)) {
            const containerY = containerScroll.scrollY.get();
            const closestSection = sections.reduce((closest, section) => {
                const sectionY = section.targetRef.current?.offsetTop ?? 0;
                return Math.abs(containerY - sectionY) <
                    Math.abs(containerY - (closest.targetRef.current?.offsetTop ?? 0))
                    ? section
                    : closest;
            }, sections[0]);

            // if the first section is the closest section, we need to check if we're near this
            // section or if we're near the header (which requires a different theme, but is not
            // part of the sections we track progress of)
            if (closestSection.id === sections[0].id) {
                const containerY = containerScroll.scrollY.get();
                const sectionY = sections[0].targetRef.current?.offsetTop ?? 0;
                if (containerY < sectionY + 100) {
                    updateTheme('sky-blue');
                    return;
                }
            }

            updateTheme(closestSection.theme);
        }

        // check from last to first to find the most recent section in progress
        for (let i = progresses.length - 1; i >= 0; i--) {
=======
    }).scrollYProgress;
=======
    });
>>>>>>> 4dcae18 (feat: Add default theme change before scroll)
    const section0Progress = useScroll({
        offset: ['80px end', 'end end'],
        target: sections[0]?.targetRef
    });
    const section1Progress = useScroll({
        offset: ['80px end', 'end end'],
        target: sections[1]?.targetRef
    });
    const section2Progress = useScroll({
        offset: ['80px end', 'end end'],
        target: sections[2]?.targetRef
    });
    // add in the default theme which shows in the header
    const sectionsWithDefault = useMemo(
        () => [{id: 'default', theme: 'sky-blue'}, ...sections],
        [sections]
    );

    const updateTheme = useCallback(
        (themeId: string) => {
            if (themeId === activeTheme.theme) return;
            if (!themeContainerRef.current) return;

            const theme = sectionsWithDefault.find(section => section.theme === themeId);
            if (!theme) return;

            setActiveTheme(theme);
            themeContainerRef.current.setAttribute('data-theme', theme.theme);
        },
        [activeTheme.theme, sectionsWithDefault, setActiveTheme]
    );

    const handleScroll = useCallback(() => {
        if (!themeContainerRef.current) return;

        const firstSectionProgress = section0Progress.scrollYProgress.get();

        // if the first element hasn't been scrolled yet, go back to default page theme
        if (firstSectionProgress === 0) {
            updateTheme('sky-blue');
            return;
        }

        // check sections in reverse order to find the current section being viewed
        // as user scrolls, earlier sections complete (progress = 1) and later sections become active
        const progresses = [
            firstSectionProgress,
            section1Progress.scrollYProgress.get(),
            section2Progress.scrollYProgress.get()
        ];

        // check from last to first to find the most recent section in progress
        for (let i = progresses.length - 1; i >= 0; i--) {
<<<<<<< HEAD
            console.log(progresses[i], sections[i]);
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)
=======
>>>>>>> 9a04b6b (chore: Remove logs)
            if (progresses[i] > 0 && sections[i]) {
                updateTheme(sections[i].theme);
                return;
            }
        }
<<<<<<< HEAD
<<<<<<< HEAD
    }, [
        containerScroll,
        section0Progress,
        section1Progress,
        section2Progress,
        sections,
        updateTheme
    ]);

    useMotionValueEvent(containerScroll.scrollYProgress, 'change', handleScroll);
=======
    });
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)
=======
    }, [section0Progress, section1Progress, section2Progress, sections, updateTheme]);

    useMotionValueEvent(containerScroll.scrollYProgress, 'change', handleScroll);
>>>>>>> 4dcae18 (feat: Add default theme change before scroll)

    useEffect(() => {
        const firstPageTheme = document.querySelector('[data-theme]');
        if (!firstPageTheme) return;
        themeContainerRef.current = firstPageTheme as HTMLDivElement;
<<<<<<< HEAD
<<<<<<< HEAD
        handleScroll();
    }, [handleScroll]);
=======
    }, []);
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)
=======
        handleScroll();
    }, [handleScroll]);
>>>>>>> 4dcae18 (feat: Add default theme change before scroll)
};

export default useTheme;
