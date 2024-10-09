import React from 'react';
import clsx from 'clsx';
import {useAtomValue} from 'jotai';
import Link from 'next/link';
import Condition from '@/components/UI/Condition';
import useScrollStatus from '@/hooks/useScrollStatus';
import {pageHeaderDataAtom} from '@/utils/store';

const PageHeaderTitlePreview: React.FC = () => {
    const pageHeaderData = useAtomValue(pageHeaderDataAtom);
    const {isScrolled} = useScrollStatus(pageHeaderData?.height);

    if (!pageHeaderData) return null;

    return (
        <span
            className={clsx('hidden truncate transition duration-300 md:inline-flex', {
                'pointer-events-none -translate-x-2 opacity-0': !isScrolled,
                'translate-x-0 opacity-100': isScrolled
            })}
        >
            <span className="mx-4">&mdash;</span>
            <Condition
                condition={pageHeaderData.path}
                wrapper={children => (
                    <Link
                        className="inline-block truncate underline-offset-4 hover:underline"
                        href={pageHeaderData.path}
                    >
                        {children}
                    </Link>
                )}
            >
                {pageHeaderData.title}
            </Condition>
        </span>
    );
};

export default PageHeaderTitlePreview;
