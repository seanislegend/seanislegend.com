'use client';

import {useCallback, useEffect, useRef} from 'react';
import {useSetAtom} from 'jotai';
import Button from '@/components/Button';
import Markdown from '@/components/Markdown';
import Container from '@/components/UI/Container';
import {Heading1} from '@/components/UI/Headings';
import TitleTextGrid from '@/components/UI/TitleTextGrid';
import {getExternalUrl} from '@/utils/helpers';
import {pageHeaderDataAtom} from '@/utils/store';

interface Props {
    backUrl?: string;
    ctaLabel?: string;
    ctaUrl?: string;
    description?: string | null;
    pageTitle?: string;
    title?: string;
    titleAside?: React.ReactNode;
}

const PageHeader: React.FC<React.PropsWithChildren<Props>> = ({
    backUrl,
    children,
    ctaLabel,
    ctaUrl,
    description,
    pageTitle,
    title,
    titleAside
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const setPageHeaderData = useSetAtom(pageHeaderDataAtom);

    const updatePageHeaderData = useCallback(() => {
        if (containerRef.current && (pageTitle || title)) {
            setPageHeaderData({
                height: containerRef.current.offsetHeight - 60,
                path: backUrl ?? '',
                title: pageTitle ?? title ?? ''
            });
        }
    }, [backUrl, pageTitle, setPageHeaderData, title]);

    useEffect(() => {
        updatePageHeaderData();
    }, [updatePageHeaderData]);

    return (
        <Container>
            <div ref={containerRef} />
            <TitleTextGrid
                className="pt-6 pb-10 sm:py-12 xl:py-20"
                heading={
                    <>
                        <Heading1>{pageTitle || title}</Heading1>
                        {titleAside}
                    </>
                }
            >
                {description && (
                    <Markdown className="max-w-2xl text-pretty 2xl:max-w-5xl">
                        {description}
                    </Markdown>
                )}
                {ctaLabel && ctaUrl && (
                    <Button
                        className="mt-6 print:hidden"
                        href={getExternalUrl(ctaUrl)}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {ctaLabel}
                    </Button>
                )}
                {children && children}
            </TitleTextGrid>
        </Container>
    );
};

export default PageHeader;
