'use client';

import {useRouter} from 'next/navigation';
import Button from '@/components/Button';

const Close: React.FC = () => {
    const router = useRouter();

    const handleClose = () => router.back();

    return (
        <Button
            className="absolute -bottom-4 left-0 right-0 mx-auto w-fit text-xs"
            onClick={handleClose}
        >
            Close
        </Button>
    );
};

export default Close;
