'use server';

import {Resend} from 'resend';
import {type ContactFormData, contactSchema, enquiryLabels} from './schema';

export type ContactState = {
    error?: boolean;
    fieldErrors?: Record<string, string[]>;
    message: string;
    success: boolean;
};

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const errorResponse: ContactState = {
    error: true,
    message: 'Something went wrong. Please try again later.',
    success: false
};

const buildEmailPayload = (data: ContactFormData) => {
    const extraRows =
        data.enquiryType === 'hiring'
            ? [
                  {label: 'Company', value: data.company},
                  {label: 'Role / project', value: data.description},
                  {label: 'Location', value: data.location},
                  {label: 'Budget', value: data.budget || '—'}
              ]
            : data.enquiryType === 'other'
              ? [{label: 'Message', value: data.message}]
              : [{label: 'Photo details', value: data.photoDetails}];

    const rows = [
        {label: 'Name', value: data.name},
        {label: 'Email', value: data.email},
        {label: 'Enquiry type', value: enquiryLabels[data.enquiryType]},
        ...extraRows
    ];

    return {
        subject: `Contact form: ${enquiryLabels[data.enquiryType]}`,
        text: rows.map(({label, value}) => `${label}: ${value}`).join('\n\n')
    };
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

    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!resend || !from || !to) return errorResponse;

    try {
        const {subject, text} = buildEmailPayload(result.data);
        const {error} = await resend.emails.send({
            from,
            replyTo: result.data.email,
            subject,
            text,
            to: [to]
        });

        if (error) {
            console.error('resend contact form:', error);
            return errorResponse;
        }

        return {message: "Thank you! I'll be in touch soon.", success: true};
    } catch (err) {
        console.error('contact form submit:', err);
        return errorResponse;
    }
};
