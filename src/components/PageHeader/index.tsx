import Link from 'next/link';
import Button from '@/components/Button';
import Markdown from '@/components/Markdown';
import Condition from '@/components/UI/Condition';
import Container from '@/components/UI/Container';
import {getExternalUrl} from '@/utils/helpers';

export interface Props {
    backUrl?: string;
    ctaLabel?: string;
    ctaUrl?: string;
    description?: string | null;
    hasBottomPadding?: boolean;
    pageTitle?: string | React.ReactNode;
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
}) => (
    <Container asChild>
        <div
            className="grid grid-cols-12 gap-4 py-6 duration-700 animate-in fade-in slide-in-from-bottom-4 sm:gap-8 sm:py-12 xl:py-20"
            id="hero"
        >
            {title && (
                <>
                    <div className="col-span-12 md:col-span-6">
                        <Condition
                            condition={!!backUrl}
                            wrapper={children => (
                                <Link
                                    className="underline-offset-4 hover:underline"
                                    href={backUrl!}
                                >
                                    {children}
                                </Link>
                            )}
                        >
                            <h1 className="max-w-5xl space-x-2 text-balance break-normal text-3xl font-medium uppercase leading-tight text-[var(--title-text)] underline-offset-4 group-hover:underline md:text-4xl md:leading-tight dark:text-[var(--dark-title-text)]">
                                <span>{pageTitle || title}</span>
                            </h1>
                        </Condition>
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
                                className="mt-6"
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

export default PageHeader;
