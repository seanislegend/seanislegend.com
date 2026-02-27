'use client';

import {useActionState} from 'react';
import {type FieldError, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import clsx from 'clsx';
import Button from '@/components/Button';
import {type ContactFormData, contactSchema, type EnquiryType, enquiryTypes} from './schema';
import {type ContactState, submitContactForm} from './actions';

const inputStyles =
    'border-accent block w-full rounded border-2 bg-transparent px-3 py-2.5 text-base text-theme-text placeholder:text-dimmed-text focus:ring-2 focus:ring-white/20 focus:outline-none';
const errorInputStyles = 'border-red-400 bg-red-950/20';
const labelStyles = 'mb-1.5 block text-sm font-medium tracking-wide uppercase';

const enquiryLabels: Record<EnquiryType, string> = {
    prints: 'Prints',
    hiring: 'Hiring',
    other: 'Other'
};

const ContactForm = () => {
    const [state, formAction, isPending] = useActionState<ContactState | null, FormData>(
        submitContactForm,
        null
    );

    const {
        register,
        watch,
        formState: {errors: rawErrors}
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: 'onTouched'
    });

    const errors = rawErrors as Record<string, FieldError | undefined>;

    const enquiryType = watch('enquiryType');
    const wasSubmitted = state?.success && !state?.error;

    if (wasSubmitted) {
        return (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <p className="text-lg">{state.message}</p>
            </div>
        );
    }

    return (
        <form action={formAction} className="max-w-xl space-y-6">
            {state?.error && (
                <p className="text-sm text-red-400">{state.message}</p>
            )}

            <div>
                <label className={labelStyles} htmlFor="name">
                    Name
                </label>
                <input
                    {...register('name')}
                    className={clsx(inputStyles, errors.name && errorInputStyles)}
                    id="name"
                    placeholder="Your name"
                    type="text"
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
            </div>

            <div>
                <label className={labelStyles} htmlFor="email">
                    Email
                </label>
                <input
                    {...register('email')}
                    className={clsx(inputStyles, errors.email && errorInputStyles)}
                    id="email"
                    placeholder="you@example.com"
                    type="email"
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
            </div>

            <div>
                <label className={labelStyles} htmlFor="enquiryType">
                    Enquiry type
                </label>
                <select
                    {...register('enquiryType')}
                    className={clsx(inputStyles, errors.enquiryType && errorInputStyles)}
                    id="enquiryType"
                >
                    <option value="">Select an option</option>
                    {enquiryTypes.map((type) => (
                        <option key={type} value={type}>
                            {enquiryLabels[type]}
                        </option>
                    ))}
                </select>
                {errors.enquiryType && (
                    <p className="mt-1 text-sm text-red-400">{errors.enquiryType.message}</p>
                )}
            </div>

            {enquiryType === 'prints' && (
                <div className="animate-in fade-in slide-in-from-bottom-1 duration-300">
                    <label className={labelStyles} htmlFor="photoDetails">
                        Photo & size details
                    </label>
                    <p className="text-dimmed-text mb-2 text-sm">
                        Please specify which photo(s) you're interested in and your preferred print
                        size (e.g. A4, A3, A2).
                    </p>
                    <textarea
                        {...register('photoDetails')}
                        className={clsx(inputStyles, 'min-h-28 resize-y', errors.photoDetails && errorInputStyles)}
                        id="photoDetails"
                        placeholder='e.g. "Sunset at South Bank" in A3'
                    />
                    {errors.photoDetails && (
                        <p className="mt-1 text-sm text-red-400">
                            {errors.photoDetails.message}
                        </p>
                    )}
                </div>
            )}

            {enquiryType === 'hiring' && (
                <div className="animate-in fade-in slide-in-from-bottom-1 space-y-6 duration-300">
                    <div>
                        <label className={labelStyles} htmlFor="company">
                            Company
                        </label>
                        <input
                            {...register('company')}
                            className={clsx(inputStyles, errors.company && errorInputStyles)}
                            id="company"
                            placeholder="Company name"
                            type="text"
                        />
                        {errors.company && (
                            <p className="mt-1 text-sm text-red-400">
                                {errors.company.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className={labelStyles} htmlFor="location">
                            Location
                        </label>
                        <input
                            {...register('location')}
                            className={clsx(inputStyles, errors.location && errorInputStyles)}
                            id="location"
                            placeholder="City or remote"
                            type="text"
                        />
                        {errors.location && (
                            <p className="mt-1 text-sm text-red-400">
                                {errors.location.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className={labelStyles} htmlFor="budget">
                            Budget
                        </label>
                        <input
                            {...register('budget')}
                            className={clsx(inputStyles, errors.budget && errorInputStyles)}
                            id="budget"
                            placeholder="Approximate budget"
                            type="text"
                        />
                        {errors.budget && (
                            <p className="mt-1 text-sm text-red-400">
                                {errors.budget.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className={labelStyles} htmlFor="description">
                            Job description
                        </label>
                        <textarea
                            {...register('description')}
                            className={clsx(inputStyles, 'min-h-28 resize-y', errors.description && errorInputStyles)}
                            id="description"
                            placeholder="Tell me about the project"
                        />
                        {errors.description && (
                            <p className="mt-1 text-sm text-red-400">
                                {errors.description.message}
                            </p>
                        )}
                    </div>
                </div>
            )}

            {enquiryType === 'other' && (
                <div className="animate-in fade-in slide-in-from-bottom-1 duration-300">
                    <label className={labelStyles} htmlFor="message">
                        Message
                    </label>
                    <textarea
                        {...register('message')}
                        className={clsx(inputStyles, 'min-h-28 resize-y', errors.message && errorInputStyles)}
                        id="message"
                        placeholder="What's on your mind?"
                    />
                    {errors.message && (
                        <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                    )}
                </div>
            )}

            {enquiryType && (
                <div className="animate-in fade-in duration-300">
                    <Button
                        className={clsx({'pointer-events-none animate-pulse': isPending})}
                        disabled={isPending}
                        theme="primary"
                        type="submit"
                    >
                        {isPending ? 'Sending...' : 'Send enquiry'}
                    </Button>
                </div>
            )}
        </form>
    );
};

export default ContactForm;
