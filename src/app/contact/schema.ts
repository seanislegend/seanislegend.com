import {z} from 'zod';

export const enquiryTypes = ['prints', 'hiring', 'other'] as const;
export type EnquiryType = (typeof enquiryTypes)[number];

const baseSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    enquiryType: z.enum(enquiryTypes, {message: 'Please select an enquiry type'})
});

const printsSchema = baseSchema.extend({
    enquiryType: z.literal('prints'),
    photoDetails: z
        .string()
        .min(1, 'Please specify which photo(s) you are interested in and your preferred size')
});

const hiringSchema = baseSchema.extend({
    enquiryType: z.literal('hiring'),
    company: z.string().min(1, 'Company is required'),
    location: z.string().min(1, 'Location is required'),
    budget: z.string().min(1, 'Budget is required'),
    description: z.string().min(1, 'Please describe the job')
});

const otherSchema = baseSchema.extend({
    enquiryType: z.literal('other'),
    message: z.string().min(1, 'Please enter a message')
});

export const contactSchema = z.discriminatedUnion('enquiryType', [
    printsSchema,
    hiringSchema,
    otherSchema
]);

export type ContactFormData = z.infer<typeof contactSchema>;
