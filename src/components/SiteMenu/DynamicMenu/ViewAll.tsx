'use client';

import {Link} from 'next-view-transitions';

interface Props {
    href: string;
    label: string;
}

const DynamicMenuViewAll: React.FC<Props> = ({href, label}) => (
    <Link
        className="group/link bg-secondary-button-bg text-theme-text hover:bg-accent focus-visible:ring-theme-text relative flex aspect-4/3 w-full flex-col items-center justify-center gap-2 rounded-sm border-2 border-transparent px-4 text-center transition-colors focus-visible:ring-2 focus-visible:outline-hidden"
        href={href}
        scroll={true}
    >
        <span className="text-sm font-medium tracking-tight uppercase sm:text-base">
            View all {label}
        </span>
    </Link>
);

export default DynamicMenuViewAll;
