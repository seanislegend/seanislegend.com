<<<<<<< HEAD
import {Tooltip} from '@base-ui-components/react/tooltip';
import {track} from '@vercel/analytics';
import {BlueskyIcon, ThreadsIcon, XIcon} from '@/components/Icon';
import CopyToClipboard from '@/components/ShareButtons/CopyToClipboard';
import ShareButtonTooltip from '@/components/ShareButtons/Tooltip';

interface Props {
    blueskyText?: string;
    clipboardText?: string;
    path: string;
    text: string;
    threadsText?: string;
    twitterText?: string;
}

const ShareButtons: React.FC<Props> = ({
    blueskyText,
    clipboardText,
    path,
    text,
    threadsText,
    twitterText
}) => {
=======
import {track} from '@vercel/analytics';
import {BlueskyIcon, ThreadsIcon, XIcon} from '@/components/Icon';
import CopyToClipboard from '@/components/ShareButtons/CopyToClipboard';

interface Props {
    blueskyText?: string;
    clipboardText?: string;
    path: string;
    text: string;
    threadsText?: string;
    twitterText?: string;
}

<<<<<<< HEAD
const ShareButtons: React.FC<Props> = ({path, text}) => {
>>>>>>> ba848b9 (feat: Add share buttons)
=======
const ShareButtons: React.FC<Props> = ({
    blueskyText,
    clipboardText,
    path,
    text,
    threadsText,
    twitterText
}) => {
>>>>>>> ba46d40 (feat: Support different text for each share action)
    const handleClick = (platform: string) => {
        track('share-click', {platform});
    };

    const url = `https://www.seanislegend.com${path}`;

    return (
        <div className="flex flex-row items-center gap-3">
            <span className="text-sm uppercase">Share</span>
<<<<<<< HEAD
            <Tooltip.Provider>
                <ul className="flex flex-row gap-1">
                    <li>
                        <Tooltip.Root delay={0}>
                            <Tooltip.Trigger
                                render={
                                    <a
                                        href={`https://x.com/share?text=${encodeURIComponent(twitterText || text)}&url=${url}`}
                                        target="_blank"
                                    />
                                }
                                className="flex size-9 items-center justify-center overflow-hidden rounded transition duration-200 ease-out hover:bg-[#000] hover:[&_svg]:scale-90"
                                onClick={() => handleClick('x')}
                                title="Share on X"
                            >
                                <XIcon className="size-5" />
                            </Tooltip.Trigger>
                            <ShareButtonTooltip>Share this on X</ShareButtonTooltip>
                        </Tooltip.Root>
                    </li>
                    <li>
                        <Tooltip.Root delay={0}>
                            <Tooltip.Trigger
                                render={
                                    <a
                                        href={`https://threads.net/intent/post?text=${encodeURIComponent(threadsText || text)}&url=${url}`}
                                        target="_blank"
                                    />
                                }
                                className="flex size-9 items-center justify-center overflow-hidden rounded transition duration-200 ease-out hover:bg-[#000] hover:[&_svg]:scale-90"
                                onClick={() => handleClick('threads')}
                                title="Share on Threads"
                            >
                                <ThreadsIcon className="size-5" />
                            </Tooltip.Trigger>
                            <ShareButtonTooltip>Share this on Threads</ShareButtonTooltip>
                        </Tooltip.Root>
                    </li>
                    <li>
                        <Tooltip.Root delay={0}>
                            <Tooltip.Trigger
                                render={
                                    <a
                                        href={`https://bsky.app/intent/compose?text=${encodeURIComponent(`${blueskyText || text} ${url}`)}`}
                                        target="_blank"
                                    />
                                }
                                className="flex size-9 items-center justify-center overflow-hidden rounded transition duration-200 ease-out hover:bg-[#0085FF] hover:[&_svg]:scale-90"
                                onClick={() => handleClick('bluesky')}
                                title="Share on Bluesky"
                            >
                                <BlueskyIcon className="size-5" />
                            </Tooltip.Trigger>
                            <ShareButtonTooltip>Share this on Bluesky</ShareButtonTooltip>
                        </Tooltip.Root>
                    </li>
                    <li>
                        <CopyToClipboard text={clipboardText || text} url={url} />
                    </li>
                </ul>
            </Tooltip.Provider>
=======
            <ul className="flex flex-row gap-1">
                <li>
                    <a
                        className="flex size-9 items-center justify-center overflow-hidden rounded transition duration-200 ease-out hover:bg-[#000] hover:[&_svg]:scale-90"
                        href={`https://x.com/share?text=${encodeURIComponent(twitterText || text)}&url=${url}`}
                        onClick={() => handleClick('x')}
                        target="_blank"
                        title="Share on X"
                    >
                        <XIcon className="size-5" />
                    </a>
                </li>
                <li>
                    <a
                        className="flex size-9 items-center justify-center overflow-hidden rounded transition duration-200 ease-out hover:bg-[#000] hover:[&_svg]:scale-90"
                        href={`https://threads.net/intent/post?text=${encodeURIComponent(threadsText || text)}&url=${url}`}
                        onClick={() => handleClick('threads')}
                        target="_blank"
                        title="Share on Threads"
                    >
                        <ThreadsIcon className="size-5" />
                    </a>
                </li>
                <li>
                    <a
                        className="flex size-9 items-center justify-center overflow-hidden rounded transition duration-200 ease-out hover:bg-[#0085FF] hover:[&_svg]:scale-90"
                        href={`https://bsky.app/intent/compose?text=${encodeURIComponent(`${blueskyText || text} ${url}`)}`}
                        onClick={() => handleClick('bluesky')}
                        target="_blank"
                        title="Share on Bluesky"
                    >
                        <BlueskyIcon className="size-5" />
                    </a>
                </li>
                <li>
                    <CopyToClipboard text={clipboardText || text} url={url} />
                </li>
            </ul>
>>>>>>> ba848b9 (feat: Add share buttons)
        </div>
    );
};

export default ShareButtons;
