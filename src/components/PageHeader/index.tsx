import Button from '@/components/Button';
import Markdown from '@/components/Markdown';
import Container from '@/components/UI/Container';
import {getExternalUrl} from '@/utils/helpers';

interface Props {
    ctaLabel?: string;
    ctaUrl?: string;
    description?: string | null;
    pageTitle?: string | React.ReactNode;
    title?: string;
    titleAside?: React.ReactNode;
}

const PageHeader: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    ctaLabel,
    ctaUrl,
    description,
    pageTitle,
    title,
    titleAside
}) => (
    <Container asChild>
        <div className="grid grid-cols-12 gap-4 pb-10 pt-6 sm:gap-8 sm:py-12 xl:py-20" id="hero">
            {title && (
                <>
                    <div className="col-span-12 md:col-span-6">
                        <h1 className="max-w-5xl space-x-2 text-balance break-normal text-2xl font-medium uppercase leading-tight text-[var(--title-text)] underline-offset-4 group-hover:underline md:text-4xl md:leading-tight">
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
