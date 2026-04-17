'use client';

import {useActionState, useEffect} from 'react';
import {Controller, type FieldError, type Path, useForm, useWatch} from 'react-hook-form';
import {Radio} from '@base-ui/react/radio';
import {RadioGroup} from '@base-ui/react/radio-group';
import {zodResolver} from '@hookform/resolvers/zod';
import clsx from 'clsx';
import Button from '@/components/Button';
import FormField, {
    FieldErrorMessage,
    FormErrorBanner,
    getFieldControlClassName
} from '@/components/FormField';
import {type ContactState, submitContactForm} from './actions';
import {type ContactFormData, type EnquiryType, contactSchema, enquiryTypes} from './schema';
import ContactSuccess from '@/app/contact/Success';

const enquiryLabels: Record<EnquiryType, string> = {
    hiring: 'Hiring',
    other: 'Other',
    prints: 'Prints'
};

const submitLabels: Record<EnquiryType, string> = {
    hiring: 'Send job details',
    other: 'Send message',
    prints: 'Send print enquiry'
};

const ContactForm = () => {
    const [state, formAction, isPending] = useActionState<ContactState | null, FormData>(
        submitContactForm,
        null
    );

    const {
        control,
        formState: {errors: rawErrors},
        register,
        setError
    } = useForm<ContactFormData>({
        defaultValues: {
            email: '',
            enquiryType: 'other',
            message: '',
            name: ''
        },
        mode: 'onTouched',
        resolver: zodResolver(contactSchema)
    });

    useEffect(() => {
        if (!state?.fieldErrors) return;

        for (const [fieldName, messages] of Object.entries(state.fieldErrors)) {
            const message = messages?.[0];
            if (!message) continue;

            setError(fieldName as Path<ContactFormData>, {message, type: 'server'});
        }
    }, [setError, state?.fieldErrors]);

    const errors = rawErrors as Record<string, FieldError | undefined>;
    const budget = useWatch({control, defaultValue: '', name: 'budget'});
    const enquiryType = useWatch({control, name: 'enquiryType'});
    const wasSubmitted = state?.success && !state?.error;

    if (wasSubmitted) {
        return <ContactSuccess message={state?.message || ''} />;
    }

    return (
        <form action={formAction} className="mt-8 w-full">
            {state?.error && state.message ? <FormErrorBanner message={state.message} /> : null}
            <div className="grid w-full gap-x-8 gap-y-2 md:gap-y-3">
                <FormField error={errors.name} htmlFor="name" label="Name">
                    <input
                        {...register('name')}
                        className={getFieldControlClassName(!!errors.name)}
                        id="name"
                        placeholder="Your name"
                        type="text"
                    />
                </FormField>
                <FormField error={errors.email} htmlFor="email" label="Email">
                    <input
                        {...register('email')}
                        className={getFieldControlClassName(!!errors.email)}
                        id="email"
                        placeholder="Your email"
                        type="email"
                    />
                </FormField>
                <div className="pb-4">
                    <span className="sr-only" id="enquiryType-label">
                        Enquiry type
                    </span>
                    <Controller
                        control={control}
                        name="enquiryType"
                        render={({field}) => (
                            <RadioGroup
                                aria-labelledby="enquiryType-label"
                                className={clsx(
                                    'flex flex-col gap-x-4 gap-y-2 md:flex-row',
                                    errors.enquiryType &&
                                        'rounded border-2 border-red-400 bg-red-950/20 p-3'
                                )}
                                id="enquiryType"
                                name={field.name}
                                onValueChange={field.onChange}
                                value={field.value ?? ''}
                            >
                                {enquiryTypes.map(type => (
                                    <label
                                        className="text-theme-text flex cursor-pointer items-center gap-2 text-base"
                                        key={type}
                                    >
                                        <Radio.Root
                                            className="border-accent data-checked:border-theme-text data-checked:bg-theme-text flex size-5 shrink-0 items-center justify-center rounded-full border-2 bg-white focus:ring-2 focus:ring-white/20 focus:outline-none"
                                            value={type}
                                        >
                                            <Radio.Indicator className="bg-accent size-2 rounded-full" />
                                        </Radio.Root>
                                        {enquiryLabels[type]}
                                    </label>
                                ))}
                            </RadioGroup>
                        )}
                    />
                    <FieldErrorMessage error={errors.enquiryType} />
                </div>
                {enquiryType === 'prints' && (
                    <div className="animate-in fade-in slide-in-from-bottom-1 duration-300">
                        <FormField
                            error={errors.photoDetails}
                            htmlFor="photoDetails"
                            label="Photo and print size details"
                        >
                            <textarea
                                {...register('photoDetails')}
                                className={getFieldControlClassName(
                                    !!errors.photoDetails,
                                    'min-h-28 resize-y'
                                )}
                                id="photoDetails"
                                placeholder="Which photo(s), print size (e.g. A4, A3), URL if you have one"
                            />
                        </FormField>
                    </div>
                )}
                {enquiryType === 'hiring' && (
                    <div className="animate-in fade-in slide-in-from-bottom-1 space-y-2 duration-300 md:space-y-3">
                        <FormField error={errors.company} htmlFor="company" label="Company">
                            <input
                                {...register('company')}
                                className={getFieldControlClassName(!!errors.company)}
                                id="company"
                                placeholder="Company"
                                type="text"
                            />
                        </FormField>
                        <FormField error={errors.location} htmlFor="location" label="Location">
                            <input
                                {...register('location')}
                                className={getFieldControlClassName(!!errors.location)}
                                id="location"
                                placeholder="Location (name of location or address works)"
                                type="text"
                            />
                        </FormField>
                        <FormField
                            error={errors.budget}
                            hint="Optional, but a rough budget is a good starting point"
                            htmlFor="budget"
                            label="Budget (optional)"
                        >
                            <input
                                {...register('budget')}
                                aria-describedby="budget-hint"
                                className={getFieldControlClassName(!!errors.budget)}
                                id="budget"
                                placeholder="Your budget. E.g. day rate, project range (optional)"
                                type="text"
                            />
                        </FormField>
                        <FormField
                            error={errors.description}
                            htmlFor="description"
                            label="Job description"
                        >
                            <textarea
                                {...register('description')}
                                className={getFieldControlClassName(
                                    !!errors.description,
                                    'min-h-28 resize-y'
                                )}
                                id="description"
                                placeholder="Project summary, timeline, one-off or ongoing"
                            />
                        </FormField>
                    </div>
                )}
                {enquiryType === 'other' && (
                    <div className="animate-in fade-in slide-in-from-bottom-1 duration-300">
                        <FormField error={errors.message} htmlFor="message" label="Message">
                            <textarea
                                {...register('message')}
                                className={getFieldControlClassName(
                                    !!errors.message,
                                    'min-h-28 resize-y'
                                )}
                                id="message"
                                placeholder="Message"
                            />
                        </FormField>
                    </div>
                )}
                {enquiryType && (
                    <div className="animate-in fade-in duration-300">
                        <Button
                            className={clsx({'pointer-events-none opacity-60': isPending})}
                            disabled={isPending}
                            theme="primary"
                            type="submit"
                        >
                            {isPending ? 'Sending...' : submitLabels[enquiryType]}
                        </Button>
                    </div>
                )}
            </div>
        </form>
    );
};

export default ContactForm;
