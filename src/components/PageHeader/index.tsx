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
    pageTitle?: string;
    title?: string;
}

const PageHeader: React.FC<React.PropsWithChildren<Props>> = ({
    backUrl,
    children,
    ctaLabel,
    ctaUrl,
    description,
    pageTitle,
    title
}) => (
    <Container asChild>
        <div
            className="grid gap-4 pb-10 pt-6 sm:grid-cols-12 sm:gap-8 sm:pb-12 sm:pt-16 xl:pb-20"
            id="hero"
        >
            {title && (
                <div className="col-span-6">
                    <Condition
                        condition={!!backUrl}
                        wrapper={children => (
                            <Link className="underline-offset-4 hover:underline" href={backUrl!}>
                                {children}
                            </Link>
                        )}
                    >
                        <h1 className="max-w-5xl space-x-2 text-balance break-normal font-serif text-3xl leading-tight text-[var(--title-text)] underline-offset-4 group-hover:underline md:text-4xl md:leading-tight  lg:text-5xl lg:leading-tight dark:text-[var(--dark-title-text)]">
                            <span>{pageTitle || title}</span>
                        </h1>
                    </Condition>
                </div>
            )}
            {(children || description || ctaUrl) && (
                <div
                    className="col-span-6 place-content-end"
                    key={description || children?.toString()}
                >
                    {description && (
                        <Markdown className="prose-sm max-w-2xl text-balance leading-relaxed tracking-wide lg:prose-base dark:prose-invert lg:max-w-5xl lg:prose-p:leading-relaxed lg:prose-p:tracking-wide dark:prose-p:text-gray-400">
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
            )}
        </div>
    </Container>
);

export default PageHeader;
