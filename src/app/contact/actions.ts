'use server';

import {contactSchema} from './schema';

export type ContactState = {
    error?: boolean;
    fieldErrors?: Record<string, string[]>;
    message: string;
    success: boolean;
};

export const submitContactForm = async (
    prevState: ContactState | null,
    formData: FormData
): Promise<ContactState> => {
    const raw = Object.fromEntries(formData.entries());
    const result = contactSchema.safeParse(raw);

    if (!result.success) {
        return {
            error: true,
            fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]>,
            message: '',
            success: false
        };
    }

    try {
        // TODO: Send email via resend
        console.log('Contact form submission:', result.data);

        return {message: "Thank you! I'll be in touch soon.", success: true};
    } catch {
        return {
            error: true,
            message: 'Something went wrong. Please try again later.',
            success: false
        };
    }
};
