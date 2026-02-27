'use server';

import {contactSchema} from './schema';

export type ContactState = {
    success: boolean;
    message: string;
    error?: boolean;
    fieldErrors?: Record<string, string[]>;
};

export const submitContactForm = async (
    prevState: ContactState | null,
    formData: FormData
): Promise<ContactState> => {
    const raw = Object.fromEntries(formData.entries());
    const result = contactSchema.safeParse(raw);

    if (!result.success) {
        return {
            success: false,
            error: true,
            message: 'Please fix the errors below.',
            fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]>
        };
    }

    try {
        // TODO: Send email via Resend or other service
        console.log('Contact form submission:', result.data);

        return {
            success: true,
            message: "Thanks for reaching out! I'll get back to you soon."
        };
    } catch {
        return {
            success: false,
            error: true,
            message: 'Something went wrong. Please try again later.'
        };
    }
};
