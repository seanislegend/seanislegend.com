import {z} from 'zod';

export const enquiryTypes = ['other', 'hiring', 'prints'] as const;
export type EnquiryType = (typeof enquiryTypes)[number];

const baseSchema = z.object({
    name: z.string().min(1, "What's your name?"),
    email: z.string().email("That email address doesn't look right."),
    enquiryType: z.enum(enquiryTypes, {message: 'What do you want to chat about?'})
});

const printsSchema = baseSchema.extend({
    enquiryType: z.literal('prints'),
    photoDetails: z
        .string()
        .min(1, "Which photo and what size? I'll need that to put together a quote.")
});

const hiringSchema = baseSchema.extend({
    budget: z.string(),
    company: z.string().min(1, 'Which company or organisation is this for?'),
    description: z.string().min(1, 'What is the role or project? A couple of lines is enough.'),
    enquiryType: z.literal('hiring'),
    location: z.string().min(1, "Where's this based?")
});

const otherSchema = baseSchema.extend({
    enquiryType: z.literal('other'),
    message: z.string().min(1, 'What did you want to say?')
});

export const contactSchema = z.discriminatedUnion('enquiryType', [
    printsSchema,
    hiringSchema,
    otherSchema
]);

export type ContactFormData = z.infer<typeof contactSchema>;
