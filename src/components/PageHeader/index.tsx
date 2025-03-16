'use client';

import {useCallback, useEffect, useRef} from 'react';
import {useSetAtom} from 'jotai';
import Button from '@/components/Button';
import Markdown from '@/components/Markdown';
import Container from '@/components/UI/Container';
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
        <Container asChild>
            <div
                className="grid grid-cols-12 gap-4 pt-6 pb-10 sm:gap-8 sm:py-12 xl:py-20"
                ref={containerRef}
            >
                {title && (
                    <>
                        <div className="col-span-12 flex flex-col space-y-4 md:col-span-6">
                            <h1 className="text-title-text max-w-5xl space-x-2 text-2xl leading-tight font-medium text-balance break-normal uppercase underline-offset-4 group-hover:underline md:text-3xl md:leading-tight lg:text-4xl">
                                <span>{pageTitle || title}</span>
                            </h1>
                            {titleAside}
                        </div>
                        <div className="col-span-2 sm:col-span-4 md:hidden" />
                    </>
                )}
                {(children || description || ctaUrl) && (
                    <>
                        <div className="hidden xl:col-span-1 xl:block" />
                        <div
                            className="col-span-10 sm:col-span-8 md:col-span-6 xl:col-span-5"
                            key={description || children?.toString()}
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
                        </div>
                    </>
                )}
            </div>
        </Container>
    );
};

export default PageHeader;
