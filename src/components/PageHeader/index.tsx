import clsx from 'clsx';
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
        <div className="grid grid-cols-12 pb-16 pt-20" id="hero">
            {title && (
                <div className="col-span-6">
                    <Condition
                        condition={backUrl}
                        wrapper={children => <Link href={backUrl}>{children}</Link>}
                    >
                        <h1 className="max-w-5xl space-x-2 text-balance break-normal font-serif text-xl leading-tight text-sean-black underline-offset-4 group-hover:underline sm:text-2xl md:text-5xl md:leading-tight dark:text-white">
                            <span>{pageTitle || title}</span>
                        </h1>
                    </Condition>
                </div>
            )}
            {(children || description || ctaUrl) && (
                <div className="col-span-5" key={description || children?.toString()}>
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
