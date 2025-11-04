'use client';

import {useFormStatus} from 'react-dom';
<<<<<<< HEAD
import clsx from 'clsx';
=======
>>>>>>> db8bfdd (feat: Add newsletter subscribe)
import Button from '@/components/Button';

const SubmitButton = () => {
    const {pending} = useFormStatus();

    return (
<<<<<<< HEAD
        <Button
            className={clsx('h-full shrink-0', {'pointer-events-none animate-pulse': pending})}
            disabled={pending}
            theme="black"
            type="submit"
        >
            Submit
=======
        <Button className="h-full" disabled={pending} theme="black" type="submit">
            {pending ? 'Just a moment...' : 'Submit'}
>>>>>>> db8bfdd (feat: Add newsletter subscribe)
        </Button>
    );
};

export default SubmitButton;
