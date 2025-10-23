import {Suspense} from 'react';
import Markdown from '@/components/Markdown';
import PageHeader from '@/components/PageHeader';
import BackToCollectionButton from '@/components/PageHeader/BackToCollectionButton';
import Container from '@/components/UI/Container';

interface Props {
    collection: PhotoCollection;
    ctas?: {label: string; url: string}[];
}

const DefaultHeader: React.FC<React.PropsWithChildren<Props>> = ({children, collection, ctas}) => (
    <PageHeader
        {...collection}
        backUrl={`/${collection.slug}`}
        ctas={(ctas?.filter(Boolean) as {label: string; url: string}[]) ?? []}
        description={collection?.showDescription ? collection.description : null}
        titleAside={
            <div className="hidden grow flex-col justify-end md:flex" key={collection.slug}>
                <Suspense>
                    <BackToCollectionButton />
                </Suspense>
            </div>
        }
    >
        {children}
    </PageHeader>
);

const GreenHopHeader: React.FC<React.PropsWithChildren<Props>> = ({collection}) => {
    const title1 = collection.pageTitle?.split(':')[0];
    const title2 = collection.pageTitle?.split(':')[1];

    return (
        <Container className="pt-6 pb-10 sm:py-12 xl:py-20">
            <h1 className="text-title-text overflow-hidden leading-none whitespace-nowrap uppercase underline-offset-4 group-hover:underline">
                <span
                    className="block font-extrabold tracking-tight"
                    style={{fontSize: 'clamp(2.8rem, 9.3vw, 9.3vw)'}}
                >
                    {title1}
                </span>
                <span className="mt-1 block" style={{fontSize: 'clamp(1rem, 4vw, 9vw)'}}>
                    {title2}
                </span>
            </h1>

            {collection.description && (
                <Markdown className="mt-12 max-w-2xl text-pretty 2xl:max-w-5xl">
                    {collection.description}
                </Markdown>
            )}
        </Container>
    );
};

const photoCollectionHeaders: Record<string, React.FC<React.PropsWithChildren<Props>>> = {
    default: DefaultHeader,
    greenHop: GreenHopHeader
};

export default photoCollectionHeaders;
