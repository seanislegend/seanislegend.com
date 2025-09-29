'use client';

import {useCallback, useEffect, useRef} from 'react';
import {useSetAtom} from 'jotai';
import Markdown from '@/components/Markdown';
import PageHeaderButtonList from '@/components/PageHeader/ButtonList';
import Container from '@/components/UI/Container';
import {Heading1} from '@/components/UI/Headings';
import TitleTextGrid from '@/components/UI/TitleTextGrid';
import {pageHeaderDataAtom} from '@/utils/store';

interface Props {
    backUrl?: string;
    ctas?: {
        label: string;
        url: string;
    }[];
    description?: string | null;
    pageTitle?: string;
    title?: string;
    titleAside?: React.ReactNode;
}

const PageHeader: React.FC<React.PropsWithChildren<Props>> = ({
    backUrl,
    children,
    ctas,
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
            <TitleTextGrid
                className="pt-6 pb-10 sm:py-12 xl:py-20"
                heading={
                    <>
                        <Heading1>{pageTitle || title}</Heading1>
                        {titleAside}
                    </>
                }
                ref={containerRef}
            >
                {description && (
                    <Markdown className="max-w-2xl text-pretty 2xl:max-w-5xl">
                        {description}
                    </Markdown>
                )}
                {ctas && ctas?.length > 0 && <PageHeaderButtonList ctas={ctas} />}
                {children && children}
            </TitleTextGrid>
        </Container>
    );
};

export default PageHeader;
