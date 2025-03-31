import React from 'react';
import clsx from 'clsx';
import {useAtomValue} from 'jotai';
import {Link} from 'next-view-transitions';
import {usePathname} from 'next/navigation';
import {LeftArrowIcon} from '@/components/Icon/LeftArrow';
import Condition from '@/components/UI/Condition';
import useScrollStatus from '@/hooks/useScrollStatus';
import {pageHeaderDataAtom} from '@/utils/store';

const PageHeaderTitlePreview: React.FC = () => {
    const pathname = usePathname();
    const pageHeaderData = useAtomValue(pageHeaderDataAtom);
    const {isScrolled} = useScrollStatus(pageHeaderData?.height);

    if (!pageHeaderData) return null;

    const pageHeaderPathMinusAnchor = pageHeaderData.path.split('#')[0];
    const isPathEqualToPageHeaderPath = pathname === pageHeaderPathMinusAnchor;

    return (
        <span
            className={clsx('hidden truncate transition duration-300 md:inline-flex', {
                'pointer-events-none -translate-x-2 opacity-0': !isScrolled,
                'translate-x-0 opacity-100': isScrolled
            })}
        >
            <span className="mx-4">&mdash;</span>
            <Condition
                condition={pageHeaderData.path && !isPathEqualToPageHeaderPath}
                wrapper={children => (
                    <Link
                        className="group relative inline-block truncate underline underline-offset-4 hover:underline"
                        href={pageHeaderData.path}
                    >
                        <span className="sm:group-o absolute top-0 bottom-0 left-0 flex translate-x-2 items-center gap-1 opacity-0 blur-xs duration-300 ease-in-out sm:group-hover:translate-x-0 sm:group-hover:opacity-100 sm:group-hover:blur-none">
                            <LeftArrowIcon className="h-5 w-5 fill-current" />
                            <span>Go to collection</span>
                        </span>
                        <span className="duration-500 ease-in-out sm:group-hover:translate-x-1 sm:group-hover:opacity-0 sm:group-hover:blur-xs sm:group-hover:duration-200">
                            {children}
                        </span>
                    </Link>
                )}
            >
                {pageHeaderData.title}
            </Condition>
        </span>
    );
};

export default PageHeaderTitlePreview;
