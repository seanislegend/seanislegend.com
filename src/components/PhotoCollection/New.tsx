import clsx from 'clsx';

interface Props {
    isActive?: boolean;
}

const NewBadge: React.FC<Props> = ({isActive}) => (
    <span
        className={clsx(
            'rounded-xl bg-black px-1.5 py-1 text-[9px] leading-[1.2] tracking-[1px] uppercase sm:leading-none md:font-semibold dark:bg-white',
            {
                'bg-opacity-10 group-hover:bg-opacity-100 dark:bg-opacity-20 text-black transition-all duration-300 ease-in-out group-hover:text-white dark:text-white dark:group-hover:text-black':
                    !isActive,
                'text-white dark:text-black': isActive
            }
        )}
    >
        New
    </span>
);

export default NewBadge;
