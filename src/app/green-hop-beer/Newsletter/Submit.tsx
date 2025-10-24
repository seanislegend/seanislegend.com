'use client';

import {useFormStatus} from 'react-dom';
import clsx from 'clsx';
import Button from '@/components/Button';

const SubmitButton = () => {
    const {pending} = useFormStatus();

    return (
        <Button
            className={clsx('h-full shrink-0', {'pointer-events-none animate-pulse': pending})}
            disabled={pending}
            theme="black"
            type="submit"
        >
            Submit
        </Button>
    );
};

export default SubmitButton;
