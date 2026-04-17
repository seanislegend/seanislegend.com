import * as m from 'motion/react-m';

interface Props {
    message: string;
}

const ContactSuccess: React.FC<Props> = ({message}) => (
    <div className="animate-in fade-in slide-in-from-bottom-2 mt-8 flex flex-row items-center gap-x-3 duration-500">
        <m.svg
            animate="visible"
            className="text-theme-text size-6"
            fill="none"
            initial="hidden"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeOpacity={0.15}
                strokeWidth="1.5"
            />
            <m.circle
                cx="12"
                cy="12"
                fill="none"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
                transition={{duration: 0.5, ease: 'easeOut'}}
                variants={{hidden: {pathLength: 0}, visible: {pathLength: 1}}}
            />
            <m.path
                d="M7.5 12.5l3 3 6-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                transition={{duration: 0.3, delay: 0.45, ease: 'easeOut'}}
                variants={{
                    hidden: {pathLength: 0, opacity: 0},
                    visible: {pathLength: 1, opacity: 1}
                }}
            />
        </m.svg>
        <p>{message}</p>
    </div>
);

export default ContactSuccess;
