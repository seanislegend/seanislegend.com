'use client';

import {useRef} from 'react';
import Markdown from '@/components/Markdown';
import PageHeaderButtonList from '@/components/PageHeader/ButtonList';
import Container from '@/components/UI/Container';
import {Heading1} from '@/components/UI/Headings';
import TitleTextGrid from '@/components/UI/TitleTextGrid';
import useSiteHeaderTitle from '@/hooks/useSiteHeaderTitle';

interface Props {
    backUrl?: string;
    ctas?: {
        label: string;
        url: string;
    }[];
    description?: string | null;
    pageTitle?: string;
    subtitle?: string;
    title?: string;
    titleAside?: React.ReactNode;
}

const PageHeader: React.FC<React.PropsWithChildren<Props>> = ({
    backUrl,
    children,
    ctas,
    description,
    pageTitle,
    subtitle,
    title,
    titleAside
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useSiteHeaderTitle(containerRef, pageTitle || '', title || '', backUrl || '');

    return (
        <Container>
            <TitleTextGrid
                className="pt-6 pb-10 sm:py-12 xl:py-20"
                heading={
                    <>
                        {subtitle && (
                            <span className="mb-2 block text-sm font-medium text-gray-500 uppercase sm:absolute sm:-top-6">
                                {subtitle}
                            </span>
                        )}
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
