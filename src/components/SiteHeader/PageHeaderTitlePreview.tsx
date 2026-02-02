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
            className={clsx(
                'hidden max-w-full min-w-0 overflow-hidden transition-all duration-300 lg:inline-flex',
                {
                    'pointer-events-none -translate-x-2 opacity-0': !isScrolled,
                    'translate-x-0 opacity-100': isScrolled
                }
            )}
            data-testid="page-header-title-preview"
        >
            <span className="mx-2 shrink-0">&mdash;</span>
            <span className="flex min-w-0 overflow-hidden">
                <Condition
                    condition={pageHeaderData.path && !isPathEqualToPageHeaderPath}
                    fallbackWrapper={children => (
                        <span className="block max-w-full min-w-0 truncate">{children}</span>
                    )}
                    wrapper={children => (
                        <Link
                            className="group relative inline-block max-w-full min-w-0 truncate underline underline-offset-4 hover:underline"
                            href={pageHeaderData.path}
                        >
                            <span className="sm:group-o absolute top-0 bottom-0 left-0 flex translate-x-2 items-center gap-1 opacity-0 blur-xs duration-300 ease-in-out sm:group-hover:translate-x-0 sm:group-hover:opacity-100 sm:group-hover:blur-none">
                                <LeftArrowIcon className="h-5 w-5 fill-current" />
                                <span>Go to collection</span>
                            </span>
                            <span className="block truncate duration-300 ease-in-out sm:group-hover:translate-x-1 sm:group-hover:opacity-0 sm:group-hover:blur-xs">
                                {children}
                            </span>
                        </Link>
                    )}
                >
                    {pageHeaderData.title}
                </Condition>
            </span>
        </span>
    );
};

export default PageHeaderTitlePreview;
