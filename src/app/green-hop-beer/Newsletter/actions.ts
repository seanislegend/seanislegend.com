'use server';

import {track} from '@vercel/analytics/server';
<<<<<<< HEAD
<<<<<<< HEAD
import {checkBotId} from 'botid/server';
=======
>>>>>>> db8bfdd (feat: Add newsletter subscribe)
=======
import {checkBotId} from 'botid/server';
>>>>>>> 58f3253 (feat: Add Botid to newsletter)
import {Resend} from 'resend';
import isEmail from 'validator/es/lib/isEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export type SubscribeState = {
    success: boolean;
    message: string;
    error?: boolean;
};

export const subscribeToNewsletter = async (
    prevState: SubscribeState | null,
    formData: FormData
): Promise<SubscribeState> => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 58f3253 (feat: Add Botid to newsletter)
    const verification = await checkBotId();
    if (verification.isBot) {
        return {
            success: false,
            error: true,
            message: 'Access denied'
        };
    }

<<<<<<< HEAD
=======
>>>>>>> db8bfdd (feat: Add newsletter subscribe)
=======
>>>>>>> 58f3253 (feat: Add Botid to newsletter)
    const email = formData.get('email') as string;

    try {
        if (!isEmail(email)) {
            return {
                error: true,
                message: 'Invalid email address',
                success: false
            };
        }

        await resend.contacts.create({
            audienceId: process.env.RESEND_AUDIENCE_ID,
            email
        });
        await track('green-hop-beer-newsletter-subscribe', {
            date: new Date().toISOString()
        });

        return {
            success: true,
            message: 'Successfully subscribed! '
        };
    } catch (error) {
        return {
            success: false,
            error: true,
            message: 'Failed to subscribe. Please try again later.'
        };
    }
};
