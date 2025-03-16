'use client';

import {useCallback, useEffect} from 'react';
import {useSetAtom} from 'jotai';
import {Link} from 'next-view-transitions';
import {useParams} from 'next/navigation';
import {pageHeaderDataAtom} from '@/utils/store';

const BackToCollectionButton: React.FC = () => {
    const setPageHeaderData = useSetAtom(pageHeaderDataAtom);
    const params = useParams<{collection: string; photo?: string}>();

    const path = `/${params.collection}#${params.photo}`;

    const updatePageHeaderData = useCallback(() => {
        if (params.photo) {
            setPageHeaderData(prev => ({...prev, path}));
        }
    }, [params.photo, path, setPageHeaderData]);

    useEffect(() => {
        updatePageHeaderData();
    }, [updatePageHeaderData]);

    if (!params.photo) return null;

    return (
        <span>
            <Link
                className="focus:ring-offset-2text-sm animate-in fade-in focus:ring-theme-text font-medium underline underline-offset-4 duration-300 ease-in-out hover:decoration-2 focus:ring-2 focus:outline-hidden sm:text-base print:hidden"
                href={path}
            >
                Back to all photos
            </Link>
        </span>
    );
};

export default BackToCollectionButton;
