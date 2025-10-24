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
        <Container className="animate-in fade-in slide-in-from-bottom-2 pt-6 pb-10 duration-500 sm:py-12 xl:py-20">
            <h1 className="text-title-text overflow-hidden leading-none uppercase underline-offset-4 group-hover:underline sm:whitespace-nowrap">
                <span
                    className="block font-extrabold tracking-tight text-pretty 2xl:!text-[7.3rem]"
                    style={{fontSize: 'clamp(2.8rem, 7.9vw, 12vw)'}}
                >
                    {title1}
                </span>
                <span className="mt-2 block" style={{fontSize: 'clamp(1.5rem, 3vw, 9vw)'}}>
                    {title2}
                    <span className="sm:text-md ml-2 text-sm opacity-50 lg:text-lg">
                        Autumn 2025
                    </span>
                </span>
            </h1>
            {/* 
            {collection.description && (
                <Markdown className="mt-12 max-w-2xl text-pretty 2xl:max-w-5xl">
                    {collection.description}
                </Markdown>
            )} */}
        </Container>
    );
};

const photoCollectionHeaders: Record<string, React.FC<React.PropsWithChildren<Props>>> = {
    default: DefaultHeader,
    greenHop: GreenHopHeader
};

export default photoCollectionHeaders;
