import {Activity, useActionState} from 'react';
import clsx from 'clsx';
import Markdown from '@/components/Markdown';
import TextLink from '@/components/UI/TextLink';
import SubmitButton from './Submit';
import {type SubscribeState, subscribeToNewsletter} from './actions';

const NewsletterForm = () => {
    const [state, formAction] = useActionState<SubscribeState | null, FormData>(
        subscribeToNewsletter,
        null
    );

    const wasSubmitted = state && state.success && !state.error;
    const hasError = state && !state.success && state.error;

    return (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <form action={formAction}>
                {!wasSubmitted && (
                    <>
                        <div className="flex h-11 flex-row space-x-1">
                            <input
                                aria-invalid={hasError ? 'true' : 'false'}
                                aria-label="Email Address"
                                aria-describedby={hasError ? 'email-error' : undefined}
                                className={clsx(
                                    'border-accent block w-full max-w-[500px] rounded border-2 bg-white px-3 py-2 text-base text-black focus:ring-2 focus:ring-white/20 focus:outline-none',
                                    {'border-red-200 bg-red-50 text-red-800': hasError}
                                )}
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                                type="email"
                            />
                            <SubmitButton />
                        </div>
                        <Activity mode={hasError ? 'visible' : 'hidden'}>
                            <em className="mt-2 block">{state?.message}</em>
                        </Activity>
                    </>
                )}
                {wasSubmitted && (
                    <Markdown>
                        **Success!** Your email has been added. I&apos;ll be in touch soon.
                    </Markdown>
                )}
            </form>
            <small className="text-dimmed-text text-xs">
                By continuing you agree to the{' '}
                <a
                    className="underline underline-offset-2 hover:decoration-2 focus:ring-2 focus:ring-offset-2 focus:outline-hidden"
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    privacy policy
                </a>
                .
            </small>
        </div>
    );
};

export default NewsletterForm;
