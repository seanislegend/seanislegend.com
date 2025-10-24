'use client';

import {useState} from 'react';
import {Tooltip} from '@base-ui-components/react/tooltip';
import {track} from '@vercel/analytics';
import clsx from 'clsx';
import * as m from 'motion/react-m';
import {CheckIcon} from '@/components/Icon/Check';
import {ClipboardIcon} from '@/components/Icon/Copy';
import ShareButtonTooltip from '@/components/ShareButtons/Tooltip';

interface Props {
    text: string;
    url: string;
}

const CopyToClipboard: React.FC<Props> = ({text, url}) => {
    const [wasCopied, setWasCopied] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(`${text} ${url}`);
        track('copy-to-clipboard', {text, url});
        setWasCopied(true);
        setTimeout(() => {
            setWasCopied(false);
        }, 2000);
    };

    return (
        <Tooltip.Root delay={0}>
            <Tooltip.Trigger
                render={
                    <span
                        className={clsx(
                            'hover:bg-accent group relative flex size-9 items-center justify-center overflow-hidden rounded transition duration-200 ease-out hover:[&_svg]:scale-90',
                            {'pointer-events-none': wasCopied}
                        )}
                    />
                }
            >
                <m.span
                    animate={wasCopied ? 'visible' : 'hidden'}
                    className="absolute inset-0 z-10 flex items-center justify-center"
                    initial="hidden"
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                    variants={{
                        hidden: {opacity: 0, scale: 0.4},
                        visible: {opacity: 1, scale: 1}
                    }}
                >
                    <CheckIcon className="size-5 fill-current" />
                </m.span>
                <m.button
                    animate={wasCopied ? 'hidden' : 'visible'}
                    className="relative z-20"
                    initial="visible"
                    onClick={handleClick}
                    title="Copy to clipboard"
                    transition={{duration: 0.1, ease: 'easeInOut'}}
                    type="button"
                    variants={{
                        hidden: {opacity: 0, scale: 0.4},
                        visible: {opacity: 1, scale: 1}
                    }}
                >
                    <ClipboardIcon className="bg-theme-bg group-hover:bg-accent size-5 fill-current transition-colors duration-200 ease-out" />
                </m.button>
            </Tooltip.Trigger>
            <ShareButtonTooltip>Copy share link to clipboard</ShareButtonTooltip>
        </Tooltip.Root>
    );
};

export default CopyToClipboard;
