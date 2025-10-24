'use server';

import {track} from '@vercel/analytics/server';
import {checkBotId} from 'botid/server';
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
    const verification = await checkBotId();
    if (verification.isBot) {
        return {
            success: false,
            error: true,
            message: 'Access denied'
        };
    }

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
