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
            className="grid gap-4 pb-10 pt-6 duration-700 animate-in fade-in slide-in-from-bottom-4 sm:grid-cols-12 sm:gap-8 sm:pb-12 sm:pt-16  xl:pb-20"
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
                        <h1 className="max-w-5xl space-x-2 text-balance break-normal font-serif text-3xl leading-tight text-[var(--title-text)] underline-offset-4 group-hover:underline md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-[var(--dark-title-text)]">
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
                        <Markdown className="leading max-w-2xl text-pretty pr-10 leading-relaxed dark:prose-invert prose-p:tracking-[.0185rem] lg:leading-[1.7] 2xl:max-w-5xl 2xl:prose-p:text-[17px] dark:prose-p:text-[var(--dark-dimmed-text)]">
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
