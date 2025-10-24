import {useEffect, useEffectEvent} from 'react';
import {useSetAtom} from 'jotai';
import {pageHeaderDataAtom} from '@/utils/store';

const useSiteHeaderTitle = (
    containerRef: React.RefObject<HTMLDivElement | null>,
    pageTitle: string,
    title: string,
    backUrl: string
) => {
    const setPageHeaderData = useSetAtom(pageHeaderDataAtom);

    const updatePageHeaderData = useEffectEvent(() => {
        if (containerRef?.current && (pageTitle || title)) {
            setPageHeaderData({
                height: containerRef.current.offsetHeight - 60,
                path: backUrl ?? '',
                title: pageTitle ?? title ?? ''
            });
        }
    });

    useEffect(() => {
        updatePageHeaderData();
    }, [updatePageHeaderData]);
};

export default useSiteHeaderTitle;
