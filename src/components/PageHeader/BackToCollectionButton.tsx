'use client';

import Link from 'next/link';
import {useParams} from 'next/navigation';
import {LeftArrowIcon} from '@/components/Icon';

const BackToCollectionButton: React.FC = () => {
    const params = useParams<{collection: string; photo?: string}>();
    if (!params.photo) return null;

    return (
        <Link
            className="flex-shrink text-sm font-medium underline underline-offset-4 duration-300 ease-in-out animate-in fade-in hover:decoration-2 sm:text-base"
            href={`/${params.collection}#${params.photo}`}
        >
            Back to all photos
        </Link>
    );
};

export default BackToCollectionButton;
