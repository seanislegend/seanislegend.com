'use client';

import {useFormStatus} from 'react-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import clsx from 'clsx';
=======
>>>>>>> db8bfdd (feat: Add newsletter subscribe)
=======
import clsx from 'clsx';
>>>>>>> 66a82b6 (feat: Simplify pending state)
import Button from '@/components/Button';

const SubmitButton = () => {
    const {pending} = useFormStatus();

    return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 66a82b6 (feat: Simplify pending state)
        <Button
            className={clsx('h-full shrink-0', {'pointer-events-none animate-pulse': pending})}
            disabled={pending}
            theme="black"
            type="submit"
        >
            Submit
<<<<<<< HEAD
=======
        <Button className="h-full" disabled={pending} theme="black" type="submit">
            {pending ? 'Just a moment...' : 'Submit'}
>>>>>>> db8bfdd (feat: Add newsletter subscribe)
=======
>>>>>>> 66a82b6 (feat: Simplify pending state)
        </Button>
    );
};

export default SubmitButton;
