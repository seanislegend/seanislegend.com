import type {ReactNode} from 'react';
import type {FieldError} from 'react-hook-form';
import clsx from 'clsx';

const errorControlClassName = 'border-red-400 bg-red-950/20';

const baseControlClassName =
    'border-accent bg-white block w-full rounded border-2 bg-transparent px-2.5 py-2 md:px-3 md:py-2.5 text-base text-black placeholder:text-dimmed-text transition-colors focus:border-theme-text/40 focus:ring-2 focus:ring-white/20 focus:outline-none';

interface FieldErrorMessageProps {
    error?: FieldError;
}

export const FieldErrorMessage = ({error}: FieldErrorMessageProps) => {
    if (!error?.message) return null;

    return (
        <p className="mt-1 text-red-400" role="alert">
            {error.message}
        </p>
    );
};

interface FormErrorBannerProps {
    message: string;
}

export const FormErrorBanner = ({message}: FormErrorBannerProps) => (
    <p className="mb-4 text-red-400" role="alert">
        {message}
    </p>
);

interface FormFieldProps {
    children: ReactNode;
    className?: string;
    error?: FieldError;
    hint?: ReactNode;
    htmlFor: string;
    label: string;
}

const FormField = ({children, className, error, hint, htmlFor, label}: FormFieldProps) => (
    <div className={className}>
        <label className="sr-only" htmlFor={htmlFor}>
            {label}
        </label>
        {children}
        {hint ? (
            <p className="mt-1 text-sm opacity-60" id={`${htmlFor}-hint`}>
                {hint}
            </p>
        ) : null}
        <FieldErrorMessage error={error} />
    </div>
);

export const getFieldControlClassName = (hasError: boolean, className?: string) =>
    clsx(baseControlClassName, hasError && errorControlClassName, className);

export default FormField;
