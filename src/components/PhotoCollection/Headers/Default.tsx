import {Suspense} from 'react';
import PageHeader from '@/components/PageHeader';
import BackToCollectionButton from '@/components/PageHeader/BackToCollectionButton';

export interface Props {
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

export default DefaultHeader;
